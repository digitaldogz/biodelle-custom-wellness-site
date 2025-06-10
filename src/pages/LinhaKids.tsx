
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const LinhaKids = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-gradient-to-b from-biodelle-offwhite to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-heading-1 text-biodelle-text mb-6">
            <span className="text-biodelle-terracotta">Crescimento</span> com Saúde
            <br />
            Não é Sorte. É <span className="text-biodelle-moss">Ciência</span> Personalizada.
          </h1>
          <p className="text-lg md:text-xl text-biodelle-text/80 font-inter max-w-3xl mx-auto mb-8">
            Uma nova geração de suplementos infantis, desenvolvida sob medida para apoiar 
            o desenvolvimento físico, cognitivo e imunológico das crianças, com respaldo 
            científico e segurança comprovada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber="5511999999999" 
              message="Olá! Gostaria de descobrir a solução ideal para meu filho na Linha Kids Biodelle."
            />
          </div>
        </div>
      </section>

      {/* Identificação */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Essa é a Minha Preocupação
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Seu filho parece sempre cansado, mesmo dormindo bem?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">A imunidade dele vive baixa e qualquer virose vira uma longa batalha?</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Você sente que a alimentação não dá conta de tudo que ele precisa para crescer forte e saudável?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Notou dificuldade de concentração, irritabilidade ou agitação excessiva?</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-biodelle-moss font-medium">
              Essas são questões comuns entre pais e mães conscientes. Com uma abordagem 
              científica e individualizada, é possível oferecer às crianças o suporte que elas realmente precisam.
            </p>
          </div>
        </div>
      </section>

      {/* A Virada */}
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Por Que Isso Está Acontecendo
          </h2>
          <div className="prose prose-lg max-w-none text-biodelle-text">
            <p className="text-center mb-8">
              Na primeira infância e ao longo da fase escolar, o organismo da criança 
              passa por transformações intensas. O ritmo acelerado de crescimento, 
              a imaturidade do sistema imunológico e as demandas cognitivas elevadas 
              exigem uma oferta precisa de nutrientes essenciais.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-medium text-biodelle-terracotta mb-4">Fato Científico:</h3>
              <p className="text-biodelle-text/80">
                Estudos mostram que 1 em cada 3 crianças brasileiras apresenta alguma 
                carência nutricional relevante (fonte: SBP). E muitas vezes, mesmo com 
                boa alimentação, o organismo infantil não consegue absorver ou metabolizar 
                tudo que precisa sem ajuda.
              </p>
            </div>
            <p className="text-center text-lg">
              <span className="font-medium text-biodelle-moss">Conclusão:</span> 
              Não é exagero. É fisiologia. E com a solução certa, é possível mudar esse cenário.
            </p>
          </div>
        </div>
      </section>

      {/* Solução Biodelle */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Saúde Infantil Com Personalização e Respaldo Científico
          </h2>
          <p className="text-center text-lg mb-8 text-biodelle-text/80">
            Na Linha Kids Biodelle, cada fórmula é feita sob medida, considerando idade, 
            peso, histórico clínico, alimentação e necessidades específicas da criança. 
            Não é "vitamina para crescer". É uma solução de precisão.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Desenvolvimento Cognitivo</h3>
              <p className="text-biodelle-text/70">
                Ômega-3, complexo B e zinco para concentração, memória e aprendizado
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Crescimento Saudável</h3>
              <p className="text-biodelle-text/70">
                Cálcio, magnésio, vitamina D e proteínas para ossos e músculos fortes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Imunidade Robusta</h3>
              <p className="text-biodelle-text/70">
                Vitamina C, zinco, probióticos e antioxidantes para defesas naturais
              </p>
            </div>
          </div>
          <div className="mt-8 bg-biodelle-offwhite p-6 rounded-lg">
            <h3 className="text-lg font-medium text-biodelle-terracotta mb-3">Tecnologia & Confiança:</h3>
            <p className="text-biodelle-text/80">
              Laboratórios certificados, controle de qualidade rigoroso e orientação 
              direta da Dra. Fernanda, especialista em nutrição funcional infantil.
            </p>
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
                "A Biodelle foi um divisor de águas para a saúde da minha filha. 
                Hoje ela dorme melhor, não adoece com tanta facilidade e está mais atenta nas aulas. 
                Não tem preço ver essa diferença."
              </p>
              <p className="font-medium text-biodelle-terracotta">— Juliana M., mãe da Clara, 8 anos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-biodelle-text/80 mb-4 italic">
                "Achei que seria mais uma vitamina, mas a fórmula personalizada foi pensada 
                exatamente para meu filho. Em 3 semanas, os níveis de ferro subiram e ele ganhou mais energia."
              </p>
              <p className="font-medium text-biodelle-terracotta">— Rodrigo C., pai do Enzo, 6 anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como seu filho pode estar */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-2 mb-8 text-biodelle-moss">
            Como Seu Filho Pode Estar Daqui 30 Dias?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <p className="text-biodelle-text">Mais energia para brincar e aprender</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <p className="text-biodelle-text">Sistema imune mais resistente</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <p className="text-biodelle-text">Melhora na concentração e qualidade do sono</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📈</span>
                <p className="text-biodelle-text">Crescimento mais harmônico e saudável</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-2 mb-6 text-biodelle-moss">
            Sua Jornada Começa Com Uma Escuta Atenta
          </h2>
          <p className="text-lg text-biodelle-text/80 mb-8">
            Agende seu atendimento com a equipe da Dra. Fernanda e descubra 
            qual é a solução Biodelle ideal para seu filho.
          </p>
          <WhatsAppButton 
            phoneNumber="5511999999999" 
            message="Quero descobrir a solução ideal para meu filho na Linha Kids Biodelle!"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            <div className="bg-biodelle-offwhite p-6 rounded-lg">
              <h3 className="font-medium text-biodelle-terracotta mb-2">
                Esses suplementos são seguros para crianças pequenas?
              </h3>
              <p className="text-biodelle-text/80">
                Sim. Todas as fórmulas seguem rigorosos padrões de segurança pediátrica, 
                são validadas por especialistas e aprovadas pelos órgãos competentes.
              </p>
            </div>
            <div className="bg-biodelle-offwhite p-6 rounded-lg">
              <h3 className="font-medium text-biodelle-terracotta mb-2">
                Meu filho já toma multivitamínico. Pode usar a linha da Biodelle?
              </h3>
              <p className="text-biodelle-text/80">
                Sim. Mas o ideal é realizar uma avaliação individual para evitar 
                excessos ou combinações ineficazes.
              </p>
            </div>
            <div className="bg-biodelle-offwhite p-6 rounded-lg">
              <h3 className="font-medium text-biodelle-terracotta mb-2">
                Em quanto tempo vejo resultados?
              </h3>
              <p className="text-biodelle-text/80">
                Cada organismo reage de forma diferente, mas em geral os primeiros 
                sinais aparecem entre 15 e 30 dias.
              </p>
            </div>
            <div className="bg-biodelle-offwhite p-6 rounded-lg">
              <h3 className="font-medium text-biodelle-terracotta mb-2">
                Precisa de receita médica?
              </h3>
              <p className="text-biodelle-text/80">
                Não necessariamente. A Biodelle atua com base em avaliação nutricional 
                especializada. Em casos específicos, pode haver integração com profissionais 
                da saúde que já acompanham a criança.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LinhaKids;
