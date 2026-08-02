import { Instagram, Facebook, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-500 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative">
        
        <div className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dzyx5ablm/image/upload/v1780441646/ortal_logo2_no_background_croped_fk0cpw.png" 
            alt="Ortal Atias Logo" 
            className="h-12 md:h-16 w-auto brightness-0 invert opacity-80"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
            <p className="text-center font-light">
            © {new Date().getFullYear()} אורטל אטיאס אדריכלות ועיצוב. כל הזכויות שמורות.
            </p>
            <div className="flex items-center gap-4 text-xs">
                <Link to="/accessibility" className="hover:text-gold-500 transition-colors underline underline-offset-2">
                    הצהרת נגישות
                </Link>
                <span className="text-stone-300">|</span>
                <Link to="/privacy" className="hover:text-gold-500 transition-colors underline underline-offset-2">
                    מדיניות פרטיות
                </Link>
                <span className="text-stone-300">|</span>
                <Link to="/terms" className="hover:text-gold-500 transition-colors underline underline-offset-2">
                    תקנון
                </Link>
            </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/atiasortal_arc/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors p-2 bg-white/5 rounded-full" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-gold-500 transition-colors p-2 bg-white/5 rounded-full" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a 
            href="/#home" 
            className="ml-4 p-2 bg-gold-500 text-stone-900 hover:bg-white transition-colors rounded-full inline-flex"
            aria-label="חזרה למעלה"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
