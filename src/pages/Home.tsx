import GalaxyHero from '../components/GalaxyHero';
import ServicesCarousel from '../components/ServicesCarousel';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';

// Clients list (inlined to remove separate Clients page)
export const clients = [
  {
    name: 'AutoDesk',
    logo: '/AutoDesk.svg',
    description:
      'Autodesk collaborates with Nata Consultancy Services to enhance digital design platforms, implementing cloud automation and AI-driven 3D modeling workflows.',
  },
  {
    name: 'CISCO',
    logo: '/Cisco.svg',
    description:
      'Partnering with Cisco to deliver robust network automation, cybersecurity, and intelligent infrastructure solutions across industries.',
  },
  {
    name: 'Dell Technologies',
    logo: '/Dell.svg',
    description:
      'Dell leverages Nata Consultancy’s cloud-native expertise for scalable infrastructure solutions, powering seamless business operations worldwide.',
  },
  {
    name: 'Johnson & Johnson',
    logo: '/JNJ.svg',
    description:
      'Collaborating with J&J to integrate digital healthcare technologies and data-driven insights that improve patient care globally.',
  },
  {
    name: 'Tesla',
    logo: '/Tesla.svg',
    description:
      'Supporting Tesla’s AI and IoT initiatives through intelligent analytics, cloud systems, and sustainable technology integration.',
  },
  {
    name: 'Walmart',
    logo: '/Walmart.svg',
    description:
      'Walmart partners with Nata Consultancy to optimize retail technology platforms, enhancing customer experiences through AI and automation.',
  },
];
import { useEffect, useRef, useState } from 'react';

// Animation hook for scroll-triggered effects
const useScrollReveal = (threshold = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};


export default function Home() {
  
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled professionals with years of industry experience',
      bgImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across India and USA with local expertise',
      bgImage: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Successful delivery of 500+ projects for diverse industries',
      bgImage: 'https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Drive measurable results and accelerate your business growth',
      bgImage: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  // Counter component with scroll animation
  const CounterComponent = ({ targetValue, label }: { targetValue: number; label: string }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let currentValue = 0;
            const step = Math.ceil(targetValue / 50); // Animate over ~50 steps for smooth effect
            const increment = () => {
              currentValue += step;
              if (currentValue >= targetValue) {
                setDisplayValue(targetValue);
              } else {
                setDisplayValue(currentValue);
                requestAnimationFrame(increment);
              }
            };
            increment();
          }
        },
        { threshold: 0.3 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, [targetValue]);

    return (
      <div ref={sectionRef} className="text-center">
        <div className="text-5xl md:text-6xl font-bold text-white mb-2">
          {displayValue}+
        </div>
        <div className="text-gray-400 text-base font-medium">{label}</div>
      </div>
    );
  };

  return (
    <div className="bg-black">
      <GalaxyHero />

      <ServicesCarousel />

      <section 
        className="py-56 relative transition-all duration-500"
        style={{
          backgroundImage: 'url(/naw1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Why Choose <span className="text-white">NCS</span>
            </h2>
            <p className="text-gray-300 text-2xl max-w-2xl mx-auto font-light">
              We deliver exceptional value through expertise, innovation, and dedication
            </p>
          </div>

          {/* Features Grid - Content only, no boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-10">
                    <div className="w-32 h-32 bg-white flex items-center justify-center">
                      <Icon className="text-black" size={64} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-xl leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl text-white font-semibold mb-4">Our Clients</h2>
            <p className="text-5xl text-white font-bold mb-4">Trusted by leading organizations across industries</p>
          </div>

          <div className="overflow-hidden bg-white">
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-track { display: flex; gap: 2rem; align-items: center; flex-wrap: nowrap; }
              .marquee-item { flex: 0 0 auto; }
              .marquee-track.animate { animation: marquee 20s linear infinite; }
            `}</style>

            <div className="marquee-track animate" aria-hidden={false}>
              {[...clients, ...clients].map((c, i) => (
                <div key={i} className="marquee-item flex items-center justify-center w-48 h-24">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-16 object-contain grayscale opacity-90 hover:opacity-100 transition"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=ffffff&color=111827&size=200&bold=true`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-white">Impact</span>
            </h2>
            <p className="text-gray-400 text-lg">Delivering measurable results for our clients</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterComponent targetValue={500} label="Projects Delivered" />
            <CounterComponent targetValue={200} label="Happy Clients" />
            <CounterComponent targetValue={50} label="Expert Team" />
            <CounterComponent targetValue={15} label="Years Experience" />
          </div>
        </div>
      </section>

      <section className="py-40 relative overflow-hidden" style={{
        backgroundImage: 'url(/cta.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        
        <style>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .step-visible {
            animation: slideInUp 0.6s ease-out forwards;
          }
          .step-visible.left-align {
            animation: slideInLeft 0.6s ease-out forwards;
          }
          .step-visible.right-align {
            animation: slideInRight 0.6s ease-out forwards;
          }
          .dot-visible {
            animation: slideInUp 0.6s ease-out forwards;
          }
        `}</style>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
              A clear, repeatable process<br />that takes you from discovery to delivery.
            </p>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto">
              Follow our proven methodology to transform your business goals into measurable results
            </p>
          </div>

          {/* Vertical Timeline: Central line with alternating steps */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central dotted line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400/40 via-purple-400/40 to-emerald-400/40 border-l-2 border-dashed border-white/20" style={{ top: '60px', bottom: 0 }}></div>

            {/* Timeline steps */}
            <div className="space-y-20 relative py-8">
              
              {/* Step 1 - Left Side */}
              {(() => {
                const { ref: step1Ref, isVisible: step1Visible } = useScrollReveal(0.2);
                return (
                  <div ref={step1Ref} className="flex items-center gap-8">
                    <div className="w-full md:w-5/12 text-right">
                      <div className={`bg-white/8 border border-white/20 rounded-lg p-6 hover:bg-white/12 transition-all duration-300 hover:shadow-lg ${
                        step1Visible ? 'step-visible left-align' : 'opacity-0'
                      }`}>
                        <div className="flex items-center justify-end gap-3 mb-3">
                          <div className="text-right">
                            <h4 className="text-xl font-bold text-cyan-300">Discover</h4>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/40 border border-cyan-300/50 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/30"></div>
                        </div>
                        <p className="text-gray-300 text-sm">Understand goals, stakeholders & constraints</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className={`w-4 h-4 rounded-full bg-cyan-400/50 border border-cyan-300 shadow-lg shadow-cyan-400/50 ${
                        step1Visible ? 'dot-visible' : 'opacity-0'
                      }`}></div>
                    </div>
                    <div className="md:w-5/12"></div>
                  </div>
                );
              })()}

              {/* Step 2 - Right Side */}
              {(() => {
                const { ref: step2Ref, isVisible: step2Visible } = useScrollReveal(0.2);
                return (
                  <div ref={step2Ref} className="flex items-center gap-8">
                    <div className="md:w-5/12"></div>
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className={`w-4 h-4 rounded-full bg-purple-400/50 border border-purple-300 shadow-lg shadow-purple-400/50 ${
                        step2Visible ? 'dot-visible' : 'opacity-0'
                      }`}></div>
                    </div>
                    <div className="w-full md:w-5/12">
                      <div className={`bg-white/8 border border-white/20 rounded-lg p-6 hover:bg-white/12 transition-all duration-300 hover:shadow-lg ${
                        step2Visible ? 'step-visible right-align' : 'opacity-0'
                      }`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/40 to-pink-500/40 border border-purple-300/50 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/30"></div>
                          <div>
                            <h4 className="text-xl font-bold text-purple-300">Plan</h4>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm">Roadmap, scope and milestones</p>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Step 3 - Left Side */}
              {(() => {
                const { ref: step3Ref, isVisible: step3Visible } = useScrollReveal(0.2);
                return (
                  <div ref={step3Ref} className="flex items-center gap-8">
                    <div className="w-full md:w-5/12 text-right">
                      <div className={`bg-white/8 border border-white/20 rounded-lg p-6 hover:bg-white/12 transition-all duration-300 hover:shadow-lg ${
                        step3Visible ? 'step-visible left-align' : 'opacity-0'
                      }`}>
                        <div className="flex items-center justify-end gap-3 mb-3">
                          <div className="text-right">
                            <h4 className="text-xl font-bold text-amber-300">Build</h4>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400/40 to-orange-500/40 border border-amber-300/50 flex items-center justify-center font-bold text-white shadow-lg shadow-amber-500/30"></div>
                        </div>
                        <p className="text-gray-300 text-sm">Design, development and iterative delivery</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className={`w-4 h-4 rounded-full bg-amber-400/50 border border-amber-300 shadow-lg shadow-amber-400/50 ${
                        step3Visible ? 'dot-visible' : 'opacity-0'
                      }`}></div>
                    </div>
                    <div className="md:w-5/12"></div>
                  </div>
                );
              })()}

              {/* Step 4 - Right Side */}
              {(() => {
                const { ref: step4Ref, isVisible: step4Visible } = useScrollReveal(0.2);
                return (
                  <div ref={step4Ref} className="flex items-center gap-8">
                    <div className="md:w-5/12"></div>
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className={`w-4 h-4 rounded-full bg-emerald-400/50 border border-emerald-300 shadow-lg shadow-emerald-400/50 ${
                        step4Visible ? 'dot-visible' : 'opacity-0'
                      }`}></div>
                    </div>
                    <div className="w-full md:w-5/12">
                      <div className={`bg-white/8 border border-white/20 rounded-lg p-6 hover:bg-white/12 transition-all duration-300 hover:shadow-lg ${
                        step4Visible ? 'step-visible right-align' : 'opacity-0'
                      }`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400/40 to-teal-500/40 border border-emerald-300/50 flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-500/30"></div>
                          <div>
                            <h4 className="text-xl font-bold text-emerald-300">Deliver</h4>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm">Deployment, support and measurable outcomes</p>
                      </div>
                    </div>
                  </div>
                );
              })()}

            </div>
          </div>

          <div className="text-center mt-16">
            <a href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold mr-4 border-none shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300 rounded">
              Get Started Today
            </a>
            <a href="/services" className="inline-block px-8 py-3 bg-transparent text-white font-bold border-2 border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 rounded">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
