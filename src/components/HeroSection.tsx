
import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToQuiz = () => {
    const quizSection = document.getElementById('quiz-section');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-gradient-to-b from-biodelle-offwhite to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="text-heading-1 text-biodelle-text">
            Sua Beleza e Saúde, <span className="text-biodelle-terracotta font-medium">ÚNICAS</span>.
            <br />
            Nossas Fórmulas, <span className="text-biodelle-moss">Também</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-biodelle-text/80 font-inter max-w-xl">
            Descubra dermocosméticos e suplementos criados sob medida para seus objetivos, 
            com a pureza e precisão que você merece.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToQuiz}
              className="biodelle-btn-primary"
            >
              Iniciar Meu Quiz de Personalização
            </button>
            <a 
              href="#about"
              className="biodelle-btn-outline text-center"
            >
              Conheça a Biodelle
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <span className="text-xs uppercase tracking-wider font-medium text-biodelle-text/60 border border-biodelle-text/20 px-3 py-1 rounded-full">
              Qualidade Farmacêutica Comprovada
            </span>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full h-80 md:h-[450px]">
            {/* Here we'd ideally have a proper video or high-quality image */}
            <div className="absolute w-full h-full bg-gradient-to-br from-biodelle-terracotta/20 to-biodelle-moss/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-biodelle-moss/30 text-6xl font-garet font-normal">
                Biodelle
              </div>
            </div>
            {/* SVG overlay design to make the placeholder look more sophisticated */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path 
                  fill="none" 
                  stroke="#AB7E79" 
                  strokeWidth="1" 
                  d="M40,100 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0" 
                />
                <path 
                  fill="none" 
                  stroke="#65684E" 
                  strokeWidth="1" 
                  d="M60,100 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" 
                />
                <path 
                  fill="none" 
                  stroke="#AB7E79" 
                  strokeWidth="1" 
                  d="M80,100 a20,20 0 1,1 40,0 a20,20 0 1,1 -40,0" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
