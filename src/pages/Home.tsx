import GalaxyHero from '../components/GalaxyHero';
import ServicesCarousel from '../components/ServicesCarousel';
import { Users, Globe, Award, TrendingUp, CheckCircle, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';


export default function Home() {
  
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Auto-flip effect
  useEffect(() => {
    if (isHovered) return; // Pause auto-flip when hovering

    const intervalId = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [isHovered]);
  
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled professionals with years of industry experience',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across India and USA with local expertise',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Successful delivery of 500+ projects for diverse industries',
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Drive measurable results and accelerate your business growth',
    },
  ];

  

  return (
    <div className="bg-black">
      <GalaxyHero />

      <ServicesCarousel />

      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-cyan-400">NCS</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We deliver exceptional value through expertise, innovation, and dedication
            </p>
          </div>

          <div className="relative max-w-lg mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-3 bg-cyan-500 hover:bg-cyan-400 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/50 text-black"
              aria-label="Previous feature"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => setCurrentFeature((prev) => (prev + 1) % features.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-3 bg-cyan-500 hover:bg-cyan-400 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/50 text-black"
              aria-label="Next feature"
            >
              <ChevronRight size={24} />
            </button>

            {/* Card Container */}
            <div 
              className="relative h-[400px] perspective-1000"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return index === currentFeature ? (
                    <motion.div
                      key={index}
                      initial={{ rotateY: -90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: 90, opacity: 0 }}
                      transition={{
                        duration: 0.1,
                        ease: "easeOut"
                      }}
                      className="absolute inset-0 preserve-3d backface-hidden"
                    >
                      <div className="relative h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-cyan-400/20">
                          <Icon className="text-black" size={48} />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-lg max-w-sm">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ) : null;
                })}
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentFeature 
                      ? 'w-8 bg-cyan-400' 
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Business with{' '}
                <span className="text-cyan-400">Digital Excellence</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                At Nata Consultancy Services, we combine cutting-edge technology with deep industry
                expertise to deliver solutions that drive real business impact. Our comprehensive
                approach ensures seamless integration and sustainable growth.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'End-to-end digital transformation strategies',
                  'Scalable cloud infrastructure solutions',
                  'Advanced AI and ML implementation',
                  '24/7 dedicated support and maintenance',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/about"
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/50"
              >
                Learn More About Us
              </a>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
                <img
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business transformation"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-cyan-400">Impact</span>
            </h2>
            <p className="text-gray-300 text-lg">Delivering measurable results for our clients</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '200+', label: 'Happy Clients' },
              { number: '50+', label: 'Expert Team' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Zap className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's discuss how we can help you achieve your goals with our innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/50"
            >
              Get Started Today
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
