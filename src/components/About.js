import './About.css';

function About() {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-image">
          <div className="about-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=700&fit=crop"
              alt="Modern building"
              loading="lazy"
            />
          </div>
          <div className="experience-badge">
            <span className="exp-number">12+</span>
            <span className="exp-text">Years of Excellence</span>
          </div>
        </div>

        <div className="about-content">
          <p className="about-subtitle">About Awan Marketing Noushera</p>
          <h2>Building Trust Through Premium Real Estate</h2>
          <p className="about-desc">
            Awan Marketing Noushera has been a trusted name in premium real estate for over a decade.
            We combine market expertise with personalized service to deliver exceptional
            results for buyers, sellers, and investors alike.
          </p>
          <p className="about-desc">
            Our team of seasoned professionals understands that every property transaction
            is a significant milestone. We're committed to making each experience seamless,
            transparent, and rewarding.
          </p>

          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div>
                <h4>Trusted Agency</h4>
                <p>Licensed and certified professionals</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <h4>Expert Team</h4>
                <p>50+ dedicated real estate agents</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <div>
                <h4>Wide Coverage</h4>
                <p>Operating across 15+ city districts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
