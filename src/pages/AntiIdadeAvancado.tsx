
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";

const AntiIdadeAvancado = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-garet font-bold text-biodelle-text mb-8">
            Anti-Idade Avançado
          </h1>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6 text-biodelle-text/80">
              <p className="text-lg">
                Desenvolvemos fórmulas personalizadas com os mais avançados peptídeos, antioxidantes e ativos rejuvenescedores para combater os sinais do tempo de forma eficaz e natural.
              </p>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  Principais Ativos
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Peptídeos biomimléticos para estimular colágeno</li>
                  <li>Vitamina C estabilizada para proteção antioxidante</li>
                  <li>Ácido hialurônico de diferentes pesos moleculares</li>
                  <li>Retinol encapsulado para renovação celular</li>
                  <li>Niacinamida para controle de oleosidade</li>
                  <li>Fatores de crescimento para regeneração</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  Benefícios
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Redução visível de rugas e linhas de expressão</li>
                  <li>Melhora da firmeza e elasticidade da pele</li>
                  <li>Aumento da luminosidade e uniformização do tom</li>
                  <li>Hidratação profunda e duradoura</li>
                  <li>Prevenção do envelhecimento precoce</li>
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

export default AntiIdadeAvancado;
