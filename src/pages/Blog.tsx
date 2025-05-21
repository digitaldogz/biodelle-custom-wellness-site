import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

// Dados de exemplo para postagens de blog
const blogPosts = [
  {
    id: 1,
    title: "Os 5 Ativos Mais Promissores no Tratamento Anti-idade",
    excerpt: "Descubra quais são os ingredientes revolucionários que estão transformando o tratamento do envelhecimento da pele.",
    category: "Dermocosméticos",
    image: "gradient-1",
    date: "12 Mai 2025",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Como Potencializar Seus Treinos com Suplementação Adequada",
    excerpt: "Guia completo sobre os suplementos que realmente fazem diferença na sua performance esportiva e recuperação muscular.",
    category: "Suplementação",
    image: "gradient-2",
    date: "5 Mai 2025",
    readTime: "8 min"
  },
  {
    id: 3,
    title: "Menopausa: Abordagem Integrativa para Mais Qualidade de Vida",
    excerpt: "Estratégias nutricionais e suplementares para amenizar os sintomas e enfrentar esta fase com bem-estar.",
    category: "Bem-Estar Feminino",
    image: "gradient-3",
    date: "28 Abr 2025",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "Nutricosmética: Beleza de Dentro para Fora",
    excerpt: "Como os suplementos nutricionais podem potencializar seus resultados estéticos e complementar tratamentos dermatológicos.",
    category: "Nutricosmética",
    image: "gradient-1",
    date: "21 Abr 2025",
    readTime: "4 min"
  },
  {
    id: 5,
    title: "Proteção Solar Oral: Mito ou Realidade?",
    excerpt: "Entenda como os nutracêuticos podem complementar (mas não substituir) a fotoproteção tópica tradicional.",
    category: "Pesquisa Científica",
    image: "gradient-2",
    date: "15 Abr 2025",
    readTime: "7 min"
  },
  {
    id: 6,
    title: "Manipulação Magistral vs Produtos Industrializados",
    excerpt: "Quando optar por cada tipo de produto e como eles podem ser complementares em seu regime de cuidados.",
    category: "Farmacêutica",
    image: "gradient-3",
    date: "10 Abr 2025",
    readTime: "5 min"
  }
];

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

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Obter postagens da página atual
  const getCurrentPosts = () => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  };

  return (
    <div className="min-h-screen bg-biodelle-offwhite flex flex-col">
      <Header />
      
      {/* Hero Section do Blog */}
      <div className="bg-gradient-to-r from-biodelle-moss/10 to-biodelle-terracotta/10 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-heading-2 text-center mb-4">
            Blog <span className="text-biodelle-terracotta">Biodelle</span>
          </h1>
          <p className="text-center text-biodelle-text/80 max-w-2xl mx-auto">
            Conheça as últimas pesquisas, tendências e informações sobre bem-estar, 
            dermocosméticos e suplementação personalizada.
          </p>
        </div>
      </div>
      
      {/* Lista de Postagens */}
      <main className="flex-grow px-4 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentPosts().map((post) => (
              <Card key={post.id} className="border-none shadow-sm hover:shadow-md transition-all duration-300">
                <div className={`h-48 bg-gradient-to-br ${getGradientStyle(post.image)}`} />
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs uppercase tracking-wider font-medium text-biodelle-terracotta bg-biodelle-terracotta/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="text-xs text-biodelle-text/60">
                      {post.date} • {post.readTime} de leitura
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-biodelle-text/70 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <a 
                    href={`/blog-post/${post.id}`} 
                    className="text-biodelle-terracotta font-medium inline-flex items-center transition-all hover:underline"
                  >
                    Ler Artigo 
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Paginação */}
          {totalPages > 1 && (
            <Pagination className="mt-12">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(index + 1);
                      }}
                      isActive={currentPage === index + 1}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
