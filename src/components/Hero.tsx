import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  "https://res.cloudinary.com/dzyx5ablm/image/upload/v1783258900/Ortal_Atias_Architecture_17_s01zt2.jpg",
  "https://res.cloudinary.com/dzyx5ablm/image/upload/v1783258901/Ortal_Atias_Architecture_13_wprfh5.jpg",
  "https://res.cloudinary.com/dzyx5ablm/image/upload/v1783258900/Ortal_Atias_Architecture_19_vq7xwm.jpg",
  "https://res.cloudinary.com/dzyx5ablm/image/upload/v1783258895/Ortal_Atias_Architecture_37_knkcy8.jpg",
  "https://res.cloudinary.com/dzyx5ablm/image/upload/v1783258893/Ortal_Atias_Architecture_5_r9b0kf.jpg"
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Luxury architectural project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-sm md:text-base tracking-[0.2em] uppercase mb-4 text-white/80"
        >
          אורטל אטיאס
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-sans font-medium leading-tight mb-6"
        >
          אדריכלות ועיצוב פנים
        </motion.h1>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#contact"
            className="px-8 py-4 border border-white/50 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm md:backdrop-blur-md w-full sm:w-auto text-center"
          >
            לתיאום פגישה
          </a>
        </motion.div>
      </div>
    </section>
  );
}
