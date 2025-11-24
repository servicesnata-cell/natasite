import { Link } from 'react-router-dom';
import { Server, Code, Cloud, Brain, Database, Users, DollarSign, Lock, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'bpo',
    name: 'Business Process Outsourcing (BPO) Services',
    shortName: 'BPO Services',
    description: 'Optimize operations and reduce costs with strategic BPO solutions. We handle customer support, payroll, data entry, and back-office functions.',
    icon: Server,
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
    features: ['Customer Service & Support', 'Technical Help Desk', 'Payroll & Accounts Payable', 'Data Entry & Back-office'],
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure Services (Azure, AWS, Google Cloud Platform)',
    shortName: 'Cloud Infrastructure',
    description: 'Accelerate innovation with enterprise cloud architecture, migration and managed operations across Azure, AWS, and Google Cloud.',
    icon: Cloud,
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
    features: ['Cloud Migration', 'Multi-cloud Architecture', 'Cost Optimization', 'Managed Operations'],
  },
  {
    id: 'devops',
    name: 'DevOps Engineering and Automation Services',
    shortName: 'DevOps & Automation',
    description: 'Transform software delivery with CI/CD, automation, infrastructure as code, and observability for faster, reliable releases.',
    icon: Code,
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Observability'],
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Solutions and Risk Management',
    shortName: 'Cybersecurity',
    description: 'Enterprise-grade cybersecurity services including threat detection, SOC, penetration testing and compliance frameworks.',
    icon: Lock,
    image: 'https://images.pexels.com/photos/8386450/pexels-photo-8386450.jpeg',
    features: ['Security Assessment', 'Penetration Testing', 'Managed SOC', 'Incident Response'],
  },
  {
    id: 'etl',
    name: 'ETL and Data Integration with Informatica',
    shortName: 'ETL & Data Integration',
    description: 'Unlock business intelligence with scalable ETL pipelines, data warehousing, and data governance powered by Informatica.',
    icon: Database,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    features: ['ETL Pipeline Design', 'Data Warehouse Architecture', 'Real-time Integration', 'Data Quality Management'],
  },
  {
    id: 'staffing',
    name: 'Strategic Staffing Solutions (IT, Non-IT, Healthcare)',
    shortName: 'Staffing Solutions',
    description: 'Build high-performance teams quickly with global talent acquisition, screening, and managed workforce solutions.',
    icon: Users,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    features: ['Permanent & Contract Staffing', 'Offshore Team Augmentation', 'Executive Search', 'Diversity & Inclusion Hiring'],
  },
  {
    id: 'tax',
    name: 'US Tax Preparation and Compliance Services',
    shortName: 'US Tax Services',
    description: 'Navigate complex US tax regulations with expert preparation, filing and advisory services for individuals and businesses.',
    icon: DollarSign,
    image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg',
    features: ['Individual & Business Tax Prep', 'Multi-state Filing', 'ITIN / EIN Assistance', 'Tax Audit Support'],
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence and Machine Learning Solutions',
    shortName: 'AI / Machine Learning',
    description: 'End-to-end AI/ML solutions: NLP, computer vision, predictive analytics, MLOps and responsible AI practices.',
    icon: Brain,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    features: ['NLP & Conversational AI', 'Computer Vision', 'Predictive Analytics', 'Custom ML Model Development'],
  },
];

export default function Services() {
  return (
    <div className="bg-black min-h-screen pt-16 sm:pt-18 md:pt-20 overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
      `}</style>

      {/* Hero Section */}
      <div className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-cover bg-center mx-3 sm:mx-4 md:mx-0 rounded-lg sm:rounded-xl md:rounded-none" style={{ backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}>
        <div className="absolute inset-0 bg-black/60 rounded-lg sm:rounded-xl md:rounded-none"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 text-center animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-tight leading-tight">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-2">
            Comprehensive technology solutions and consultancy services designed to accelerate your business growth and digital transformation
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="group relative rounded-2xl overflow-hidden focus:outline-none focus:ring-4 focus:ring-cyan-500/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60 group-hover:from-cyan-900/80 group-hover:via-black/80 transition-all duration-500"></div>

              <div className="relative p-6 sm:p-8 md:p-10 min-h-[320px] sm:min-h-[340px] md:min-h-[360px] flex flex-col">
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white/95 rounded-lg flex items-center justify-center shadow-sm">
                    <Icon className="text-black" size={28} />
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-cyan-400/20 transition-all min-w-[44px] min-h-[44px]">
                    <ArrowRight className="text-cyan-400 group-hover:translate-x-1 transition-transform" size={18} />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-6 sm:mb-8 flex-grow text-sm sm:text-base md:text-lg leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 sm:px-4 py-1 bg-cyan-400/10 rounded-full text-xs sm:text-sm text-cyan-300 border border-cyan-400/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black border-t border-gray-800 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed px-4">
            We understand that every business is unique. Let's discuss how we can tailor our services
            to meet your specific requirements.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors duration-300 rounded-md text-sm sm:text-base min-h-[44px] flex items-center justify-center max-w-xs mx-auto"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
