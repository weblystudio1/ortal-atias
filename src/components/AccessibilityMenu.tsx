import React, { useState, useEffect } from 'react';
import { Accessibility, Type, Contrast, MonitorPlay, BookOpen, X, FileText, Link as LinkIcon, MousePointerClick } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export function AccessibilityMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(0); // 0, 1, 2
    const [highContrast, setHighContrast] = useState(false);
    const [noAnimations, setNoAnimations] = useState(false);
    const [readableFont, setReadableFont] = useState(false);
    const [highlightLinks, setHighlightLinks] = useState(false);
    const [keyboardFocus, setKeyboardFocus] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        
        // Font size
        html.classList.remove('text-zoom-1', 'text-zoom-2');
        if (fontSize === 1) html.classList.add('text-zoom-1');
        if (fontSize === 2) html.classList.add('text-zoom-2');

        // High contrast
        if (highContrast) {
            html.classList.add('high-contrast');
        } else {
            html.classList.remove('high-contrast');
        }

        // No animations
        if (noAnimations) {
            html.classList.add('no-animations');
        } else {
            html.classList.remove('no-animations');
        }

        // Readable font
        if (readableFont) {
            html.classList.add('readable-font');
        } else {
            html.classList.remove('readable-font');
        }

        // Highlight links
        if (highlightLinks) {
            html.classList.add('highlight-links');
        } else {
            html.classList.remove('highlight-links');
        }

        // Keyboard focus
        if (keyboardFocus) {
            html.classList.add('keyboard-focus');
        } else {
            html.classList.remove('keyboard-focus');
        }
    }, [fontSize, highContrast, noAnimations, readableFont, highlightLinks, keyboardFocus]);

    const increaseFont = () => setFontSize(p => Math.min(p + 1, 2));
    const decreaseFont = () => setFontSize(p => Math.max(p - 1, 0));

    return (
        <div className="fixed bottom-6 left-6 z-[200]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-16 left-0 bg-white shadow-2xl rounded-2xl p-6 w-72 border border-stone-100 max-h-[80vh] overflow-y-auto"
                        dir="rtl"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-stone-900">תפריט נגישות</h3>
                            <button onClick={() => setIsOpen(false)} className="text-stone-500 hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 rounded">
                                <X size={20} />
                            </button>
                        </div>
                        
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                                <div className="flex items-center gap-3 text-stone-700">
                                    <Type size={18} />
                                    <span className="text-sm font-medium">גודל טקסט</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button aria-label="הקטן טקסט" onClick={decreaseFont} className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm hover:bg-stone-100 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-stone-900" disabled={fontSize === 0}>-</button>
                                    <button aria-label="הגדל טקסט" onClick={increaseFont} className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm hover:bg-stone-100 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-stone-900" disabled={fontSize === 2}>+</button>
                                </div>
                            </div>

                            <button 
                                onClick={() => setHighContrast(!highContrast)}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-stone-900 ${highContrast ? 'bg-stone-900 text-white' : 'bg-stone-50 text-stone-700 hover:bg-stone-100'}`}
                            >
                                <Contrast size={18} />
                                <span className="text-sm font-medium">ניגודיות גבוהה</span>
                            </button>

                            <button 
                                onClick={() => setHighlightLinks(!highlightLinks)}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-stone-900 ${highlightLinks ? 'bg-stone-900 text-white' : 'bg-stone-50 text-stone-700 hover:bg-stone-100'}`}
                            >
                                <LinkIcon size={18} />
                                <span className="text-sm font-medium">הדגשת קישורים</span>
                            </button>

                            <button 
                                onClick={() => setKeyboardFocus(!keyboardFocus)}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-stone-900 ${keyboardFocus ? 'bg-stone-900 text-white' : 'bg-stone-50 text-stone-700 hover:bg-stone-100'}`}
                            >
                                <MousePointerClick size={18} />
                                <span className="text-sm font-medium">הדגשת פוקוס למקלדת</span>
                            </button>

                            <button 
                                onClick={() => setNoAnimations(!noAnimations)}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-stone-900 ${noAnimations ? 'bg-stone-900 text-white' : 'bg-stone-50 text-stone-700 hover:bg-stone-100'}`}
                            >
                                <MonitorPlay size={18} />
                                <span className="text-sm font-medium">עצירת אנימציות</span>
                            </button>

                            <button 
                                onClick={() => setReadableFont(!readableFont)}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-stone-900 ${readableFont ? 'bg-stone-900 text-white' : 'bg-stone-50 text-stone-700 hover:bg-stone-100'}`}
                            >
                                <BookOpen size={18} />
                                <span className="text-sm font-medium">גופן קריא</span>
                            </button>

                            <div className="pt-2 border-t border-stone-100">
                                <Link 
                                    to="/accessibility" 
                                    onClick={() => setIsOpen(false)}
                                    className="w-full flex items-center gap-3 p-3 rounded-xl text-stone-600 hover:bg-stone-50 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-900"
                                >
                                    <FileText size={18} />
                                    <span className="text-sm font-medium underline">הצהרת נגישות</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-stone-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-stone-800 transition-colors focus:outline-none focus:ring-4 focus:ring-stone-900/30"
                aria-label="פתח תפריט נגישות"
                aria-expanded={isOpen}
            >
                <Accessibility size={28} />
            </button>
        </div>
    );
}
