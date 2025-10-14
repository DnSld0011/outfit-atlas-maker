import CollectionPage from "@/components/CollectionPage";
import heroImage from "@/assets/collection-men-hero.jpg";
import image1 from "@/assets/collection-men-1.jpg";
import image2 from "@/assets/collection-men-2.jpg";
import image3 from "@/assets/collection-men-3.jpg";
import image4 from "@/assets/collection-men-4.jpg";

const MenCollection = () => {
  const images = [
    { src: image1, alt: "Colección Hombre 1" },
    { src: image2, alt: "Colección Hombre 2" },
    { src: image3, alt: "Colección Hombre 3" },
    { src: image4, alt: "Colección Hombre 4" },
  ];

  return (
    <CollectionPage
      title="Nueva Colección Hombre"
      subtitle="Estilo contemporáneo para el hombre de hoy"
      heroImage={heroImage}
      images={images}
    />
  );
};

export default MenCollection;
