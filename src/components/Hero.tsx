import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-fashion.jpg";
import heroImage2 from "@/assets/hero-fashion-2.jpg";
import heroImage3 from "@/assets/hero-fashion-3.jpg";

const heroImages = [
  { src: heroImage1, alt: "Nueva colección mujer" },
  { src: heroImage2, alt: "Nueva colección hombre" },
  { src: heroImage3, alt: "Colección exclusiva" },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
      </div>

      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Nueva Colección
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light tracking-wide">
            Descubre las últimas tendencias en moda
          </p>
          <div className="flex gap-4">
            <Button variant="hero" size="lg">
              Comprar Mujer
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
              Comprar Hombre
            </Button>
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
