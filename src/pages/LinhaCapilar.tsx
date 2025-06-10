import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TestimonialsSection from "@/components/TestimonialsSection";

const LinhaCapilar = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-gradient-to-b from-biodelle-offwhite to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-heading-1 text-biodelle-text mb-6">
            A <span className="text-biodelle-terracotta">Ciência</span> da Saúde Capilar
            <br />
            Sob Medida Para <span className="text-biodelle-moss">Você</span>
          </h1>
          <p className="text-lg md:text-xl text-biodelle-text/80 font-inter max-w-3xl mx-auto mb-8">
            Fórmulas personalizadas que respeitam seu corpo, sua biologia e sua história. 
            Diagnóstico individual + solução exclusiva com ativos de alta performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber="5511999999999" 
              message="Olá! Gostaria de descobrir minha fórmula personalizada para saúde capilar."
            />
          </div>
        </div>
      </section>

      {/* Identificação */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Essa Sou Eu
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Você sente que seu cabelo está cada vez mais ralo, frágil e sem vida?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Já testou suplementos, xampus, tratamentos... e nada trouxe resultado duradouro?</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Tem notado queda acentuada, afinamento dos fios ou falhas no couro cabeludo?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Sente que está perdendo a identidade ao se olhar no espelho?</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-biodelle-moss font-medium">
              Se identificou? Você não está sozinha. E a culpa não é sua.
            </p>
          </div>
        </div>
      </section>

      {/* A Virada */}
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Por Que Isso Está Acontecendo
          </h2>
          <div className="prose prose-lg max-w-none text-biodelle-text">
            <p className="text-center mb-8">
              O ciclo de vida dos fios é profundamente afetado por oscilações hormonais, 
              estresse crônico, carências nutricionais e predisposições genéticas.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-medium text-biodelle-terracotta mb-4">Dados científicos:</h3>
              <ul className="space-y-3">
                <li>• Após os 30 anos, mais de 50% das mulheres notarão algum grau de afinamento capilar</li>
                <li>• Esse número chega a 65% após a menopausa</li>
                <li>• Na maioria dos casos, a queda está associada a múltiplos fatores internos</li>
                <li>• Tratamentos genéricos dificilmente funcionam por não considerar a individualidade</li>
              </ul>
            </div>
            <p className="text-center text-lg">
              <span className="font-medium text-biodelle-moss">A verdade:</span> 
              Seu corpo está pedindo algo diferente. Algo verdadeiramente seu.
            </p>
          </div>
        </div>
      </section>

      {/* Solução Biodelle */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Sua Fórmula é Única. Seus Resultados Também.
          </h2>
          <p className="text-center text-lg mb-8 text-biodelle-text/80">
            Na Biodelle, não entregamos fórmulas prontas. Desenvolvemos soluções específicas, 
            baseadas em uma investigação profunda da sua saúde capilar, metabólica e hormonal.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-biodelle-offwhite p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-biodelle-terracotta">Diagnóstico Personalizado</h3>
              <ul className="space-y-2 text-biodelle-text/80">
                <li>• Avaliação completa do histórico capilar</li>
                <li>• Análise de deficiências nutricionais</li>
                <li>• Investigação hormonal e metabólica</li>
                <li>• Identificação de fatores genéticos</li>
              </ul>
            </div>
            <div className="bg-biodelle-offwhite p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-biodelle-terracotta">Fórmulas Exclusivas</h3>
              <ul className="space-y-2 text-biodelle-text/80">
                <li>• Biotina e complexo B biodisponíveis</li>
                <li>• Silício orgânico e MSM</li>
                <li>• Peptídeos específicos para cabelo</li>
                <li>• Antioxidantes e anti-inflamatórios</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Transformações Reais
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-biodelle-text/80 mb-4 italic">
                "Eu já tinha aceitado que meu cabelo nunca mais seria o mesmo... 
                até conhecer a Dra. Fernanda. Em 2 meses, os resultados me surpreenderam."
              </p>
              <p className="font-medium text-biodelle-terracotta">— Luciana, 47 anos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-biodelle-text/80 mb-4 italic">
                "Tive queda intensa após a menopausa. Hoje, meus fios estão mais 
                encorpados e com brilho natural."
              </p>
              <p className="font-medium text-biodelle-terracotta">— Renata, 52 anos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-biodelle-text/80 mb-4 italic">
                "Não é milagre, é ciência personalizada. Voltei a me sentir 
                confiante ao prender o cabelo."
              </p>
              <p className="font-medium text-biodelle-terracotta">— Camila, 38 anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como você vai se sentir */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-2 mb-8 text-biodelle-moss">
            Como Você Vai Se Sentir Daqui 60 Dias?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✨</span>
                <p className="text-biodelle-text">Fios mais densos, com volume natural</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💎</span>
                <p className="text-biodelle-text">Brilho que reflete saúde e vitalidade</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💪</span>
                <p className="text-biodelle-text">Menos queda, mais força</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🪞</span>
                <p className="text-biodelle-text">Segurança ao se olhar no espelho — e gostar do que vê</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-2 mb-6 text-biodelle-moss">
            Sua Transformação Começa Com Um Diagnóstico Personalizado
          </h2>
          <p className="text-lg text-biodelle-text/80 mb-8">
            Fale com a Dra. Fernanda e descubra qual fórmula sua saúde capilar está pedindo.
          </p>
          <WhatsAppButton 
            phoneNumber="5511999999999" 
            message="Quero minha solução personalizada para saúde capilar com a Dra. Fernanda!"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            <div className="bg-biodelle-offwhite p-6 rounded-lg">
              <h3 className="font-medium text-biodelle-terracotta mb-2">
                É seguro para quem tem alterações hormonais ou usa medicação?
              </h3>
              <p className="text-biodelle-text/80">
                Sim. A personalização considera seu histórico médico e exames, 
                evitando interações e priorizando sua segurança.
              </p>
            </div>
            <div className="bg-biodelle-offwhite p-6 rounded-lg">
              <h3 className="font-medium text-biodelle-terracotta mb-2">
                Em quanto tempo verei resultados?
              </h3>
              <p className="text-biodelle-text/80">
                Cada organismo responde de forma única, mas é comum notar 
                melhorias em até 4-8 semanas.
              </p>
            </div>
            <div className="bg-biodelle-offwhite p-6 rounded-lg">
              <h3 className="font-medium text-biodelle-terracotta mb-2">
                O que diferencia a Biodelle de outros tratamentos?
              </h3>
              <p className="text-biodelle-text/80">
                Personalização real, com ciência, tecnologia e cuidado humano. 
                Nada é padrão. Tudo é pensado para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default LinhaCapilar;
