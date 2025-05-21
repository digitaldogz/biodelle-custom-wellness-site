
import React from 'react';
import { Phone } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber,
  message = "Olá! Gostaria de mais informações sobre os produtos da Biodelle."
}) => {
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;
  
  return (
    <div className="my-8 text-center">
      <h3 className="text-xl font-medium text-biodelle-moss mb-4">Fale conosco no WhatsApp</h3>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-white font-medium"
        aria-label="Contato via WhatsApp"
      >
        <Phone className="w-5 h-5 mr-2" />
        Iniciar conversa
      </a>
    </div>
  );
};

export default WhatsAppButton;
