import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    id: '1',
    question: 'Como funciona o processo de coleta?',
    answer: 'Nossa máquina utiliza tecnologia avançada de reconhecimento para identificar e classificar automaticamente os materiais recicláveis.'
  },
  {
    id: '2',
    question: 'Quais tipos de resíduos podem ser reciclados?',
    answer: 'Nossas máquinas aceitam diversos tipos de materiais recicláveis, incluindo garrafas PET, latas de alumínio, embalagens de vidro e papelão.'
  },
  {
    id: '3',
    question: 'Quais são as opções de personalização da máquina?',
    answer: 'Oferecemos personalização completa, incluindo cores corporativas, logotipos e interface do usuário customizada.'
  },
  {
    id: '4',
    question: 'Qual o prazo de entrega e instalação?',
    answer: 'O prazo médio é de 45 dias para entrega e instalação completa, incluindo personalização e configuração.'
  }
];

export function FAQ() {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const toggleFAQ = (id: string) => {
    setIsOpen(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="faq" className="py-16 bg-[#404041]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className="border border-gray-100 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(item.id)}
              >
                <span className="font-semibold text-gray-100" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-100 transition-transform ${isOpen[item.id] ? 'transform rotate-180' : ''}`}
                />
              </button>
              {isOpen[item.id] && (
                <div className="px-6 pb-4">
                  <p className="text-gray-100" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
