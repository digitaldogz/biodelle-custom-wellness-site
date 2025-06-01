import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type Solution = {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
};

const solutions: Solution[] = [
  {
    id: "anti-aging",
    image: "gradient-1",
    title: "Anti-Idade Avançado",
    description: "Fórmulas com peptídeos, antioxidantes e ativos rejuvenescedores para uma pele firme e luminosa.",
    link: "/anti-idade-avancado"
  },
  {
    id: "sports",
    image: "gradient-2",
    title: "Performance Esportiva Otimizada",
    description: "Suplementos para aumento de energia, recuperação muscular e foco, adaptados à sua rotina de treinos.",
    link: "/performance-esportiva"
  },
  {
    id: "women-wellness",
    image: "gradient-3",
    title: "Bem-Estar Feminino",
    description: "Fórmulas balanceadas para suporte durante a menopausa, TPM e equilíbrio hormonal.",
    link: "/bem-estar-feminino"
  },
  {
    id: "hair-care",
    image: "gradient-4",
    title: "Linha Capilar Personalizada",
    description: "Tratamentos específicos para queda, crescimento, densidade e brilho dos cabelos.",
    link: "/linha-capilar"
  },
  {
    id: "immunity",
    image: "gradient-5",
    title: "Suporte à Imunidade",
    description: "Combinações exclusivas de vitaminas, minerais e fitoquímicos para fortalecer suas defesas naturais.",
    link: "/suporte-imunidade"
  },
  {
    id: "kids",
    image: "gradient-6",
    title: "Linha Kids Especial",
    description: "Suplementos e cuidados adaptados às necessidades das crianças em crescimento.",
    link: "/linha-kids"
  }
];

const SolutionsSection: React.FC = () => {
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const getGradientStyle = (imageId: string) => {
    switch (imageId) {
      case 'gradient-1':
        return 'from-biodelle-terracotta/40 to-biodelle-moss/30';
      case 'gradient-2':
        return 'from-biodelle-moss/40 to-biodelle-beige/50';
      case 'gradient-3':
        return 'from-biodelle-beige/50 to-biodelle-terracotta/40';
      case 'gradient-4':
        return 'from-biodelle-moss/30 to-biodelle-terracotta/30';
      case 'gradient-5':
        return 'from-biodelle-terracotta/30 to-biodelle-beige/50';
      case 'gradient-6':
        return 'from-biodelle-beige/40 to-biodelle-moss/30';
      default:
        return 'from-biodelle-terracotta/30 to-biodelle-moss/30';
    }
  };

  const scrollToNext = () => {
    if (carouselRef.current) {
      const slideWidth = 320;
      carouselRef.current.scrollLeft += slideWidth + 16;
    }
  };

  const scrollToPrev = () => {
    if (carouselRef.current) {
      const slideWidth = 320;
      carouselRef.current.scrollLeft -= slideWidth + 16;
    }
  };

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-garet font-bold text-center mb-4">
          Soluções Personalizadas para Cada Necessidade
        </h2>
        <p className="text-center text-biodelle-text/70 max-w-2xl mx-auto mb-12">
          Conheça algumas das linhas de produtos que podemos personalizar especialmente para você.
        </p>
        
        <div className="relative">
          {/* Navigation arrows */}
          <button 
            onClick={scrollToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full p-2 -ml-4 transition-all"
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"></path>
            </svg>
          </button>
          
          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ scrollBehavior: 'smooth' }}
          >
            {solutions.map((solution) => (
              <div 
                key={solution.id}
                className="min-w-[300px] w-[300px] md:min-w-[320px] md:w-[320px] snap-start flex-shrink-0 mx-2"
              >
                <div className="rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className={cn("h-40 bg-gradient-to-br", getGradientStyle(solution.image))}>
                    <div className="h-full flex items-center justify-center">
                      <span className="font-garet text-white/30 text-xl">{solution.title}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-inter font-medium mb-3 text-biodelle-text">{solution.title}</h3>
                    <p className="text-biodelle-text/70 mb-4 flex-grow">{solution.description}</p>
                    <Link 
                      to={solution.link}
                      className="biodelle-btn-outline text-center mt-auto"
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={scrollToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full p-2 -mr-4 transition-all"
            aria-label="Próximo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
