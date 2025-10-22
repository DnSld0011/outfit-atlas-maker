import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ProductDetail from "@/components/ProductDetail";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Suéter Clásico",
    price: "39.99",
    image: product1,
    description: "Suéter de punto suave y acogedor, perfecto para los días frescos. Diseño clásico con cuello redondo.",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: "80% lana merino, 20% nylon",
    care: "Lavar a mano con agua fría. Secar en plano."
  },
  {
    id: 2,
    name: "Chaqueta Denim",
    price: "69.99",
    image: product2,
    description: "Chaqueta denim atemporal con corte moderno. Ideal para looks casuales y urbanos.",
    sizes: ["S", "M", "L", "XL"],
    materials: "100% algodón denim",
    care: "Lavar a máquina a 30°C. No usar lejía."
  },
  {
    id: 3,
    name: "Vestido Elegante",
    price: "79.99",
    image: product3,
    description: "Vestido elegante de corte fluido, perfecto para ocasiones especiales. Diseño sofisticado y femenino.",
    sizes: ["XS", "S", "M", "L"],
    materials: "95% poliéster, 5% elastano",
    care: "Lavar a máquina a 30°C. Planchar a baja temperatura."
  },
  {
    id: 4,
    name: "Zapatillas Deportivas",
    price: "89.99",
    image: product4,
    description: "Zapatillas deportivas con diseño moderno y máxima comodidad. Perfectas para el día a día.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    materials: "Exterior: textil sintético. Suela: goma",
    care: "Limpiar con paño húmedo. No lavar a máquina."
  },
];

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { sendWhatsAppMessage, isThrottled } = useWhatsApp();

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const handleWhatsAppClick = (product: typeof products[0], e: React.MouseEvent) => {
    e.stopPropagation();
    const phoneNumber = "51924115208";
    const message = `Hola, estoy interesado en: ${product.name} - S/ ${product.price}`;
    sendWhatsAppMessage(phoneNumber, message);
  };

  return (
    <>
      <section className="py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-2 md:mb-4 tracking-tight">
              Productos Destacados
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              Nuestra selección favorita de la temporada
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-2 md:mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h3 className="font-light text-sm md:text-base lg:text-lg mb-1 md:mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm md:text-base mb-2 md:mb-4">S/ {product.price}</p>
                <Button
                  size="sm"
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center gap-1.5 text-xs md:text-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => handleWhatsAppClick(product, e)}
                  disabled={isThrottled}
                >
                  <MessageCircle className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <span className="hidden xs:inline">Consultar</span>
                  <span className="xs:hidden">
                    <svg viewBox="0 0 32 32" fill="currentColor" className="h-4 w-4">
                      <path d="M16 0C7.164 0 0 7.163 0 16c0 2.818.737 5.454 2.018 7.736L.673 29.327l5.796-1.518C8.581 29.243 12.145 30 16 30c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29c-2.754 0-5.345-.854-7.463-2.31l-.536-.327-5.582 1.463 1.491-5.455-.359-.554A12.897 12.897 0 013 16c0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13zm7.145-9.636c-.391-.196-2.318-1.145-2.673-1.273-.355-.127-.614-.191-.873.196-.259.382-.991 1.273-1.218 1.532-.218.259-.445.291-.836.095-.391-.196-1.654-.609-3.145-1.936-1.164-1.036-1.954-2.318-2.182-2.709-.227-.391-.023-.6.173-.795.173-.177.391-.464.586-.695.196-.232.264-.391.391-.65.127-.259.064-.486-.032-.682-.095-.195-.872-2.1-1.195-2.872-.314-.755-.636-.65-.873-.664-.218-.014-.468-.018-.718-.018s-.655.091-1 .486c-.345.391-1.318 1.291-1.318 3.145s1.355 3.654 1.545 3.909c.195.259 2.736 4.177 6.636 5.859.927.4 1.65.636 2.218.818.927.295 1.773.255 2.445.155.745-.109 2.318-.95 2.645-1.868.327-.918.327-1.704.227-1.868-.091-.173-.341-.282-.732-.477z" />
                    </svg>
                  </span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductDetail
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </>
  );
};

export default ProductGrid;
