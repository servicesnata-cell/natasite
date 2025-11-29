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
    <section id="services" className="relative bg-white text-black pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <p className="text-[#002E6D] text-sm sm:text-base md:text-lg uppercase tracking-widest font-semibold mb-2 sm:mb-3">
            Services
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight px-2">
            Guiding businesses to new heights with innovative solutions
          </h2>
        </div>

        {/* Services Grid: 1 col on mobile, 2 cols on md, 2 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-row bg-white border-1 border-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative w-48 sm:w-56 md:w-64 h-auto flex-shrink-0 overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6 sm:p-7 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 line-clamp-4">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <div className="mt-auto">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 text-xs sm:text-sm min-h-[44px]"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
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
