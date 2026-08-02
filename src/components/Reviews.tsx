import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const reviews = [
  {
    id: 1,
    name: "לילך שושן",
    text: "מקצועית ביותר, אישיות מדהימה, יצירתית, ,נעימה. מנהלת שיח לפני כל החלטה, קשובה ללקוח ולבקשותיו. מומלצת ביותר",
    rating: 5,
    date: ""
  },
  {
    id: 2,
    name: "עידן בר",
    text: "אורטל מקצועית, יצירתית ושירותית ברמה גבוהה. היא ליוותה אותנו לאורך כל החוויה הייתה, קשובה לכל בקשה והציעה פתרונות חכמים ששדרגו את התכנון. ממליץ בחום לכל מי שמחפש אדריכלית אמינה ומוכשרת!",
    rating: 5,
    date: ""
  },
  {
    id: 3,
    name: "יפה מור",
    text: "אורטל אדריכלית מדהימה, מקצועית ברמה שהלוואי שכולם היו ככה, אכפתית, דואגת עד שהכל מסתיים ומטפלת בהכל בצורה מופתית כולל דאגה אישית ללקוחות ואדיבות מופלאה, מאחלת לנו להיתקל בבעלי מקצוע כמוה כל הזמן!",
    rating: 5,
    date: ""
  },
  {
    id: 4,
    name: "מדלן פרץ",
    text: "אורטל היא אישה שכולה לב ,מקצועית ,אמינה פשוט אלופהה...מלווה את הלקוח עד לקבלת המפתח ...זמינה בכל שעה להתייעצות הכי קטנה.זכייה בפייס ושקט בטוח עד לקבלת הבית",
    rating: 5,
    date: ""
  },
  {
    id: 5,
    name: "אורלי גבאי",
    text: "אורטל היא האדריכלית שליוותה אותי לאורך תכנון ובניית הממ\"ד בביתי. לאורך כל הדרך היא הפגינה מקצועיות,זמינות,סבלנות ויחס אישי. דאגה לכל הפרטים ,ליוותה אותי מול כל הגורמים הרלוונטיים,נתנה מענה לכל שאלה והיתה קשובה לכל בקשה. בזכות הידע והניסיון שלה התהליך התנהל בצורה מסודרת ויעילה. ממליצה עליה בחום.",
    rating: 5,
    date: ""
  }
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-16 md:py-20 bg-stone-50 border-t border-stone-200 text-stone-900 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-medium text-stone-900 mb-5">לקוחות ממליצים</h2>
          <div className="flex flex-col sm:flex-row items-center gap-3 text-stone-600 bg-white px-5 py-2.5 rounded-full shadow-sm border border-stone-100 text-xs md:text-sm">
             <div className="flex items-center gap-2">
                 <GoogleIcon />
                 <span className="font-medium text-stone-800 text-sm md:text-base">5.0</span>
                 <div className="flex gap-1 text-yellow-400">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={16} fill="currentColor" />
                   ))}
                 </div>
             </div>
             <span className="hidden sm:block text-stone-300">|</span>
             <span>ביקורות מאומתות מ-Google Maps</span>
          </div>
        </div>

        <div className="relative h-[360px] sm:h-[280px] md:h-[260px] bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center h-full"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-base md:text-lg text-stone-700 font-light leading-relaxed mb-6 italic overflow-y-auto">
                "{reviews[currentIndex].text}"
              </p>
              <div className="mt-auto">
                <div className="font-medium text-stone-900 text-base">{reviews[currentIndex].name}</div>
                <div className="text-xs text-stone-500">{reviews[currentIndex].date}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-gold-500 w-5' : 'bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Show review ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://share.google/7N3WT9ToyDt1tZ3aR" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-stone-200 text-stone-700 hover:text-stone-900 hover:border-stone-300 rounded-full transition-all shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
          >
            <span>כתיבת ביקורת בגוגל</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
