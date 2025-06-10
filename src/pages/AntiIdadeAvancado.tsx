import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TestimonialsSection from "@/components/TestimonialsSection";

const AntiIdadeAvancado = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-gradient-to-b from-biodelle-offwhite to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-heading-1 text-biodelle-text mb-6">
            A <span className="text-biodelle-terracotta">Idade</span> é Só um Número.
            <br />
            Sua <span className="text-biodelle-moss">Vitalidade</span> é Eterna.
          </h1>
          <p className="text-lg md:text-xl text-biodelle-text/80 font-inter max-w-3xl mx-auto mb-8">
            Descubra fórmulas cientificamente desenvolvidas para revitalizar sua pele de dentro para fora, 
            com peptídeos, antioxidantes e ativos rejuvenescedores personalizados para suas necessidades únicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber="5511999999999" 
              message="Olá! Gostaria de saber mais sobre a linha Anti-Idade Avançado da Biodelle."
            />
          </div>
        </div>
      </section>

      {/* Identificação */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Reconhece Algum Desses Sinais?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Sua pele perdeu a firmeza e elasticidade que tinha antes?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Linhas de expressão e rugas estão cada vez mais marcadas?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Sente que o brilho natural da pele desapareceu?</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Já tentou diversos produtos mas não vê resultados duradouros?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Gostaria de um tratamento que funcione de dentro para fora?</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-biodelle-moss font-medium">
              Se você se identificou, não está sozinha. E a ciência tem a resposta.
            </p>
          </div>
        </div>
      </section>

      {/* A Virada */}
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            O Que Realmente Acontece Com Nossa Pele
          </h2>
          <div className="prose prose-lg max-w-none text-biodelle-text">
            <p className="text-center mb-8">
              Após os 25 anos, nossa produção natural de colágeno diminui cerca de 1% ao ano. 
              Aos 50 anos, perdemos aproximadamente 30% do colágeno original.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-medium text-biodelle-terracotta mb-4">O que a ciência nos mostra:</h3>
              <ul className="space-y-3">
                <li>• Redução da síntese de colágeno tipo I e III</li>
                <li>• Diminuição da renovação celular</li>
                <li>• Aumento do estresse oxidativo</li>
                <li>• Perda da capacidade de retenção de água</li>
              </ul>
            </div>
            <p className="text-center text-lg">
              <span className="font-medium text-biodelle-moss">A boa notícia:</span> 
              Com os nutrientes e ativos corretos, é possível estimular a regeneração natural da pele.
            </p>
          </div>
        </div>
      </section>

      {/* Solução Biodelle */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Nossa Abordagem Científica
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-biodelle-terracotta">1</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Análise Personalizada</h3>
              <p className="text-biodelle-text/70">
                Avaliamos seu perfil, histórico e objetivos para criar uma fórmula única.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-biodelle-terracotta">2</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Ativos Selecionados</h3>
              <p className="text-biodelle-text/70">
                Peptídeos bioativos, antioxidantes premium e cofatores essenciais.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-biodelle-terracotta">3</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Resultados Sustentáveis</h3>
              <p className="text-biodelle-text/70">
                Acompanhamento contínuo para ajustes e otimização dos resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Transformações Reais
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-biodelle-text/80 mb-4 italic">
                "Aos 45 anos, recuperei a firmeza que não via há anos. Minha pele está radiante 
                e as pessoas perguntam que tratamento estou fazendo."
              </p>
              <p className="font-medium text-biodelle-terracotta">— Mariana S., 45 anos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-biodelle-text/80 mb-4 italic">
                "A fórmula personalizada fez toda a diferença. Em 3 meses, as linhas de expressão 
                diminuíram visivelmente e ganho energia todos os dias."
              </p>
              <p className="font-medium text-biodelle-terracotta">— Ana Paula R., 52 anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-2 mb-6 text-biodelle-moss">
            Sua Jornada de Rejuvenescimento Começa Agora
          </h2>
          <p className="text-lg text-biodelle-text/80 mb-8">
            Agende uma consulta personalizada e descubra como a ciência pode 
            restaurar a vitalidade da sua pele.
          </p>
          <WhatsAppButton 
            phoneNumber="5511999999999" 
            message="Olá! Quero agendar minha consulta para a linha Anti-Idade Avançado da Biodelle."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-biodelle-terracotta mb-2">
                Em quanto tempo verei os primeiros resultados?
              </h3>
              <p className="text-biodelle-text/80">
                Os primeiros sinais de melhora geralmente aparecem entre 4 a 6 semanas, 
                com resultados mais significativos após 8-12 semanas de uso contínuo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-biodelle-terracotta mb-2">
                É seguro usar com outros produtos de skincare?
              </h3>
              <p className="text-biodelle-text/80">
                Sim, nossas fórmulas são desenvolvidas para complementar sua rotina de cuidados. 
                Sempre recomendamos uma avaliação personalizada para otimizar os resultados.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-biodelle-terracotta mb-2">
                Posso usar durante a gravidez ou amamentação?
              </h3>
              <p className="text-biodelle-text/80">
                Recomendamos sempre consultar seu médico antes de iniciar qualquer suplementação 
                durante a gravidez ou amamentação. Oferecemos orientação especializada para cada caso.
              </p>
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
