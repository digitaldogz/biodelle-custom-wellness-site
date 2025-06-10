
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermosUso = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-garet font-bold text-biodelle-text mb-8">
            Termos de Uso
          </h1>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6 text-biodelle-text/80">
              <p className="text-sm text-biodelle-text/60">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  1. Aceitação dos Termos
                </h2>
                <p>
                  Ao acessar e usar o site da Biodelle, você concorda em cumprir estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso site ou serviços.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  2. Descrição dos Serviços
                </h2>
                <p>
                  A Biodelle oferece produtos farmacêuticos personalizados, incluindo dermocosméticos e suplementos nutricionais. Nossos produtos são desenvolvidos com base em avaliação individual e orientação profissional especializada.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  3. Uso do Site
                </h2>
                <p>
                  Você se compromete a usar nosso site apenas para fins legais e de acordo com estes Termos. É proibido:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Usar o site de maneira que possa danificar, desabilitar ou prejudicar o site</li>
                  <li>Tentar obter acesso não autorizado ao site, sistemas ou redes</li>
                  <li>Usar dados coletados do site para fins comerciais sem autorização</li>
                  <li>Transmitir vírus ou código malicioso</li>
                  <li>Violar direitos de propriedade intelectual</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  4. Produtos e Serviços
                </h2>
                <p>
                  Nossos produtos são manipulados sob orientação farmacêutica e destinam-se ao uso pessoal conforme prescrição ou orientação profissional. É importante:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Seguir as instruções de uso fornecidas</li>
                  <li>Informar sobre alergias ou condições médicas</li>
                  <li>Consultar profissional de saúde quando necessário</li>
                  <li>Não compartilhar produtos personalizados com terceiros</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  5. Preços e Pagamento
                </h2>
                <p>
                  Os preços dos produtos estão sujeitos a alterações sem aviso prévio. O pagamento deve ser efetuado conforme as condições estabelecidas no momento da compra. Reservamos o direito de cancelar pedidos em caso de erro de preço ou disponibilidade.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  6. Entrega e Devolução
                </h2>
                <p>
                  Os prazos de entrega são estimativas e podem variar conforme a localização e disponibilidade dos produtos. Produtos personalizados têm políticas específicas de devolução devido à sua natureza customizada.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  7. Propriedade Intelectual
                </h2>
                <p>
                  Todo o conteúdo do site, incluindo textos, imagens, logotipos, e design, é propriedade da Biodelle e está protegido por leis de direitos autorais e marcas registradas.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  8. Limitação de Responsabilidade
                </h2>
                <p>
                  A Biodelle não se responsabiliza por danos indiretos, incidentais ou consequenciais decorrentes do uso de nossos produtos ou serviços, exceto nos casos previstos em lei.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  9. Modificações dos Termos
                </h2>
                <p>
                  Reservamos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  10. Lei Aplicável
                </h2>
                <p>
                  Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes do Brasil.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-inter font-semibold text-biodelle-text mb-4">
                  11. Contato
                </h2>
                <p>
                  Para esclarecimentos sobre estes Termos de Uso, entre em contato:
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

export default TermosUso;
