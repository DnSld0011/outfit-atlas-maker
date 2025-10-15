import CollectionPage from "@/components/CollectionPage";
import heroImage from "@/assets/collection-kids-hero.jpg";
import image1 from "@/assets/collection-kids-1.jpg";
import image2 from "@/assets/collection-kids-2.jpg";
import image3 from "@/assets/collection-kids-3.jpg";
import image4 from "@/assets/collection-kids-4.jpg";
import product1 from "@/assets/kids-product-1.jpg";
import product2 from "@/assets/kids-product-2.jpg";
import product3 from "@/assets/kids-product-3.jpg";
import product4 from "@/assets/kids-product-4.jpg";
import product5 from "@/assets/kids-product-5.jpg";
import product6 from "@/assets/kids-product-6.jpg";
import product7 from "@/assets/kids-product-7.jpg";
import product8 from "@/assets/kids-product-8.jpg";

const KidsCollection = () => {
  const images = [
    { src: image1, alt: "Colección Niños 1" },
    { src: image2, alt: "Colección Niños 2" },
    { src: image3, alt: "Colección Niños 3" },
    { src: image4, alt: "Colección Niños 4" },
  ];

  const categories = [
    "VER TODO",
    "PANTALONES",
    "JEANS",
    "POLOS",
    "VESTIDOS",
    "CONJUNTOS",
    "CHOMPAS",
    "CASACAS",
    "SHORTS",
    "ZAPATOS",
    "DEPORTIVO",
    "ACCESORIOS"
  ];

  const products = [
    {
      id: 1,
      name: "Polo Naranja Casual",
      price: "39.95",
      image: product1,
      description: "Polo colorido con shorts para niño. Cómodo y divertido para jugar.",
      sizes: ["2", "4", "6", "8", "10"],
      colors: ["Naranja", "Amarillo", "Azul", "Verde"],
      materials: "100% algodón",
      care: "Lavar a máquina a 30°C. Secar a baja temperatura.",
      category: "POLOS"
    },
    {
      id: 2,
      name: "Overol Denim Kids",
      price: "59.95",
      image: product2,
      description: "Overol denim con polo estampado. Perfecto para aventuras diarias.",
      sizes: ["2", "4", "6", "8"],
      colors: ["Azul denim", "Negro"],
      materials: "100% algodón denim",
      care: "Lavar a máquina a 30°C. No usar lejía.",
      category: "JEANS"
    },
    {
      id: 3,
      name: "Conjunto Hoodie Niño",
      price: "79.95",
      image: product3,
      description: "Hoodie con jeans para niño. Estilo urbano y cómodo.",
      sizes: ["4", "6", "8", "10", "12"],
      colors: ["Gris", "Azul marino", "Negro"],
      materials: "Hoodie: 80% algodón, 20% poliéster. Jeans: 98% algodón, 2% elastano",
      care: "Lavar a máquina a 30°C. Secar al aire libre.",
      category: "CHOMPAS"
    },
    {
      id: 4,
      name: "Vestido Flores Niña",
      price: "69.95",
      image: product4,
      description: "Vestido colorido con estampado floral. Ideal para ocasiones especiales.",
      sizes: ["2", "4", "6", "8"],
      colors: ["Amarillo floral", "Rosa floral", "Azul floral"],
      materials: "100% algodón",
      care: "Lavar a máquina a 30°C. Planchar a baja temperatura.",
      category: "VESTIDOS"
    },
    {
      id: 5,
      name: "Conjunto Deportivo Kids",
      price: "89.95",
      image: product5,
      description: "Chaqueta y pantalón deportivo. Perfecto para actividades físicas.",
      sizes: ["4", "6", "8", "10", "12"],
      colors: ["Amarillo/Negro", "Azul/Blanco", "Rojo/Negro"],
      materials: "100% poliéster",
      care: "Lavar a máquina a 30°C. Secar rápidamente.",
      category: "DEPORTIVO"
    },
    {
      id: 6,
      name: "Polo Gráfico Amarillo",
      price: "34.95",
      image: product6,
      description: "Polo con estampado divertido y shorts. Perfecto para el verano.",
      sizes: ["2", "4", "6", "8", "10"],
      colors: ["Amarillo", "Blanco", "Azul cielo"],
      materials: "100% algodón",
      care: "Lavar a máquina a 30°C. No usar lejía.",
      category: "POLOS"
    },
    {
      id: 7,
      name: "Casaca Urbana Niño",
      price: "99.95",
      image: product7,
      description: "Casaca roja con detalles deportivos. Estilo urbano para niños.",
      sizes: ["4", "6", "8", "10", "12"],
      colors: ["Rojo", "Azul marino", "Verde militar"],
      materials: "100% poliéster",
      care: "Lavar a máquina a 30°C. Secar a baja temperatura.",
      category: "CASACAS"
    },
    {
      id: 8,
      name: "Conjunto Estampado",
      price: "79.95",
      image: product8,
      description: "Conjunto colorido con estampados divertidos. Alegre y cómodo.",
      sizes: ["2", "4", "6", "8"],
      colors: ["Multicolor", "Azul cielo", "Rosa"],
      materials: "95% algodón, 5% elastano",
      care: "Lavar a máquina a 30°C. Planchar a baja temperatura.",
      category: "CONJUNTOS"
    }
  ];

  return (
    <CollectionPage
      title="Nueva Colección Niños"
      subtitle="Moda colorida y cómoda para los más pequeños"
      heroImage={heroImage}
      images={images}
      categories={categories}
      products={products}
    />
  );
};

export default KidsCollection;
