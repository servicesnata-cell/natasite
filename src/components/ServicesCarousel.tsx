import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Server, DollarSign, Code, Cloud, Brain, TrendingUp, Database, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


const services = [
    {
      id: 'bpo',
      name: 'BPO',
      description: 'Business Process Outsourcing solutions to streamline your operations',
      icon: Server,
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'payrolls',
      name: 'Payrolls',
      description: 'Comprehensive payroll management and processing services',
      icon: DollarSign,
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'devops',
      name: 'DevOps',
      description: 'Modern DevOps practices to accelerate your delivery pipeline',
      icon: Code,
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'cloud',
      name: 'Cloud Solutions',
      description: 'Azure, AWS, and Google Cloud infrastructure and migration',
      icon: Cloud,
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'ai',
      name: 'Artificial Intelligence',
      description: 'AI-powered solutions to transform your business intelligence',
      icon: Brain,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'ml',
      name: 'Machine Learning',
      description: 'Custom ML models and predictive analytics solutions',
      icon: TrendingUp,
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'etl',
      name: 'ETL',
      description: 'Extract, Transform, Load data pipelines and integration',
      icon: Database,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'staffing',
      name: 'Staffing',
      description: 'Global staffing solutions across India and USA',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const totalServices = services.length;
  const radius = 600; // Radius of the circular path

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(prev => (prev + 1) % totalServices);
        setTimeout(() => setIsAnimating(false), 500); 
      }
    }, 4000);
    
    return () => clearInterval(interval); 
  }, [isAnimating, totalServices]);

  const calculatePosition = (index: number, currentIndex: number) => {
    const angleStep = (2 * Math.PI) / totalServices;
    const angle = angleStep * (index - currentIndex);
    
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius - radius;
    
    // Calculate distance from center (0-1 range)
    const distance = Math.abs(angle) / Math.PI;
    const scale = 1 - distance * 0.3; // Scale down items further from center
    const blur = Math.min(distance * 8, 4); // Blur based on distance
    
    return {
      x,
      z,
      scale,
      blur,
      rotateY: -angle * (180 / Math.PI), // Rotate cards to face center
    };
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalServices);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalServices) % totalServices);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const backgroundImage = services[currentIndex]?.image;

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to drive your business forward
          </p>
        </div>

        <div className="relative" style={{ perspective: '1500px', height: '600px' }}>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/50 text-black"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/50 text-black"
          >
            <ChevronRight size={24} />
          </button>

          {/* 3D Carousel Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="relative"
              style={{ 
                transformStyle: 'preserve-3d',
                width: '300px',
                height: '400px',
              }}
            >
              <AnimatePresence>
                {services.map((service, index) => {
                  const position = calculatePosition(index, currentIndex);
                  const Icon = service.icon;
                  
                  return (
                    <motion.div
                      key={service.id}
                      initial={false}
                      animate={{
                        x: position.x,
                        z: position.z,
                        scale: position.scale,
                        rotateY: position.rotateY,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      style={{
                        position: 'absolute',
                        width: '300px',
                        transformOrigin: 'center center',
                        filter: `blur(${position.blur}px)`,
                        zIndex: Math.round(position.z) * -1,
                      }}
                    >
                      <Link
                        to={`/services/${service.id}`}
                        className="block w-full rounded-2xl overflow-hidden transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,191,255,0.8)]"
                        style={{ background: 'linear-gradient(to bottom right, #1e1e2f, #111)' }}
                      >
                        <div className="relative p-6 h-[400px]">
                          <div className="w-16 h-16 ">
                            <Icon className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" size={32} />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3">
                            {service.name}
                          </h3>
                          <p className="text-gray-300">
                            {service.description}
                          </p>
                          <div
                            className="absolute inset-0 bg-cover bg-center opacity-30"
                            style={{ backgroundImage: `url(${service.image})` }}
                          />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-cyan-400' 
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
