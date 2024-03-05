import React, { useState, useEffect } from 'react';
import '../navbar.css';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="nav-item">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">How To</a>
      </div>
      {/* Add more navigation items as needed */}
    </div>
  );
}

export default Navbar;
