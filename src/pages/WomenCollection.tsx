import CollectionPage from "@/components/CollectionPage";
import heroImage from "@/assets/collection-women-hero.jpg";
import image1 from "@/assets/collection-women-1.jpg";
import image2 from "@/assets/collection-women-2.jpg";
import image3 from "@/assets/collection-women-3.jpg";
import image4 from "@/assets/collection-women-4.jpg";
import product1 from "@/assets/women-product-1.jpg";
import product2 from "@/assets/women-product-2.jpg";
import product3 from "@/assets/women-product-3.jpg";
import product4 from "@/assets/women-product-4.jpg";
import product5 from "@/assets/women-product-5.jpg";
import product6 from "@/assets/women-product-6.jpg";
import product7 from "@/assets/women-product-7.jpg";
import product8 from "@/assets/women-product-8.jpg";

const WomenCollection = () => {
  const images = [
    { src: image1, alt: "Colección Mujer 1" },
    { src: image2, alt: "Colección Mujer 2" },
    { src: image3, alt: "Colección Mujer 3" },
    { src: image4, alt: "Colección Mujer 4" },
  ];

  const categories = [
    "VER TODO",
    "PANTALONES",
    "JEANS",
    "POLOS Y TOPS",
    "VESTIDOS",
    "BLUSAS Y CAMISAS",
    "POLERAS",
    "CHOMPAS Y CÁRDIGANS",
    "BLAZERS Y CHALECOS",
    "CASACAS Y ABRIGOS",
    "FALDAS",
    "SHORTS",
    "ZAPATOS",
    "LINO",
    "ACCESORIOS"
  ];

  const products = [
    {
      id: 1,
      name: "Vestido Verano Rojo",
      price: "109.00",
      image: product1,
      description: "Vestido elegante de verano con tirantes finos y abertura lateral. Perfecto para ocasiones especiales.",
      sizes: ["XS", "S", "M", "L"],
      materials: "95% poliéster, 5% elastano",
      care: "Lavar a máquina a 30°C. No usar lejía."
    },
    {
      id: 2,
      name: "Vestido Volantes Blanco",
      price: "89.95",
      image: product2,
      description: "Vestido con volantes de algodón ligero, ideal para días soleados. Diseño romántico y fresco.",
      sizes: ["XS", "S", "M", "L"],
      materials: "100% algodón",
      care: "Lavar a máquina a 30°C. Planchar a baja temperatura."
    },
    {
      id: 3,
      name: "Conjunto Jacket Denim",
      price: "169.00",
      image: product3,
      description: "Chaqueta denim con vestido floral. Perfecto para un look casual y sofisticado.",
      sizes: ["S", "M", "L", "XL"],
      materials: "Chaqueta: 100% algodón denim. Vestido: 95% viscosa, 5% elastano",
      care: "Lavar a máquina a 30°C. No usar secadora."
    },
    {
      id: 4,
      name: "Top Encaje con Shorts",
      price: "79.95",
      image: product4,
      description: "Top de encaje con shorts denim. Conjunto versátil para verano.",
      sizes: ["XS", "S", "M", "L"],
      materials: "Top: 85% nylon, 15% elastano. Shorts: 100% algodón",
      care: "Lavar a mano con agua fría. No retorcer."
    },
    {
      id: 5,
      name: "Conjunto Blazer Ejecutivo",
      price: "199.00",
      image: product5,
      description: "Blazer negro con pantalón blanco. Look profesional y elegante.",
      sizes: ["S", "M", "L", "XL"],
      materials: "70% poliéster, 25% viscosa, 5% elastano",
      care: "Lavar en seco. Planchar a temperatura media."
    },
    {
      id: 6,
      name: "Conjunto Casual Jeans",
      price: "119.00",
      image: product6,
      description: "Top casual con jeans de corte moderno. Perfecto para el día a día.",
      sizes: ["XS", "S", "M", "L", "XL"],
      materials: "Top: 60% algodón, 40% poliéster. Jeans: 98% algodón, 2% elastano",
      care: "Lavar a máquina a 30°C. Secar al aire libre."
    },
    {
      id: 7,
      name: "Blusa Estampada",
      price: "69.95",
      image: product7,
      description: "Blusa con estampado colorido y pantalón cargo. Look bohemio y casual.",
      sizes: ["S", "M", "L"],
      materials: "100% viscosa",
      care: "Lavar a máquina a 30°C. No usar lejía."
    },
    {
      id: 8,
      name: "Conjunto Playa",
      price: "59.95",
      image: product8,
      description: "Top y shorts con estampado floral. Ideal para la playa o paseos.",
      sizes: ["XS", "S", "M", "L"],
      materials: "85% poliéster, 15% elastano",
      care: "Lavar a mano. Secar a la sombra."
    }
  ];

  return (
    <CollectionPage
      title="Nueva Colección Mujer"
      subtitle="Elegancia y sofisticación para la mujer moderna"
      heroImage={heroImage}
      images={images}
      categories={categories}
      products={products}
    />
  );
};

export default WomenCollection;
