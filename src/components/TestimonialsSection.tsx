
import React, { useState, useRef } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type Testimonial = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  productImage?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "vanessa",
    name: "Vanessa Martins",
    rating: 5,
    comment: "Adorei o resultado do meu sérum! Minha pele ficou muito mais hidratada e com aspecto saudável. A equipe da Biodelle é super atenciosa e me ajudou a escolher os ativos ideais para o meu tipo de pele. Recomendo muito!",
    productImage: "/lovable-uploads/vanessa-martins-foto-avaliacao.webp"
  },
  {
    id: "angela",
    name: "Angela Badluk",
    rating: 5,
    comment: "Excelente atendimento e produtos de qualidade! Fiz uma fórmula personalizada para cabelos e o resultado superou minhas expectativas. Meu cabelo está mais forte e brilhante. Obrigada Biodelle!",
    productImage: "/lovable-uploads/angela-badluk-foto-avaliacao.webp"
  },
  {
    id: "maria",
    name: "Maria Silva",
    rating: 5,
    comment: "Estou impressionada com a qualidade dos produtos da Biodelle! A manipulação é feita com muito cuidado e os resultados são visíveis. Minha pele nunca esteve tão bem cuidada."
  },
  {
    id: "ana",
    name: "Ana Costa",
    rating: 5,
    comment: "Profissionais extremamente competentes! Me orientaram perfeitamente sobre os melhores ativos para minha necessidade. O produto chegou rapidamente e já estou vendo os primeiros resultados."
  },
  {
    id: "carlos",
    name: "Carlos Roberto",
    rating: 5,
    comment: "Atendimento excepcional! A equipe é muito atenciosa e conhece muito bem os produtos. Fiz uma fórmula específica para performance esportiva e estou muito satisfeito com os resultados."
  },
  {
    id: "patricia",
    name: "Patrícia Oliveira",
    rating: 5,
    comment: "Produtos de excelente qualidade! A Biodelle conseguiu criar uma fórmula perfeita para minhas necessidades específicas. O atendimento é personalizado e muito profissional. Super recomendo!"
  }
];

const TestimonialsSection: React.FC = () => {
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

  const scrollToNext = () => {
    if (carouselRef.current) {
      const slideWidth = 350;
      carouselRef.current.scrollLeft += slideWidth + 16;
    }
  };

  const scrollToPrev = () => {
    if (carouselRef.current) {
      const slideWidth = 350;
      carouselRef.current.scrollLeft -= slideWidth + 16;
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={cn(
              "w-5 h-5",
              index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            )}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="section-padding bg-biodelle-offwhite">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-garet font-bold text-center mb-4">
          O que nossos clientes dizem
        </h2>
        <p className="text-center text-biodelle-text/70 max-w-2xl mx-auto mb-12">
          Depoimentos reais de pessoas que transformaram sua saúde e beleza com nossas fórmulas personalizadas.
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
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="min-w-[330px] w-[330px] md:min-w-[350px] md:w-[350px] snap-start flex-shrink-0 mx-2"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-6">
                  {renderStars(testimonial.rating)}
                  
                  <blockquote className="text-biodelle-text/80 mb-4 flex-grow italic">
                    "{testimonial.comment}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-inter font-medium text-biodelle-text">
                        {testimonial.name}
                      </p>
                    </div>
                    
                    {testimonial.productImage && (
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img 
                          src={testimonial.productImage} 
                          alt="Produto avaliado"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
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

export default TestimonialsSection;
