import { Link } from "react-router-dom";
import { useEffect } from "react";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="services" className="relative bg-white text-black py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 flex justify-center rounded-3xl overflow-hidden shadow-xl">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-[#002E6D] text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2 sm:mb-3">
            Services
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-4">
            Guiding businesses to new heights with innovative solutions
          </h2>
          <div className="mt-3 sm:mt-4 mx-auto w-20 sm:w-24 h-[3px] bg-[#002E6D]" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-48 sm:h-52 md:h-56 w-full overflow-hidden flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-[#002E6D] group-hover:text-[#0040a3] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-auto">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-block text-sm sm:text-base font-semibold text-white bg-[#002E6D] hover:bg-[#003c91] px-5 sm:px-6 py-2.5 sm:py-3 transition-colors duration-300 rounded-md min-h-[44px] flex items-center justify-center"
                  >
                    Learn More →
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
