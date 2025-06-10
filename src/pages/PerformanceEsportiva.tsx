
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";

const PerformanceEsportiva = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-garet font-bold text-biodelle-text mb-8">
            Performance Esportiva Otimizada
          </h1>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6 text-biodelle-text/80">
              <p className="text-lg">
                Fórmulas personalizadas desenvolvidas especificamente para atletas e praticantes de atividade física, visando otimizar performance, acelerar recuperação e aumentar resistência.
              </p>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  Principais Componentes
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Creatina monohidratada para força e potência</li>
                  <li>BCAA's para síntese proteica muscular</li>
                  <li>Beta-alanina para resistência muscular</li>
                  <li>Citrulina malato para melhor fluxo sanguíneo</li>
                  <li>Cafeína anidra para energia e foco</li>
                  <li>Complexo vitamínico B para metabolismo energético</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  Benefícios
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Aumento significativo da energia e disposição</li>
                  <li>Melhora na recuperação pós-treino</li>
                  <li>Redução da fadiga muscular</li>
                  <li>Aumento da massa magra</li>
                  <li>Melhora do foco e concentração</li>
                  <li>Otimização do rendimento esportivo</li>
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

export default PerformanceEsportiva;
