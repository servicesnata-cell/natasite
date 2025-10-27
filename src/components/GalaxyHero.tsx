import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const slides = [
  {
    type: 'galaxy',
    title: 'Welcom to NCS',
    subtitle: 'Transforming Businesses Through Technology Excellence',
    description:
      'Your trusted partner for innovative solutions in cloud computing, AI, and digital transformation',
  },
  {
    type: 'image',
    title: 'Driving Business Innovation',
    subtitle: 'Strategic Solutions for Modern Enterprises',
    description:
      'Empowering organizations with cutting-edge technology and expert guidance',
    image:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    type: 'image',
    title: 'Global Excellence in Consulting',
    subtitle: 'Your Success is Our Mission',
    description:
      'Delivering world-class consultancy services across India and USA',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

export default function GalaxyHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // --- Initialize Galaxy Particles in a Circular Formation ---
  useEffect(() => {
    if (slides[currentSlide].type !== 'galaxy') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const radiusLimit = Math.min(centerX, centerY) * 12.2;
    const numArms = 14; // number of spiral arms
    const spiralFactor = 1.15; // controls tightness

    const newParticles: Particle[] = [];
    for (let i = 0; i < 1000; i++) {
      const arm = i % numArms;
      const baseAngle = (arm * (Math.PI * 2)) / numArms;
      const distance = Math.random() * radiusLimit;
      const angle = baseAngle + distance * spiralFactor + Math.random() * 0.2;

      newParticles.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        size: Math.random() * 1.8 + 0.3,
        speedX: 0,
        speedY: 0,
        opacity: Math.random() * 0.6 + 0.3,
      });
    }

    setParticles(newParticles);
  }, [currentSlide]);

  // --- Animate Circular Galaxy ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || slides[currentSlide].type !== 'galaxy') return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 1.7;
    let rotation = 0;
    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 10, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rotation += 0.0008; // galaxy rotation speed

      particles.forEach((p) => {
        const dx = p.x - centerX;
        const dy = p.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) + rotation;

        const tilt = 2 // smaller = more tilt
        const tiltAngle = 2 // radians; negative tilts upward left, positive downward right
        
        const x = centerX + Math.cos(angle) * dist * Math.cos(tiltAngle) - Math.sin(angle) * dist * Math.sin(tiltAngle);
        const y = centerY + (Math.sin(angle) * dist * Math.cos(tiltAngle) + Math.cos(angle) * dist * Math.sin(tiltAngle)) * tilt;

        const twinkle = Math.sin(Date.now() / 500 + dist) * 0.15;

        ctx.beginPath();
        ctx.arc(x, y, p.size + twinkle, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, p.size * 4);
        gradient.addColorStop(0, `rgba(96,165,250,${p.opacity * 0.7})`);
        gradient.addColorStop(1, 'rgba(96,165,250,0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // subtle glowing core
      const coreGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        120
      );
      coreGradient.addColorStop(0, 'rgba(0,180,255,0.35)');
      coreGradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [particles, currentSlide]);

  // --- Auto Slide Rotation ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'galaxy' ? (
            <div className="relative w-full h-full bg-black">
              <canvas ref={canvasRef} className="absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
            </div>
          ) : (
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/70" />
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
                {slide.title}
              </h1>
              <p className="text-2xl md:text-3xl text-cyan-400 mb-4 font-semibold">
                {slide.subtitle}
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/50"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-300 text-white border border-white/20"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-300 text-white border border-white/20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-cyan-400 w-8'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
