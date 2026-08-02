import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECT_IMAGES } from '../data/images';
import { Link } from 'react-router-dom';

export function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-stone-50 pt-32 md:pt-40 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center mb-8">
                    <Link to="/" className="text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2">
                        <ArrowRight size={20} />
                        חזרה לעמוד הראשי
                    </Link>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-12 text-center">גלריה</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PROJECT_IMAGES.map((src, idx) => (
                        <div 
                            key={idx} 
                            className="aspect-square overflow-hidden cursor-pointer bg-stone-200"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img 
                                src={src} 
                                alt={`Project ${idx + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/90 p-4 sm:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-6 right-6 text-white hover:text-stone-300 z-[110] p-2 bg-stone-900/50 rounded-full"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={28} />
                        </motion.button>
                        <motion.img 
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: "spring", bounce: 0.35, duration: 0.5 }}
                            src={selectedImage} 
                            alt="Expanded view" 
                            className="max-w-full max-h-full object-contain shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
