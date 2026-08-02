import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TermsOfService() {
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
                    <h1 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8">תקנון האתר ותנאי שימוש</h1>
                    
                    <div className="space-y-6 text-stone-700 leading-relaxed">
                        <p>
                            ברוכים הבאים לאתר של אורטל אטיאס אדריכלות ועיצוב. השימוש באתר זה, בתכניו ובשירותים המוצעים בו, כפוף לתנאי השימוש המפורטים בתקנון זה. אנא קראו תנאים אלו בקפידה. עצם הגלישה באתר מהווה הסכמה לתנאים אלו.
                        </p>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">1. כללי</h2>
                        <p>
                            1.1. האתר משמש כפלטפורמה להצגת עבודות, פרויקטים ומידע אודות שירותי אדריכלות ועיצוב פנים הניתנים על ידי אורטל אטיאס.<br />
                            1.2. האמור בתקנון זה בלשון זכר נועד לנוחות בלבד, ומתייחס לשני המינים כאחד.
                        </p>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">2. קניין רוחני וזכויות יוצרים</h2>
                        <p>
                            2.1. כל זכויות היוצרים והקניין הרוחני באתר, לרבות טקסטים, תמונות, הדמיות, תוכניות, עיצובים, לוגו, קוד וכל חומר אחר המופיע באתר, שייכים במלואם לאורטל אטיאס (או לצדדים שלישיים שהרשו לה להשתמש בהם).<br />
                            2.2. אין להעתיק, לשכפל, להפיץ, לפרסם או להשתמש בכל דרך אחרת בתכנים המופיעים באתר ללא קבלת אישור מפורש מראש ובכתב מאורטל אטיאס.
                        </p>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">3. הגבלת אחריות</h2>
                        <p>
                            3.1. התכנים באתר מוצגים כפי שהם (As Is). אנו עושים מאמצים לספק מידע מדויק ועדכני, אך ייתכנו אי-דיוקים או שגיאות.<br />
                            3.2. אורטל אטיאס אינה נושאת באחריות לכל נזק, ישיר או עקיף, שייגרם למשתמש כתוצאה מהסתמכות על התכנים המופיעים באתר או משימוש בו. התמונות וההדמיות באתר נועדו להמחשה בלבד.
                        </p>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">4. קישורים לאתרים אחרים</h2>
                        <p>
                            האתר עשוי לכלול קישורים לאתרים חיצוניים. קישורים אלו נועדו לנוחות המשתמשים בלבד. אין לנו שליטה על תכניהם של אתרים אלו, ואנו לא נישא בכל אחריות הקשורה אליהם.
                        </p>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">5. שינויים באתר ובתקנון</h2>
                        <p>
                            אורטל אטיאס שומרת לעצמה את הזכות לערוך שינויים באתר, להסיר תכנים או להוסיף עליהם, וכן לשנות את תנאי תקנון זה מעת לעת, וללא הודעה מוקדמת. השינויים ייכנסו לתוקף מרגע פרסומם באתר.
                        </p>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">6. סמכות שיפוט</h2>
                        <p>
                            על שימוש באתר זה יחולו דיני מדינת ישראל בלבד. סמכות השיפוט הבלעדית בכל עניין הנובע משימוש באתר נתונה לבתי המשפט המוסמכים בישראל.
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
