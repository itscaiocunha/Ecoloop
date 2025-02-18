const scrollToForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
};

export function Hero() {
  return (
    <section className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Vamos <span className="text-green-600">reciclar</span>?<br />
              Transforme a sustentabilidade em um diferencial competitivo
            </h1>
            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Apresente sua empresa como uma referência em reciclagem. Nossas máquinas otimizam processos, engajam a sociedade e reforçam seu compromisso com o meio ambiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToForm} className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Solicitar Demonstração
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://w7startup.com.br/img/maquina-capa.png"
              alt="Máquina Ecoloop"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
