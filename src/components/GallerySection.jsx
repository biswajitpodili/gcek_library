import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GallerySection = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Library Study Hall",
      caption: "Modern Study Space"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Book Shelves",
      caption: "Extensive Collection"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Reading Area",
      caption: "Quiet Reading Zones"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Digital Resources",
      caption: "Digital Learning Center"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Research Section",
      caption: "Advanced Research Area"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Computer Lab",
      caption: "Technology Center"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Group Study",
      caption: "Collaborative Learning"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1526721940322-10572b6f4e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Periodicals",
      caption: "Latest Journals"
    },
  ];

  // Changed to display a carousel with multiple visible images
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const timeoutRef = useRef(null);
  const SLIDE_DURATION = 4000; // 4 seconds per slide
  
  // Define totalPages (was missing)
  const totalPages = images.length;

  // Get visible images (show 3 at a time)
  const getVisibleImages = () => {
    const visibleImages = [];
    
    // Show 3 images at a time
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push({
        ...images[index],
        position: i === 0 ? 'left' : i === 1 ? 'center' : 'right'
      });
    }
    
    return visibleImages;
  };

  // Auto slide functionality - now slides one image at a time
  useEffect(() => {
    const nextSlide = () => {
      setDirection(1);
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    timeoutRef.current = setTimeout(nextSlide, SLIDE_DURATION);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, images.length]);

  // Handle manual navigation - move one image at a time
  const handleNext = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Individual image hover effect
  const imageHoverVariant = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  // Define slideVariants which was missing
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      }
    })
  };

  // Individual slide variants for smoother animation
  const slideItemVariants = {
    initial: (custom) => ({
      x: custom === 'right' ? 100 : custom === 'left' ? -100 : 0,
      opacity: custom === 'center' ? 1 : 0.5,
      scale: custom === 'center' ? 1 : 0.9,
    }),
    animate: (custom) => ({
      x: 0,
      opacity: custom === 'center' ? 1 : 0.8,
      scale: custom === 'center' ? 1 : 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    }),
    exit: (custom) => ({
      x: custom === 'left' ? -100 : custom === 'right' ? 100 : 0,
      opacity: 0.5,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-10 text-primary font-georgia">
          Library Gallery
        </h2>
        
        <div className="relative overflow-hidden max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full h-full"
              >
                <div className="flex gap-4 h-full">
                  {getVisibleImages().map((image, idx) => (
                    <motion.div
                      key={`${currentIndex}-${image.id}`}
                      className={`relative rounded-xl overflow-hidden shadow-lg
                        ${image.position === 'center' ? 'flex-[2]' : 'flex-1'}
                      `}
                      variants={slideItemVariants}
                      custom={image.position}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      whileHover="hover"
                    >
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${image.src})` }}
                      >
                        {/* Dark Overlay */}
                        <div className={`absolute inset-0 bg-black/20 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
                          image.position === 'center' ? 'hover:opacity-75' : ''
                        }`}></div>
                        
                        {/* Caption */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className={`font-bold mb-1 ${image.position === 'center' ? 'text-2xl' : 'text-xl'}`}>
                            {image.caption}
                          </h3>
                          <p className={`opacity-90 ${image.position === 'center' ? 'text-base' : 'text-sm'}`}>
                            {image.alt}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button 
              onClick={handlePrevious} 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 z-10"
              aria-label="Previous images"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={handleNext} 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 z-10"
              aria-label="Next images"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 py-4">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-accent scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Caption under the carousel */}
        <div className="text-center mt-6 text-gray-600 max-w-2xl mx-auto">
          <p>Explore our modern library facilities designed to enhance your learning experience.</p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;