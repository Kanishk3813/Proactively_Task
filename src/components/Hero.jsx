import React from "react";
import { Search, MapPin, Building2 } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Book an appointment with <br />
            <span className="highlight">lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>

          <div className="search-bar">
            <div className="search-input">
              <Search className="input-icon text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Condition, procedure, specialty..."
              />
            </div>
            <div className="search-divider" />
            <div className="location-input">
              <MapPin className="input-icon text-gray-400" size={20} />
              <input type="text" placeholder="City, state or zipcode" />
            </div>
            <div className="search-divider" />
            <div className="insurance-input">
              <Building2 className="input-icon text-gray-400" size={20} />
              <input type="text" placeholder="Insurance carrier" />
            </div>
            <button className="find-now">
              <Search size={20} />
              <span>Find now</span>
            </button>
          </div>
        </div>

        <div className="hero-images">
          <div className="image-column left">
            <img src="/1.png" alt="Healthy cooking" />
            <img src="/2.png" alt="Yoga practice" />
            <img src="/3.png" alt="Beach exercise" />
            <img src="/4.png" alt="Meditation" />
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
            <img src="/5.png" alt="Doctor consultation" />
            <img src="/6.png" alt="Stretching" />
            <img src="/7.png" alt="Cooking" />
            <img src="/8.png" alt="Cutting" />
          </div>
        </div>
      </section>
      <div className="colored-patch"></div>
      </div>
  );
};

export default Hero;
