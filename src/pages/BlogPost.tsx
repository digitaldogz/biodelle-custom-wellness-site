import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, MessageSquare } from "lucide-react";
import { useParams } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

// Dados de exemplo para postagens de blog
const blogPosts = [
  {
    id: 1,
    title: "Os 5 Ativos Mais Promissores no Tratamento Anti-idade",
    excerpt: "Descubra quais são os ingredientes revolucionários que estão transformando o tratamento do envelhecimento da pele.",
    category: "Dermocosméticos",
    image: "gradient-1",
    date: "12 Mai 2025",
    readTime: "5 min",
    author: "Dra. Helena Costa",
    authorTitle: "Farmacêutica Especialista em Dermocosméticos",
    content: `
      <p>O mercado de skincare está em constante evolução, com pesquisas avançando rapidamente para desenvolver ativos cada vez mais eficazes contra os sinais do envelhecimento cutâneo. Neste artigo, apresentamos os cinco componentes que têm demonstrado resultados excepcionais e estão revolucionando os tratamentos anti-idade.</p>
      
      <h2>1. Bakuchiol: O Retinol Vegetal</h2>
      
      <p>Extraído da planta Psoralea corylifolia, o bakuchiol tem se destacado como uma alternativa natural ao retinol, oferecendo benefícios semelhantes sem a irritação característica dos retinoides. Estudos clínicos demonstram sua eficácia na redução de rugas, melhora da firmeza cutânea e uniformização do tom da pele.</p>
      
      <p>Uma das grandes vantagens do bakuchiol é sua compatibilidade com peles sensíveis e a possibilidade de uso diurno, já que não aumenta a fotossensibilidade como ocorre com o retinol tradicional.</p>
      
      <h2>2. Peptídeos Biomimeticos</h2>
      
      <p>Os peptídeos biomimeticos são pequenas cadeias de aminoácidos que "enganam" a pele, sinalizando a necessidade de produção de componentes como colágeno e elastina. Cada tipo de peptídeo tem uma função específica:</p>
      
      <ul>
        <li><strong>Matrixil 3000:</strong> Estimula a produção de colágeno tipos I, III e IV.</li>
        <li><strong>Argireline:</strong> Relaxa as contrações musculares faciais, reduzindo rugas de expressão.</li>
        <li><strong>Leuphasil:</strong> Complementa a ação do Argireline, atuando em diferentes receptores musculares.</li>
      </ul>
      
      <h2>3. Ácido Tranexâmico</h2>
      
      <p>Originalmente utilizado como medicamento hemostático, o ácido tranexâmico se revelou um poderoso ativo no tratamento de hiperpigmentações e melasma. Sua ação inibe a transferência de melanina para os queratinócitos e reduz a inflamação cutânea, fator chave no desenvolvimento de manchas.</p>
      
      <p>Em concentrações de 3 a 5% em formulações tópicas, apresenta resultados visíveis em 8 a 12 semanas de uso contínuo.</p>
      
      <h2>4. Esqualano</h2>
      
      <p>Versão estabilizada do esqualeno (naturalmente presente na pele humana), o esqualano é um hidratante excepcional que possui afinidade com a barreira cutânea. Este óleo leve, normalmente derivado da cana-de-açúcar ou olivas, restaura a barreira da pele, reduz a perda transepidérmica de água e transporta outros ativos para camadas mais profundas.</p>
      
      <p>Além dos benefícios hidratantes, o esqualano possui propriedades antioxidantes e é adequado para todos os tipos de pele, incluindo as oleosas e acneicas.</p>
      
      <h2>5. Extrato de Células-Tronco Vegetais</h2>
      
      <p>Os extratos de células-tronco vegetais, especialmente da maçã suíça, uva e argan, têm demonstrado capacidade de proteger as células-tronco da pele humana contra danos e estimular sua atividade regenerativa.</p>
      
      <p>Estes extratos contêm fatores de crescimento, antioxidantes e metabólitos que fortalecem a derme, melhoram a elasticidade cutânea e prolongam a vida das células, resultando em uma pele mais jovem e resistente aos fatores ambientais agressores.</p>
      
      <h2>Formulações Personalizadas: O Futuro do Anti-aging</h2>
      
      <p>O grande diferencial no tratamento anti-idade moderno não está apenas na escolha dos ativos, mas na personalização das formulações. Cada pele envelhece de maneira única, influenciada por genética, estilo de vida, exposição ambiental e rotina de cuidados.</p>
      
      <p>Por isso, formulações magistrais personalizadas, que combinam estes ativos inovadores nas concentrações ideais para cada pessoa, representam o futuro do skincare anti-idade verdadeiramente eficaz.</p>
    `
  },
  {
    id: 2,
    title: "Como Potencializar Seus Treinos com Suplementação Adequada",
    excerpt: "Guia completo sobre os suplementos que realmente fazem diferença na sua performance esportiva e recuperação muscular.",
    category: "Suplementação",
    image: "gradient-2",
    date: "5 Mai 2025",
    readTime: "8 min",
    author: "Prof. André Mendes",
    authorTitle: "Nutricionista Esportivo",
    content: `
      <p>A suplementação adequada pode ser o diferencial entre resultados medianos e excelentes quando se trata de performance física e recuperação muscular. Neste artigo, abordaremos os suplementos com eficácia comprovada cientificamente e como utilizá-los para potencializar seus resultados.</p>
      
      <h2>Proteínas: A Base da Recuperação</h2>
      
      <p>As proteínas são fundamentais para o reparo e crescimento muscular após o exercício. A whey protein continua sendo uma das opções mais eficientes devido à sua rápida absorção e perfil completo de aminoácidos essenciais.</p>
      
      <p>Para otimizar resultados, considere:</p>
      
      <ul>
        <li>Consumir 20-30g de proteína dentro da "janela anabólica" (até 2 horas após o treino)</li>
        <li>Distribuir a ingestão proteica ao longo do dia (20-40g por refeição)</li>
        <li>Variar as fontes de proteína (whey, caseína, proteínas vegetais)</li>
      </ul>
      
      <h2>Creatina: O Suplemento Mais Estudado</h2>
      
      <p>A creatina monohidratada é o suplemento com maior corpo de evidências científicas sobre eficácia e segurança. Seus benefícios incluem:</p>
      
      <ul>
        <li>Aumento de força e potência muscular</li>
        <li>Maior capacidade de treinamento intenso</li>
        <li>Melhor recuperação entre séries</li>
        <li>Ganho de massa muscular</li>
      </ul>
      
      <p>O protocolo mais eficiente é a suplementação diária de 3-5g, independentemente da fase de "carga" ou das refeições.</p>
    `
  }
  // Outros posts seriam incluídos aqui
];

const BlogPost = () => {
  const { postId } = useParams();
  const id = parseInt(postId || "1");
  
  // Encontrar o post com o ID correspondente
  const post = blogPosts.find(post => post.id === id) || blogPosts[0];
  
  // Determinar o estilo do gradiente baseado no ID da imagem do post
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
    <div className="min-h-screen bg-biodelle-offwhite flex flex-col">
      <Header />
      
      {/* Banner do Post */}
      <div className={`h-72 md:h-96 bg-gradient-to-br ${getGradientStyle(post.image)} pt-32`}>
        <div className="max-w-4xl mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <span className="text-sm uppercase tracking-wider font-medium text-biodelle-terracotta bg-white px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="text-heading-2 mt-4 text-biodelle-text">
              {post.title}
            </h1>
          </div>
        </div>
      </div>
      
      {/* Conteúdo do Post */}
      <main className="flex-grow px-4 py-8 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Metadados do Post */}
          <div className="flex flex-wrap items-center justify-between border-b border-biodelle-beige/30 pb-6 mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-biodelle-moss/20 flex items-center justify-center text-biodelle-moss font-bold text-xl">
                {post.author.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-biodelle-text/60">{post.authorTitle}</p>
              </div>
            </div>
            
            <div className="flex text-sm text-biodelle-text/70">
              <div className="flex items-center mr-4">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime} de leitura
              </div>
            </div>
          </div>
          
          {/* Conteúdo */}
          <article className="prose prose-green max-w-none prose-headings:font-garet prose-headings:text-biodelle-moss">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          
          {/* Compartilhar e Comentários */}
          <div className="mt-12 pt-8 border-t border-biodelle-beige/30">
            <div className="flex flex-wrap justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-medium mb-2">Compartilhar este artigo</h3>
                <div className="flex space-x-2">
                  <button className="w-10 h-10 rounded-full bg-biodelle-terracotta/10 text-biodelle-terracotta flex items-center justify-center hover:bg-biodelle-terracotta hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <a 
                href="/blog" 
                className="text-biodelle-terracotta font-medium hover:underline"
              >
                Voltar para o Blog
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="5511999999999" />
    </div>
  );
};

export default BlogPost;
