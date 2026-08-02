import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-white text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image (Right side due to RTL) */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-stone-900/10 pointer-events-none z-10" />
            <img
              src="https://res.cloudinary.com/dzyx5ablm/image/upload/v1783260926/Ortal_Atias_Portrait_17_njdzxl.jpg"
              alt="אורטל אטיאס - אדריכלות ועיצוב פנים"
              className="w-full h-auto aspect-[3/4] object-cover"
            />
          </motion.div>

          {/* Text Content (Left side due to RTL) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
             <h2 className="text-4xl md:text-5xl font-sans font-medium text-stone-900 leading-tight">
               קצת עליי
             </h2>
             <div className="w-12 h-0.5 bg-gold-500" />
             <div className="text-lg text-stone-600 leading-relaxed font-light space-y-4 text-right">
               <div className="mb-6 pb-6 border-b border-stone-300">
                 <h3 className="text-2xl font-sans font-medium text-stone-900 mb-3">
                   "חלומות מתוכננים בתים שמרגישים נכון"
                 </h3>
                 <p className="text-stone-700 font-normal">
                   אני מאמינה שכל בית צריך לספר את הסיפור של האנשים שחיים בו. לכן כל פרויקט מתחיל בהקשבה, ממשיך בתכנון מדויק ומסתיים בבית שנעים לחיות בו לאורך שנים.
                 </p>
               </div>
               <p>
                 בראש "אורטל אטיאס – אדריכלות ועיצוב פנים" עומדת הנדסאית אדריכלית ומעצבת פנים, שסיימה בהצלחה את לימודיה במכללה הטכנולוגית תל חי.
               </p>
               <p>
                 ההתמחויות של אורטל אטיאס הן תכנון ומתן ייעוץ אדריכלי לבתים פרטיים, עיצוב פנים, תכנון מבנים מחדש, הרחבת מבנים ועוד. העיצוב נעשה באמצעות תוכנת הדמיה ממוחשבת, שמאפשרת לקבל החלטות מושכלות.
               </p>
               <p>
                 לצד אלה מסייעת אורטל אטיאס בשלבים אחרים הנדרשים לאורך הדרך, דוגמת טיפול מול הרשויות והוצאת היתרי בנייה. כל אחד מהלקוחות מקבל ליווי צמוד ויחס אישי, כאשר תחילת הדרך היא פגישת ייעוץ שאינה כרוכה בתשלום.
               </p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
