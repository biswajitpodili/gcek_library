import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, Globe } from "lucide-react";
import logo from "../assets/images/gcek_logo.png";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialAnimation = {
    hover: { scale: 1.1, rotate: 5 },
  };

  return (
    <footer className="bg-gradient-to-r from-secondary to-primary-dark text-white pt-16 pb-6 mt-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent opacity-60"></div>
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-accent/5 blur-2xl"></div>

      <div className="px-40 mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* About */}
          <motion.div
            variants={footerAnimation}
            className="col-span-1 lg:col-span-2"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src={logo}
                alt="Library Logo"
                className="h-24 md:h-28 mb-2 md:mb-0 filter drop-shadow-lg"
              />
              <div>
                <h3 className="text-accent font-bold text-xl mb-4 font-georgia relative inline-block">
                  About Library
                  <span className="absolute -bottom-1 left-0 w-12 h-[2px] bg-accent"></span>
                </h3>
                <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                  The Central Library of GCEK is a knowledge hub for students and
                  faculty, providing access to a vast collection of books,
                  journals, and digital resources.
                </p>
                <div className="flex gap-3 mt-6">
                  {[
                    {
                      icon: <Facebook className="h-5 w-5" />,
                      url: "https://facebook.com",
                    },
                    { icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com" },
                    { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com" },
                    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-accent p-2.5 rounded-full transition-all duration-300 shadow-lg shadow-black/10"
                      whileHover="hover"
                      variants={socialAnimation}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={footerAnimation} className="flex flex-col">
            <h3 className="text-accent font-bold text-xl mb-5 font-georgia relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-[2px] bg-accent"></span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {["Home", "OPAC", "Digital Library", "Services", "Contact Us"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="transform hover:translate-x-1 transition-transform"
                  >
                    <a
                      href={`/${item
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="hover:text-accent transition-colors flex items-center"
                    >
                      <span className="mr-2 text-accent">›</span> {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={footerAnimation} className="flex flex-col">
            <h3 className="text-accent font-bold text-xl mb-5 font-georgia relative inline-block">
              Resources
              <span className="absolute -bottom-1 left-0 w-12 h-[2px] bg-accent"></span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {["Journals", "E-Books", "Question Papers", "Research", "Suggest a Book"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="transform hover:translate-x-1 transition-transform"
                  >
                    <a
                      href={`/${item
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="hover:text-accent transition-colors flex items-center"
                    >
                      <span className="mr-2 text-accent">›</span> {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact - Adding a new section for contact info */}
          <motion.div variants={footerAnimation} className="flex flex-col lg:col-span-1">
            <h3 className="text-accent font-bold text-xl mb-5 font-georgia relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-12 h-[2px] bg-accent"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Bhawanipatna, Kalahandi, Odisha</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-sm">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-sm">library@gcek.ac.in</span>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-sm">www.gcek.ac.in</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={footerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/15 pt-6 text-center text-gray-400 flex flex-col md:flex-row justify-between items-center"
        >
          <p>
            &copy; {new Date().getFullYear()} Government College of Engineering
            Kalahandi - Central Library
          </p>
          <p className="mt-2 md:mt-0">All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
