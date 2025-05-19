
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/components/BlogSection';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
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
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-garet font-normal text-center mb-4">
            Blog Biodelle
          </h1>
          <p className="text-center text-biodelle-text/70 max-w-2xl mx-auto mb-12 font-garet font-thin">
            Conhecimento e inspiração para sua jornada de saúde e beleza
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
        </div>
      </section>
      
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-biodelle-offwhite rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-garet font-normal mb-3">Entre em Contato</h2>
              <p className="text-biodelle-text/70 max-w-xl mx-auto font-garet font-thin">
                Tem dúvidas sobre nossos produtos ou gostaria de receber uma consulta personalizada? Converse conosco pelo WhatsApp.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Seu Nome</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 border border-biodelle-beige/30 rounded-md focus:outline-none focus:ring-2 focus:ring-biodelle-terracotta"
                    placeholder="Nome completo"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium">Seu WhatsApp</label>
                  <input
                    id="whatsapp"
                    type="tel"
                    className="w-full px-4 py-3 border border-biodelle-beige/30 rounded-md focus:outline-none focus:ring-2 focus:ring-biodelle-terracotta"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensagem</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-biodelle-beige/30 rounded-md focus:outline-none focus:ring-2 focus:ring-biodelle-terracotta"
                    placeholder="Como podemos ajudar você?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="biodelle-btn-primary w-full flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h18v18H3z"></path>
                    <path d="M8 3v18"></path>
                    <path d="M16 3v18"></path>
                    <path d="M3 8h18"></path>
                    <path d="M3 16h18"></path>
                  </svg>
                  Iniciar Conversa pelo WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
