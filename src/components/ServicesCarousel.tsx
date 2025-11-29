import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 'cloud',
    name: 'Cloud Infrastructure',
    description: 'Azure, AWS and GCP architecture, migration and managed operations',
    image: '/ci.jpeg',
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
    image: '/cs.jpeg',
  },
  {
    id: 'etl',
    name: 'ETL & Data Integration',
    description: 'Informatica-based ETL, data pipelines, warehousing and governance',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
  },
  {
    id: 'ai',
    name: 'AI / Machine Learning',
    description: 'NLP, computer vision, predictive analytics and MLOps',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  },
  {
    id: 'tax',
    name: 'US Tax Services',
    description: 'US tax preparation, filing, multi-state compliance and advisory',
    image: '/ut.jpeg',
  },
  {
    id: 'bpo',
    name: 'BPO Services',
    description: 'Customer support, back-office, payroll and operational outsourcing',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
  },
  {
    id: 'staffing',
    name: 'Staffing Solutions',
    description: 'Permanent, contract and offshore staffing across tech and non-tech',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
  },
];

export default function ServicesCarousel() {
  return (
    <section id="services" className="relative bg-white text-black pt-10 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24 pb-10 sm:pb-14 md:pb-16 lg:pb-20">
      <div className="w-full px-3 sm:px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <p className="text-[#002E6D] text-xs sm:text-sm md:text-base uppercase tracking-widest font-semibold mb-2 sm:mb-3">
            Services
          </p>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight px-2 sm:px-0">
            Guiding businesses to new heights with innovative solutions
          </h2>
        </div>

        {/* Services Grid: responsive 1-2 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col sm:flex-row bg-white border border-black rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full sm:w-40 md:w-48 lg:w-56 h-48 sm:h-auto sm:min-h-48 flex-shrink-0 overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-4 sm:p-5 md:p-6 lg:p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {service.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <div className="mt-auto">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm min-h-[44px] min-w-[100px]"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
