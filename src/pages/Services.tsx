import { Link } from 'react-router-dom';
import { Server, Code, Cloud, Brain, Database, Users, DollarSign, Lock, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'bpo',
    name: 'Business Process Outsourcing (BPO) Services',
    shortName: 'BPO Services',
    description: 'Optimize operations and reduce costs with strategic BPO solutions. We handle customer support, payroll, data entry, and back-office functions.',
    icon: Server,
    image: '/bpo.jpeg',
    features: ['Customer Service & Support', 'Technical Help Desk', 'Payroll & Accounts Payable', 'Data Entry & Back-office'],
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure Services (Azure, AWS, Google Cloud Platform)',
    shortName: 'Cloud Infrastructure',
    description: 'Accelerate innovation with enterprise cloud architecture, migration and managed operations across Azure, AWS, and Google Cloud.',
    icon: Cloud,
    image: '/ci.jpeg',
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
    image: '/cs.jpeg',
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
    image: '/staffing.jpeg',
    features: ['Permanent & Contract Staffing', 'Offshore Team Augmentation', 'Executive Search', 'Diversity & Inclusion Hiring'],
  },
  {
    id: 'tax',
    name: 'US Tax Preparation and Compliance Services',
    shortName: 'US Tax Services',
    description: 'Navigate complex US tax regulations with expert preparation, filing and advisory services for individuals and businesses.',
    icon: DollarSign,
    image: '/ut.jpeg',
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
    <div className="bg-white min-h-screen pt-16 sm:pt-20 md:pt-24">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
        .light-bg { background-color: #f8f9fa; }
      `}</style>

      {/* Hero Section */}
      <div className="relative py-10 sm:py-14 md:py-16 lg:py-24 overflow-hidden bg-cover bg-center mx-3 sm:mx-4 md:mx-0 rounded-lg sm:rounded-xl md:rounded-none" style={{ backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}>
        <div className="absolute inset-0 bg-black/60 rounded-lg sm:rounded-xl md:rounded-none"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 text-center animate-fade-in-up">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight leading-tight">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-2">
            Comprehensive technology solutions and consultancy services designed to accelerate your business growth and digital transformation
          </p>
        </div>
      </div>

      {/* Services List - Alternating Layout */}
      <main id="main">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const Icon = service.icon;
          return (
            <section 
              key={service.id} 
              className={isEven ? '' : 'light-bg'}
              id={service.id}
            >
              <div className="w-full px-3 sm:px-4 md:px-6 max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center ${!isEven ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}>
                  {/* Image */}
                  <div>
                    <img 
                      src={service.image} 
                      className="w-full h-auto rounded-lg object-cover"
                      alt={service.name}
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        {service.shortName}
                      </h3>
                    </div>

                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-blue-500 mb-3 sm:mb-4 break-words">
                      {service.name}
                    </h4>

                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-6 sm:mb-8">
                      <h5 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Key Benefits:</h5>
                      <ul className="space-y-2 sm:space-y-2.5">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-gray-700">
                            <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full flex-shrink-0 text-xs font-bold mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Link */}
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 md:py-3.5 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors text-xs sm:text-sm md:text-base min-h-[44px]"
                    >
                      Learn More <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 text-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto px-2">
            Let's discuss how our services can drive your business transformation and help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 md:py-4 bg-white text-blue-500 font-semibold rounded-md hover:bg-gray-100 transition-colors text-xs sm:text-sm md:text-base min-h-[44px]"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
