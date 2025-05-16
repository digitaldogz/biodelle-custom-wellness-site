
import React from 'react';
import { BadgeCheck, Calendar, BarChart3, FileCheck } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-biodelle-offwhite">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-heading-2 text-center mb-4">
          Ciência e Paixão em Cada Detalhe
        </h2>
        <p className="text-subtitle text-center text-biodelle-text/70 max-w-2xl mx-auto mb-12">
          Conheça o rigor científico e a dedicação por trás de cada fórmula Biodelle
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mt-6">
          {/* The Specialists */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-biodelle-beige/10">
            <h3 className="text-2xl font-garet font-normal mb-6 text-biodelle-moss tracking-wide">
              Os Especialistas
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div className="w-full sm:w-1/2">
                <div className="aspect-square bg-gradient-to-br from-biodelle-terracotta/30 to-biodelle-beige/30 rounded-xl mb-4 flex items-center justify-center shadow-sm overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl text-biodelle-terracotta font-garet">F</span>
                  </div>
                </div>
                <h4 className="text-lg font-garet font-normal">Fernanda Silva</h4>
                <p className="text-sm text-biodelle-text/70 mt-1">Farmacêutica CRF 12345</p>
              </div>
              
              <div className="w-full sm:w-1/2">
                <div className="aspect-square bg-gradient-to-br from-biodelle-moss/30 to-biodelle-beige/30 rounded-xl mb-4 flex items-center justify-center shadow-sm overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl text-biodelle-moss font-garet">R</span>
                  </div>
                </div>
                <h4 className="text-lg font-garet font-normal">Roberto Santos</h4>
                <p className="text-sm text-biodelle-text/70 mt-1">Farmacêutico CRF 67890</p>
              </div>
            </div>
            
            <p className="text-biodelle-text/80 font-inter">
              Conheça quem cuida da sua saúde com dedicação e conhecimento técnico. 
              Com mais de 15 anos de experiência em farmácia de manipulação e desenvolvimento 
              de formulações personalizadas, Fernanda e Roberto unem ciência e arte para criar 
              soluções únicas que atendem às suas necessidades específicas.
            </p>
            
            <button className="mt-6 inline-flex items-center gap-2 text-biodelle-terracotta font-medium transition-all hover:translate-x-1 group">
              Saiba mais sobre nós
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          
          {/* The Process */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-biodelle-beige/10">
            <h3 className="text-2xl font-garet font-normal mb-6 text-biodelle-moss tracking-wide">
              Nosso Processo de Manipulação
            </h3>
            
            <div className="space-y-8 relative">
              <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-gradient-to-b from-biodelle-terracotta/30 via-biodelle-moss/30 to-biodelle-beige/30"></div>
              
              <div className="flex gap-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-biodelle-terracotta shadow-sm">
                  <Calendar size={20} className="text-biodelle-terracotta" />
                </div>
                <div>
                  <h4 className="font-garet font-normal text-biodelle-text">Análise Personalizada</h4>
                  <p className="text-sm text-biodelle-text/70 mt-1 font-inter">
                    A partir do seu perfil e objetivos, nossos especialistas avaliam quais 
                    ativos e concentrações são ideais para você.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-biodelle-moss shadow-sm">
                  <BarChart3 size={20} className="text-biodelle-moss" />
                </div>
                <div>
                  <h4 className="font-garet font-normal text-biodelle-text">Seleção de Ativos</h4>
                  <p className="text-sm text-biodelle-text/70 mt-1 font-inter">
                    Utilizamos ingredientes de alta pureza, escolhidos criteriosamente 
                    para garantir eficácia e segurança.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-biodelle-terracotta shadow-sm">
                  <FileCheck size={20} className="text-biodelle-terracotta" />
                </div>
                <div>
                  <h4 className="font-garet font-normal text-biodelle-text">Manipulação Precisa</h4>
                  <p className="text-sm text-biodelle-text/70 mt-1 font-inter">
                    Em ambiente controlado, pesamos e preparamos sua fórmula com equipamentos 
                    de alta tecnologia e precisão farmacêutica.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-biodelle-beige shadow-sm">
                  <BadgeCheck size={20} className="text-biodelle-beige" />
                </div>
                <div>
                  <h4 className="font-garet font-normal text-biodelle-text">Controle de Qualidade</h4>
                  <p className="text-sm text-biodelle-text/70 mt-1 font-inter">
                    Cada produto passa por rigorosas verificações para garantir sua 
                    integridade, pureza e conformidade.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 border border-biodelle-moss/30 rounded-full px-4 py-2 text-xs bg-white">
                <BadgeCheck size={14} className="text-biodelle-moss" />
                ANVISA
              </div>
              <div className="flex items-center gap-2 border border-biodelle-moss/30 rounded-full px-4 py-2 text-xs bg-white">
                <BadgeCheck size={14} className="text-biodelle-moss" />
                Boas Práticas de Manipulação
              </div>
              <div className="flex items-center gap-2 border border-biodelle-moss/30 rounded-full px-4 py-2 text-xs bg-white">
                <BadgeCheck size={14} className="text-biodelle-moss" />
                ISO 9001
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
