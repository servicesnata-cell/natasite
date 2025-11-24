import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Transforming Businesses Through Technology Excellence',
    description:
      'Your trusted partner for innovative solutions in cloud computing, AI, and digital transformation',
    bg: 'linear-gradient(to right, #003B8A, #007BFF)', // blue gradient
  },
  {
    title: 'Driving Business Innovation',
    subtitle: 'Strategic Solutions for Modern Enterprises',
    description:
      'Empowering organizations with cutting-edge technology and expert guidance',
    bg: 'linear-gradient(to right, #ffffff, #dbe9ff)', // white to light blue gradient
  },
  {
    title: 'Global Excellence in Consulting',
    subtitle: 'Your Success is Our Mission',
    description:
      'Delivering world-class consultancy services across India and USA',
    bg: 'linear-gradient(to right, #007BFF, #00A3FF)', // another blue gradient
  },
];

export default function GalaxyHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; // Don't auto-advance if paused
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden bg-gradient-to-br from-blue-700 to-blue-950">
      <style>{`
        @keyframes glideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-40px) translateX(30px); }
          50% { transform: translateY(-80px) translateX(0px); }
          75% { transform: translateY(-40px) translateX(-30px); }
        }
        @keyframes popOut {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1.1); }
        }
        .glide-up-h1 { animation: glideUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .glide-up-p { animation: glideUp 0.8s ease-out 0.4s forwards; opacity: 0; }
        .glide-up-desc { animation: glideUp 0.8s ease-out 0.6s forwards; opacity: 0; }
        .glide-up-buttons { animation: glideUp 0.8s ease-out 0.8s forwards; opacity: 0; }
        .floating-ball {
          position: absolute;
          border-radius: 0%;
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }
        .hero-button {
          transition: all 0.3s ease;
        }
        .hero-button:hover {
          animation: popOut 0.4s ease-out forwards;
        }
      `}</style>

      {/* Animated floating cubes background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(36)].map((_, i) => (
          <div
            key={`ball-${i}`}
            className="floating-ball"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ background: index === currentSlide ? 'transparent' : slide.bg }}
        >
          <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4 md:px-6">
            <div className="max-w-5xl mx-auto text-center w-full">
              <h1 className="glide-up-h1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight px-2">
                {slide.title}
              </h1>
              <p className="glide-up-p text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-3 sm:mb-4 md:mb-6 font-medium px-2">
                {slide.subtitle}
              </p>
              <p className="glide-up-desc text-xs sm:text-sm md:text-base lg:text-lg text-white/70 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                {slide.description}
              </p>
              <div className="glide-up-buttons flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center px-2 w-full">
                <a
                  href="#services"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="hero-button px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 rounded-md text-xs sm:text-sm md:text-base min-h-[44px] flex items-center justify-center"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="hero-button px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-transparent text-white font-semibold border-2 border-white/40 hover:border-white/80 transition-all duration-300 rounded-md text-xs sm:text-sm md:text-base min-h-[44px] flex items-center justify-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Dots */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 md:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full touch-target ${
              index === currentSlide
                ? 'bg-white w-6 h-2 sm:w-8 sm:h-2.5'
                : 'bg-white/30 hover:bg-white/50 w-2 h-2 sm:w-2.5 sm:h-2.5'
            }`}
            style={{ minHeight: '40px', minWidth: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          />
        ))}
      </div>
    </div>
  );
}
