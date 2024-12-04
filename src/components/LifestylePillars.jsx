import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const LifestylePillars = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const pillars = [
    { 
      title: 'Nutrition',
      description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic diseases.',
      icon: '🥗',
      metric: '121/180',
      metricLabel: 'mmHg',
      image: '/hiw3.png',
      iconImage: '/v1.png' 
    },
    {
      title: 'Physical activity',
      description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic diseases.',
      icon: '🏃‍♀️',
      metric: '32',
      metricLabel: 'minutes',
      image: '/hiw2.png',
      iconImage: '/v2.png' 
    },
    {
      title: 'Restorative sleep',
      description: 'Consistent, quality sleep is essential for optimal brain function and physical health.',
      icon: '😴',
      metric: '8',
      metricLabel: 'hours',
      image: '/hiw5.png',
      iconImage: '/v6.png' 
    },
    {
        title: 'Stress management',
        description: 'Effective stress management techniques are crucial for mental well-being and overall health.',
        icon: '😴',
        metric: '60',
        metricLabel: 'bpm',
        image: '/hiw1.png',
        iconImage: '/v4.png' 
    },
    {
        title: 'Social connection',
        description: 'Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.',
        icon: '😴',
        metric: 'Feeling',
        metricLabel: 'better',
        image: '/hiw6.png',
        iconImage: '/v3.png' 
    },
    {
        title: 'Substance abuse',
        description: 'Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.',
        icon: '😴',
        metric: '62',
        metricLabel: 'days',
        image: '/hiw4.png',
        iconImage: '/v5.png' 
    }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % pillars.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + pillars.length) % pillars.length);
  };

  return (
    <section className="lifestyle-pillars">
      <h2>HOW IT WORKS</h2>
      <div className="section-title">
        <h3>
        <span className="highlight2">Lifestyle as medicine:</span> The six pillars
        </h3>
        <div className="navigation">
          <button onClick={handlePrev}><FaArrowLeft /></button>
          <button onClick={handleNext}><FaArrowRight /></button>
        </div>
      </div>

      <div className="pillars-tabs">
        {['Nutrition', 'Physical activity', 'Restorative sleep', 'Stress management', 'Social connection', 'Substance abuse'].map((pillar, index) => (
          <button 
            key={pillar}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => setActiveIndex(index)}
          >
            {pillar}
          </button>
        ))}
      </div>

      <div className="pillars-carousel">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${activeIndex * (100 / 3)}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card">
              <img src={pillar.image} alt={pillar.title} />
              <div className="metric">
                <span className="number">{pillar.metric}</span>
                <span className="label">{pillar.metricLabel}</span>
                <img className="metric-icon" src={pillar.iconImage} alt={`${pillar.title} icon`} />
              </div>
              <h4>{pillar.title}</h4>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestylePillars;