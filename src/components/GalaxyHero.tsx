import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Welcome to NCS',
    subtitle: 'Transforming Businesses Through Technology Excellence',
    description:
      'Your trusted partner for innovative solutions in cloud computing, AI, and digital transformation',
    image: '/h1.jpeg',
  },
  {
    title: 'Driving Business Innovation',
    subtitle: 'Strategic Solutions for Modern Enterprises',
    description:
      'Empowering organizations with cutting-edge technology and expert guidance',
    image: '/h21.jpeg',
  },
  {
    title: 'Global Excellence in Consulting',
    subtitle: 'Your Success is Our Mission',
    description:
      'Delivering world-class consultancy services across India and USA',
    image: '/h3.jpeg',
  },
];

export default function GalaxyHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden">
      <style>{`
        @keyframes glideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes zoomOut {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }
        .glide-up-h1 {
          animation: glideUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .glide-up-p {
          animation: glideUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        .glide-up-desc {
          animation: glideUp 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
        .glide-up-buttons {
          animation: glideUp 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }
        .zoom-out-bg {
          animation: zoomOut 1s ease-out forwards;
        }
      `}</style>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="relative w-full h-full bg-cover bg-center zoom-out-bg"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="glide-up-h1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
                {slide.title}
              </h1>
              <p className="glide-up-p text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-4 sm:mb-6 font-medium px-4">
                {slide.subtitle}
              </p>
              <p className="glide-up-desc text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                {slide.description}
              </p>
              <div className="glide-up-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <a
                  href="#services"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 rounded-md text-sm sm:text-base min-h-[44px] flex items-center justify-center"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent text-white font-semibold border-2 border-white/40 hover:border-white/80 transition-all duration-300 rounded-md text-sm sm:text-base min-h-[44px] flex items-center justify-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8 h-2.5'
                : 'bg-white/30 hover:bg-white/50 w-2.5 h-2.5'
            } rounded-full`}
          />
        ))}
      </div>
    </div>
  );
}