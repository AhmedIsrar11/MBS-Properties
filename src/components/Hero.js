import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title animate-slide-up">
          Discover Your<br />
          <span className="gold">Dream</span> Property
        </h1>
        <p className="hero-desc animate-slide-up-delay-1">
          Find your ideal home or the perfect commercial space with our expert guidance.
        </p>
        <div className="hero-categories animate-fade-in">
          RESIDENTIAL &middot; COMMERCIAL &middot; INVESTMENT
        </div>
        <div className="hero-buttons">
          <a href="#properties" className="btn-primary animate-slide-up-delay-2">EXPLORE PROPERTIES &rarr;</a>
          <a href="#contact" className="btn-outline animate-slide-up-delay-3">CONTACT US</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
