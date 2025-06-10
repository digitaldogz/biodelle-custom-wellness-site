
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";

const LinhaCapilar = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-garet font-bold text-biodelle-text mb-8">
            Linha Capilar Personalizada
          </h1>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6 text-biodelle-text/80">
              <p className="text-lg">
                Tratamentos capilares específicos desenvolvidos para cada tipo de cabelo e necessidade, combatendo queda, promovendo crescimento e melhorando densidade e brilho.
              </p>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  Principais Ativos
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Minoxidil para estímulo do crescimento</li>
                  <li>Finasterida tópica para controle da queda</li>
                  <li>Peptídeos biomimléticos capilares</li>
                  <li>Biotina para fortalecimento</li>
                  <li>Pantenol para hidratação</li>
                  <li>Extrato de ginkgo biloba para circulação</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  Benefícios
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Redução significativa da queda capilar</li>
                  <li>Estímulo ao crescimento de novos fios</li>
                  <li>Aumento da densidade capilar</li>
                  <li>Melhora do brilho e maciez</li>
                  <li>Fortalecimento da fibra capilar</li>
                  <li>Hidratação profunda do couro cabeludo</li>
                </ul>
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

export default LinhaCapilar;
