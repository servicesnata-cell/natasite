import { Link } from 'react-router-dom';
import { Server, DollarSign, Code, Cloud, Brain, TrendingUp, Database, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'bpo',
    name: 'Business Process Outsourcing',
    shortName: 'BPO',
    description: 'Streamline your operations with our comprehensive BPO solutions. We handle everything from customer support to back-office operations, allowing you to focus on core business activities.',
    icon: Server,
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Customer Support', 'Data Entry', 'Back Office Operations', 'Technical Support'],
  },
  {
    id: 'payrolls',
    name: 'Payroll Management',
    shortName: 'Payrolls',
    description: 'End-to-end payroll processing and management services ensuring accuracy, compliance, and timely delivery. We handle everything from salary calculations to tax compliance.',
    icon: DollarSign,
    image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Salary Processing', 'Tax Compliance', 'Benefits Administration', 'Reporting'],
  },
  {
    id: 'devops',
    name: 'DevOps Solutions',
    shortName: 'DevOps',
    description: 'Accelerate your software delivery with modern DevOps practices. We implement CI/CD pipelines, infrastructure automation, and monitoring solutions for optimal performance.',
    icon: Code,
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring'],
  },
  {
    id: 'cloud',
    name: 'Cloud Solutions',
    shortName: 'Cloud',
    description: 'Leverage the power of Azure, AWS, and Google Cloud for scalable, secure, and cost-effective infrastructure. We provide migration, optimization, and management services.',
    icon: Cloud,
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Cloud Migration', 'Azure Services', 'AWS Solutions', 'Google Cloud'],
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    shortName: 'AI',
    description: 'Transform your business with AI-powered solutions. From natural language processing to computer vision, we implement cutting-edge AI technologies tailored to your needs.',
    icon: Brain,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Natural Language Processing', 'Computer Vision', 'Chatbots', 'AI Strategy'],
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    shortName: 'ML',
    description: 'Unlock the power of your data with custom machine learning models. We develop predictive analytics, recommendation systems, and automated decision-making solutions.',
    icon: TrendingUp,
    image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Predictive Analytics', 'Recommendation Systems', 'Model Training', 'ML Operations'],
  },
  {
    id: 'etl',
    name: 'ETL Services',
    shortName: 'ETL',
    description: 'Extract, Transform, and Load your data efficiently with our robust ETL pipelines. We ensure data quality, integration, and timely availability for analytics and operations.',
    icon: Database,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Data Integration', 'Data Warehousing', 'Real-time Processing', 'Data Quality'],
  },
  {
    id: 'staffing',
    name: 'Global Staffing Solutions',
    shortName: 'Staffing',
    description: 'Connect with top talent across India and USA. We provide comprehensive staffing solutions including recruitment, contract staffing, and talent management services.',
    icon: Users,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Permanent Hiring', 'Contract Staffing', 'Talent Acquisition', 'Global Recruitment'],
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
      <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
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
