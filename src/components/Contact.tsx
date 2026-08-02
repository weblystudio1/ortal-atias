import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message
    const text = `הודעה חדשה מהאתר:
שם: ${formData.name}
טלפון: ${formData.phone}
אימייל: ${formData.email}
הודעה: ${formData.message}`;

    // Encode the text for URL
    const encodedText = encodeURIComponent(text);
    
    // WhatsApp URL (using the phone number from the contact info: 052-671-1991 -> 972526711991)
    const whatsappUrl = `https://wa.me/972526711991?text=${encodedText}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="bg-stone-50 relative">
      <div className="grid lg:grid-cols-2">
        {/* Contact Form */}
        <div className="py-24 px-6 md:px-16 lg:px-24 flex flex-col justify-center bg-white shadow-[20px_0_40px_-20px_rgba(0,0,0,0.05)] z-10 relative">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <span className="text-gold-500 text-sm tracking-widest uppercase mb-4 block">יצירת קשר</span>
             <h2 className="text-4xl md:text-5xl font-sans font-medium text-stone-900 mb-6">בואו נדבר</h2>
             <p className="text-stone-500 font-light mb-12">
               נשמח לעמוד לשירותכם, אתם מוזמנים להשאיר פרטים ונחזור אליכם בהקדם לתיאום פגישת היכרות.
             </p>
             
             <form className="space-y-6" onSubmit={handleSubmit}>
               <div className="grid grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-stone-900 mb-2">שם מלא</label>
                   <input 
                     type="text" 
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     required
                     className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-gold-500 transition-colors"
                     placeholder="הכנס שם מלא"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-stone-900 mb-2">טלפון</label>
                   <input 
                     type="tel" 
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                     required
                     className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-gold-500 transition-colors"
                     placeholder="הכנס מספר טלפון"
                   />
                 </div>
               </div>
               <div>
                 <label className="block text-sm font-medium text-stone-900 mb-2">אימייל</label>
                 <input 
                   type="email" 
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                   className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-gold-500 transition-colors"
                   placeholder="הכנס כתובת אימייל"
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-stone-900 mb-2">הודעה</label>
                 <textarea 
                   rows={4} 
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   required
                   className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-gold-500 transition-colors resize-none"
                   placeholder="ספרו לנו קצת על הפרויקט שלכם..."
                 />
               </div>
               <button 
                 type="submit" 
                 className="mt-8 px-10 py-4 bg-stone-900 text-white font-medium hover:bg-gold-500 transition-colors w-full sm:w-auto"
               >
                 שלח הודעה
               </button>
             </form>

           </motion.div>
        </div>

        {/* Contact Info container */}
        <div className="bg-stone-900 text-white py-24 px-6 md:px-16 lg:px-24 flex flex-col justify-center relative">
           {/* Abstract architectural lines */}
           <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative z-10 space-y-12"
           >
             <h3 className="text-3xl font-sans font-medium text-gold-500 mb-10">פרטי התקשרות</h3>
             
             <div className="flex flex-col gap-8 text-stone-300">
               <div className="flex items-start gap-6">
                 <div className="p-3 bg-white/5 rounded-full text-gold-500 shrink-0">
                   <Phone size={24} />
                 </div>
                 <div>
                   <span className="block text-white font-medium text-lg mb-1">טלפון</span>
                   <p dir="ltr" className="text-right">052-671-1991</p>
                 </div>
               </div>

               <div className="flex items-start gap-6">
                 <div className="p-3 bg-white/5 rounded-full text-gold-500 shrink-0">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <span className="block text-white font-medium text-lg mb-1">כתובת הסטודיו</span>
                   <p dir="ltr" className="text-right">Kikar Tsahal 120, Qiryat Shemona</p>
                 </div>
               </div>

               <div className="flex items-start gap-6">
                 <div className="p-3 bg-white/5 rounded-full text-gold-500 shrink-0">
                   <Mail size={24} />
                 </div>
                 <div>
                   <span className="block text-white font-medium text-lg mb-1">אימייל</span>
                   <p dir="ltr" className="text-right">office@ortaldsgn.com</p>
                 </div>
               </div>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
