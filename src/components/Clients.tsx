import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const clients = [
  { name: 'GPA', logo: 'https://w7startup.com.br/img/GPA_logo.png' },
  { name: 'Sodexo', logo: 'https://w7startup.com.br/img/Sodexo_logo.png' },
  { name: 'Coca-Cola', logo: 'https://w7startup.com.br/img/cocacola-logo.png' },
  { name: 'Moog', logo: 'https://w7startup.com.br/img/Moog_logo.png' },
  { name: 'RD', logo: 'https://w7startup.com.br/img/rdSaude_logo.png' },
  { name: 'Coca-Cola', logo: 'https://w7startup.com.br/img/cocacola-logo.png' },
  { name: 'Moog', logo: 'https://w7startup.com.br/img/Moog_logo.png' },
  { name: 'RD', logo: 'https://w7startup.com.br/img/rdSaude_logo.png' }
];

export function Clients() {
  return (
    <section id="clients" className="py-16 bg-[#404041]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Empresas que já confiam na Ecoloop
          </h2>
          <p className="text-lg text-gray-100" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Mais de 200 máquinas que transformaram a gestão de resíduos das empresas
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 }
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className="mb-12"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center w-36 h-36">
                <img src={client.logo} alt={client.name} className="w-28 h-28 object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
