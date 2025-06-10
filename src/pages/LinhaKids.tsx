
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";

const LinhaKids = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-garet font-bold text-biodelle-text mb-8">
            Linha Kids Especial
          </h1>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6 text-biodelle-text/80">
              <p className="text-lg">
                Suplementos e cuidados especialmente formulados para as necessidades únicas das crianças em crescimento, sempre com segurança e eficácia como prioridades.
              </p>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  Principais Componentes
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Vitaminas do complexo B para desenvolvimento neurológico</li>
                  <li>Vitamina D3 para crescimento ósseo</li>
                  <li>Ferro aminoácido quelato para prevenção de anemia</li>
                  <li>Ômega 3 DHA para desenvolvimento cognitivo</li>
                  <li>Probióticos para saúde intestinal</li>
                  <li>Cálcio e magnésio para ossos e dentes</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  Benefícios
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Suporte ao crescimento saudável</li>
                  <li>Fortalecimento do sistema imunológico</li>
                  <li>Melhora da concentração e aprendizado</li>
                  <li>Desenvolvimento ósseo adequado</li>
                  <li>Equilíbrio da flora intestinal</li>
                  <li>Prevenção de deficiências nutricionais</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  Segurança e Qualidade
                </h2>
                <p>
                  Todos os produtos da Linha Kids são desenvolvidos com rigorosos padrões de segurança, utilizando apenas ingredientes aprovados para uso pediátrico e sempre sob orientação farmacêutica especializada.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default LinhaKids;
