
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BemEstarFeminino = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-gradient-to-b from-biodelle-offwhite to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-heading-1 text-biodelle-text mb-6">
            Sua <span className="text-biodelle-terracotta">Feminilidade</span> em Equilíbrio.
            <br />
            Sua <span className="text-biodelle-moss">Saúde</span> em Harmonia.
          </h1>
          <p className="text-lg md:text-xl text-biodelle-text/80 font-inter max-w-3xl mx-auto mb-8">
            Fórmulas personalizadas que acompanham cada fase da vida da mulher, oferecendo 
            suporte hormonal, nutricional e emocional com base científica sólida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber="5511999999999" 
              message="Olá! Gostaria de saber mais sobre o Bem-Estar Feminino da Biodelle."
            />
          </div>
        </div>
      </section>

      {/* Identificação */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Você Reconhece Estes Sinais?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Oscilações de humor que parecem incontroláveis?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">TPM intensa que afeta sua qualidade de vida?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Sintomas da menopausa que desafiam seu bem-estar?</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Fadiga constante mesmo com descanso adequado?</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-biodelle-terracotta mt-3 flex-shrink-0"></div>
                <p className="text-biodelle-text">Dificuldades com peso, pele ou cabelo?</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-biodelle-moss font-medium">
              Seu corpo está tentando te dizer algo. Nós sabemos como escutá-lo.
            </p>
          </div>
        </div>
      </section>

      {/* A Virada */}
      <section className="section-padding bg-biodelle-offwhite">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Entendendo as Mudanças Hormonais
          </h2>
          <div className="prose prose-lg max-w-none text-biodelle-text">
            <p className="text-center mb-8">
              O corpo feminino passa por constantes flutuações hormonais ao longo da vida. 
              Cada fase traz desafios únicos que merecem cuidado especializado.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-biodelle-terracotta mb-3">Idade Reprodutiva</h3>
                <p className="text-sm text-biodelle-text/80">
                  Ciclos irregulares, TPM, síndrome dos ovários policísticos
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-biodelle-terracotta mb-3">Pré-Menopausa</h3>
                <p className="text-sm text-biodelle-text/80">
                  Irregularidades menstruais, ondas de calor, mudanças de humor
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-biodelle-terracotta mb-3">Menopausa</h3>
                <p className="text-sm text-biodelle-text/80">
                  Declínio hormonal, osteoporose, alterações metabólicas
                </p>
              </div>
            </div>
            <p className="text-center text-lg">
              <span className="font-medium text-biodelle-moss">Nossa missão:</span> 
              Equilibrar naturalmente cada fase com suporte nutricional personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Solução Biodelle */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-8 text-biodelle-moss">
            Suporte Integral Para Cada Fase
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌙</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Equilíbrio Hormonal</h3>
              <p className="text-biodelle-text/70">
                Fitoestrógenos, vitamina D, magnésio e outras substâncias naturais 
                para harmonizar seus hormônios.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Bem-Estar Emocional</h3>
              <p className="text-biodelle-text/70">
                Ômega-3, complexo B, adaptógenos e nutrientes que apoiam 
                o sistema nervoso e humor.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-biodelle-terracotta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Vitalidade Física</h3>
              <p className="text-biodelle-text/70">
                Antioxidantes, colágeno, ferro biodisponível e outros 
                nutrientes para energia e beleza.
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
                "Após 3 meses com a fórmula personalizada, minha TPM melhorou 80%. 
                Voltei a me sentir eu mesma durante todo o ciclo."
              </p>
              <p className="font-medium text-biodelle-terracotta">— Fernanda K., 35 anos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-biodelle-text/80 mb-4 italic">
                "A menopausa estava sendo muito difícil. Com o suporte da Biodelle, 
                as ondas de calor diminuíram e meu sono melhorou muito."
              </p>
              <p className="font-medium text-biodelle-terracotta">— Isabel M., 51 anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-2 mb-6 text-biodelle-moss">
            Sua Jornada de Bem-Estar Começa Aqui
          </h2>
          <p className="text-lg text-biodelle-text/80 mb-8">
            Descubra como equilibrar naturalmente seus hormônios e reconquistar 
            sua vitalidade em qualquer fase da vida.
          </p>
          <WhatsAppButton 
            phoneNumber="5511999999999" 
            message="Quero saber mais sobre o programa de Bem-Estar Feminino da Biodelle!"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BemEstarFeminino;
