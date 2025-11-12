import { useParams, Link } from 'react-router-dom';
import { Server, DollarSign, Code, Cloud, Brain, TrendingUp, Database, Users, CheckCircle, ArrowLeft } from 'lucide-react';

const servicesData: Record<string, any> = {
  bpo: {
    name: 'Business Process Outsourcing',
    icon: Server,
    description: 'Comprehensive BPO solutions to streamline your operations and improve efficiency',
    longDescription: 'Our Business Process Outsourcing services help organizations optimize their operations by handling non-core business processes. We provide end-to-end solutions that reduce costs, improve efficiency, and allow you to focus on strategic initiatives.',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200',
    benefits: [
      'Cost reduction up to 40%',
      '24/7 operational support',
      'Access to skilled workforce',
      'Scalable solutions',
      'Improved service quality',
      'Focus on core business',
    ],
    services: [
      'Customer Service & Support',
      'Technical Support',
      'Data Entry & Management',
      'Back Office Operations',
      'Order Processing',
      'Content Moderation',
    ],
    technologies: ['CRM Systems', 'Ticketing Tools', 'Automation Software', 'Quality Assurance Tools'],
  },
  payrolls: {
    name: 'Payroll Management',
    icon: DollarSign,
    description: 'End-to-end payroll processing ensuring accuracy and compliance',
    longDescription: 'Our Payroll Management services ensure accurate, timely, and compliant payroll processing. We handle everything from salary calculations to tax filing, benefits administration, and reporting, giving you peace of mind and freeing up your resources.',
    image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1200',
    benefits: [
      '100% accuracy guaranteed',
      'Full tax compliance',
      'Reduced processing time',
      'Secure data handling',
      'Comprehensive reporting',
      'Expert support team',
    ],
    services: [
      'Salary Processing',
      'Tax Calculations & Filing',
      'Benefits Administration',
      'Time & Attendance Management',
      'Employee Self-Service Portal',
      'Year-end Processing',
    ],
    technologies: ['Payroll Software', 'HRMS Integration', 'Tax Filing Systems', 'Reporting Tools'],
  },
  devops: {
    name: 'DevOps Solutions',
    icon: Code,
    description: 'Modern DevOps practices to accelerate your software delivery',
    longDescription: 'Our DevOps services help organizations achieve faster time-to-market, improved quality, and better collaboration between development and operations teams. We implement industry best practices and cutting-edge tools to automate and optimize your software delivery pipeline.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    benefits: [
      'Faster deployment cycles',
      'Improved system reliability',
      'Automated workflows',
      'Reduced manual errors',
      'Enhanced collaboration',
      'Continuous monitoring',
    ],
    services: [
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Container Orchestration',
      'Configuration Management',
      'Monitoring & Alerting',
      'Security Integration',
    ],
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'GitLab', 'Prometheus'],
  },
  cloud: {
    name: 'Cloud Solutions',
    icon: Cloud,
    description: 'Enterprise cloud solutions across Azure, AWS, and Google Cloud',
    longDescription: 'We provide comprehensive cloud solutions to help you leverage the power of Azure, AWS, and Google Cloud Platform. From migration and architecture to optimization and management, we ensure your cloud infrastructure is secure, scalable, and cost-effective.',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1200',
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability',
      'Enhanced security',
      'Global availability',
      'Disaster recovery',
      'Automatic updates',
    ],
    services: [
      'Cloud Migration Services',
      'Azure Solutions',
      'AWS Implementation',
      'Google Cloud Platform',
      'Multi-cloud Strategy',
      'Cloud Cost Optimization',
    ],
    technologies: ['Azure', 'AWS', 'Google Cloud', 'Cloud Formation', 'Azure DevOps', 'Cloud Security'],
  },
  ai: {
    name: 'Artificial Intelligence',
    icon: Brain,
    description: 'AI-powered solutions to transform your business intelligence',
    longDescription: 'Our Artificial Intelligence services help businesses harness the power of AI to automate processes, gain insights, and create innovative products. We develop custom AI solutions including natural language processing, computer vision, and intelligent automation.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    benefits: [
      'Intelligent automation',
      'Enhanced decision making',
      'Improved customer experience',
      'Process optimization',
      'Predictive capabilities',
      'Competitive advantage',
    ],
    services: [
      'Natural Language Processing',
      'Computer Vision',
      'Chatbot Development',
      'Sentiment Analysis',
      'AI Strategy Consulting',
      'AI Model Development',
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Azure AI', 'AWS AI Services'],
  },
  ml: {
    name: 'Machine Learning',
    icon: TrendingUp,
    description: 'Custom ML models and predictive analytics solutions',
    longDescription: 'Our Machine Learning services enable businesses to unlock the value of their data through predictive analytics, recommendation systems, and automated decision-making. We build, train, and deploy custom ML models tailored to your specific business needs.',
    image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1200',
    benefits: [
      'Data-driven decisions',
      'Predictive insights',
      'Personalized experiences',
      'Automated processes',
      'Risk reduction',
      'Revenue optimization',
    ],
    services: [
      'Predictive Analytics',
      'Recommendation Systems',
      'Classification Models',
      'Regression Analysis',
      'Model Training & Tuning',
      'MLOps Implementation',
    ],
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'MLflow', 'Kubeflow', 'DataRobot'],
  },
  etl: {
    name: 'ETL Services',
    icon: Database,
    description: 'Robust data pipelines for extraction, transformation, and loading',
    longDescription: 'Our ETL services ensure your data is accurately extracted, transformed, and loaded into your target systems. We build robust, scalable data pipelines that ensure data quality, integration, and timely availability for analytics and operational needs.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    benefits: [
      'Data quality assurance',
      'Automated pipelines',
      'Real-time processing',
      'Scalable architecture',
      'Reduced manual effort',
      'Improved data accuracy',
    ],
    services: [
      'Data Integration',
      'Data Warehousing',
      'Real-time Data Processing',
      'Data Quality Management',
      'Data Migration',
      'API Integration',
    ],
    technologies: ['Apache Airflow', 'Talend', 'Informatica', 'Apache Spark', 'Kafka', 'Snowflake'],
  },
  staffing: {
    name: 'Global Staffing Solutions',
    icon: Users,
    description: 'Comprehensive staffing services across India and USA',
    longDescription: 'Our Global Staffing Solutions connect you with top talent across India and USA. We provide end-to-end recruitment services including permanent hiring, contract staffing, and talent management, ensuring you have the right people to drive your business forward.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    benefits: [
      'Access to global talent pool',
      'Reduced hiring time',
      'Cost-effective solutions',
      'Quality candidates',
      'Flexible engagement models',
      'Ongoing support',
    ],
    services: [
      'Permanent Recruitment',
      'Contract Staffing',
      'Talent Acquisition',
      'Executive Search',
      'IT Staffing',
      'Global Workforce Solutions',
    ],
    technologies: ['ATS Systems', 'Candidate Screening Tools', 'Assessment Platforms', 'HRMS Integration'],
  },
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="bg-black min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/services" className="text-cyan-400 hover:text-cyan-300">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  // Unified enhanced layout for all services (parameterized BPO layout)
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero - full screen, matching home thematic */}
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-8">
            <Link to="/services" className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <ArrowLeft size={18} />
              <span>Back to Services</span>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-36 h-36 flex items-center justify-center bg-white/90 rounded-lg">
              {/* use svg icon if available for clarity */}
              <div className="text-5xl text-black">
                <Icon />
              </div>
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">{service.name}</h1>
              <p className="text-gray-300 text-lg mt-2 max-w-2xl">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview - larger */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Overview</h2>
          <p className="text-2xl text-gray-300 leading-relaxed">{service.longDescription}</p>
        </div>
      </section>

      {/* What We Offer - vertical stack, one per line, bigger */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">What We Offer</h2>
          <div className="space-y-6">
            {service.services.map((item: string, idx: number) => (
              <div key={idx} className="flex items-start gap-6 p-6 bg-gray-900/60 border border-gray-800">
                <div className="mt-1 text-cyan-400">
                  <CheckCircle size={28} />
                </div>
                <div className="text-xl font-semibold">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits - center vertical line with alternating items */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12">Key Benefits</h2>

          <div className="relative">
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600" />

            <div className="space-y-16">
              {service.benefits.map((benefit: string, i: number) => (
                <div key={i} className={`flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {i % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-12 text-right">
                        <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 p-6">
                          <p className="text-white text-xl font-semibold">{benefit}</p>
                        </div>
                      </div>
                      <div className="w-12 flex justify-center">
                        <div className="w-6 h-6 rounded-full bg-cyan-400 border-4 border-black" />
                      </div>
                      <div className="w-1/2" />
                    </>
                  ) : (
                    <>
                      <div className="w-1/2" />
                      <div className="w-12 flex justify-center">
                        <div className="w-6 h-6 rounded-full bg-cyan-400 border-4 border-black" />
                      </div>
                      <div className="w-1/2 pl-12 text-left">
                        <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 p-6">
                          <p className="text-white text-xl font-semibold">{benefit}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies - each in its own container box */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-10">Technologies We Use</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {service.technologies.map((tech: string, idx: number) => (
              <div key={idx} className="p-6 bg-gray-900/60 border border-gray-800 text-center">
                <p className="text-white font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started - black themed, prominent CTA */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">Let's discuss how {service.name} can transform your business.</p>
          <Link to="/contact" className="inline-block px-12 py-6 bg-cyan-400 text-black font-bold text-2xl">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
