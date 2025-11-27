// src/pages/ServiceDetail.tsx
import { useParams, Link } from 'react-router-dom';
import {
  Server,
  DollarSign,
  Code,
  Cloud,
  Brain,
  TrendingUp,
  Database,
  Users,
  CheckCircle,
} from 'lucide-react';

const servicesData: Record<string, any> = {
  bpo: {
    name: 'Business Process Outsourcing (BPO) Services',
    icon: Server,
    description:
      'Optimize operations and reduce costs with strategic BPO solutions that offload non-core functions to experienced teams.',
    longDescription:
      `Business Process Outsourcing empowers organizations to delegate non-core operational functions—including customer support operations, technical help desk services, payroll administration, accounts payable processing, data entry, and back-office administration—to specialized providers who deliver superior efficiency at reduced operational costs.

Our comprehensive BPO service portfolio includes customer-facing front-office solutions such as omnichannel customer service, inbound/outbound sales support, and technical troubleshooting, alongside critical back-office functions encompassing financial operations, accounting and reconciliation, human resources administration, procurement management, and vendor coordination. Leveraging advanced AI-augmented workflows and human expertise, we accelerate response times, improve first-contact resolution rates, and enhance overall customer satisfaction metrics.

Operating with follow-the-sun coverage across multiple time zones, our global BPO teams provide uninterrupted service continuity, enabling business scalability without proportional overhead increases. Designed for both emerging startups and established enterprises, our solutions streamline operational workflows while maintaining strict confidentiality protocols, regulatory compliance standards, and consistently high service-level agreements.`,
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
    benefits: [
      'Cost reduction of 30-50% compared to in-house operations',
      '24/7/365 operational availability across global time zones',
      'Scalable workforce models aligned with business demand',
      'Enhanced focus on revenue-generating core competencies',
      'Advanced quality assurance and compliance frameworks',
    ],
    services: [
      'Omnichannel Customer Service',
      'Inbound/Outbound Sales Support',
      'Technical Help Desk',
      'Payroll & Accounts Payable',
      'Data Entry & Back-office Operations',
      'Vendor & Procurement Coordination',
    ],
    technologies: ['AI-augmented Workflows', 'CRM', 'RPA', 'Quality Assurance Tools'],
  },
  cloud: {
    name: 'Cloud Infrastructure Services (Azure, AWS, Google Cloud Platform)',
    icon: Cloud,
    description:
      'Accelerate innovation with enterprise cloud architecture, migration and managed cloud operations across Azure, AWS, and Google Cloud.',
    longDescription:
      `Harness the transformative capabilities of industry-leading cloud platforms—Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform—to modernize IT infrastructure, enhance operational agility, improve security posture, and achieve significant cost optimization. Our cloud consulting, migration planning, architecture design, and managed services empower enterprises to transition from legacy on-premises systems to flexible, scalable cloud environments that accelerate digital transformation initiatives.

Whether your strategic objectives include complete datacenter migration, implementation of hybrid or multi-cloud architectures, workload optimization, or cloud-native application development, our team of certified cloud architects and engineers delivers customized solutions aligned with your business requirements and compliance mandates.`,
    image: '/ci.jpeg',
    benefits: ['Improved scalability', 'Cost optimization', 'Enhanced security', 'Disaster recovery & resilience'],
    services: [
      'Cloud Readiness Assessment & Migration Strategy',
      'Multi-cloud / Hybrid Architecture',
      'Cloud-native Application Modernization',
      'FinOps & Cost Optimization',
      'Managed Cloud Operations & 24/7 Monitoring',
    ],
    technologies: ['Azure', 'AWS', 'Google Cloud', 'IaC', 'Kubernetes'],
  },
  devops: {
    name: 'DevOps Engineering and Automation Services',
    icon: Code,
    description:
      'Transform software delivery with CI/CD, automation, infrastructure as code, and observability for faster, reliable releases.',
    longDescription:
      `Accelerate your software development lifecycle and improve collaboration between development and operations teams through comprehensive DevOps implementation services that enable continuous delivery, automated testing, and enhanced software quality while dramatically reducing time-to-market. We implement fully automated CI/CD pipelines, infrastructure automation frameworks, real-time monitoring solutions, and observability platforms that improve system reliability and operational efficiency.`,
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    benefits: ['Faster deployments', 'Automated workflows', 'Improved reliability', 'Shorter MTTR'],
    services: [
      'CI/CD Pipeline Design & Implementation',
      'Infrastructure-as-Code (Terraform/Ansible)',
      'Container Orchestration (Kubernetes)',
      'Automated Testing & Quality Gates',
      'Monitoring, Logging & Observability',
    ],
    technologies: ['Jenkins', 'GitLab', 'Terraform', 'Docker', 'Kubernetes'],
  },
  cybersecurity: {
    name: 'Cybersecurity Solutions and Risk Management',
    icon: Brain,
    description:
      'Enterprise-grade cybersecurity services including threat detection, SOC, pen-testing and compliance frameworks to protect critical assets.',
    longDescription:
      `Protect your organization’s critical digital infrastructure, sensitive data assets, and intellectual property with comprehensive, multi-layered cybersecurity solutions designed to defend against sophisticated threat actors and ensure continuous regulatory compliance. We deliver advanced threat detection and response, comprehensive vulnerability assessments, enterprise risk management frameworks, security incident response planning, and proactive security monitoring services customized to your industry’s threat landscape.`,
    image: '/cs.jpeg',
    benefits: ['Advanced threat detection', 'Compliance readiness', 'Proactive monitoring', 'Incident response'],
    services: [
      'Security Assessment & Vulnerability Management',
      'Penetration Testing & Red/Blue Exercises',
      'Managed SOC & Incident Response',
      'Cloud Security & Zero-Trust Architecture',
    ],
    technologies: ['SIEM', 'EDR', 'DLP', 'IAM'],
  },
  etl: {
    name: 'ETL and Data Integration with Informatica',
    icon: Database,
    description:
      'Unlock business intelligence with scalable ETL pipelines, data warehousing, and data governance powered by Informatica.',
    longDescription:
      `Transform raw, disparate data sources into reliable, actionable business intelligence with our specialized ETL (Extract, Transform, Load) and data integration services powered by Informatica’s enterprise-grade platform. We design, develop, and implement scalable, high-performance ETL pipelines that seamlessly integrate data from multiple heterogeneous sources, apply complex business logic and transformations, ensure data quality and consistency, and deliver analytics-ready datasets to enterprise data warehouses and business intelligence platforms.`,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    benefits: ['Reliable ETL pipelines', 'Improved data quality', 'Real-time integration', 'Scalable architecture'],
    services: [
      'ETL Pipeline Design & Implementation',
      'Data Warehouse Architecture',
      'Real-time Data Streaming & Integration',
      'Data Quality & Master Data Management',
    ],
    technologies: ['Informatica', 'Apache Spark', 'Airflow', 'Kafka'],
  },
  staffing: {
    name: 'Strategic Staffing Solutions (IT, Non-IT, Healthcare)',
    icon: Users,
    description:
      'Build high-performance teams quickly with global talent acquisition, screening, and managed workforce solutions.',
    longDescription:
      `Access exceptional talent across technology, business operations, and healthcare sectors through our comprehensive staffing and workforce solutions encompassing permanent placement, contract staffing, contract-to-hire arrangements, offshore team augmentation, and managed workforce services.`,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    benefits: ['Access to global talent', 'Reduced time-to-hire', 'Flexible engagement models'],
    services: [
      'Permanent & Contract Staffing',
      'Offshore Team Augmentation',
      'Executive Search & Assessments',
      'Diversity & Inclusion Hiring Programs',
    ],
    technologies: ['ATS', 'Assessment Platforms', 'HRMS Integration'],
  },
  tax: {
    name: 'US Tax Preparation and Compliance Services',
    icon: DollarSign,
    description:
      'Navigate complex US tax regulations with expert preparation, filing and advisory services for individuals and businesses.',
    longDescription:
      `Successfully navigate the complexities of United States federal and state tax regulations with our comprehensive tax preparation, filing, compliance advisory, and strategic tax planning services designed for individuals, expatriates, small businesses, and corporations.`,
    image: '/ut.jpeg',
    benefits: ['Accurate filings', 'Audit support', 'Multi-state expertise'],
    services: [
      'Individual & Business Tax Preparation',
      'ITIN / EIN Assistance',
      'Multi-state Filing & Nexus Analysis',
      'Tax Audit Support & Representation',
    ],
    technologies: ['Tax Prep Software', 'Secure Document Portals'],
  },
  ai: {
    name: 'Artificial Intelligence and Machine Learning Solutions',
    icon: TrendingUp,
    description:
      'End-to-end AI/ML solutions: NLP, computer vision, predictive analytics, MLOps and responsible AI practices.',
    longDescription:
      `Harness the power of Artificial Intelligence and Machine Learning to drive intelligent automation, predictive analytics, and data-driven decision-making across your enterprise operations. Nata Consultancy Services delivers end-to-end AI/ML solutions—from strategic consulting and use case identification to custom model development, deployment, and ongoing optimization—enabling organizations to extract actionable insights from complex data, automate repetitive processes, enhance customer experiences, and unlock new revenue opportunities.`,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    benefits: ['Predictive insights', 'Automation & efficiency', 'Personalization at scale'],
    services: [
      'NLP & Conversational AI',
      'Computer Vision',
      'Predictive Analytics & Recommendation Systems',
      'Custom ML Model Development & MLOps',
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'],
  },
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="bg-white min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-blue-600 hover:text-blue-500">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* Hero */}
      <div className="relative h-[70vh] md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-8">
            {/* removed back arrow; keep small spacer or logo if needed */}
            <div />
          </div>
          <div className="flex items-center gap-6">
            <div className="w-36 h-36 flex items-center justify-center bg-blue-50 rounded-lg">
              <div className="text-5xl text-blue-700">
                <Icon />
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{service.name}</h1>
              <p className="text-white text-lg mt-2 max-w-2xl">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-blue-900">Overview</h2>
          <p className="text-xl text-slate-700 leading-relaxed">{service.longDescription}</p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-blue-900">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {service.services.map((item: string, idx: number) => (
              <div
                key={idx}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-blue-50 border border-blue-100 rounded-lg"
              >
                <div className="mt-1 text-blue-600 flex-shrink-0">
                  <CheckCircle size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div className="text-sm sm:text-base md:text-lg font-semibold text-slate-800">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-blue-900">Key Benefits</h2>
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {service.benefits.map((benefit: string, i: number) => (
              <div
                key={i}
                className="flex items-center gap-4 sm:gap-6 bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-blue-100 shadow-sm"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl">
                  {i + 1}
                </div>
                <p className="text-slate-800 text-sm sm:text-base md:text-lg font-semibold leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-tight">Ready to Get Started?</h2>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 leading-relaxed">
            Let's discuss how {service.name} can transform your business and drive growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition-colors text-sm sm:text-base min-h-[44px]"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
