
const clients = [
  {
    name: 'GPA',
    logo: 'https://w7startup.com.br/img/GPA_logo.png'
  },
  {
    name: 'Sodexo',
    logo: 'https://w7startup.com.br/img/Sodexo_logo.png'
  },
  {
    name: 'Coca-Cola',
    logo: 'https://w7startup.com.br/img/cocacola-logo.png'
  },
  {
    name: 'Moog',
    logo: 'https://w7startup.com.br/img/Moog_logo.png'
  },
  {
    name: 'RD',
    logo: 'https://w7startup.com.br/img/rdSaude_logo.png'
  }
];

export function Clients() {
  return (
    <section id="clients" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Empresas que já confiam na Ecoloop
          </h2>
          <p className="text-lg text-gray-600">
            Junte-se a mais de 200 empresas que já transformaram sua gestão de resíduos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-12">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={client.name}
              className="h-24 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}