
import React from 'react';
import { Link } from 'react-router-dom';

export const blogPosts = [
  {
    id: 1,
    title: "Os 5 Ativos Mais Promissores no Tratamento Anti-idade",
    excerpt: "Descubra quais são os ingredientes revolucionários que estão transformando o tratamento do envelhecimento da pele.",
    category: "Dermocosméticos",
    image: "gradient-1",
    content: `
      <h2>Os 5 Ativos Mais Promissores no Tratamento Anti-idade</h2>
      
      <p>O envelhecimento da pele é um processo natural que todos enfrentamos, mas a ciência cosmética avança constantemente para oferecer soluções cada vez mais eficazes. Neste artigo, exploramos os cinco ativos que mais se destacam atualmente no combate aos sinais de envelhecimento.</p>
      
      <h3>1. Retinol</h3>
      <p>Derivado da vitamina A, o retinol continua sendo uma referência quando o assunto é rejuvenescimento. Ele acelera a renovação celular, estimula a produção de colágeno e combate linhas finas e manchas.</p>
      
      <h3>2. Ácido Hialurônico</h3>
      <p>Com capacidade de reter até 1000 vezes seu peso em água, o ácido hialurônico proporciona hidratação profunda, preenchimento e restauração do volume facial perdido com o tempo.</p>
      
      <h3>3. Peptídeos Biomomiméticos</h3>
      <p>Estes compostos inteligentes "enganam" a pele para estimular a síntese de elementos estruturais, como colágeno e elastina, de forma altamente específica e eficiente.</p>
      
      <h3>4. Vitamina C Estabilizada</h3>
      <p>Poderoso antioxidante, a vitamina C protege contra danos dos radicais livres, uniformiza o tom da pele e é essencial na formação de colágeno.</p>
      
      <h3>5. Bakuchiol</h3>
      <p>Alternativa natural ao retinol, o bakuchiol oferece benefícios semelhantes no combate às rugas e na melhoria da textura da pele, porém com menos irritação.</p>
      
      <p>Na Biodelle, nossas formulações personalizadas podem incorporar estes ativos de forma precisa, na concentração ideal para sua pele e objetivos específicos. Consulte nossos farmacêuticos para criar sua solução anti-idade personalizada.</p>
    `
  },
  {
    id: 2,
    title: "Como Potencializar Seus Treinos com Suplementação Adequada",
    excerpt: "Guia completo sobre os suplementos que realmente fazem diferença na sua performance esportiva e recuperação muscular.",
    category: "Suplementação",
    image: "gradient-2",
    content: `
      <h2>Como Potencializar Seus Treinos com Suplementação Adequada</h2>
      
      <p>A suplementação correta pode ser o diferencial para atletas e praticantes de atividades físicas que buscam maximizar resultados. Contudo, é fundamental entender quais suplementos realmente fazem diferença e como utilizá-los estrategicamente.</p>
      
      <h3>Proteínas: A Base da Recuperação</h3>
      <p>Whey protein, caseína e proteínas vegetais oferecem perfis de aminoácidos diferentes que podem ser estrategicamente combinados para otimizar a síntese proteica ao longo do dia.</p>
      
      <h3>Creatina: O Suplemento mais Estudado</h3>
      <p>Com eficácia comprovada para aumento de força, potência e massa muscular, a creatina monohidratada se destaca pela segurança e resultados consistentes.</p>
      
      <h3>BCAAs e Glutamina: Aliados na Recuperação</h3>
      <p>Em momentos estratégicos, estes aminoácidos podem auxiliar na redução do catabolismo muscular e na recuperação após treinos intensos.</p>
      
      <h3>Carboidratos Peritreinamento</h3>
      <p>Dextrose, maltodextrina e ciclodextrinas podem otimizar o desempenho durante o treino e a recuperação posterior quando utilizados nos momentos corretos.</p>
      
      <h3>Cafeína e Pré-treinos</h3>
      <p>Estimulantes como cafeína, teacrina e taurina, quando dosados adequadamente, podem aumentar foco, energia e performance durante as sessões de treino.</p>
      
      <p>Na Biodelle, criamos suplementos personalizados que consideram seu metabolismo, objetivos e rotina de treinos. Consulte nossos especialistas para desenvolver sua estratégia de suplementação personalizada.</p>
    `
  },
  {
    id: 3,
    title: "Menopausa: Abordagem Integrativa para Mais Qualidade de Vida",
    excerpt: "Estratégias nutricionais e suplementares para amenizar os sintomas e enfrentar esta fase com bem-estar.",
    category: "Bem-Estar Feminino",
    image: "gradient-3",
    content: `
      <h2>Menopausa: Abordagem Integrativa para Mais Qualidade de Vida</h2>
      
      <p>A menopausa é uma fase natural na vida da mulher que traz consigo diversas mudanças fisiológicas. Entretanto, com uma abordagem integrativa, é possível atravessar este período com mais conforto e bem-estar.</p>
      
      <h3>Fitoestrogênios: O Poder das Plantas</h3>
      <p>Isoflavonas de soja, trevo vermelho e linhaça podem ajudar a equilibrar os hormônios e reduzir sintomas como ondas de calor e instabilidade emocional.</p>
      
      <h3>Vitaminas e Minerais Estratégicos</h3>
      <p>Cálcio, vitamina D, magnésio e vitamina K2 são essenciais para preservar a saúde óssea, frequentemente afetada pela diminuição do estrogênio.</p>
      
      <h3>Adaptógenos para Equilíbrio</h3>
      <p>Ervas como ashwagandha, rhodiola e maca peruana podem auxiliar o corpo a adaptar-se às mudanças hormonais e reduzir o estresse associado.</p>
      
      <h3>Ácidos Graxos Essenciais</h3>
      <p>Ômega-3 e ômega-6 adequadamente balanceados têm papel crucial na modulação da inflamação e na saúde cardiovascular durante a menopausa.</p>
      
      <h3>Suporte à Saúde Cognitiva</h3>
      <p>Ginkgo biloba, bacopa e fosfatidilserina são exemplos de nutracêuticos que podem auxiliar na manutenção da clareza mental e memória.</p>
      
      <p>Na Biodelle, desenvolvemos fórmulas personalizadas que atendem às necessidades específicas de cada mulher durante a menopausa, considerando seu histórico de saúde, sintomas predominantes e objetivos de bem-estar.</p>
    `
  }
];

const BlogSection: React.FC = () => {
  // Generate gradient styles for blog post cards
  const getGradientStyle = (imageId: string) => {
    switch (imageId) {
      case 'gradient-1':
        return 'from-biodelle-terracotta/40 to-biodelle-moss/30';
      case 'gradient-2':
        return 'from-biodelle-moss/40 to-biodelle-beige/50';
      case 'gradient-3':
        return 'from-biodelle-beige/50 to-biodelle-terracotta/40';
      default:
        return 'from-biodelle-terracotta/30 to-biodelle-moss/30';
    }
  };

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-heading-2 text-center mb-4 font-garet font-normal">
          Mantenha-se Informado, Viva Melhor.
        </h2>
        <p className="text-center text-biodelle-text/70 max-w-2xl mx-auto mb-12 font-garet font-thin">
          Artigos, dicas e novidades dos nossos especialistas para sua jornada de bem-estar.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className={`h-48 bg-gradient-to-br ${getGradientStyle(post.image)}`}></div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider font-medium text-biodelle-terracotta bg-biodelle-terracotta/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <h3 className="text-xl font-garet font-normal mt-3 mb-2 tracking-wide">
                  {post.title}
                </h3>
                <p className="text-biodelle-text/70 text-sm mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-biodelle-terracotta font-medium inline-flex items-center transition-all hover:underline"
                >
                  Ler Artigo 
                  <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/blog" className="biodelle-btn-outline inline-block">
            Ver Todos os Artigos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
