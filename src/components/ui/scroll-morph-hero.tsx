"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
    onClick: () => void;
}

// --- FlipCard Component ---
const IMG_WIDTH = 140;  // Increased
const IMG_HEIGHT = 200; // Increased

function FlipCard({
    src,
    index,
    total,
    phase,
    target,
    onClick,
}: FlipCardProps) {
    return (
        <motion.div
            // Smoothly animate to the coordinates defined by the parent
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}

            // Initial style
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d", // Essential for the 3D hover effect
                perspective: "1000px",
            }}
            className="cursor-pointer group hover:z-50"
            onClick={onClick}
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180, scale: 1.1 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.2)] bg-stone-200"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)] bg-stone-900 flex flex-col items-center justify-center p-4 border border-stone-700"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-gold-500 uppercase tracking-widest mb-1">View</p>
                        <p className="text-[10px] font-medium text-white">Project</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const MAX_SCROLL = 3000; // Virtual scroll range

// Unsplash Images Architecture focused
export const RAW_IMAGES = [
    "https://res.cloudinary.com/dzyx5ablm/image/upload/v1779917251/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2026-05-28_002656_hasnlu.png",
    "https://res.cloudinary.com/dzyx5ablm/image/upload/v1779917250/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2026-05-28_002215_m1gaak.png",
    "https://res.cloudinary.com/dzyx5ablm/image/upload/v1779917250/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2026-05-28_002427_kmkbgm.png",
    "https://res.cloudinary.com/dzyx5ablm/image/upload/v1779917250/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2026-05-28_002627_mqlkwm.png",
    "https://get-marketing.co.il/wp-content/uploads/2025/05/ortal-atias-new-pic3.jpg",
    "https://get-marketing.co.il/wp-content/uploads/2025/05/ortal-atias-new-pic2.jpg",
    "https://get-marketing.co.il/wp-content/uploads/2025/05/ortal-atias-new-pic1.jpg"
];
const IMAGES = Array.from(new Set(RAW_IMAGES));

// Helper for linear interpolation
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function IntroAnimation() {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // --- Container Size ---
    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        // Initial set
        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // --- Virtual Scroll Logic ---
    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0); // Keep track of scroll value without re-renders

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            const targetScroll = scrollRef.current + e.deltaY;
            
            // Trap scroll only if we are animating inside the gallery
            if (targetScroll > 0 && targetScroll < MAX_SCROLL) {
                e.preventDefault();
                scrollRef.current = targetScroll;
            } else if (targetScroll <= 0) {
                // If scrolling up past top, release
                if (scrollRef.current > 0) e.preventDefault();
                scrollRef.current = 0;
            } else if (targetScroll >= MAX_SCROLL) {
                // If scrolling down past max, release
                if (scrollRef.current < MAX_SCROLL) e.preventDefault();
                scrollRef.current = MAX_SCROLL;
            }
            virtualScroll.set(scrollRef.current);
        };

        // Touch support
        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            const targetScroll = scrollRef.current + deltaY * 2;

            if (targetScroll > 0 && targetScroll < MAX_SCROLL) {
                if (e.cancelable) e.preventDefault();
                scrollRef.current = targetScroll;
                touchStartY = touchY;
            } else if (targetScroll <= 0) {
                if (scrollRef.current > 0 && e.cancelable) e.preventDefault();
                scrollRef.current = 0;
                touchStartY = touchY;
            } else if (targetScroll >= MAX_SCROLL) {
                if (scrollRef.current < MAX_SCROLL && e.cancelable) e.preventDefault();
                scrollRef.current = MAX_SCROLL;
                touchStartY = touchY;
            }
            virtualScroll.set(scrollRef.current);
        };

        // Attach listeners to container instead of window for portability
        container.addEventListener("wheel", handleWheel, { passive: false });
        container.addEventListener("touchstart", handleTouchStart, { passive: false });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [virtualScroll]);

    // 1. Morph Progress: 0 (Circle) -> 1 (Bottom Arc) -> 0 (Circle)
    const morphProgress = useTransform(virtualScroll, [0, 600, 2400, 3000], [0, 1, 1, 0]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

    // 2. Scroll Rotation (Shuffling):
    const scrollRotate = useTransform(virtualScroll, [0, 3000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

    // --- Mouse Parallax ---
    // Removed mouse responsiveness per user request
    const parallaxValue = 0;

    // --- Intro Sequence ---
    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    // --- Responsive Image Count ---
    const isMobile = containerSize.width > 0 && containerSize.width < 768;
    const activeImages = useMemo(() => {
        return isMobile ? IMAGES.slice(0, 10) : IMAGES;
    }, [isMobile]);
    const totalImages = activeImages.length;

    // --- Random Scatter Positions ---
    const scatterPositions = useMemo(() => {
        return activeImages.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, [activeImages]);

    // --- Render Loop (Manual Calculation for Morph) ---
    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
        };
    }, [smoothMorph, smoothScrollRotate]);

    // --- Content Opacity ---
    // Fade in content when arc is formed (morphValue > 0.8)
    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    return (
        <div ref={containerRef} className="relative w-full h-full bg-stone-50 overflow-hidden" dir="ltr">
            {/* Container */}
            <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">

                {/* Intro Text (Fades out) */}
                <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="text-2xl font-serif tracking-tight text-stone-900 md:text-4xl"
                    >
                        תכנון אדריכלי מדויק
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-4 text-xs font-bold tracking-[0.2em] text-stone-500 uppercase"
                    >
                        גללו לגלריה
                    </motion.p>
                </div>

                {/* Arc Active Content (Fades in) */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[10%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                >
                    <h2 className="text-2xl md:text-4xl font-serif text-stone-900 tracking-tight mb-4">
                        היצירות שלנו
                    </h2>
                    <p className="text-sm md:text-base text-stone-600 max-w-lg leading-relaxed font-light">
                        עיצוב שמשנה את פני המציאות. <br className="hidden md:block" />
                        גללו כדי לחקור את יצירות הפרימיום שלנו.
                    </p>
                </motion.div>

                {/* Main Container */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {activeImages.map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        // 1. Intro Phases (Scatter -> Line)
                        if (introPhase === "scatter") {
                            target = scatterPositions[i] || { x: 0, y: 0, rotation: 0, scale: 1, opacity: 0 };
                        } else if (introPhase === "line") {
                            const lineSpacing = isMobile ? 35 : 70; 
                            const lineTotalWidth = totalImages * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2 + (lineSpacing / 2);
                            target = { x: lineX, y: 0, rotation: 0, scale: isMobile ? 0.6 : 1, opacity: 1 };
                        } else {
                            // 2. Circle Phase & Morph Logic

                            // Responsive Calculations
                            const minDimension = Math.min(containerSize.width, containerSize.height);

                            // A. Calculate Circle Position
                            // Scale down circle radius for mobile to fit inside the screen smoothly
                            const circleRadius = Math.min(minDimension * (isMobile ? 0.35 : 0.40), 400);

                            const baseRotation = rotateValue; // Add rotation to circle based on scroll
                            const circleAngle = (i / totalImages) * 360 + baseRotation;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            // B. Calculate Bottom Arc Position
                            // "Rainbow" Arch: Convex up. Center is highest point.

                            // Radius:
                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                            const arcRadius = baseRadius * (isMobile ? 0.9 : 1.1);

                            // Position:
                            // Move apex further down on mobile so it doesn't collide with the text
                            const arcApexY = containerSize.height * (isMobile ? 0.45 : 0.25);
                            const arcCenterY = arcApexY + arcRadius;

                            // Spread angle:
                            const spreadAngle = isMobile ? 70 : 130;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (totalImages - 1);

                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);

                            // Calculate bounded rotation:
                            const maxRotation = spreadAngle * 0.8; 
                            const boundedRotation = -scrollProgress * maxRotation;

                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + (isMobile ? 0 : parallaxValue),
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.0 : 1.8, // Reduced scale for mobile to avoid cutoff
                            };

                            // C. Interpolate (Morph)
                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(isMobile ? 0.6 : 1, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }

                        return (
                            <FlipCard
                                key={i}
                                src={src}
                                index={i}
                                total={totalImages}
                                phase={introPhase} 
                                target={target}
                                onClick={() => setSelectedImage(src)}
                            />
                        );
                    })}
                </div>
            </div>
            
            {/* Fade Out Edge Gradients */}
            <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-stone-50 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-stone-50 to-transparent pointer-events-none" />

            {/* Full Screen Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[120] flex items-center justify-center bg-stone-900/90 p-4 md:p-12 cursor-pointer"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white hover:text-gold-500 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm z-[121]"
                            aria-label="Close image"
                        >
                            <X size={24} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={selectedImage}
                            alt="Expanded view"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
