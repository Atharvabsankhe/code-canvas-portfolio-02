
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">Portfolio</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/#home" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
          <Link to="/#skills" className="text-gray-700 hover:text-primary transition-colors">Skills</Link>
          <Link to="/#projects" className="text-gray-700 hover:text-primary transition-colors">Projects</Link>
          <Link to="/#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              <Link to="/#home" className="text-gray-700 hover:text-primary transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/#skills" className="text-gray-700 hover:text-primary transition-colors" onClick={toggleMenu}>Skills</Link>
              <Link to="/#projects" className="text-gray-700 hover:text-primary transition-colors" onClick={toggleMenu}>Projects</Link>
              <Link to="/#contact" className="text-gray-700 hover:text-primary transition-colors" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
