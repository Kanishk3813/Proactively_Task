import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Book an appointment with <span className="highlight">lifestyle medicine</span> experts</h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
        
        <div className="search-bar">
          <div className="search-input">
            <input 
              type="text" 
              placeholder="Condition, procedure, specialty..." 
            />
          </div>
          <div className="location-input">
            <input 
              type="text" 
              placeholder="City, state or zipcode" 
            />
          </div>
          <div className="insurance-input">
            <input 
              type="text" 
              placeholder="Insurance carrier" 
            />
          </div>
          <button className="find-now">Find now</button>
        </div>
      </div>
      
      <div className="hero-images">
  <div className="image-column left">
    <img src="/1.png" alt="Healthy cooking" />
    <img src="/2.png" alt="Yoga practice" />
    <img src="/3.png" alt="Beach exercise" />
    <img src="/4.png" alt="Meditation" />
    {/* Duplicate images for seamless scrolling */}
    <img src="/1.png" alt="Healthy cooking" />
    <img src="/2.png" alt="Yoga practice" />
    <img src="/3.png" alt="Beach exercise" />
    <img src="/4.png" alt="Meditation" />
  </div>
  <div className="image-column right">
    <img src="/5.png" alt="Doctor consultation" />
    <img src="/6.png" alt="Stretching" />
    <img src="/7.png" alt="Cooking" />
    <img src="/8.png" alt="Cutting" />
    {/* Duplicate images for seamless scrolling */}
    <img src="/5.png" alt="Doctor consultation" />
    <img src="/6.png" alt="Stretching" />
    <img src="/7.png" alt="Cooking" />
    <img src="/8.png" alt="Cutting" />
  </div>
</div>

    </section>
  );
};

export default Hero;