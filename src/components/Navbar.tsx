import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Instagram, Facebook } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ראשי', href: '/#home' },
    { name: 'אודות', href: '/#about' },
    { name: 'פרויקטים', href: '/#projects' },
    { name: 'תהליך', href: '/#process' },
    { name: 'צור קשר', href: '/#contact' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          isScrolled ? 'bg-white shadow-sm py-4' : 'bg-white py-6'
        )}
      >
        <div className="w-full px-6 md:px-12 lg:px-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/#home" className="flex items-center">
              <img 
                src="https://res.cloudinary.com/dzyx5ablm/image/upload/v1780441646/ortal_logo2_no_background_croped_fk0cpw.png" 
                alt="Ortal Atias Logo" 
                className="h-12 md:h-16 w-auto transform hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-800 transition-colors hover:text-gold-500"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              className="ml-4 px-6 py-2.5 bg-stone-900 text-white text-sm font-medium hover:bg-gold-500 transition-colors"
            >
              לתיאום פגישה
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-stone-900"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[110] bg-white text-stone-900 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-stone-100">
              <div className="flex items-center">
                <img 
                  src="https://res.cloudinary.com/dzyx5ablm/image/upload/v1780441646/ortal_logo2_no_background_croped_fk0cpw.png" 
                  alt="Ortal Atias Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8 p-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="p-8 pb-12 flex justify-center gap-6 border-t border-stone-100 text-stone-500">
               <a href="https://www.instagram.com/atiasortal_arc/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors" aria-label="Instagram"><Instagram /></a>
               <a href="#" className="hover:text-gold-500 transition-colors" aria-label="Facebook"><Facebook /></a>
               <a href="#" className="hover:text-gold-500 transition-colors" aria-label="Phone"><Phone /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
