import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { num: '01', title: 'פגישת ייעוץ', desc: 'הבנת הצרכים, החלומות, והתקציב שלכם כדי לבנות פרוגרמה מדויקת.' },
  { num: '02', title: 'אפיון ותכנון', desc: 'יצירת סקיצות ראשוניות ותכנון אדריכלי פונקציונלי.' },
  { num: '03', title: 'הדמיות ותוכניות', desc: 'הפקת תוכניות עבודה מפורטות והדמיות תלת-מימדיות פוטו-ריאליסטיות.' },
  { num: '04', title: 'בחירת חומרים', desc: 'לווי אישי לבחירת חומרי גמר, ריהוט, תאורה ואקססוריז באולמות התצוגה.' },
  { num: '05', title: 'ליווי ביצוע', desc: 'פיקוח עליון בשטח במהלך העבודות מול הקבלנים ואנשי המקצוע.' },
  { num: '06', title: 'מסירת הפרויקט', desc: 'הלבשת הבית הסופית ומסירת המפתח ללקוח מרוצה.' },
];

export function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Gentle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 blur-[50px] md:blur-[100px] rounded-full pointer-events-none will-change-transform" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-20">
           <span className="text-gold-500 text-sm tracking-widest uppercase mb-4 block">איך אנחנו עובדים</span>
           <h2 className="text-4xl md:text-5xl font-sans font-medium mb-6">תהליך העבודה</h2>
        </div>

        <div ref={containerRef} className="relative">
          {/* Vertical Line Container */}
          <div className="absolute right-8 md:right-1/2 top-0 bottom-0 w-0 flex justify-center">
            <div className="w-px h-full bg-white/10" />
            <motion.div 
               className="absolute top-0 w-px h-full bg-gold-500 origin-top will-change-transform"
               style={{ scaleY }}
            />
          </div>

          <div className="space-y-16">
             {steps.map((step, idx) => {
               const isEven = idx % 2 === 0;
               return (
                 <div key={step.num} className="relative flex items-center md:justify-between pr-16 md:pr-0">
                    
                    {/* Circle Node Container */}
                    <div className="absolute right-8 md:right-1/2 w-0 flex justify-center z-10 top-4 md:top-1/2 md:-translate-y-1/2">
                        <motion.div 
                          initial={{ scale: 0, backgroundColor: "#1A1A1A" }}
                          whileInView={{ scale: 1, backgroundColor: "#D4AF37" }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4 }}
                          className="w-6 h-6 rounded-full border-4 border-stone-900 shrink-0"
                        />
                    </div>

                    {/* Desktop Layout Helpers */}
                    <div className={`hidden md:block w-5/12 ${isEven ? 'order-2' : 'order-1'}`}></div>

                    {/* Content Box */}
                    <motion.div 
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true, margin: "-100px" }}
                       transition={{ duration: 0.6 }}
                       className={`w-full md:w-5/12 text-right ${isEven ? 'md:text-right order-1' : 'md:text-left order-2'}`}
                    >
                       <span className="text-5xl font-serif text-white/10 block mb-2">{step.num}</span>
                       <h3 className="text-2xl font-serif text-gold-500 mb-3">{step.title}</h3>
                       <p className="text-stone-300 font-light leading-relaxed">{step.desc}</p>
                    </motion.div>

                 </div>
               );
             })}
          </div>
        </div>
      </div>
    </section>
  );
}
