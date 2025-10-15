import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
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
  materials: string;
  care: string;
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const productsRef = useRef<HTMLElement>(null);

  const handleExploreClick = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

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
                <h3 className="font-light text-sm md:text-base mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm md:text-base">S/ {product.price}</p>
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
