import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Hexagon, ArrowRight } from "lucide-react";

const services = [
  {
    id: 'bpo',
    name: 'BPO Services',
    description: 'Customer support, back-office, payroll and operational outsourcing',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure',
    description: 'Azure, AWS and GCP architecture, migration and managed operations',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
  },
  {
    id: 'devops',
    name: 'DevOps & Automation',
    description: 'CI/CD, IaC, container orchestration and SRE practices',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Managed SOC, penetration testing, and risk & compliance services',
    image: 'https://images.pexels.com/photos/8386450/pexels-photo-8386450.jpeg',
  },
  {
    id: 'etl',
    name: 'ETL & Data Integration',
    description: 'Informatica-based ETL, data pipelines, warehousing and governance',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
  },
  {
    id: 'staffing',
    name: 'Staffing Solutions',
    description: 'Permanent, contract and offshore staffing across tech and non-tech',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
  },
  {
    id: 'tax',
    name: 'US Tax Services',
    description: 'US tax preparation, filing, multi-state compliance and advisory',
    image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg',
  },
  {
    id: 'ai',
    name: 'AI / Machine Learning',
    description: 'NLP, computer vision, predictive analytics and MLOps',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  },
];

export default function ServicesCarousel() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // detect touch devices
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    if (!isTouch) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) {
            setVisibleIndex(idx);
          } else {
            // if the item leaving viewport was the visible one, clear it
            setVisibleIndex((current) => (current === idx ? null : current));
          }
        });
      },
      { threshold: 0.6 }
    );

    itemRefs.current.forEach((el) => {
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [isTouch]);

  // close tapped state on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!itemRefs.current.some((el) => el && el.contains(target))) {
        setTappedIndex(null);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <section id="services" className="relative bg-white text-black pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-0 flex justify-center overflow-hidden">
      <div className="w-full max-w-full px-0 mx-0">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-3 sm:px-4 md:px-6 -mt-6 sm:-mt-8 md:-mt-12">
          <p className="text-[#002E6D] text-sm sm:text-base md:text-lg uppercase tracking-widest font-semibold mb-2 sm:mb-3">
            Services
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight px-2">
            Guiding businesses to new heights with innovative solutions
          </h2>
        </div>

        {/* Focus-style Cards Grid: no gaps, flush to edges, 2 cols on small, 4 on large */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, index) => {
            const showOverlay = isTouch ? (visibleIndex === index || tappedIndex === index) : hovered === index;
            return (
              <div
                key={service.id}
                data-index={index}
                ref={(el) => (itemRefs.current[index] = el)}
                onMouseEnter={() => !isTouch && setHovered(index)}
                onMouseLeave={() => !isTouch && setHovered(null)}
                onClick={(e) => {
                  if (!isTouch) return; // desktop handled by Link
                  e.preventDefault();
                  if (tappedIndex === index) {
                    navigate(`/services/${service.id}`);
                    return;
                  }
                  setTappedIndex(index);
                }}
                className={`group relative overflow-hidden h-32 sm:h-40 md:h-56 lg:h-72 w-full transition-all duration-300 ease-out cursor-pointer ${
                  // blur non-active on desktop
                  !isTouch && hovered !== null && hovered !== index ? 'blur-sm scale-[0.98]' : ''
                }`}
                role="button"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500"
                />

                {/* subtle base overlay for contrast (black/30) -> black/80 when active */}
                <div className={`absolute inset-0 transition-colors duration-300 ${showOverlay ? 'bg-black/50' : 'bg-black/30'}`} />

                {/* Centered title */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <h3 className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-md text-center px-4 ${showOverlay ? 'font-extrabold' : 'font-semibold'}`}>
                    {service.name}
                  </h3>
                </div>

                {/* Bottom panel: description + hexagon+arrow — glide up when active */}
                <div className={`absolute inset-x-0 bottom-0 pb-4 px-4 transition-all duration-300 ease-out ${showOverlay ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-6 opacity-0 pointer-events-none'}`}>
                  <div className="bg-transparent flex items-center justify-between">
                    <p className="text-sm text-white/90 mr-3 line-clamp-3">{service.description}</p>
                    <div className="ml-3 flex-shrink-0">
                      <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                        <Hexagon strokeWidth={1.5} className="text-white/95" size={34} />
                        <ArrowRight className="absolute text-white" size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop link overlay: navigate on click for non-touch */}
                {!isTouch && (
                  <a href={`/services/${service.id}`} className="absolute inset-0" aria-label={`Open ${service.name}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
