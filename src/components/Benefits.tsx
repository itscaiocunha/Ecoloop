import { Leaf, DollarSign, Users, Award } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Promova a economia circular ao garantir a destinação correta dos resíduos e reduzir o impacto ambiental do descarte inadequado.'
  },
  {
    icon: DollarSign,
    title: 'Economia',
    description: 'Redução de custos de logística reversa e atenção às legislações ambientais, além de agregar valor à marca e atrair consumidores conscientes.'
  },
  {
    icon: Users,
    title: 'Engajamento Social',
    description: 'Incentive a participação da comunidade e das empresas em práticas sustentáveis, criando um impacto social positivo.'
  },
  {
    icon: Award,
    title: 'Impacto Positivo',
    description: 'Transforme hábitos de descarte, reduzindo a poluição e melhorando a qualidade de vida das cidades'
  }
];

const features = [
  {
    title: 'Ecovision - Tecnologia de IA',
    description: 'A tecnologia proprietária identifica e classifica embalagens, mesmo danificadas ou sem rótulo, garantindo alta precisão no reconhecimento dos resíduos.'
  },
  {
    title: 'Econet - Monitoramento em tempo real',
    description: 'A conexão 4G permite acompanhar remotamente o status das máquinas, otimizando a logística de coleta e reduzindo custos operacionais.'
  },
  {
    title: 'Gamificação e Recompensas',
    description: 'A plataforma integrada permite pontuação, cashback e doações, tornando o descarte de resíduos uma experiência engajadora e incentivando maior adesão dos consumidores.'
  }  
];

export function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-gray-50" style={{ backgroundImage: 'url(/fundo.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Por que adotar a solução da Ecoloop?
          </h2>
          <p className="text-lg text-white" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Descubra como nossas máquinas de reciclagem podem transformar sua empresa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <div className="mb-4">
                <benefit.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>{benefit.title}</h3>
              <p className="text-gray-600 text-sm text-justify" style={{ fontFamily: 'Roboto, sans-serif' }}>{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-100" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Veja como nossa solução de reciclagem automatizada está transformando a gestão de resíduos em grandes corporações.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <iframe 
              className="w-full max-w-3xl h-64 md:h-96 rounded-lg shadow-lg"
              src="https://w7startup.com.br/img/video_institucional.mp4"
              title="Vídeo sobre a solução de reciclagem"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen>
            </iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>{feature.title}</h3>
                <p className="text-gray-600 text-sm text-justify" style={{ fontFamily: 'Roboto, sans-serif' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
