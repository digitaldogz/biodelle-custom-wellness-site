import React, { useState } from 'react';
import { FileImage, Activity, Heart, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';
type QuizStep = 1 | 2 | 3;
type QuizOption = {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
};
const quizOptions: QuizOption[] = [{
  id: "anti-aging",
  icon: <FileImage className="text-biodelle-terracotta" size={28} />,
  title: "Pele Radiante e Jovem",
  description: "Anti-idade, manchas, hidratação"
}, {
  id: "performance",
  icon: <Activity className="text-biodelle-moss" size={28} />,
  title: "Performance e Energia",
  description: "Esportes, disposição diária"
}, {
  id: "well-being",
  icon: <Heart className="text-biodelle-terracotta" size={28} />,
  title: "Bem-Estar Integral",
  description: "Menopausa, sono, imunidade"
}, {
  id: "weight-loss",
  icon: <Scale className="text-biodelle-moss" size={28} />,
  title: "Suporte ao Emagrecimento Saudável",
  description: "Metabolismo, controle do apetite"
}];
const QuizSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<QuizStep>(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [supplements, setSupplements] = useState<string>("");
  const [restrictions, setRestrictions] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [otherRestriction, setOtherRestriction] = useState<string>("");
  const handleOptionSelect = (id: string) => {
    setSelectedOption(id);
  };
  const handleRestrictionToggle = (restriction: string) => {
    setRestrictions(prev => prev.includes(restriction) ? prev.filter(r => r !== restriction) : [...prev, restriction]);
  };
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1 as QuizStep);
    }
  };
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1 as QuizStep);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      // Reset form after 5 seconds for demo purposes
      setTimeout(() => {
        setCurrentStep(1);
        setSelectedOption(null);
        setSupplements("");
        setRestrictions([]);
        setName("");
        setWhatsapp("");
        setAgreeTerms(false);
        setShowSuccess(false);
        setOtherRestriction("");
      }, 5000);
    }, 1500);
  };
  return <section id="quiz-section" className="section-padding bg-biodelle-offwhite">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-heading-2 text-center mb-4 text-4xl font-medium">
          Sua Jornada de Bem-Estar Começa Aqui.
        </h2>
        <p className="text-center text-biodelle-text/70 max-w-2xl mx-auto mb-12">
          Responda a algumas perguntas rápidas e permita que nossos especialistas criem uma recomendação 
          de fórmula exclusiva para seus objetivos de saúde e beleza. É simples, rápido e confidencial.
        </p>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-biodelle-beige/30 h-2">
            <div className="bg-biodelle-terracotta h-full transition-all duration-300 ease-out" style={{
            width: `${currentStep / 3 * 100}%`
          }}></div>
          </div>
          
          <div className="p-6 md:p-10">
            {showSuccess ? <div className="text-center py-10 animate-scale-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-garet font-normal mb-3 tracking-wide">Obrigado por compartilhar suas informações!</h3>
                <p className="text-biodelle-text/70 max-w-md mx-auto">
                  Em breve, um de nossos especialistas entrará em contato via WhatsApp 
                  para fornecer sua análise personalizada.
                </p>
              </div> : <form onSubmit={handleSubmit}>
                {/* Step 1: Main goal selection */}
                <div className={cn("transition-all duration-300 ease-in-out", currentStep === 1 ? "animate-scale-in" : "hidden")}>
                  <h3 className="text-xl md:text-2xl font-garet font-normal mb-6 tracking-wide">
                    Qual seu principal objetivo hoje?
                  </h3>
                  <div className="space-y-4">
                    {quizOptions.map(option => <div key={option.id} className={cn("quiz-option", selectedOption === option.id && "border-biodelle-terracotta bg-biodelle-offwhite")} data-selected={selectedOption === option.id} onClick={() => handleOptionSelect(option.id)}>
                        <div className="flex-shrink-0">{option.icon}</div>
                        <div>
                          <h4 className="font-medium">{option.title}</h4>
                          <p className="text-sm text-biodelle-text/70">{option.description}</p>
                        </div>
                      </div>)}
                  </div>
                </div>

                {/* Step 2: Current supplements */}
                <div className={cn("transition-all duration-300 ease-in-out", currentStep === 2 ? "animate-scale-in" : "hidden")}>
                  <h3 className="text-xl md:text-2xl font-garet font-normal mb-6 tracking-wide">
                    Você já utiliza algum suplemento ou dermocosmético?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex space-x-4">
                      <button type="button" className={cn("px-6 py-2 border-2 rounded-md transition-all", supplements ? "border-biodelle-moss bg-biodelle-moss text-white" : "border-gray-300")} onClick={() => setSupplements("Sim")}>
                        Sim
                      </button>
                      <button type="button" className={cn("px-6 py-2 border-2 rounded-md transition-all", supplements === "Não" ? "border-biodelle-moss bg-biodelle-moss text-white" : "border-gray-300")} onClick={() => setSupplements("Não")}>
                        Não
                      </button>
                    </div>
                    
                    {supplements === "Sim" && <div className="animate-fade-in mt-4">
                        <label className="block mb-2 text-sm font-medium">Quais produtos você utiliza atualmente?</label>
                        <textarea className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-biodelle-terracotta" rows={3} placeholder="Por favor, descreva os produtos que você usa atualmente..."></textarea>
                      </div>}
                  </div>
                </div>

                {/* Step 3: Restrictions and contact information */}
                <div className={cn("transition-all duration-300 ease-in-out", currentStep === 3 ? "animate-scale-in" : "hidden")}>
                  <h3 className="text-xl md:text-2xl font-garet font-normal mb-6 tracking-wide">
                    Restrições e Informações para Contato
                  </h3>
                  
                  <div className="mb-6">
                    <label className="block mb-3 font-medium">Possui alguma restrição ou preferência importante?</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["Vegano", "Sem Glúten", "Sem Fragrância", "Hipoalergênico"].map(restriction => <label key={restriction} className={cn("flex items-center p-3 border-2 rounded-md cursor-pointer transition-all", restrictions.includes(restriction) ? "border-biodelle-moss bg-biodelle-offwhite" : "border-gray-200")}>
                          <input type="checkbox" className="sr-only" checked={restrictions.includes(restriction)} onChange={() => handleRestrictionToggle(restriction)} />
                          <span className="w-5 h-5 mr-3 border-2 rounded flex items-center justify-center">
                            {restrictions.includes(restriction) && <span className="w-3 h-3 bg-biodelle-moss rounded-sm"></span>}
                          </span>
                          {restriction}
                        </label>)}
                    </div>
                    <div className="mt-3">
                      <label htmlFor="otherRestriction" className="block mb-2 text-sm font-medium">
                        Outra restrição:
                      </label>
                      <input id="otherRestriction" type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-biodelle-terracotta" placeholder="Especifique qualquer outra restrição..." value={otherRestriction} onChange={e => setOtherRestriction(e.target.value)} />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">Nome</label>
                      <input id="name" type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-biodelle-terracotta" placeholder="Seu nome completo" required value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium">WhatsApp</label>
                      <input id="whatsapp" type="tel" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-biodelle-terracotta" placeholder="(00) 00000-0000" required value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-biodelle-terracotta" required checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} />
                      </div>
                      <label htmlFor="terms" className="ml-2 text-sm text-biodelle-text/70">
                        Li e concordo com a <a href="#" className="text-biodelle-terracotta hover:underline">Política de Privacidade</a>
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Navigation buttons */}
                <div className="mt-8 flex flex-wrap gap-3 justify-between">
                  {currentStep > 1 && <button type="button" className="border border-biodelle-moss text-biodelle-moss px-6 py-2 rounded-md transition-all hover:bg-biodelle-moss/10" onClick={handleBack}>
                      Voltar
                    </button>}
                  <div className="ml-auto">
                    {currentStep < 3 && <button type="button" className="biodelle-btn-primary" onClick={handleNext} disabled={currentStep === 1 && !selectedOption || currentStep === 2 && !supplements}>
                        Próximo
                      </button>}
                    {currentStep === 3 && <button type="submit" className="biodelle-btn-primary flex items-center" disabled={!name || !whatsapp || !agreeTerms || isSubmitting}>
                        {isSubmitting ? <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                          </> : "Receber Minha Análise Personalizada"}
                      </button>}
                  </div>
                </div>
              </form>}
          </div>
        </div>
      </div>
    </section>;
};
export default QuizSection;