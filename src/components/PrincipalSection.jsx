import { Link } from "react-router";
import PrincipalImage from "../assets/images/principal.jpg"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PrincipalSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#f0f4f8] to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="flex-none w-[250px] h-[320px] bg-gray-200 rounded-xl overflow-hidden shadow-lg bg-cover bg-center border-4 border-white relative"
            style={{ backgroundImage: `url(${PrincipalImage})` }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-20 transition-opacity duration-300 hover:opacity-30"></div>
            <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
          </motion.div>
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary text-3xl mb-2 font-title font-bold relative inline-block">
                From the Principal's Desk
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
              </h2>
              <h3 className="text-secondary text-xl mb-5 font-medium">Prof. (Dr.) Subhransu Sekhar Dash</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 text-gray-600 leading-7 text-lg">
                Welcome to Government College of Engineering Kalahandi, a premier institution dedicated to engineering excellence and innovation. 
                Established with a vision to provide quality technical education, our college has emerged as a center of academic excellence in the region.
              </p>
              <p className="mb-6 text-gray-600 leading-7 text-lg">
                At GCEK, we strive to create a dynamic learning environment that fosters critical thinking, problem-solving abilities, 
                and technical skills among our students. Our dedicated faculty members are committed to providing mentorship 
                and guidance to help students achieve their full potential.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/principal-message" 
                className="group bg-primary hover:bg-accent text-white font-medium py-2 px-6 rounded-full inline-flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Read Full Message 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrincipalSection;
