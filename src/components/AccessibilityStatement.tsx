import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AccessibilityStatement() {
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
                    <h1 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8">הצהרת נגישות</h1>
                    
                    <div className="space-y-6 text-stone-700 leading-relaxed">
                        <p>
                            אנו רואים חשיבות רבה במתן שירות שוויוני לכלל הלקוחות והגולשים, ולכן הושקעו מאמצים ומשאבים רבים בהנגשת האתר.
                            מטרתנו היא לאפשר חווית גלישה חלקה, נוחה ונגישה לכל אדם, לרבות אנשים עם מוגבלויות. האתר מונגש ברמה AA לפי תקן WCAG 2.1.
                        </p>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">פעולות הנגשה שבוצעו באתר</h2>
                        <ul className="list-disc list-inside space-y-2 marker:text-gold-500">
                            <li><strong>ניגודיות צבעים:</strong> בוצעו התאמות צבעים והאתר מאפשר ניגודיות גבוהה להקלה על לקויי ראייה (יחס ניגודיות גבוה).</li>
                            <li><strong>ניווט מקלדת:</strong> האתר מותאם לגלישה באמצעות מקלדת בלבד. ניתן לנווט באמצעות מקש Tab, להשתמש בחצים, ולהפעיל קישורים וכפתורים באמצעות מקש Enter.</li>
                            <li><strong>דילוג לתוכן המרכזי:</strong> האתר כולל מנגנון המאפשר למשתמשים לדלג ישירות לתוכן העמוד בלחיצה על מקש Tab בתחילת הגלישה, ללא צורך לעבור על פני התפריט הראשי.</li>
                            <li><strong>הדגשת קישורים ופוקוס:</strong> בעת ניווט עם מקלדת, ניתן פוקוס ויזואלי ברור לקישורים ולכפתורים המאפשר לדעת היכן המשתמש נמצא בכל רגע.</li>
                            <li><strong>עצירת תנועה:</strong> שולב מנגנון המאפשר לעצור אנימציות, תנועה של תמונות ומעברים למניעת הסחות דעת ועומס קוגניטיבי.</li>
                            <li><strong>התאמה לקוראי מסך:</strong> האתר הותאם לשימוש עם תוכנות קוראות מסך (כגון NVDA ו-VoiceOver), כולל שימוש בתגיות ARIA ומבנה סמנטי תקין.</li>
                            <li><strong>טקסטים חלופיים (Alt):</strong> לכל התמונות באתר הוגדרו תגיות טקסט חלופי מתאימות כדי לאפשר לקוראי מסך לתאר את התמונות למשתמשים כבדי ראייה.</li>
                            <li><strong>מבנה כותרות תקין:</strong> האתר בנוי עם היררכיית כותרות תקינה והדרגתית (H1, H2, H3) השומרת על רצף הגיוני, כאשר כותרת H1 מופיעה פעם אחת בכל עמוד ומתארת את תוכנו.</li>
                            <li><strong>שינוי גודל טקסט וגופן קריא:</strong> ניתן להגדיל את גודל הגופן באתר או לשנותו לגופן קריא יותר (Sans-serif) מבלי לאבד תוכן או לפגוע בפונקציונליות של האתר.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">תפריט הנגישות</h2>
                        <p>
                            באתר מותקן תפריט נגישות המאפשר למשתמשים לבצע התאמות אישיות לתצוגה בכל עת:
                        </p>
                        <ul className="list-disc list-inside space-y-2 marker:text-gold-500">
                            <li>שינוי גודל הגופן (הגדלה והקטנה).</li>
                            <li>הפעלת מצב ניגודיות גבוהה.</li>
                            <li>הדגשת קישורים (הוספת קו תחתון).</li>
                            <li>הדגשת פוקוס למקלדת.</li>
                            <li>עצירת אנימציות ותנועה באתר.</li>
                            <li>שינוי הגופן לגופן קריא.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">פניות ומשוב בנושא נגישות</h2>
                        <p>
                            אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו לכלל האוכלוסייה. אם נתקלתם בבעיה, קושי כלשהו, או שיש לכם הצעה לשיפור חווית המשתמש, נשמח לקבל את פנייתכם ולטפל בה בהקדם האפשרי.
                        </p>
                        <div className="bg-stone-50 p-6 mt-4 border border-stone-200 rounded-lg">
                            <h3 className="font-bold mb-2 text-stone-900">פרטי רכז הנגישות:</h3>
                            <p><strong>שם:</strong> אורטל אטיאס</p>
                            <p><strong>טלפון:</strong> 054-0000000</p>
                            <p><strong>דוא"ל:</strong> info@ortalatias.co.il</p>
                        </div>
                        
                        <p className="text-sm text-stone-500 mt-8">
                            תאריך עדכון אחרון: {new Date().toLocaleDateString('he-IL')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
