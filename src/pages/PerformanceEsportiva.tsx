import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TestimonialsSection from "@/components/TestimonialsSection";

const PerformanceEsportiva = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-gradient-to-b from-biodelle-offwhite to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-heading-1 text-biodelle-text mb-6">
            Sua <span className="text-biodelle-terracotta">Performance</span> Não Tem Limites.
            <br />
            Nossos <span className="text-biodelle-moss">Suplementos</span> Também Não.
          </h1>
          <p className="text-lg md:text-xl text-biodelle-text/80 font-inter max-w-3xl mx-auto mb-8">
            Suplementos personalizados para atletas e praticantes de atividade física que buscam 
            máxima performance, recuperação otimizada e resultados sustentáveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber="5511999999999" 
              message="Olá! Quero saber mais sobre os suplementos para Performance Esportiva da Biodelle."
            />
          </div>
        </div>
      </section>

      {/* Identificação */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Você Se Identifica?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Sente que seu rendimento estagnou, mesmo treinando intensamente?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Sua recuperação entre treinos está cada vez mais lenta?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Falta energia e foco durante os exercícios?</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Já testou vários suplementos mas não vê os resultados esperados?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Gostaria de uma abordagem científica e personalizada?</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-biodelle-moss font-medium">
              Seu corpo é único. Sua suplementação também deveria ser.
            </p>
          </div>
        </div>
      </section>

      {/* A Virada */}
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            A Ciência Por Trás da Performance
          </h2>
          <div className="prose prose-lg max-w-none text-biodelle-text">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-medium text-biodelle-terracotta mb-4">Por que a suplementação genérica falha:</h3>
              <ul className="space-y-3">
                <li>• Cada metabolismo processa nutrientes de forma diferente</li>
                <li>• Deficiências individuais variam drasticamente</li>
                <li>• Timing e dosagem inadequados comprometem a absorção</li>
                <li>• Necessidades mudam conforme intensidade e modalidade</li>
              </ul>
            </div>
            <p className="text-center text-lg">
              <span className="font-medium text-biodelle-moss">Nossa abordagem:</span> 
              Analisamos seu perfil metabólico, tipo de treino e objetivos para criar 
              a fórmula perfeita para você.
            </p>
          </div>
        </div>
      </section>

      {/* Solução Biodelle */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Performance Personalizada
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-medium mb-3">Energia</h3>
              <p className="text-biodelle-text/70 text-sm">
                Pré-treinos personalizados com cafeína, beta-alanina e citrulina
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💪</span>
              </div>
              <h3 className="text-lg font-medium mb-3">Força</h3>
              <p className="text-biodelle-text/70 text-sm">
                Creatina, HMB e aminoácidos para ganho de massa e força
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔄</span>
              </div>
              <h3 className="text-lg font-medium mb-3">Recuperação</h3>
              <p className="text-biodelle-text/70 text-sm">
                Glutamina, BCAA e antioxidantes para recuperação otimizada
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-medium mb-3">Foco</h3>
              <p className="text-biodelle-text/70 text-sm">
                Nootrópicos naturais para concentração e conexão mente-músculo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Resultados Comprovados
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-biodelle-text/80 mb-4 italic">
                "Quebrei meu recorde pessoal no supino após 6 semanas. A diferença na energia 
                e recuperação é impressionante."
              </p>
              <p className="font-medium text-biodelle-terracotta">— Carlos M., CrossFit</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-biodelle-text/80 mb-4 italic">
                "Como triatleta, preciso de muita consistência. Com a Biodelle, meus treinos 
                ficaram mais intensos e a recuperação muito mais rápida."
              </p>
              <p className="font-medium text-biodelle-terracotta">— Marina L., Triatleta</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-2 mb-6 text-biodelle-moss">
            Pronto Para Elevar Sua Performance?
          </h2>
          <p className="text-lg text-biodelle-text/80 mb-8">
            Descubra como a suplementação personalizada pode transformar 
            seus resultados esportivos.
          </p>
          <WhatsAppButton 
            phoneNumber="5511999999999" 
            message="Quero descobrir minha fórmula personalizada para Performance Esportiva!"
          />
        </div>
      </section>

      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default PerformanceEsportiva;
