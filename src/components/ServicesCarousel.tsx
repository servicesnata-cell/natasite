import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';

const services = [
  {
    id: "bpo",
    name: "BPO",
    description:
      "Business Process Outsourcing solutions to streamline your operations and improve efficiency across departments",
    icon: "📋",
    bgGradient: "from-blue-50 to-cyan-50",
    accentColor: "blue",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "payrolls",
    name: "Payrolls",
    description:
      "Comprehensive payroll management and processing services ensuring accuracy and compliance",
    icon: "💰",
    bgGradient: "from-green-50 to-emerald-50",
    accentColor: "green",
    image: "https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "devops",
    name: "DevOps",
    description:
      "Modern DevOps practices to accelerate your delivery pipeline and enhance operational reliability",
    icon: "⚙️",
    bgGradient: "from-orange-50 to-amber-50",
    accentColor: "orange",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "cloud",
    name: "Cloud Solutions",
    description:
      "Azure, AWS, and Google Cloud infrastructure and migration for scalable enterprise solutions",
    icon: "☁️",
    bgGradient: "from-purple-50 to-violet-50",
    accentColor: "purple",
    image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    description:
      "AI-powered solutions to transform your business intelligence and drive data-driven decisions",
    icon: "🤖",
    bgGradient: "from-pink-50 to-rose-50",
    accentColor: "pink",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "ml",
    name: "Machine Learning",
    description:
      "Custom ML models and predictive analytics solutions tailored to your business needs",
    icon: "📊",
    bgGradient: "from-indigo-50 to-blue-50",
    accentColor: "indigo",
    image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "etl",
    name: "ETL",
    description:
      "Extract, Transform, and Load your data efficiently with robust ETL pipelines",
    icon: "💾",
    bgGradient: "from-teal-50 to-cyan-50",
    accentColor: "teal",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "staffing",
    name: "Staffing",
    description:
      "Connect with top talent across India and USA with our comprehensive staffing solutions",
    icon: "👥",
    bgGradient: "from-amber-50 to-orange-50",
    accentColor: "amber",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function ServicesCarousel() {
  // ref array to hold section elements for intersection observer
  const servicesRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.querySelectorAll('.slide-in-left, .slide-in-right').forEach((child) => {
              child.classList.add('visible');
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.28 }
    );

    servicesRef.current.forEach((el) => {
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="relative bg-black">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          .animate-float { animation: float 4s ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        `}
      </style>

      {/* Section Header */}
      <div className="text-center py-10 relative z-10 bg-white">
        <p className="text-gray-700 text-sm uppercase tracking-wider font-semibold mb-4">
          SERVICES
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight px-6">
          Guiding businesses to new heights with innovative solutions
        </h2>
      </div>

        {/* Services - full viewport sections, alternating alignment */}
        <style>{`
          .slide-in-left { transform: translateX(-48px); opacity: 0; transition: transform 700ms cubic-bezier(.2,.9,.2,1), opacity 700ms ease; }
          .slide-in-left.visible { transform: translateX(0); opacity: 1; }
          .slide-in-right { transform: translateX(48px); opacity: 0; transition: transform 700ms cubic-bezier(.2,.9,.2,1), opacity 700ms ease; }
          .slide-in-right.visible { transform: translateX(0); opacity: 1; }
        `}</style>

        <div className="relative z-10">
          {services.map((service, index) => {
            const isReverse = index % 2 === 1;
            return (
              <section
                key={service.id}
                className="h-screen flex items-center bg-cover bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: `url('${service.image}')`,
                }}
                ref={(el) => {
                  // attach ref for intersection observer via dataset
                  if (!el) return;
                  // store element for observer initialization later
                  (servicesRef.current as any)[index] = el;
                }}
              >
                {/* Dark overlay for text contrast */}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className={`w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center relative z-10 ${isReverse ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`space-y-8 px-12 lg:px-20 py-20 flex flex-col justify-center h-full ${isReverse ? 'lg:text-right' : 'lg:text-left'} ${isReverse ? 'slide-in-right' : 'slide-in-left'}`}>
                    <div className={`inline-flex items-center gap-4 text-base font-medium ${isReverse ? 'lg:justify-end' : ''} ${service.accentColor === 'blue' ? 'text-blue-400' : ''}`}>
                      <span className={`inline-block px-4 py-2 bg-white/10 border border-white/10 text-white rounded-sm text-3xl`}>{service.icon}</span>
                      <span className="text-white text-xl">{service.name}</span>
                    </div>

                    <h3 className="text-6xl lg:text-7xl font-bold text-white leading-tight">{service.name}</h3>
                    <p className="text-gray-300 text-2xl leading-relaxed max-w-3xl">{service.description}</p>

                    <div className={isReverse ? 'lg:justify-end flex' : 'flex'}>
                      <Link to={`/services/${service.id}`} className="mt-6 inline-block px-8 py-4 bg-white text-black font-bold text-lg rounded-none hover:bg-gray-100 transition">
                        Learn More →
                      </Link>
                    </div>
                  </div>

                  <div className={`flex items-center justify-center h-full ${isReverse ? 'slide-in-left' : 'slide-in-right'}`}>
                    <div className="text-[200px] select-none opacity-90">{service.icon}</div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
    </section>
  );
}
