import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Costa',
    role: 'Gerente de Operações',
    company: 'GPA',
    text: 'A implementação das máquinas Ecoloop transformou significativamente nossa operação e melhorou significativamente nosso impacto ambiental.'
  },
  {
    name: 'Carlos Santos',
    role: 'Diretor de Sustentabilidade',
    company: 'Sodexo',
    text: 'Os resultados obtidos e a facilidade de uso das máquinas superaram todas as nossas expectativas. Um investimento que realmente vale a pena.'
  },
  {
    name: 'Patricia Lima',
    role: 'CEO',
    company: 'RD',
    text: 'A parceria com a Ecoloop nos ajudou a atingir nossas metas de sustentabilidade e melhorou o engajamento dos nossos colaboradores.'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            O que Nossos Clientes Dizem?
          </h2>
          <p className="text-lg text-gray-600">
            Descubra como estamos transformando empresas em referências de sustentabilidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} - {testimonial.company}</p>
                </div>
              </div>
              <div className="relative">
                
                <Quote className="h-8 w-8 text-green-100 absolute -top-4 -left-2" />
                <p className="text-gray-600 relative z-10 pl-4">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}