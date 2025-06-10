
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect para fazer scroll após navegação para home
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === '/') {
      // Se já estivermos na página inicial, fazer scroll direto
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se estivermos em outra página, navegar para home com hash
      navigate(`/#${sectionId}`);
    }
    setIsMobileMenuOpen(false);
  };

  const handlePageClick = () => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  const solutionsItems = [
    { title: 'Anti-Idade Avançado', href: '/anti-idade-avancado' },
    { title: 'Performance Esportiva', href: '/performance-esportiva' },
    { title: 'Bem-Estar Feminino', href: '/bem-estar-feminino' },
    { title: 'Linha Capilar', href: '/linha-capilar' },
    { title: 'Suporte à Imunidade', href: '/suporte-imunidade' },
    { title: 'Linha Kids Especial', href: '/linha-kids' },
  ];

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
          <Link to="/" className="text-3xl font-garet font-bold text-biodelle-moss">
            <span className="text-biodelle-terracotta">B</span>iodelle
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavClick('hero')}
            className="font-inter text-biodelle-text hover:text-biodelle-terracotta transition-colors"
          >
            Início
          </button>
          <button 
            onClick={() => handleNavClick('about')}
            className="font-inter text-biodelle-text hover:text-biodelle-terracotta transition-colors"
          >
            Sobre Nós
          </button>
          
          {/* Dropdown Menu for Nossas Linhas */}
          <DropdownMenu>
            <DropdownMenuTrigger className="font-inter text-biodelle-text hover:text-biodelle-terracotta transition-colors flex items-center">
              Nossas Linhas
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
              <DropdownMenuItem onClick={() => handleNavClick('solutions')} className="hover:bg-biodelle-offwhite">
                Ver Todas as Linhas
              </DropdownMenuItem>
              {solutionsItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link 
                    to={item.href} 
                    className="hover:bg-biodelle-offwhite"
                    onClick={handlePageClick}
                  >
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
            <button 
              onClick={() => handleNavClick('hero')}
              className="font-inter text-biodelle-text py-2 px-4 hover:bg-biodelle-offwhite rounded-md transition-colors text-left"
            >
              Início
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="font-inter text-biodelle-text py-2 px-4 hover:bg-biodelle-offwhite rounded-md transition-colors text-left"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => handleNavClick('solutions')}
              className="font-inter text-biodelle-text py-2 px-4 hover:bg-biodelle-offwhite rounded-md transition-colors text-left"
            >
              Nossas Linhas
            </button>
            {solutionsItems.map((item) => (
              <Link 
                key={item.href}
                to={item.href}
                className="font-inter text-biodelle-text py-2 px-6 hover:bg-biodelle-offwhite rounded-md transition-colors ml-4"
                onClick={handlePageClick}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
