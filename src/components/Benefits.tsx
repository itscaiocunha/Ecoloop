import { Leaf, DollarSign, Users, Award } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Demonstre seu compromisso com práticas ESG e contribua para um futuro mais sustentável.'
  },
  {
    icon: DollarSign,
    title: 'Economia',
    description: 'Reduza custos operacionais e de descarte com nossa solução integrada.'
  },
  {
    icon: Users,
    title: 'Engajamento Social',
    description: 'Atraia e fidelize consumidores ao promover práticas sustentáveis.'
  },
  {
    icon: Award,
    title: 'Impacto Positivo',
    description: 'Fortaleça a imagem da sua marca com ações concretas de sustentabilidade.'
  }
];

const features = [
  {
    title: 'Integração Completa',
    description: 'Compatível com sistemas corporativos existentes e fluxo de trabalho'
  },
  {
    title: 'Tecnologia Avançada',
    description: 'Sistema automatizado com IA para identificação e separação precisa de materiais'
  },
  {
    title: 'Dados em Tempo Real',
    description: 'Monitoramento e relatórios detalhados para tomada de decisão'
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Por que Adotar a Solução da Ecoloop?
          </h2>
          <p className="text-lg text-gray-600">
            Descubra como nossas máquinas de reciclagem podem transformar sua empresa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <div className="mb-4">
                <benefit.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">
              Veja como nossa solução de reciclagem automatizada está transformando a gestão de resíduos em grandes corporações.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <iframe 
              className="w-full max-w-3xl h-64 md:h-96 rounded-lg shadow-lg"
              src="https://youtu.be/9KZyUQpihsE?si=hWbgwbgOuMyaVGPi"
              title="Vídeo sobre a solução de reciclagem"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}