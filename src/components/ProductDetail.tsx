import { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string;
  colors?: { name: string; image: string }[];
  sizes?: string[];
  materials?: string;
  care?: string;
}

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetail = ({ product, isOpen, onClose }: ProductDetailProps) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) return null;

  const colors = product.colors || [{ name: "Original", image: product.image }];
  const sizes = product.sizes || ["S", "M", "L", "XL"];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-[900px] p-0 overflow-y-auto">
        <div className="grid md:grid-cols-2 h-full">
          {/* Imagen del producto */}
          <div className="relative bg-secondary">
            <img
              src={colors[selectedColor].image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Detalles del producto */}
          <div className="p-6 md:p-8 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <SheetTitle className="text-2xl font-light tracking-tight mb-2">
                  {product.name}
                </SheetTitle>
                <p className="text-xl font-light">S/ {product.price}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
                className="hover:text-accent"
              >
                <Heart
                  className={`h-6 w-6 ${isFavorite ? "fill-accent text-accent" : ""}`}
                />
              </Button>
            </div>

            {/* Selector de color */}
            {colors.length > 1 && (
              <div className="mb-6">
                <p className="text-sm font-medium mb-3">
                  COLOR: {colors[selectedColor].name}
                </p>
                <div className="flex gap-2">
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`w-16 h-20 border-2 transition-all ${
                        selectedColor === index
                          ? "border-foreground"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <img
                        src={color.image}
                        alt={color.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Selector de talla */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-medium">TALLA MUJER:</p>
                <a href="#" className="text-sm underline hover:text-accent">
                  GUÍA DE TALLAS
                </a>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector de cantidad */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">CANTIDAD:</p>
              <div className="flex items-center gap-4 w-32">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Botón añadir */}
            <Button
              size="lg"
              className="w-full mb-6 bg-foreground text-background hover:bg-foreground/90"
              disabled={!selectedSize}
            >
              AÑADIR
            </Button>

            {/* Opiniones */}
            <div className="mb-6 pb-6 border-b">
              <a href="#" className="text-sm underline hover:text-accent flex items-center gap-2">
                <span>OPINIONES [0]</span>
                <span className="text-muted-foreground">★★★★★ 0</span>
              </a>
            </div>

            {/* Acordeones de información */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger className="text-sm font-medium">
                  DESCRIPCIÓN
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {product.description ||
                    "Prenda elegante y versátil, perfecta para cualquier ocasión. Diseño contemporáneo con materiales de alta calidad."}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="materials">
                <AccordionTrigger className="text-sm font-medium">
                  MATERIALES
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {product.materials ||
                    "100% algodón de alta calidad. Tejido suave y transpirable."}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="care">
                <AccordionTrigger className="text-sm font-medium">
                  GUÍA DE CUIDADOS
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {product.care ||
                    "Lavar a máquina máximo 30°C. No usar lejía. Planchar a temperatura baja. No limpiar en seco."}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProductDetail;
