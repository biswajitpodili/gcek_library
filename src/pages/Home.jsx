import PrincipalSection from "../components/PrincipalSection";
import ServicesSection from "../components/ServicesSection";
import HeroSection from "../components/HeroSection";
import GallerySection from "../components/GallerySection";
import FAQs from "../components/FAQs";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Principal Section */}
      <PrincipalSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* FAQs Section */}
      <FAQs />
    </div>
  );
};

export default Home;
