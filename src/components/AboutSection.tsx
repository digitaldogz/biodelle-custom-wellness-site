
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-biodelle-offwhite">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-heading-2 text-center mb-4">
          Ciência e Paixão em Cada Detalhe
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* The Specialists */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-garet font-normal mb-6 text-biodelle-moss tracking-wide">
              Os Especialistas
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="w-full sm:w-1/2">
                <div className="aspect-square bg-biodelle-beige/50 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-5xl text-biodelle-terracotta/30 font-garet">F</span>
                </div>
                <h4 className="text-lg font-garet font-normal">Fernanda Silva</h4>
                <p className="text-sm text-biodelle-text/70">Farmacêutica CRF 12345</p>
              </div>
              
              <div className="w-full sm:w-1/2">
                <div className="aspect-square bg-biodelle-beige/50 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-5xl text-biodelle-moss/30 font-garet">R</span>
                </div>
                <h4 className="text-lg font-garet font-normal">Roberto Santos</h4>
                <p className="text-sm text-biodelle-text/70">Farmacêutico CRF 67890</p>
              </div>
            </div>
            
            <p className="text-biodelle-text/80">
              Conheça quem cuida da sua saúde com dedicação e conhecimento técnico. 
              Com mais de 15 anos de experiência em farmácia de manipulação e desenvolvimento 
              de formulações personalizadas, Fernanda e Roberto unem ciência e arte para criar 
              soluções únicas que atendem às suas necessidades específicas.
            </p>
            
            <a href="#" className="mt-4 inline-block text-biodelle-terracotta font-medium transition-all hover:underline">
              Saiba mais sobre nós →
            </a>
          </div>
          
          {/* The Process */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-garet font-normal mb-6 text-biodelle-moss tracking-wide">
              Nosso Processo de Manipulação
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium text-biodelle-terracotta">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Análise Personalizada</h4>
                  <p className="text-sm text-biodelle-text/70">
                    A partir do seu perfil e objetivos, nossos especialistas avaliam quais 
                    ativos e concentrações são ideais para você.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium text-biodelle-terracotta">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Seleção de Ativos</h4>
                  <p className="text-sm text-biodelle-text/70">
                    Utilizamos ingredientes de alta pureza, escolhidos criteriosamente 
                    para garantir eficácia e segurança.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium text-biodelle-terracotta">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Manipulação Precisa</h4>
                  <p className="text-sm text-biodelle-text/70">
                    Em ambiente controlado, pesamos e preparamos sua fórmula com equipamentos 
                    de alta tecnologia e precisão farmacêutica.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium text-biodelle-terracotta">4</span>
                </div>
                <div>
                  <h4 className="font-medium">Controle de Qualidade</h4>
                  <p className="text-sm text-biodelle-text/70">
                    Cada produto passa por rigorosas verificações para garantir sua 
                    integridade, pureza e conformidade.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="border border-biodelle-moss/30 rounded-full px-4 py-1 text-xs">
                ANVISA
              </div>
              <div className="border border-biodelle-moss/30 rounded-full px-4 py-1 text-xs">
                Boas Práticas de Manipulação
              </div>
              <div className="border border-biodelle-moss/30 rounded-full px-4 py-1 text-xs">
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
