import { Recycle, MapPin, Phone, Mail, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Recycle className="h-8 w-8" />
              <span className="text-2xl font-bold">Ecoloop</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Av. Paulista, 1000 - São Paulo, SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">contato@ecoloop.com.br</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Carreiras</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">LGPD</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Ecoloop. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}