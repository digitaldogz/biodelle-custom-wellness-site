
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const SuporteImunidade = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-gradient-to-b from-biodelle-offwhite to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-heading-1 text-biodelle-text mb-6">
            A <span className="text-biodelle-terracotta">Imunidade</span> Começa Muito Antes
            <br />
            Dos <span className="text-biodelle-moss">Sintomas</span>
          </h1>
          <p className="text-lg md:text-xl text-biodelle-text/80 font-inter max-w-3xl mx-auto mb-8">
            Fortaleça suas defesas com precisão científica e cuidado personalizado. 
            Com combinações sob medida de vitaminas, minerais e fitoquímicos, criamos 
            soluções que cuidam da sua imunidade de forma profunda e sustentável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber="5511999999999" 
              message="Olá! Quero saber mais sobre o Suporte à Imunidade personalizado da Biodelle."
            />
          </div>
        </div>
      </section>

      {/* Identificação */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Talvez Você Se Identifique...
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Está sempre "pegando alguma coisa" e não entende por quê?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Fica doente nos momentos de maior estresse e não consegue se recuperar direito?</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Tem dificuldade de manter energia e vitalidade ao longo do dia?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Sente que sua imunidade está baixa, mas não sabe como reverter isso com segurança?</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-biodelle-moss font-medium">
              Se sim, não é fraqueza. É um sinal do seu corpo.
            </p>
          </div>
        </div>
      </section>

      {/* A Virada */}
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Entenda o Que Está Acontecendo Com Seu Corpo
          </h2>
          <div className="prose prose-lg max-w-none text-biodelle-text">
            <p className="text-center mb-8">
              Com o passar dos anos, o sistema imunológico sofre desgastes que não são visíveis, 
              mas são profundos. Estudos mostram que após os 30 anos:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-medium text-biodelle-terracotta mb-4">O declínio imunológico:</h3>
              <ul className="space-y-3">
                <li>• A produção de linfócitos T (células essenciais da imunidade adaptativa) cai cerca de 3% ao ano</li>
                <li>• O intestino, que abriga mais de 70% das células imunológicas, perde eficiência em absorver nutrientes-chave</li>
                <li>• O estresse crônico e a inflamação silenciosa diminuem a resposta imunológica</li>
                <li>• Aumenta o risco de doenças virais, bacterianas e autoimunes</li>
              </ul>
            </div>
            <p className="text-center text-lg">
              <span className="font-medium text-biodelle-moss">Não é culpa sua.</span> 
              Seu corpo precisa de um suporte diferente.
            </p>
          </div>
        </div>
      </section>

      {/* Solução Biodelle */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            "Não Existe Imunidade Forte Com Soluções Genéricas"
          </h2>
          <p className="text-center text-lg mb-8 text-biodelle-text/80">
            Cada pessoa tem um metabolismo, rotina, histórico e perfil de deficiências únicos. 
            Por isso, nossas fórmulas para suporte à imunidade são:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Personalizadas</h3>
              <p className="text-biodelle-text/70">
                Ajustadas aos seus exames, estilo de vida e sintomas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Baseadas em Evidências</h3>
              <p className="text-biodelle-text/70">
                Nutrientes com comprovação científica: vitamina D, zinco, quercetina, N-acetilcisteína
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Seguras e Naturais</h3>
              <p className="text-biodelle-text/70">
                Ingredientes farmacêuticos de alta pureza, manipulados em ambiente controlado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Resultados Que Inspiram Confiança
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-biodelle-text/80 mb-4 italic">
                "Eu sempre ficava doente quando mudava o clima. Depois da minha fórmula, 
                passei um inverno inteiro sem um resfriado. Nunca me senti tão disposta."
              </p>
              <p className="font-medium text-biodelle-terracotta">— Mariana L., 42 anos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-biodelle-text/80 mb-4 italic">
                "Não queria tomar qualquer suplemento. Com a Dra. Fernanda, descobri minhas 
                deficiências e tratei com precisão. Me sinto mais forte e leve."
              </p>
              <p className="font-medium text-biodelle-terracotta">— Denise F., 38 anos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-biodelle-text/80 mb-4 italic">
                "Acompanhamento humanizado e muita ciência. O resultado foi mais energia, 
                imunidade e paz de espírito."
              </p>
              <p className="font-medium text-biodelle-terracotta">— Renata P., 47 anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como você pode se sentir */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-2 mb-8 text-biodelle-moss">
            Como Você Pode Se Sentir Em 30 Dias?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <p className="text-biodelle-text">Mais energia para viver o dia sem quedas bruscas</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <p className="text-biodelle-text">Menos episódios de gripes, resfriados ou recaídas</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✨</span>
                <p className="text-biodelle-text">Sensação de leveza e bem-estar</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <p className="text-biodelle-text">Imunidade restaurada de dentro para fora</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-lg text-biodelle-moss font-medium">
              A imunidade não se compra pronta. Ela se constrói.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-2 mb-6 text-biodelle-moss">
            Vamos Cuidar da Sua Imunidade Juntos?
          </h2>
          <p className="text-lg text-biodelle-text/80 mb-8">
            Sua jornada começa com um diagnóstico funcional e um plano 
            nutricional feito para você.
          </p>
          <WhatsAppButton 
            phoneNumber="5511999999999" 
            message="Quero cuidar da minha imunidade com a orientação personalizada da Dra. Fernanda!"
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
                Posso usar mesmo sem receita médica?
              </h3>
              <p className="text-biodelle-text/80">
                Sim, mas a recomendação é sempre realizar um acompanhamento funcional 
                para garantir segurança e resultados.
              </p>
            </div>
            <div className="bg-biodelle-offwhite p-6 rounded-lg">
              <h3 className="font-medium text-biodelle-terracotta mb-2">
                Tenho doença autoimune. Posso usar?
              </h3>
              <p className="text-biodelle-text/80">
                Sim, desde que com orientação personalizada. A suplementação correta pode, 
                inclusive, ajudar a equilibrar respostas inflamatórias.
              </p>
            </div>
            <div className="bg-biodelle-offwhite p-6 rounded-lg">
              <h3 className="font-medium text-biodelle-terracotta mb-2">
                Quanto tempo leva para sentir os efeitos?
              </h3>
              <p className="text-biodelle-text/80">
                Depende do organismo, mas muitos pacientes relatam melhora perceptível em 10-30 dias.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuporteImunidade;
