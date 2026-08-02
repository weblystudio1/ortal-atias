'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

// --- The ArcGalleryHero Component ---
type ArcGalleryHeroProps = {
  images: string[];
  startAngle?: number;
  endAngle?: number;
  // radius for different screen sizes
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  // size of each card for different screen sizes
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  // optional extra class on outer section
  className?: string;
};

export const ArcGalleryHero: React.FC<ArcGalleryHeroProps> = ({
  images,
  startAngle = 20,
  endAngle = 160,
  radiusLg = 480,
  radiusMd = 360,
  radiusSm = 260,
  cardSizeLg = 120,
  cardSizeMd = 100,
  cardSizeSm = 80,
  className = '',
}) => {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Effect to handle responsive resizing of the arc and cards
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  // Ensure at least 2 points to distribute angles for the arc calculation
  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <div className={`relative overflow-hidden bg-transparent text-gray-900 dark:text-white flex flex-col ${className}`}>
      {/* Background ring container that controls geometry */}
      <div
        className="relative mx-auto mt-24 mb-16"
        style={{
          width: '100%',
          // Give it a bit more height to prevent clipping
          height: dimensions.radius * 1.5,
        }}
      >
        {/* Center pivot for transforms - positioned at bottom center */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {/* Each image is positioned on the circle and rotated to face outward */}
          {images.map((src, i) => {
            const angle = startAngle + step * i; // degrees
            const angleRad = (angle * Math.PI) / 180;
            
            // Calculate x and y positions on the arc
            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;
            
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: dimensions.cardSize,
                  height: dimensions.cardSize,
                  left: '50%',
                  bottom: '0px',
                  zIndex: count - i,
                }}
                initial={{
                  opacity: 0,
                  x: "-50%",
                  y: "50%",
                  scale: 0.5,
                  rotate: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: `calc(-50% + ${x}px)`,
                  y: `calc(50% - ${y}px)`,
                  scale: 1,
                  rotate: angle / 4,
                }}
                viewport={{ once: true, margin: "200px" }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                <div 
                  className="rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 transition-transform hover:scale-105 w-full h-full cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`Project ${i + 1}`}
                    className="block w-full h-full object-cover"
                    draggable={false}
                    // Add a fallback in case an image fails to load
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/400x400/334155/e2e8f0?text=Project`;
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Lightbox / Full screen overlay */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/90 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <motion.button 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-6 right-6 text-white hover:text-stone-300 z-[110] p-2 bg-stone-900/50 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </motion.button>
          <motion.img 
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.35, duration: 0.5 }}
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

    </div>
  );
};
