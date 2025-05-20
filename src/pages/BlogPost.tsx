import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/components/BlogSection';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MessageSquare } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<typeof blogPosts[0] | undefined>(undefined);
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([]);
  
  useEffect(() => {
    if (id) {
      const postId = parseInt(id);
      const foundPost = blogPosts.find(p => p.id === postId);
      setPost(foundPost);
      
      // Get related posts (excluding current post)
      const related = blogPosts
        .filter(p => p.id !== postId)
        .slice(0, 2);  // Limit to 2 related posts
      setRelatedPosts(related);
    }
  }, [id]);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-biodelle-offwhite">
        <Header />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-2xl font-garet font-normal">Artigo não encontrado</h1>
          <p className="mt-4 mb-8 font-garet font-thin">O artigo que você está procurando não existe ou foi removido.</p>
          <Link to="/blog" className="biodelle-btn-primary">Voltar para o Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

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
  
  const handleWhatsAppContact = (e: React.FormEvent) => {
    e.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement)?.value;
    const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;
    
    if (name && message) {
      const whatsappMessage = encodeURIComponent(`Olá! Meu nome é ${name}. ${message}`);
      window.open(`https://wa.me/5500000000000?text=${whatsappMessage}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/blog" className="text-biodelle-terracotta inline-flex items-center hover:underline">
              <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5"></path>
                <path d="M12 19l-7-7 7-7"></path>
              </svg>
              Voltar para o Blog
            </Link>
          </div>
          
          <span className="text-xs uppercase tracking-wider font-medium text-biodelle-terracotta bg-biodelle-terracotta/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
          
          <div className="mt-8 mb-12">
            <div className={`h-64 md:h-80 rounded-xl bg-gradient-to-br ${getGradientStyle(post.image)} mb-6`}></div>
            
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} className="blog-content" />
            </article>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-garet font-normal text-center mb-8">Outros Artigos</h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {blogPosts.map((relatedPost) => (
                <CarouselItem key={relatedPost.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <article className="bg-biodelle-offwhite rounded-lg overflow-hidden shadow-md h-full">
                      <div className={`h-40 bg-gradient-to-br ${getGradientStyle(relatedPost.image)}`}></div>
                      <div className="p-4">
                        <span className="text-xs uppercase tracking-wider font-medium text-biodelle-terracotta bg-biodelle-terracotta/10 px-2 py-1 rounded-full">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-garet font-normal mt-3 mb-2">
                          {relatedPost.title}
                        </h3>
                        <Link 
                          to={`/blog/${relatedPost.id}`}
                          className="text-biodelle-terracotta font-medium inline-flex items-center text-sm transition-all hover:underline mt-2"
                        >
                          Ler Artigo 
                          <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </article>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-garet font-normal mb-3">Quer Saber Mais?</h2>
              <p className="text-biodelle-text/70 max-w-xl mx-auto font-garet font-thin">
                Converse com nossos especialistas e descubra como podemos ajudar você a alcançar seus objetivos de saúde e beleza.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <form className="space-y-4" onSubmit={handleWhatsAppContact}>
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
                  <MessageSquare size={20} />
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

export default BlogPost;
