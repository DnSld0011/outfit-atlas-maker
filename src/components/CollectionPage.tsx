import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface CollectionImage {
  src: string;
  alt: string;
  span?: "col-span-2" | "col-span-1";
}

interface CollectionPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  images: CollectionImage[];
}

const CollectionPage = ({ title, subtitle, heroImage, images }: CollectionPageProps) => {
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
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90">
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
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CollectionPage;
