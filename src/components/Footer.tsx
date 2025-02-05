import { MapPin, Phone, Mail, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[url('https://w7startup.com.br/img/Paper.jpg')] bg-cover bg-center text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="https://w7startup.com.br/img/ecoloop_logo.png" alt="" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-black">Av. Paulista, 1000 - São Paulo, SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-black">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-black">contato@ecoloop.com.br</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-green-600">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/ecoloop-br/" className="text-green-600 hover:text-black">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/ecoloop.br/" className="text-green-600 hover:text-black">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-black">&copy; 2024 Ecoloop. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}