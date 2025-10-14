import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-light tracking-tight">
            Carrito de Compras
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground">Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {items.map((item, index) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}-${index}`}
                  className="flex gap-4 pb-4 border-b"
                >
                  <div className="w-24 h-32 bg-secondary flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-light text-sm md:text-base">{item.name}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">
                          Talla: {item.size}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => removeItem(item.id, item.size, item.color)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-end mt-auto">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.color,
                              item.quantity - 1
                            )
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.color,
                              item.quantity + 1
                            )
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="font-medium text-sm md:text-base">
                        S/ {(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-medium">
                <span>Total:</span>
                <span>S/ {totalPrice.toFixed(2)}</span>
              </div>
              <Button
                size="lg"
                className="w-full bg-foreground text-background hover:bg-foreground/90"
              >
                FINALIZAR COMPRA
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={clearCart}
              >
                Vaciar carrito
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
