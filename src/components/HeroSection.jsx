import heroImage from "../assets/images/hero_image.jpg";
import { motion } from "framer-motion";

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
      <motion.span
        className="absolute bottom-[-50px] left-0 w-full h-[100px] bg-white z-[2] [clip-path:ellipse(50%_60%_at_50%_100%)]"
        initial={{ scaleX: 0.8, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.span>

      {/* hero content */}
      <div className="relative z-[3] max-w-[800px] mx-auto">
        <motion.h1
          className="text-6xl font-[800] mb-4 font-title text-shadow-[0_2px_10px_rgba(0,0,0,0.3)] relative inline-block py-6 transition-all duration-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover.
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Learn.
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Research
          </motion.span>
          <motion.span
            className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 h-[4px] bg-accent rounded-[2px] transition-all duration-300 group-hover:w-[120px]"
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.3, delay: 0.7 }} // Faster duration and shorter delay
          ></motion.span>
        </motion.h1>

        <motion.p
          className="text-lg py-4 font-secondary text-shadow-[0_2px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:text-gray-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }} // Faster duration and shorter delay
        >
          Empowering future engineers with knowledge, skills, and values to
          transform society.{" "}
        </motion.p>

        <motion.button
          className="mt-8 bg-accent hover:bg-accent-dark text-white font-medium px-8 py-3 rounded-[1.8rem] transition-all duration-300 shadow-lg cursor-pointer shadow-accent/40 hover:shadow-accent/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }} // Faster duration and shorter delay
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore Library
        </motion.button>
      </div>

      {/* Floating particles for added visual interest */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/30"
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 500,
            opacity: 0.2 + Math.random() * 0.5,
          }}
          animate={{
            y: [null, Math.random() * -80],
            opacity: [null, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${50 + Math.random() * 30}%`,
          }}
        />
      ))}
    </section>
  );
};

export default HeroSection;
