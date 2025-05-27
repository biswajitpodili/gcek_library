import { Laptop, LibraryBig, NotebookText, BookOpen, Users, FileSearch } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router";

const ServicesSection = () => {
  const services = [
    {
      icon: <LibraryBig size={40} />,
      title: "16000+ Books",
      description:
        "Access our extensive collection covering engineering, science, and more.",
      color: "#1a5276",
    },
    {
      icon: <Laptop size={40} />,
      title: "Online Catalogs",
      description:
        "Browse our digital catalogs from anywhere, anytime, on any device.",
      color: "#2980b9",
    },
    {
      icon: <NotebookText size={40} />,
      title: "Journals & Papers",
      description:
        "Access the latest research publications and academic journals.",
      color: "#1a5276",
    },
    {
      icon: <BookOpen size={40} />,
      title: "Reading Spaces",
      description:
        "Comfortable reading areas designed for focus and collaboration.",
      color: "#2980b9",
    },
    {
      icon: <Users size={40} />,
      title: "Research Support",
      description:
        "Personalized assistance for your research and academic projects.",
      color: "#1a5276",
    },
    {
      icon: <FileSearch size={40} />,
      title: "Digital Resources",
      description: "E-books, online databases, and multimedia collections available 24/7.",
      color: "#2980b9",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          <h2 className="text-4xl font-bold text-primary relative inline-block pb-3 mb-6">
            Our Services
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-accent rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600">
            Discover the range of services designed to enhance your learning and
            research experience at our library.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              variants={itemVariants}
            >
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {React.cloneElement(service.icon, { color: service.color })}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-center text-gray-600">
                  {service.description}
                </p>
              </div>
              <div className="h-1.5 w-full bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/services" className="flex items-center justify-center">
              Explore All Services
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
