import CollectionPage from "@/components/CollectionPage";
import heroImage from "@/assets/collection-women-hero.jpg";
import image1 from "@/assets/collection-women-1.jpg";
import image2 from "@/assets/collection-women-2.jpg";
import image3 from "@/assets/collection-women-3.jpg";
import image4 from "@/assets/collection-women-4.jpg";

const WomenCollection = () => {
  const images = [
    { src: image1, alt: "Colección Mujer 1" },
    { src: image2, alt: "Colección Mujer 2" },
    { src: image3, alt: "Colección Mujer 3" },
    { src: image4, alt: "Colección Mujer 4" },
  ];

  return (
    <CollectionPage
      title="Nueva Colección Mujer"
      subtitle="Elegancia y sofisticación para la mujer moderna"
      heroImage={heroImage}
      images={images}
    />
  );
};

export default WomenCollection;
