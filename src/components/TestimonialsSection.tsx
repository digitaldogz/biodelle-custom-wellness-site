
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Star, X } from 'lucide-react';

type Testimonial = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  productImage?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "angela",
    name: "Angela Badluk",
    rating: 5,
    comment: "Gostaria de parabenizar Farmácia Biodelle pelo excelente atendimento e profissionalismo! A equipe é atenciosa, conta com estacionamento próprio e o ambiente é super agradável! Recomendo a todos que estão buscando a manipulação de medicamentos a valores acessíveis, com segurança e eficiência!",
    productImage: "/lovable-uploads/16da13d4-37d6-45fd-bfe7-b1923b01c67a.png"
  },
  {
    id: "natalia",
    name: "Natalia Filakoski",
    rating: 5,
    comment: "Farmácia com o atendimento impecável, agilidade na entrega e fórmulas de altíssima qualidade! Parabéns pelo profissionalismo em cada detalhe! Recomendo!"
  },
  {
    id: "camila",
    name: "Camila Dambroski",
    rating: 5,
    comment: "Excelente atendimento, profissionais atenciosos e de confiança. Recebi meus medicamentos manipulados com qualidade, dentro do prazo e com todas as orientações necessárias."
  },
  {
    id: "vanessa",
    name: "Vanessa Martins",
    rating: 5,
    comment: "Farmácia com ótimo atendimento, matéria prima de ótima procedência, profissionais com alto nível técnico na manipulação e conhecimento super índico meus manipulados sempre ficam personalizados e perfeitos!",
    productImage: "/lovable-uploads/aa6b425d-04a2-465c-a348-7025df556be2.png"
  },
  {
    id: "leandra",
    name: "Leandra Pavlak",
    rating: 5,
    comment: "Produtos de altíssima qualidade e atendimento excelente! Suuuper recomendo!"
  },
  {
    id: "miriam",
    name: "Miriam Minervini",
    rating: 5,
    comment: "Manipulações excelentes, manipulado em tempo ideal!!!"
  }
];

const TestimonialsSection: React.FC = () => {
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
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

  const openLightbox = (image: string) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={cn(
          "w-4 h-4",
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        )}
      />
    ));
  };

  return (
    <>
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-garet font-bold text-center mb-4 text-biodelle-text">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-center text-biodelle-text/70 max-w-2xl mx-auto mb-12">
            Depoimentos reais de quem já transformou sua saúde e bem-estar com nossas soluções personalizadas.
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
                  className="min-w-[300px] w-[300px] md:min-w-[320px] md:w-[320px] snap-start flex-shrink-0 mx-2"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-6">
                    {/* Header with stars and name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        {testimonial.productImage && (
                          <div 
                            className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => openLightbox(testimonial.productImage!)}
                          >
                            <img 
                              src={testimonial.productImage} 
                              alt={`Produto avaliado por ${testimonial.name}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <div className="flex gap-1 mb-1">
                            {renderStars(testimonial.rating)}
                          </div>
                          <p className="font-medium text-biodelle-text">{testimonial.name}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Comment */}
                    <p className="text-biodelle-text/80 flex-grow leading-relaxed">
                      "{testimonial.comment}"
                    </p>
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

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Fechar"
            >
              <X size={32} />
            </button>
            <img
              src={lightboxImage}
              alt="Avaliação do produto"
              className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsSection;
