const scrollToForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
};

export function Header() {
  return (
    <header className="fixed w-full bg-white z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="https://w7startup.com.br/img/ecoloop_logo.png" alt="" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-600 hover:text-green-600">Benefícios</a>
            <a href="#clients" className="text-gray-600 hover:text-green-600">Clientes</a>
            <a href="#testimonials" className="text-gray-600 hover:text-green-600">Depoimentos</a>
            <a href="#faq" className="text-gray-600 hover:text-green-600">FAQ</a>
            <button onClick={scrollToForm} className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Fale Conosco
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}