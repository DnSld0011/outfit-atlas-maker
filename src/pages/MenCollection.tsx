import CollectionPage from "@/components/CollectionPage";
import heroImage from "@/assets/collection-men-hero.jpg";
import image1 from "@/assets/collection-men-1.jpg";
import image2 from "@/assets/collection-men-2.jpg";
import image3 from "@/assets/collection-men-3.jpg";
import image4 from "@/assets/collection-men-4.jpg";
import product1 from "@/assets/men-product-1.jpg";
import product2 from "@/assets/men-product-2.jpg";
import product3 from "@/assets/men-product-3.jpg";
import product4 from "@/assets/men-product-4.jpg";
import product5 from "@/assets/men-product-5.jpg";
import product6 from "@/assets/men-product-6.jpg";
import product7 from "@/assets/men-product-7.jpg";
import product8 from "@/assets/men-product-8.jpg";

const MenCollection = () => {
  const images = [
    { src: image1, alt: "Colección Hombre 1" },
    { src: image2, alt: "Colección Hombre 2" },
    { src: image3, alt: "Colección Hombre 3" },
    { src: image4, alt: "Colección Hombre 4" },
  ];

  const categories = [
    "VER TODO",
    "PANTALONES",
    "JEANS",
    "POLOS",
    "CAMISAS",
    "POLERAS",
    "CHOMPAS",
    "BLAZERS",
    "CASACAS",
    "SHORTS",
    "ZAPATOS",
    "DEPORTIVO",
    "ACCESORIOS"
  ];

  const products = [
    {
      id: 1,
      name: "Camisa Lino Beige",
      price: "89.00",
      image: product1,
      description: "Camisa casual de lino con pantalón chino. Look urbano y relajado.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Beige", "Blanco", "Azul claro"],
      materials: "100% lino",
      care: "Lavar a máquina a 30°C. Planchar húmedo.",
      category: "CAMISAS"
    },
    {
      id: 2,
      name: "Traje Ejecutivo Navy",
      price: "299.00",
      image: product2,
      description: "Traje completo de corte moderno. Perfecto para ocasiones formales.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Azul marino", "Negro", "Gris carbón"],
      materials: "70% lana, 30% poliéster",
      care: "Lavar en seco únicamente.",
      category: "BLAZERS"
    },
    {
      id: 3,
      name: "Conjunto Denim Casual",
      price: "149.00",
      image: product3,
      description: "Chaqueta denim con jeans oscuros. Estilo casual contemporáneo.",
      sizes: ["M", "L", "XL"],
      colors: ["Azul denim", "Negro", "Gris"],
      materials: "100% algodón denim",
      care: "Lavar a máquina a 30°C. No usar lejía.",
      category: "CASACAS"
    },
    {
      id: 4,
      name: "Polo Verano Colorblock",
      price: "69.95",
      image: product4,
      description: "Polo deportivo con shorts. Ideal para días casuales de verano.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Tricolor", "Azul marino", "Gris"],
      materials: "100% algodón piqué",
      care: "Lavar a máquina a 30°C. Secar al aire libre.",
      category: "POLOS"
    },
    {
      id: 5,
      name: "Conjunto Deportivo",
      price: "119.00",
      image: product5,
      description: "Hoodie y joggers coordinados. Comodidad y estilo urbano.",
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["Naranja", "Negro", "Gris", "Azul marino"],
      materials: "80% algodón, 20% poliéster",
      care: "Lavar a máquina a 40°C. Secar a baja temperatura.",
      category: "DEPORTIVO"
    },
    {
      id: 6,
      name: "Blazer Smart Casual",
      price: "179.00",
      image: product6,
      description: "Blazer casual con jeans. Look sofisticado para diversas ocasiones.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Gris oscuro", "Azul marino", "Negro"],
      materials: "65% poliéster, 30% viscosa, 5% elastano",
      care: "Lavar en seco. Planchar a temperatura media.",
      category: "BLAZERS"
    },
    {
      id: 7,
      name: "Polo Rayas Casual",
      price: "59.95",
      image: product7,
      description: "Polo manga larga a rayas con pantalón oscuro. Casual y elegante.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Negro/Gris", "Azul/Blanco", "Verde/Blanco"],
      materials: "100% algodón",
      care: "Lavar a máquina a 30°C. No usar secadora.",
      category: "POLOS"
    },
    {
      id: 8,
      name: "Conjunto Atlético",
      price: "99.95",
      image: product8,
      description: "Ropa deportiva completa. Perfecta para entrenamientos y actividades.",
      sizes: ["M", "L", "XL"],
      colors: ["Negro", "Azul marino", "Gris"],
      materials: "88% poliéster, 12% elastano",
      care: "Lavar a máquina a 30°C. Secar rápidamente.",
      category: "DEPORTIVO"
    }
  ];

  return (
    <CollectionPage
      title="Nueva Colección Hombre"
      subtitle="Estilo contemporáneo para el hombre de hoy"
      heroImage={heroImage}
      images={images}
      categories={categories}
      products={products}
    />
  );
};

export default MenCollection;
