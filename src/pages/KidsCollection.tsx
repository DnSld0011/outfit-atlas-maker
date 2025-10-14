import CollectionPage from "@/components/CollectionPage";
import heroImage from "@/assets/collection-kids-hero.jpg";
import image1 from "@/assets/collection-kids-1.jpg";
import image2 from "@/assets/collection-kids-2.jpg";
import image3 from "@/assets/collection-kids-3.jpg";
import image4 from "@/assets/collection-kids-4.jpg";

const KidsCollection = () => {
  const images = [
    { src: image1, alt: "Colección Niños 1" },
    { src: image2, alt: "Colección Niños 2" },
    { src: image3, alt: "Colección Niños 3" },
    { src: image4, alt: "Colección Niños 4" },
  ];

  return (
    <CollectionPage
      title="Nueva Colección Niños"
      subtitle="Moda colorida y cómoda para los más pequeños"
      heroImage={heroImage}
      images={images}
    />
  );
};

export default KidsCollection;
