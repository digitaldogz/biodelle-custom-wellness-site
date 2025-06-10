
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-garet font-bold text-biodelle-text mb-8">
            Política de Privacidade
          </h1>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6 text-biodelle-text/80">
              <p className="text-sm text-biodelle-text/60">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  1. Informações que Coletamos
                </h2>
                <p>
                  A Biodelle coleta informações que você nos fornece diretamente, como quando você:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Cria uma conta ou perfil</li>
                  <li>Faz uma compra ou solicita nossos serviços</li>
                  <li>Entra em contato conosco</li>
                  <li>Se inscreve em nossa newsletter</li>
                  <li>Participa de pesquisas ou promoções</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  2. Como Usamos Suas Informações
                </h2>
                <p>
                  Utilizamos as informações coletadas para:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Fornecer, operar e melhorar nossos serviços</li>
                  <li>Processar transações e enviar confirmações</li>
                  <li>Enviar comunicações administrativas</li>
                  <li>Responder a perguntas e fornecer suporte ao cliente</li>
                  <li>Personalizar sua experiência</li>
                  <li>Enviar informações de marketing (com seu consentimento)</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  3. Compartilhamento de Informações
                </h2>
                <p>
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing sem seu consentimento explícito. Podemos compartilhar informações em circunstâncias limitadas, como:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Com prestadores de serviços que nos ajudam a operar nosso negócio</li>
                  <li>Para cumprir obrigações legais</li>
                  <li>Para proteger nossos direitos e propriedade</li>
                  <li>Com seu consentimento explícito</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  4. Segurança dos Dados
                </h2>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  5. Seus Direitos
                </h2>
                <p>
                  Você tem o direito de:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir informações imprecisas</li>
                  <li>Solicitar a exclusão de suas informações</li>
                  <li>Retirar seu consentimento a qualquer momento</li>
                  <li>Portabilidade de dados</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  6. Cookies
                </h2>
                <p>
                  Nosso site utiliza cookies para melhorar sua experiência de navegação. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  7. Alterações nesta Política
                </h2>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas através de nosso site ou por email.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  8. Contato
                </h2>
                <p>
                  Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
                </p>
                <ul className="list-none mt-2 space-y-1">
                  <li>Email: contato@biodelle.com</li>
                  <li>WhatsApp: (42) 99847-7232</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
