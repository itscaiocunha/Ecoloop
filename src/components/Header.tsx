import { Recycle } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-white z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Recycle className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">Ecoloop</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-600 hover:text-green-600">Benefícios</a>
            <a href="#clients" className="text-gray-600 hover:text-green-600">Clientes</a>
            <a href="#testimonials" className="text-gray-600 hover:text-green-600">Depoimentos</a>
            <a href="#faq" className="text-gray-600 hover:text-green-600">FAQ</a>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Fale Conosco
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}