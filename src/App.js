import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Properties from './components/Properties';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(
      '.section-title, .property-card, .about-image, .about-content, .service-card, .testimonial-card, .contact-info, .contact-form'
    );

    revealElements.forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      // Add stagger index within grids if applicable
      const parent = el.parentElement;
      if (parent && (parent.classList.contains('properties-grid') || parent.classList.contains('services-grid') || parent.classList.contains('testimonials-grid'))) {
        const children = Array.from(parent.children);
        const childIdx = children.indexOf(el) + 1;
        if (childIdx <= 6) {
          el.classList.add(`stagger-${childIdx}`);
        }
      }
      observer.observe(el);
    });

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Properties />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
