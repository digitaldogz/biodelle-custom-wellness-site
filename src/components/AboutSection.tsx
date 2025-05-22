
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutSection: React.FC = () => {
  // Em WordPress, essas URLs seriam campos ACF para imagens
  const fernandaImage = '/lovable-uploads/6dfd343b-b9e1-49f7-b5fb-82f19bd4f46d.png';
  
  return (
    <section id="about" className="section-padding bg-biodelle-offwhite">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-garet font-bold text-center mb-4">
          Ciência e Paixão em Cada Detalhe
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* The Specialists */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-garet font-medium mb-6 text-biodelle-moss">
              Os Especialistas
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="w-full sm:w-1/2">
                {/* Imagem editável de Fernanda Silva */}
                <div className="aspect-square bg-biodelle-beige/50 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <Avatar className="w-full h-full rounded-lg">
                    <AvatarImage
                      src={fernandaImage}
                      alt="Fernanda Silva"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-5xl text-biodelle-terracotta/30 font-garet">
                      F
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h4 className="text-lg font-medium">Fernanda Silva</h4>
                <p className="text-sm text-biodelle-text/70">Farmacêutica CRF 12345</p>
              </div>
              
              <div className="w-full sm:w-1/2">
                {/* Imagem editável de Roberto Santos */}
                <div className="aspect-square bg-biodelle-beige/50 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <Avatar className="w-full h-full rounded-lg">
                    <AvatarImage
                      src={fernandaImage} {/* Usando a mesma imagem temporariamente, no WordPress seria um campo diferente */}
                      alt="Roberto Santos"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-5xl text-biodelle-moss/30 font-garet">
                      R
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h4 className="text-lg font-medium">Roberto Santos</h4>
                <p className="text-sm text-biodelle-text/70">Farmacêutico CRF 67890</p>
              </div>
            </div>
            
            <p className="text-biodelle-text/80">
              Conheça quem cuida da sua saúde com dedicação e conhecimento técnico. 
              Com mais de 15 anos de experiência em farmácia de manipulação e desenvolvimento 
              de formulações personalizadas, Fernanda e Roberto unem ciência e arte para criar 
              soluções únicas que atendem às suas necessidades específicas.
            </p>
          </div>
          
          {/* The Process */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-garet font-medium mb-6 text-biodelle-moss">
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
