import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GalleryPage } from './components/GalleryPage';
import { AccessibilityMenu } from './components/AccessibilityMenu';
import { AccessibilityStatement } from './components/AccessibilityStatement';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Process />
      <Projects />
      <Reviews />
      <Contact />
    </>
  );
}

function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top or specific hash on location change
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="font-sans min-h-screen bg-stone-50 text-stone-900 selection:bg-gold-500/30 overflow-x-hidden w-full">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[999] bg-stone-900 text-white px-4 py-2 rounded">
        דילוג לתוכן המרכזי
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/accessibility" element={<AccessibilityStatement />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
      <AccessibilityMenu />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
