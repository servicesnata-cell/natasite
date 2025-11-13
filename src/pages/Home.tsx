import GalaxyHero from '../components/GalaxyHero';
import ServicesCarousel from '../components/ServicesCarousel';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Clients list
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

// Scroll reveal hook
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

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isVisible };
};

// Counter component
const CounterComponent = ({
  targetValue,
  label,
  className,
}: {
  targetValue: number;
  label: string;
  className?: string;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let currentValue = 0;
          const step = Math.ceil(targetValue / 50);
          const increment = () => {
            currentValue += step;
            if (currentValue >= targetValue) setDisplayValue(targetValue);
            else {
              setDisplayValue(currentValue);
              requestAnimationFrame(increment);
            }
          };
          increment();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [targetValue]);

  return (
    <div ref={sectionRef} className={`text-center ${className ?? ''}`}>
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{displayValue}+</div>
      <div className="text-gray-400 text-sm sm:text-base font-medium">{label}</div>
    </div>
  );
};

export default function Home() {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled professionals with years of industry experience',
      bgImage:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across India and USA with local expertise',
      bgImage:
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Successful delivery of 500+ projects for diverse industries',
      bgImage:
        'https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Drive measurable results and accelerate your business growth',
      bgImage:
        'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <div className="bg-black">
      <GalaxyHero />
      <ServicesCarousel />

      {/* Why Choose NCS Section */}
      <section
        className="py-12 sm:py-16 md:py-24 lg:py-40 xl:py-56 relative transition-all duration-500 overflow-hidden"
        style={{
          backgroundImage: 'url(/naw1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-32">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 tracking-tight">
              Why Choose <span className="text-white">NCS</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto font-light px-4">
              We deliver exceptional value through expertise, innovation, and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white flex items-center justify-center">
                      <Icon className="text-black" size={40} />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-white mb-3 sm:mb-4 md:mb-6">{feature.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#002E6D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl text-[#FFD700] font-semibold mb-3 sm:mb-4">Our Clients</h2>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4 px-4">
              Trusted by leading organizations across industries
            </p>
          </div>

          <div className="overflow-hidden bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-track { display: flex; gap: 1.5rem; align-items: center; flex-wrap: nowrap; }
              @media (min-width: 640px) {
                .marquee-track { gap: 2rem; }
              }
              .marquee-item { flex: 0 0 auto; }
              .marquee-track.animate { animation: marquee 20s linear infinite; }
            `}</style>

            <div className="marquee-track animate" aria-hidden={false}>
              {[...clients, ...clients].map((c, i) => (
                <div key={i} className="marquee-item flex items-center justify-center w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-12 sm:max-h-14 md:max-h-16 w-auto object-contain grayscale opacity-90 hover:opacity-100 transition"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        c.name
                      )}&background=ffffff&color=111827&size=200&bold=true`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#001f4d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Our <span className="text-[#FFD700]">Impact</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              Delivering measurable results for our clients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <CounterComponent targetValue={500} label="Projects Delivered" className="text-white" />
            <CounterComponent targetValue={200} label="Happy Clients" className="text-white" />
            <CounterComponent targetValue={50} label="Expert Team" className="text-white" />
            <CounterComponent targetValue={15} label="Years Experience" className="text-white" />
          </div>
        </div>
      </section>


      {/* CTA Section with Timeline */}
      <section
        className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/cta.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/45 to-black/50"></div>
        <style>{`
          @keyframes slideInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
          .step-visible { animation: slideInUp 0.6s ease-out forwards; }
          .step-visible.left-align { animation: slideInLeft 0.6s ease-out forwards; }
          .step-visible.right-align { animation: slideInRight 0.6s ease-out forwards; }
          .dot-visible { animation: slideInUp 0.6s ease-out forwards; }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
              A clear, repeatable process<br className="hidden sm:block" />that takes you from discovery to delivery.
            </p>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
              Follow our proven methodology to transform your business goals into measurable results
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400/40 via-purple-400/40 to-emerald-400/40 border-l-2 border-dashed border-white/20"
              style={{ top: '60px', bottom: 0 }}
            ></div>

            <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 relative py-4 sm:py-6 md:py-8">
              {['Discover','Plan','Build','Deliver'].map((step, i) => {
                const isLeft = i % 2 === 0;
                const { ref, isVisible } = useScrollReveal(0.2);
                const colors = [
                  {bg:'from-cyan-400/40 to-blue-500/40', text:'text-cyan-300', dot:'bg-cyan-400/50 border-cyan-300 shadow-cyan-400/50'},
                  {bg:'from-purple-400/40 to-pink-500/40', text:'text-purple-300', dot:'bg-purple-400/50 border-purple-300 shadow-purple-400/50'},
                  {bg:'from-amber-400/40 to-orange-500/40', text:'text-amber-300', dot:'bg-amber-400/50 border-amber-300 shadow-amber-400/50'},
                  {bg:'from-emerald-400/40 to-teal-500/40', text:'text-emerald-300', dot:'bg-emerald-400/50 border-emerald-300 shadow-emerald-400/50'},
                ];
                const c = colors[i];
                const descriptions = [
                  'Understand goals, stakeholders & constraints',
                  'Roadmap, scope and milestones',
                  'Design, development and iterative delivery',
                  'Deployment, support and measurable outcomes'
                ];
                return (
                  <div key={i} ref={ref} className="flex items-center gap-4 md:gap-8">
                    {isLeft ? (
                      <>
                        <div className="w-full md:w-5/12 text-left md:text-right">
                          <div className={`bg-white/8 border border-white/20 rounded-lg p-4 sm:p-5 md:p-6 hover:bg-white/12 transition-all duration-300 hover:shadow-lg ${isVisible ? 'step-visible left-align' : 'opacity-0'}`}>
                            <div className="flex items-center md:justify-end gap-3 mb-2 sm:mb-3">
                              <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${c.bg} border border-white/50 flex items-center justify-center font-bold text-white shadow-lg shadow-white/30 flex-shrink-0`}></div>
                              <div className="text-left md:text-right"><h4 className={`text-base sm:text-lg md:text-xl font-bold ${c.text}`}>{step}</h4></div>
                            </div>
                            <p className="text-gray-300 text-xs sm:text-sm">{descriptions[i]}</p>
                          </div>
                        </div>
                        <div className="hidden md:flex w-2/12 justify-center">
                          <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${c.dot} ${isVisible ? 'dot-visible' : 'opacity-0'}`}></div>
                        </div>
                        <div className="hidden md:block md:w-5/12"></div>
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block md:w-5/12"></div>
                        <div className="hidden md:flex w-2/12 justify-center">
                          <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${c.dot} ${isVisible ? 'dot-visible' : 'opacity-0'}`}></div>
                        </div>
                        <div className="w-full md:w-5/12">
                          <div className={`bg-white/8 border border-white/20 rounded-lg p-4 sm:p-5 md:p-6 hover:bg-white/12 transition-all duration-300 hover:shadow-lg ${isVisible ? 'step-visible right-align' : 'opacity-0'}`}>
                            <div className="flex items-center gap-3 mb-2 sm:mb-3">
                              <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${c.bg} border border-white/50 flex items-center justify-center font-bold text-white shadow-lg shadow-white/30 flex-shrink-0`}></div>
                              <div><h4 className={`text-base sm:text-lg md:text-xl font-bold ${c.text}`}>{step}</h4></div>
                            </div>
                            <p className="text-gray-300 text-xs sm:text-sm">{descriptions[i]}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-10 sm:mt-12 md:mt-16 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a href="/contact" className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold border-none shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300 rounded-md text-sm sm:text-base min-h-[44px] flex items-center justify-center">
              Get Started Today
            </a>
            <a href="/services" className="inline-block px-6 sm:px-8 py-3 bg-transparent text-white font-bold border-2 border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 rounded-md text-sm sm:text-base min-h-[44px] flex items-center justify-center">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
