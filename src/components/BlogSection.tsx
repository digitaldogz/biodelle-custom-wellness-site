
import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Os 5 Ativos Mais Promissores no Tratamento Anti-idade",
    excerpt: "Descubra quais são os ingredientes revolucionários que estão transformando o tratamento do envelhecimento da pele.",
    category: "Dermocosméticos",
    image: "gradient-1"
  },
  {
    id: 2,
    title: "Como Potencializar Seus Treinos com Suplementação Adequada",
    excerpt: "Guia completo sobre os suplementos que realmente fazem diferença na sua performance esportiva e recuperação muscular.",
    category: "Suplementação",
    image: "gradient-2"
  },
  {
    id: 3,
    title: "Menopausa: Abordagem Integrativa para Mais Qualidade de Vida",
    excerpt: "Estratégias nutricionais e suplementares para amenizar os sintomas e enfrentar esta fase com bem-estar.",
    category: "Bem-Estar Feminino",
    image: "gradient-3"
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
        <h2 className="text-3xl md:text-4xl font-garet font-bold text-center mb-4">
          Mantenha-se Informado, Viva Melhor.
        </h2>
        <p className="text-center text-biodelle-text/70 max-w-2xl mx-auto mb-12">
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
                <h3 className="text-xl font-medium mt-3 mb-2">
                  {post.title}
                </h3>
                <p className="text-biodelle-text/70 text-sm mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog-post/${post.id}`}
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
