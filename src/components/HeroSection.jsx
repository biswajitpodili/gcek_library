import heroImage from "../assets/images/hero_image.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative text-white text-center py-32 px-4 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Gradient overlay */}
      <span className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70 z-[1]"></span>

      {/* Primary color overlay */}
      <span className="absolute inset-0 bg-[rgba(26,82,118,0.3)] z-[2]"></span>

      {/* Bottom curve */}
      <span className="absolute bottom-[-50px] left-0 w-full h-[100px] bg-white z-[2] [clip-path:ellipse(50%_60%_at_50%_100%)]"></span>

      {/* hero content */}
      <div className="relative z-[3] max-w-[800px] mx-auto">
        <h1 className="text-6xl font-[800] mb-4 font-title text-shadow-[0_2px_10px_rgba(0,0,0,0.3)] relative inline-block py-6 transition-all duration-300 ">
          Discover. Learn. Research
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[80px] h-[4px] bg-accent rounded-[2px] transition-all duration-300 group-hover:w-[120px]"></span>
        </h1>
        <p className="text-lg py-4 font-secondary text-shadow-[0_2px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:text-gray-200">
          Empowering future engineers with knowledge, skills, and values to
          transform society.{" "}
        </p>
        <button className="mt-8 bg-accent hover:bg-accent-dark text-white font-medium px-8 py-3 rounded-[1.8rem] transition-all duration-300 shadow-lg cursor-pointer shadow-accent/40 hover:shadow-accent/30">
          Explore Library
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
