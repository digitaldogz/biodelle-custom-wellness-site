
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";

const SuporteImunidade = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-garet font-bold text-biodelle-text mb-8">
            Suporte à Imunidade
          </h1>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6 text-biodelle-text/80">
              <p className="text-lg">
                Combinações exclusivas de vitaminas, minerais e fitoquímicos cuidadosamente selecionados para fortalecer suas defesas naturais e manter sua saúde em dia.
              </p>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  Principais Componentes
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Vitamina C em alta concentração</li>
                  <li>Vitamina D3 para imunidade celular</li>
                  <li>Zinco quelado para defesa antioxidante</li>
                  <li>Selênio para proteção celular</li>
                  <li>Própolis verde para ação antimicrobiana</li>
                  <li>Equinácea para estímulo imunológico</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  Benefícios
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fortalecimento do sistema imunológico</li>
                  <li>Maior resistência a infecções</li>
                  <li>Ação antioxidante potente</li>
                  <li>Recuperação mais rápida de doenças</li>
                  <li>Proteção contra radicais livres</li>
                  <li>Melhora da vitalidade geral</li>
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

export default SuporteImunidade;
