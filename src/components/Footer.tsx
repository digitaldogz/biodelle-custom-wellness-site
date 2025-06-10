
import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const handleNavClick = (sectionId: string) => {
    // Se estivermos na página inicial, fazer scroll para a seção
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se estivermos em outra página, navegar para a home e depois fazer scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-biodelle-moss text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Slogan */}
          <div>
            <a href="#" className="text-3xl font-garet font-bold inline-block mb-4">
              Biodelle
            </a>
            <p className="text-white/80 mb-6">
              Fórmulas personalizadas para sua saúde e beleza.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('hero')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('solutions')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Nossas Linhas
                </button>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/5542998477232" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                  </svg>
                  (42) 99847-7232
                </a>
              </li>
              <li>
                <a href="mailto:contato@biodelle.com" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  contato@biodelle.com
                </a>
              </li>
              <li>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Rua da Biodelle, 123, Cidade
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Legal & Social */}
          <div>
            <h3 className="text-lg font-medium mb-4">Legal & Social</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/politica-privacidade" className="text-white/80 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-uso" className="text-white/80 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li className="text-white/60 text-sm">CNPJ: 00.000.000/0001-00</li>
              <li className="text-white/60 text-sm">Farm. Resp.: CRF 12345</li>
            </ul>
            
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Biodelle. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
