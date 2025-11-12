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
    <div className="bg-black min-h-screen pt-20">
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions and consultancy services designed to accelerate your
            business growth and digital transformation
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group relative rounded-2xl overflow-hidden focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60 group-hover:from-cyan-900/80 group-hover:via-black/80 transition-all duration-500"></div>

                <div className="relative p-10 min-h-[360px] flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-20 h-20 bg-white/95 rounded-lg flex items-center justify-center shadow-sm">
                      <Icon className="text-black" size={36} />
                    </div>

                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-cyan-400/20 transition-all">
                      <ArrowRight className="text-cyan-400 group-hover:translate-x-1 transition-transform" size={20} />
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-gray-300 mb-8 flex-grow text-lg">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1 bg-cyan-400/10 rounded-full text-sm text-cyan-300 border border-cyan-400/30"
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
      </div>

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            We understand that every business is unique. Let's discuss how we can tailor our services
            to meet your specific requirements.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gray-500 text-white font-semibold"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
