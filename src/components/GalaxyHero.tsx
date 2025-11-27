import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Transforming Businesses Through Technology Excellence',
    description:
      'Your trusted partner for innovative solutions in cloud computing, AI, and digital transformation',
  },
  {
    title: 'Driving Business Innovation',
    subtitle: 'Strategic Solutions for Modern Enterprises',
    description:
      'Empowering organizations with cutting-edge technology and expert guidance',
  },
  {
    title: 'Global Excellence in Consulting',
    subtitle: 'Your Success is Our Mission',
    description:
      'Delivering world-class consultancy services across India and USA',
  },
];

export default function GalaxyHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [key, setKey] = useState(0);
  const slideDuration = 7;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % slides.length;
        setKey((k) => k + 1);
        return next;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setKey((k) => k + 1);
  };

  return (
    <>
      <style>{`
        :root {
          --hero-title-size: clamp(2.2rem, 4vw + 1rem, 4.5rem);
          --hero-sub-size: clamp(1.1rem, 2vw + 0.4rem, 1.8rem);
          --hero-desc-size: clamp(0.9rem, 1.3vw + 0.2rem, 1.25rem);
          --brand-blue: #1e3a8a;
          --text-glow: rgba(255, 255, 255, 0.35);
        }

          @keyframes zoomOut {
            0% {
              transform: scale(1.06);
              filter: brightness(1);
            }
            100% {
              transform: scale(1);
              filter: brightness(1);
            }
          }

        @keyframes glideUpText {
          0% { opacity: 0; transform: translateY(28px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .hero-zoom { will-change: transform, filter; }

        .glide-up-h1, .glide-up-p, .glide-up-desc, .glide-up-buttons {
          animation: glideUpText 0.65s ease-out forwards;
        }
        .glide-up-h1 { animation-delay: 0.1s; }
        .glide-up-p { animation-delay: 0.22s; }
        .glide-up-desc { animation-delay: 0.33s; }
        .glide-up-buttons { animation-delay: 0.45s; }

        /* Premium heading */
        .hero-text {
          color: #ffffffff;
          font-weight: 800;
          font-family: "Inter", "SF Pro Display", system-ui;
          line-height: 1.15;
          letter-spacing: -0.8px;
          font-size: var(--hero-title-size);
          text-shadow:
            0 4px 14px rgba(0, 0, 0, 0.36),
            0 0 22px var(--text-glow);
        }

        /* Subtitle */
        .hero-sub {
          color: #000000ff;
          font-family: "Inter", "SF Pro Text", system-ui;
          font-weight: 500;
          letter-spacing: 0.2px;
          font-size: var(--hero-sub-size);
          opacity: 0.95;
          text-shadow: 0 2px 8px rgba(0,0,0,0.18);
        }

        /* Description */
        .hero-desc {
          color: #000000ff;
          font-family: "Inter", "SF Pro Text", system-ui;
          font-weight: 400;
          line-height: 1.55;
          font-size: var(--hero-desc-size);
          max-width: 640px;
          margin: 0 auto;
          opacity: 0.92;
          text-shadow: 0 2px 6px rgba(0,0,0,0.14);
        }

        /* Premium buttons */
        .hero-button {
          background: linear-gradient(135deg, #1e40af, #1e3a8a);
          color: white;
          font-weight: 600;
          border-radius: 0.65rem;
          padding: 12px 26px;
          font-size: 0.95rem;
          letter-spacing: 0.3px;
          transition: all 0.3s ease;
          box-shadow:
            0 6px 18px rgba(30, 58, 138, 0.25),
            inset 0 0 0 0 rgba(255,255,255,0.2);
        }

        .hero-button:hover {
          background: linear-gradient(135deg, #243da1, #1f2f74);
          transform: translateY(-2px);
          box-shadow:
            0 12px 28px rgba(30, 58, 138, 0.32),
            inset 0 0 0 1px rgba(255,255,255,0.25);
        }

        /* Premium slide dots */
        .premium-dot-active {
          background: white;
          width: 26px;
          height: 10px;
          border-radius: 9999px;
        }
        .premium-dot {
          background: rgba(255,255,255,0.35);
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          backdrop-filter: blur(4px);
          transition: all 0.25s ease;
        }
        .premium-dot:hover {
          background: rgba(255,255,255,0.6);
        }
      `}</style>

      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden overflow-x-hidden">
        {/* Background layer: only this element animates (zoomOut) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hh.jpg')",
            animation: `zoomOut ${slideDuration}s ease-out forwards`,
          }}
          key={key}
        />

        {/* Overlay to improve contrast (non-animating) */}
        <div className="absolute inset-0 bg-black/30" aria-hidden />

        <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center w-full px-2">
            <div>
              <h1 className="glide-up-h1 hero-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                {slides[currentSlide].title}
              </h1>
              <p className="py-4 glide-up-desc hero-sub text-sm sm:text-base md:text-lg lg:text-xl mb-4 leading-relaxed px-2 max-w-3xl mx-auto">
                {slides[currentSlide].subtitle ? `${slides[currentSlide].subtitle} — ${slides[currentSlide].description}` : slides[currentSlide].description}
              </p>

              <div className="py-2 glide-up-buttons flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center px-2 w-full">
                <a
                  href="#services"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="hero-button inline-flex items-center justify-center min-h-[44px] px-4 sm:px-6 rounded-lg"
                >
                  Explore Services
                </a>

                <a
                  href="/contact"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="hero-button inline-flex items-center justify-center min-h-[44px] px-4 sm:px-6 rounded-lg"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={
                index === currentSlide
                  ? 'premium-dot-active'
                  : 'premium-dot'
              }
              style={{
                minHeight: '40px',
                minWidth: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
