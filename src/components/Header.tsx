
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuiz = () => {
    const quizSection = document.getElementById('quiz-section');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-3xl font-garet font-bold text-biodelle-moss">
            <span className="text-biodelle-terracotta">B</span>iodelle
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-inter text-biodelle-text hover:text-biodelle-terracotta transition-colors">
            Início
          </a>
          <a href="#about" className="font-inter text-biodelle-text hover:text-biodelle-terracotta transition-colors">
            Sobre Nós
          </a>
          <a href="#solutions" className="font-inter text-biodelle-text hover:text-biodelle-terracotta transition-colors">
            Nossas Linhas
          </a>
          <a href="#blog" className="font-inter text-biodelle-text hover:text-biodelle-terracotta transition-colors">
            Blog
          </a>
          <button 
            onClick={scrollToQuiz}
            className="biodelle-btn-primary"
          >
            Iniciar Quiz
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-biodelle-moss" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18"></path>
              <path d="M6 6L18 18"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="font-inter text-biodelle-text py-2 px-4 hover:bg-biodelle-offwhite rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Início
            </a>
            <a 
              href="#about" 
              className="font-inter text-biodelle-text py-2 px-4 hover:bg-biodelle-offwhite rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a 
              href="#solutions" 
              className="font-inter text-biodelle-text py-2 px-4 hover:bg-biodelle-offwhite rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nossas Linhas
            </a>
            <a 
              href="#blog" 
              className="font-inter text-biodelle-text py-2 px-4 hover:bg-biodelle-offwhite rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <button 
              onClick={scrollToQuiz}
              className="biodelle-btn-primary w-full"
            >
              Iniciar Quiz
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
