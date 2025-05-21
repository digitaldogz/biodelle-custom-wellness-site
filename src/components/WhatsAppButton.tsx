
import React from 'react';
import { MessageSquare } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  fixed?: boolean; // Nova propriedade para controlar se o botão é fixo ou não
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber,
  message = "Olá! Gostaria de mais informações sobre os produtos da Biodelle.",
  fixed = true // Por padrão, mantemos o botão fixo
}) => {
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;

  // Classe base do botão
  const buttonClasses = "flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:scale-105 transition-transform duration-300 group";
  
  // Container classe baseado na propriedade fixed
  const containerClasses = fixed 
    ? "fixed bottom-6 right-6 z-50" 
    : "flex justify-center my-8";

  return (
    <div className={containerClasses}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        aria-label="Contato via WhatsApp"
      >
        <MessageSquare className="w-8 h-8 text-white" />
        <span className="absolute right-full mr-3 bg-white px-3 py-2 rounded-lg shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Fale conosco
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
