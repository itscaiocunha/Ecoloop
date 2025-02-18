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
    <section id="testimonials" className="py-8 bg-[#404041]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            O que Nossos Clientes Dizem?
          </h2>
          <p className="text-lg text-gray-100" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Descubra como estamos transformando empresas em referências de sustentabilidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4 relative">
                <Quote className="h-6 w-6 text-green-500 mr-2" />
                <div>
                  <h4 className="font-semibold text-gray-900" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 relative z-10" style={{ fontFamily: 'Roboto, sans-serif' }}>
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
