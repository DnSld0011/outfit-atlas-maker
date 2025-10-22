import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductDetail from "@/components/ProductDetail";

interface CollectionImage {
  src: string;
  alt: string;
  span?: "col-span-2" | "col-span-1";
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  materials: string;
  care: string;
  category: string;
}

interface CollectionPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  images: CollectionImage[];
  categories: string[];
  products: Product[];
}

const CollectionPage = ({ title, subtitle, heroImage, images, categories, products }: CollectionPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState("VER TODO");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const productsRef = useRef<HTMLElement>(null);
  const { sendWhatsAppMessage, isThrottled } = useWhatsApp();

  const handleExploreClick = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProductClick = (product: Product) => {
    // Convert color strings to the format expected by ProductDetail
    const adaptedProduct = {
      ...product,
      colors: product.colors.map(color => ({
        name: color,
        image: product.image
      }))
    };
    setSelectedProduct(adaptedProduct as any);
    setIsDetailOpen(true);
  };

  const handleWhatsAppClick = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const phoneNumber = "51924115208";
    const message = `Hola, estoy interesado en: ${product.name} - S/ ${product.price}`;
    sendWhatsAppMessage(phoneNumber, message);
  };

  const filteredProducts = selectedCategory === "VER TODO" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
          <img
            src={heroImage}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 tracking-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl font-light tracking-wide mb-8">
                {subtitle}
              </p>
              <Button 
                size="lg" 
                className="bg-white text-foreground hover:bg-white/90"
                onClick={handleExploreClick}
              >
                EXPLORAR COLECCIÓN
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden bg-secondary ${
                  image.span === "col-span-2" ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    image.span === "col-span-2" ? "h-[40vh] md:h-[60vh]" : "h-[50vh] md:h-[70vh]"
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section ref={productsRef} className="container mx-auto px-4 py-8 md:py-16">
          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-light mb-6 tracking-tight">
              {title}
            </h2>
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-2 md:gap-3 min-w-max">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
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
                <h3 className="font-light text-sm md:text-base mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm md:text-base mb-2">S/ {product.price}</p>
                <Button
                  size="sm"
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center gap-1.5 md:gap-2 text-xs md:text-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
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
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      
      <ProductDetail
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </div>
  );
};

export default CollectionPage;
