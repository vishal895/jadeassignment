import { useState } from 'react';  // Import React's useState hook
import logo from '../assets/logo.png';
import brand from '../assets/assetz.webp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the menu toggle

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#5f291e]">
      <nav className="flex justify-between items-center py-[10px] max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <img src={logo} className="w-[130px]" alt="Logo" />

        {/* Desktop Menu (Always visible) */}
        <ul className="hidden lg:flex gap-5 font-semibold text-white">
          <li><a className="hover:text-[#afe5ff]" href="#">Overview</a></li>
          <li><a className="hover:text-[#afe5ff]" href="#">Configuration</a></li>
          <li><a className="hover:text-[#afe5ff]" href="#">Amenities</a></li>
          <li><a className="hover:text-[#afe5ff]" href="#">Gallery</a></li>
          <li><a className="hover:text-[#afe5ff]" href="#">Location</a></li>
          <li><a className="hover:text-[#afe5ff]" href="#">About Us</a></li>
          <li><a className="hover:text-[#afe5ff]" href="#">Enquire Now</a></li>
        </ul>

        {/* Hamburger Button (Visible on smaller screens) */}
        <button 
          className="lg:hidden text-white"
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>

        {/* Brand Image */}
        <img src={brand} className="w-[100px] text-white" alt="Brand" />
      </nav>

      {/* Mobile Menu (Toggled visibility based on state) */}
      <div 
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#5f291e] text-white px-4 py-3`}
      >
        <ul className="space-y-3">
          <li><a className="hover:text-[#afe5ff]" href="#">Overview</a></li>
          <li><a className="hover:text-[#afe5ff]" href="#">Configuration</a></li>
          <li><a className="hover:text-[#afe5ff]" href="#">Amenities</a></li>
          <li><a className="hover:text-[#afe5ff]" href="#">Gallery</a></li>
          <li><a className="hover:text-[#afe5ff]" href="#">Location</a></li>
          <li><a className="hover:text-[#afe5ff]" href="#">About Us</a></li>
          <li><a className="hover:text-[#afe5ff]" href="#">Enquire Now</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
