import { Button } from "@/components/ui/button";
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
  },
  {
    id: 2,
    name: "Chaqueta Denim",
    price: "69.99",
    image: product2,
  },
  {
    id: 3,
    name: "Vestido Elegante",
    price: "79.99",
    image: product3,
  },
  {
    id: 4,
    name: "Zapatillas Deportivas",
    price: "89.99",
    image: product4,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
            Productos Destacados
          </h2>
          <p className="text-muted-foreground text-lg">
            Nuestra selección favorita de la temporada
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <h3 className="font-light text-lg mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-4">€{product.price}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Añadir al carrito
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
