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

  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-400/50">
              <Icon className="text-black" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">{service.name}</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">{service.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {service.longDescription}
            </p>

            <h3 className="text-2xl font-bold text-white mb-6">What We Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {service.services.map((item: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-cyan-400/30 transition-all"
                >
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 sticky top-24">
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-sm text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="/contact"
                className="block w-full mt-8 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/50 text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
