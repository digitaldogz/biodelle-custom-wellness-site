
import React from 'react';
import { PersonStanding, Leaf, Package, FlaskRound } from 'lucide-react';

const cards = [
  {
    icon: <PersonStanding size={36} className="text-biodelle-terracotta" />,
    title: "Consultoria Farmacêutica",
    description: "Fernanda e Roberto dedicam seu conhecimento para co-criar sua fórmula ideal, entendendo suas necessidades individuais."
  },
  {
    icon: <Leaf size={36} className="text-biodelle-moss" />,
    title: "Opções Veganas e Hipoalergênicas",
    description: "Desenvolvemos fórmulas com ativos puros, livres de componentes indesejados, respeitando seu corpo e suas escolhas."
  },
  {
    icon: <Package size={36} className="text-biodelle-terracotta" />,
    title: "Embalagens Premium e Sustentáveis",
    description: "Apresentação sofisticada que preserva a integridade da sua fórmula, com atenção à sustentabilidade."
  },
  {
    icon: <FlaskRound size={36} className="text-biodelle-moss" />,
    title: "Precisão em Cada Gota",
    description: "Laboratório moderno e processos rigorosos garantem a dosagem exata e a máxima eficácia dos seus manipulados."
  }
];

const DifferentialsSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-garet font-bold text-center mb-4">
          O Cuidado que Transforma. A Precisão que Você Confia.
        </h2>
        <p className="text-center text-biodelle-text/70 max-w-2xl mx-auto mb-12">
          Descubra o que torna a Biodelle única e como nosso compromisso com a excelência se traduz em cada fórmula personalizada.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="biodelle-card hover:-translate-y-1"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-inter font-medium mb-3 text-biodelle-text">{card.title}</h3>
              <p className="text-biodelle-text/70">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
