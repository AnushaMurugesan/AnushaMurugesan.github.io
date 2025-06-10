
import React from 'react';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-cosmic cosmic-gradient bg-clip-text text-transparent">
          ∑
        </div>
        <div className="flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-foreground hover:text-cosmic-purple transition-colors cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-foreground hover:text-cosmic-purple transition-colors cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('lab')} 
            className="text-foreground hover:text-cosmic-purple transition-colors cursor-pointer"
          >
            Lab
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
