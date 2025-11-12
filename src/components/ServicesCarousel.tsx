import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const services = [
  {
    id: "bpo",
    name: "BPO",
    description:
      "Business Process Outsourcing solutions to streamline your operations and improve efficiency across departments",
    image:
      "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "payrolls",
    name: "Payrolls",
    description:
      "Comprehensive payroll management and processing services ensuring accuracy and compliance",
    image:
      "https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "devops",
    name: "DevOps",
    description:
      "Modern DevOps practices to accelerate your delivery pipeline and enhance operational reliability",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "cloud",
    name: "Cloud Solutions",
    description:
      "Azure, AWS, and Google Cloud infrastructure and migration for scalable enterprise solutions",
    image:
      "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    description:
      "AI-powered solutions to transform your business intelligence and drive data-driven decisions",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "ml",
    name: "Machine Learning",
    description:
      "Custom ML models and predictive analytics solutions tailored to your business needs",
    image:
      "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "etl",
    name: "ETL",
    description:
      "Extract, Transform, and Load your data efficiently with robust ETL pipelines",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "staffing",
    name: "Staffing",
    description:
      "Connect with top talent across India and USA with our comprehensive staffing solutions",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function ServicesCarousel() {
  const servicesRef = useRef<Array<HTMLElement | null>>([]);

  // Slide/fade animations
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.querySelectorAll(".slide-in-left, .slide-in-right").forEach((child) => {
              child.classList.add("visible");
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.28 }
    );

    servicesRef.current.forEach((el) => el && obs.observe(el));

    return () => obs.disconnect();
  }, []);

  // Zoom-out scroll animation
  useEffect(() => {
    const handleScroll = () => {
      servicesRef.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
        const scale = 1.2 - progress * 0.2;
        el.style.setProperty("--bg-scale", `${scale}`);
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="services" className="relative bg-black">
      <style>{`
        .slide-in-left { transform: translateX(-48px); opacity: 0; transition: transform 700ms cubic-bezier(.2,.9,.2,1), opacity 700ms ease; }
        .slide-in-left.visible { transform: translateX(0); opacity: 1; }
        .slide-in-right { transform: translateX(48px); opacity: 0; transition: transform 700ms cubic-bezier(.2,.9,.2,1), opacity 700ms ease; }
        .slide-in-right.visible { transform: translateX(0); opacity: 1; }
        .zoom-bg {
          background-size: calc(var(--bg-scale, 1) * 100%) auto;
          transition: background-size 0.3s ease-out;
        }

        /* Make each section shorter on mobile */
        @media (max-width: 768px) {
          .service-section {
            height: 70vh;
          }
        }
        @media (max-width: 480px) {
          .service-section {
            height: 60vh;
          }
        }
      `}</style>

      {/* Header */}
      <div className="text-center py-10 relative z-10 bg-white">
        <p className="text-gray-700 text-sm uppercase tracking-wider font-semibold mb-4">
          SERVICES
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight px-4 leading-snug">
          Guiding businesses to new heights with innovative solutions
        </h2>
      </div>

      {/* Services Sections */}
      <div className="relative z-10">
        {services.map((service, index) => {
          const isReverse = index % 2 === 1;
          return (
            <section
              key={service.id}
              className={`service-section zoom-bg flex items-center bg-cover bg-center bg-no-repeat relative`}
              style={
                {
                  backgroundImage: `url('${service.image}')`,
                  "--bg-scale": "1.2",
                } as React.CSSProperties
              }
              ref={(el) => (servicesRef.current[index] = el)}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              <div
                className={`w-full h-full flex items-center relative z-10 px-4 sm:px-8 lg:px-20 ${
                  isReverse ? "justify-end text-right" : "justify-start text-left"
                }`}
              >
                <div
                  className={`max-w-3xl py-12 sm:py-16 md:py-20 ${
                    isReverse ? "slide-in-right" : "slide-in-left"
                  }`}
                >
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-block px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white text-black font-semibold sm:font-bold text-sm sm:text-base md:text-lg rounded-none hover:bg-gray-100 transition"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
