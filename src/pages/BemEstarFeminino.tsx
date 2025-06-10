
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";

const BemEstarFeminino = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-garet font-bold text-biodelle-text mb-8">
            Bem-Estar Feminino
          </h1>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6 text-biodelle-text/80">
              <p className="text-lg">
                Fórmulas especialmente desenvolvidas para as necessidades únicas da mulher, oferecendo suporte durante diferentes fases da vida, incluindo TPM, menopausa e equilíbrio hormonal.
              </p>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  Principais Ativos
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Isoflavonas da soja para equilíbrio hormonal</li>
                  <li>Óleo de prímula para saúde feminina</li>
                  <li>Magnésio quelado para tensão pré-menstrual</li>
                  <li>Vitamina D3 para saúde óssea</li>
                  <li>Ácido fólico para saúde reprodutiva</li>
                  <li>Cálcio citrato para prevenção da osteoporose</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  Benefícios
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Alívio dos sintomas da TPM</li>
                  <li>Suporte durante a menopausa</li>
                  <li>Melhora do humor e bem-estar</li>
                  <li>Fortalecimento ósseo</li>
                  <li>Regulação hormonal natural</li>
                  <li>Melhora da qualidade do sono</li>
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

export default BemEstarFeminino;
