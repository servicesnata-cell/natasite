import GalaxyHero from '../components/GalaxyHero';
import { Link } from 'react-router-dom';
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
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#003B8A] to-[#007BFF] bg-clip-text text-transparent mb-2" style={{ fontFamily: '"Berthold Akzidenz Grotesk", "Akzidenz Grotesk", sans-serif', fontWeight: 900, letterSpacing: '-0.02em' }}>{displayValue}+</div>
      <div className="text-black text-sm sm:text-base font-medium">{label}</div>
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
    <div className="bg-white text-slate-900 overflow-x-hidden">
      <style>{`
        @keyframes popInOut {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .pop-animation {
          animation: popInOut 1.2s ease-in-out infinite;
        }
      `}</style>
      <GalaxyHero />
      <ServicesCarousel />
      {/* Our Clients Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-[#002E6D] text-sm sm:text-base md:text-lg uppercase tracking-widest font-semibold mb-1 sm:mb-2 md:mb-3">Our Clients</h2>
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-black font-semibold mb-3 sm:mb-4 px-2">
              Trusted by leading organizations across industries
            </p>
          </div>

          <div className="overflow-hidden bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-6">
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-track { display: flex; gap: 1rem; align-items: center; flex-wrap: nowrap; }
              @media (min-width: 640px) {
                .marquee-track { gap: 1.5rem; }
              }
              @media (min-width: 1024px) {
                .marquee-track { gap: 2rem; }
              }
              .marquee-item { flex: 0 0 auto; }
              .marquee-track.animate { animation: marquee 20s linear infinite; }
            `}</style>

            <div className="marquee-track animate" aria-hidden={false}>
              {[...clients, ...clients].map((c, i) => (
                <div key={i} className="marquee-item flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-8 sm:max-h-12 md:max-h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
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

      {/* Why Choose NCS Section */}
      <section
        className="py-8 sm:py-24 md:py-24 lg:py-40 xl:py-6 relative transition-all duration-500 overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: 'url(/naw1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 relative z-10 w-full">
          <div className="mt-0 sm:mt-[1rem]  text-center mb-6 sm:mb-16 md:mb-20 lg:mb-32">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-2 sm:mb-6 md:mb-8 tracking-tight leading-tight">
              Why Choose <span className="text-white">NCS</span>
            </h2>
            <p className="text-gray-200 text-xs sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light px-2 sm:px-4 leading-relaxed">
              We deliver exceptional value through expertise, innovation, and dedication
            </p>
          </div>

          <div className="mt-0 sm:mt-[-2rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center flex flex-col items-center justify-center h-full py-4 sm:py-6 md:py-8 px-2 sm:px-3">
                  <div className="flex justify-center mb-3 sm:mb-8 md:mb-10 flex-shrink-0">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white flex items-center justify-center">
                      <Icon className="text-black" size={28} />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-white mb-2 sm:mb-4 md:mb-6">{feature.title}</h3>
                  <p className="text-gray-200 text-xs sm:text-base md:text-lg lg:text-xl leading-relaxed px-1 sm:px-2 line-clamp-4 sm:line-clamp-none">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Impact Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-[#002E6D] text-xl sm:text-xl uppercase tracking-widest font-semibold mb-2 sm:mb-3 -mt-6">
              Our <span className="text-[#002E6D]">Impact</span>
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black px-4">
              Delivering measurable results for our clients
            </p>
          </div>

          <div className="overflow-hidden bg-white rounded-xl shadow-lg p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <CounterComponent targetValue={500} label="Projects Delivered" className="text-black" />
            <CounterComponent targetValue={200} label="Happy Clients" className="text-black" />
            <CounterComponent targetValue={50} label="Expert Team" className="text-black" />
            <CounterComponent targetValue={15} label="Years Experience" className="text-black" />
          </div>
        </div>
      </section>


      {/* CTA Section with Timeline */}
<section
  className="bg-blue-500 py-12 sm:py-16 md:py-24 lg:py-32 xl:py-8 relative overflow-hidden text-white"
>
  <div></div>
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
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4">
        A clear, repeatable process<br className="hidden sm:block" />that takes you from discovery to delivery.
      </p>
      <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
        Follow our proven methodology to transform your business goals into measurable results
      </p>
    </div>

    <div className="relative max-w-4xl mx-auto">
      <div
        className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20 border-l-2 border-dashed"
        style={{ top: '60px', bottom: 0 }}
      ></div>

      <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 relative py-4 sm:py-6 md:py-8">
        {['Discover','Plan','Build','Deliver'].map((step, i) => {
          const isLeft = i % 2 === 0;
          const { ref, isVisible } = useScrollReveal(0.2);
          const colors = [
            {bg:'from-white/20 to-white/30', text:'text-white', dot:'bg-white/50 border-white shadow-white/50'},
            {bg:'from-white/20 to-white/30', text:'text-white', dot:'bg-white/50 border-white shadow-white/50'},
            {bg:'from-white/20 to-white/30', text:'text-white', dot:'bg-white/50 border-white shadow-white/50'},
            {bg:'from-white/20 to-white/30', text:'text-white', dot:'bg-white/50 border-white shadow-white/50'},
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
                    <div className={`bg-white/10 border border-white/30 rounded-lg p-4 sm:p-5 md:p-6 hover:bg-white/20 transition-all duration-300 hover:shadow-lg ${isVisible ? 'step-visible left-align' : 'opacity-0'}`}>
                      <div className="flex items-center md:justify-end gap-3 mb-2 sm:mb-3">
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${c.bg} border border-white/50 flex items-center justify-center font-bold text-white shadow-lg shadow-white/30 flex-shrink-0`}></div>
                        <div className="text-left md:text-right">
                          <h4 className={`text-base sm:text-lg md:text-xl font-bold ${c.text}`}>{step}</h4>
                        </div>
                      </div>
                      <p className="text-white/80 text-xs sm:text-sm">{descriptions[i]}</p>
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
                    <div className={`bg-white/10 border border-white/30 rounded-lg p-4 sm:p-5 md:p-6 hover:bg-white/20 transition-all duration-300 hover:shadow-lg ${isVisible ? 'step-visible right-align' : 'opacity-0'}`}>
                      <div className="flex items-center gap-3 mb-2 sm:mb-3">
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${c.bg} border border-white/50 flex items-center justify-center font-bold text-white shadow-lg shadow-white/30 flex-shrink-0`}></div>
                        <div><h4 className={`text-base sm:text-lg md:text-xl font-bold ${c.text}`}>{step}</h4></div>
                      </div>
                      <p className="text-white/80 text-xs sm:text-sm">{descriptions[i]}</p>
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
      <Link to="/contact" className="pop-animation inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-500 font-bold rounded-lg hover:bg-gray-100 transition-colors min-h-[44px]">
        <span>Get Started</span>
      </Link>
    </div>
  </div>
</section>

    </div>
  );
}
