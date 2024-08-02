import { useState } from 'react';
import './App.css';
import React from 'react';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="main">
      <div className="dropdown-container">
        <div className="dropdown-title-container" onClick={toggleDropdown}>
          <span className="dropdown-title">Why park a domain name in Parkname?</span>
          <div className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`} />
        </div>
        {isDropdownOpen && (
          <div className="dropdown-content">
            Domain parking refers to the practice of registering a domain name but not using it for a website. Instead, the domain is held for potential future use or to generate revenue through advertising.
          </div>
        )}
      </div>

    </div>
    
  );
}

export default App;
