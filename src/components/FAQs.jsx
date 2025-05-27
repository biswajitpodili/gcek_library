import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpIcon, ChevronUp, ChevronDown } from "lucide-react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ data
  const faqs = [
    {
      q: "How many books can I borrow at once?",
      a: "Students can borrow up to 5 books at a time, while faculty members can borrow up to 10 books.",
    },
    {
      q: "What happens if I return a book late?",
      a: "Late returns incur a fine of ₹5 per day per book. Extended delays may result in a temporary suspension of borrowing privileges.",
    },
    {
      q: "Can I access the digital library from home?",
      a: "Yes, all students and faculty can access our digital resources remotely using their institutional login credentials.",
    },
    {
      q: "How can I contact the library?",
      a: "You can reach us at library@gcek.edu.in or call us at +91 123 456 7890.",
    },
    {
      q: "Do you offer online services?",
      a: "Yes, we provide a range of online services including e-resources, online catalog, and virtual reference assistance.",
    },
    {
      q: "Can I suggest a book for the library to purchase?",
      a: "Absolutely! We welcome book suggestions. Please use the 'Suggest a Purchase' form on our website.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          type: "spring",
          stiffness: 500,
          damping: 30,
        },
        opacity: { duration: 0.3 },
      },
    },
  };

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50 w-full">
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
            Frequently Asked Questions
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-accent rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our library services,
            resources, and policies.
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-4">
              <button
                className={`w-full flex justify-between items-center p-5 rounded-lg text-left ${
                  activeIndex === index
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-800 hover:bg-gray-100 shadow"
                } transition-all duration-300`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center">
                  <motion.div
                    // animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-opacity-20 mr-3"
                  >
                    {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </motion.div>
                  <h3 className="text-lg font-medium">{faq.q}</h3>
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-hidden bg-white rounded-b-lg shadow-lg border-t-0"
                  >
                    <div className="p-5 text-gray-600 flex justify-between items-end">
                      <p>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <p className="text-gray-500">Can't find what you're looking for?</p>
          <a
            href="/contact"
            className="inline-flex items-center text-primary hover:text-accent transition-colors mt-2 font-medium"
          >
            Contact our library staff <ArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
