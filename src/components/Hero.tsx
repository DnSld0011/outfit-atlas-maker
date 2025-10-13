import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fashion collection hero"
          className="h-full w-full object-cover"
        />
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
    </section>
  );
};

export default Hero;
