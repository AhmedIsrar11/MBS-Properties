import './Properties.css';

const properties = [
  {
    id: 1,
    title: 'Modern Villa in Downtown',
    location: 'Downtown District, City Center',
    price: '$1,250,000',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    type: 'Villa',
    image: 'https://via.placeholder.com/600x400/1a1a1a/c8a55a?text=MBS+Properties',
  },
  {
    id: 2,
    title: 'Luxury Penthouse Suite',
    location: 'Skyline Tower, Financial District',
    price: '$2,800,000',
    beds: 3,
    baths: 2,
    sqft: '2,800',
    type: 'Penthouse',
    image: 'https://via.placeholder.com/600x400/1a1a1a/c8a55a?text=MBS+Properties',
  },
  {
    id: 3,
    title: 'Contemporary Family Home',
    location: 'Green Valley, Suburban Heights',
    price: '$890,000',
    beds: 5,
    baths: 4,
    sqft: '4,100',
    type: 'House',
    image: 'https://via.placeholder.com/600x400/1a1a1a/c8a55a?text=MBS+Properties',
  },
  {
    id: 4,
    title: 'Elegant Studio Apartment',
    location: 'Arts Quarter, Midtown',
    price: '$425,000',
    beds: 1,
    baths: 1,
    sqft: '850',
    type: 'Apartment',
    image: 'https://via.placeholder.com/600x400/1a1a1a/c8a55a?text=MBS+Properties',
  },
  {
    id: 5,
    title: 'Waterfront Mansion',
    location: 'Coastal Drive, Marina Bay',
    price: '$4,500,000',
    beds: 6,
    baths: 5,
    sqft: '6,500',
    type: 'Mansion',
    image: 'https://via.placeholder.com/600x400/1a1a1a/c8a55a?text=MBS+Properties',
  },
  {
    id: 6,
    title: 'Commercial Office Space',
    location: 'Business Park, Tech Hub',
    price: '$1,750,000',
    beds: 0,
    baths: 2,
    sqft: '5,000',
    type: 'Commercial',
    image: 'https://via.placeholder.com/600x400/1a1a1a/c8a55a?text=MBS+Properties',
  },
];

function Properties() {
  return (
    <section id="properties">
      <div className="container">
        <div className="section-title">
          <h2>Featured Properties</h2>
          <div className="accent-line"></div>
          <p>Handpicked premium properties curated by our expert team</p>
        </div>

        <div className="properties-grid">
          {properties.map(property => (
            <div className="property-card" key={property.id}>
              <div className="property-image">
                <img src={property.image} alt={property.title} loading="lazy" />
                <span className="property-type">{property.type}</span>
                <span className="property-price">{property.price}</span>
              </div>
              <div className="property-info">
                <h3>{property.title}</h3>
                <p className="property-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {property.location}
                </p>
                <div className="property-details">
                  {property.beds > 0 && (
                    <span>{property.beds} Beds</span>
                  )}
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Properties;
