import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-stone-50 pt-32 pb-12" dir="rtl">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center mb-8">
                    <Link to="/" className="text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2">
                        <ArrowRight size={20} />
                        חזרה לעמוד הראשי
                    </Link>
                </div>

                <div className="bg-white p-8 md:p-12 shadow-sm border border-stone-100 rounded-xl">
                    <h1 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8">מדיניות פרטיות</h1>
                    
                    <div className="space-y-6 text-stone-700 leading-relaxed">
                        <p>
                            אורטל אטיאס אדריכלות ועיצוב מכבדת את פרטיות המשתמשים באתר. מדיניות זו מפרטת כיצד אנו אוספים, משתמשים ושומרים על המידע האישי שלך.
                        </p>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">איסוף מידע</h2>
                        <p>
                            אנו עשויים לאסוף מידע אישי כגון שם, כתובת דוא"ל, ומספר טלפון כאשר אתה ממלא טופס יצירת קשר באתר או פונה אלינו בדרכים אחרות.
                            כמו כן, האתר עשוי לאסוף מידע טכני באופן אוטומטי (כגון כתובת IP, סוג דפדפן, דפים בהם ביקרת) לצורך שיפור חוויית המשתמש.
                        </p>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">השימוש במידע</h2>
                        <p>
                            המידע שאנו אוספים משמש למטרות הבאות:
                        </p>
                        <ul className="list-disc list-inside space-y-2 marker:text-gold-500">
                            <li>יצירת קשר ומענה לפניותיך.</li>
                            <li>מתן שירותים והצעות מותאמות אישית.</li>
                            <li>שיפור וייעול האתר וחוויית המשתמש.</li>
                            <li>שליחת מידע מקצועי ועדכונים (רק במידה ואישרת זאת).</li>
                        </ul>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">מסירת מידע לצד שלישי</h2>
                        <p>
                            איננו מוכרים, סוחרים או מעבירים מידע אישי מזהה שלך לצדדים שלישיים ללא הסכמתך, למעט לספקי שירות אמינים המסייעים לנו בתפעול האתר או בניהול העסק, ובלבד שהם מתחייבים לשמור על סודיות המידע.
                            אנו עשויים לחשוף מידע במידה ונדרש לעשות זאת על פי חוק.
                        </p>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">אבטחת מידע</h2>
                        <p>
                            אנו נוקטים באמצעי אבטחה מקובלים כדי להגן על המידע האישי שלך. עם זאת, אין מערכת אבטחה שחסינה לחלוטין מפני פריצות, ולכן איננו יכולים להבטיח אבטחה מוחלטת.
                        </p>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">שימוש בעוגיות (Cookies)</h2>
                        <p>
                            האתר עשוי להשתמש בעוגיות (Cookies) כדי לשפר את חוויית הגלישה, לאסוף נתונים סטטיסטיים ולהתאים את האתר להעדפותיך. באפשרותך לשנות את הגדרות הדפדפן שלך כדי לסרב לשימוש בעוגיות, אך הדבר עשוי להשפיע על תפקודים מסוימים באתר.
                        </p>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">שינויים במדיניות הפרטיות</h2>
                        <p>
                            אנו שומרים לעצמנו את הזכות לעדכן או לשנות את מדיניות הפרטיות מעת לעת. שינויים משמעותיים יפורסמו בעמוד זה.
                        </p>
                        
                        <p className="text-sm text-stone-500 mt-8">
                            תאריך עדכון אחרון: {new Date().toLocaleDateString('he-IL')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
