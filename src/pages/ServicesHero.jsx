import React from 'react';
import './ServicePageSection.css';

const services = [
  {
    title: 'Paid Advertising',
    points: [
      'Platform-specific strategies (Meta, TikTok, Google)',
      'Real-time optimization with full funnel view',
      'AI-enhanced budget allocation'
    ]
  },
  {
    title: 'Website & Funnel Creation',
    points: [
      'Conversion-focused Shopify builds',
      'A/B testing and CRO',
      'Speed, UX, and mobile-first design'
    ]
  },
  {
    title: 'Content & Creatives',
    points: [
      'UGC sourcing and editing',
      'Ad scripting and copywriting',
      'Batch production for ad fatigue defense'
    ]
  },
  {
    title: 'Fulfillment & Sourcing',
    points: [
      'Own warehouse and direct Chinese contacts',
      'Faster shipping, better margins',
      'Inventory forecasting and white-label support'
    ]
  },
  {
    title: 'Brand Incubation (Optional Module if You Offer Equity Models)',
    points: [
      'We partner with select founders to co-build and scale'
    ]
  }
];

const ServicePageSection = () => {
  return (
    <section className="service-section">
      <h2 className="service-title">From Zero to Sold Out—Everything You Need to Scale</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-card-title">{service.title}</h3>
            <ul className="service-list">
              {service.points.map((point, i) => (
                <li key={i} className="service-point">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePageSection;