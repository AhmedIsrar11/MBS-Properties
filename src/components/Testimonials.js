import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    text: 'MBS Properties made our dream home a reality. Their team was incredibly professional and attentive to every detail. The entire process was seamless.',
    rating: 5,
  },
  {
    name: 'James Anderson',
    role: 'Property Investor',
    text: 'Outstanding investment advisory services. They helped me identify properties with incredible ROI potential. My portfolio has grown 40% in two years.',
    rating: 5,
  },
  {
    name: 'Amira Hassan',
    role: 'Business Owner',
    text: 'Found the perfect commercial space for our startup. The team understood exactly what we needed and delivered beyond expectations. Highly recommend!',
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Client Testimonials</h2>
          <div className="accent-line"></div>
          <p>Hear from our satisfied clients about their experience with MBS Properties</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="stars">
                {Array.from({ length: t.rating }, (_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
