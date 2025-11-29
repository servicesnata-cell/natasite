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
    subtitle: 'Optimize Operations and Reduce Costs with Strategic BPO Solutions',
    description:
      'Business Process Outsourcing empowers organizations to delegate non-core operational functions—including customer support operations, technical help desk services, payroll administration, accounts payable processing, data entry, and back-office administration—to specialized providers who deliver superior efficiency at reduced operational costs.',
    longDescription:
      `Business Process Outsourcing empowers organizations to delegate non-core operational functions—including customer support operations, technical help desk services, payroll administration, accounts payable processing, data entry, and back-office administration—to specialized providers who deliver superior efficiency at reduced operational costs.

Our comprehensive BPO service portfolio includes customer-facing front-office solutions such as omnichannel customer service, inbound/outbound sales support, and technical troubleshooting, alongside critical back-office functions encompassing financial operations, accounting and reconciliation, human resources administration, procurement management, and vendor coordination. Leveraging advanced AI-augmented workflows and human expertise, we accelerate response times, improve first-contact resolution rates, and enhance overall customer satisfaction metrics.

Operating with follow-the-sun coverage across multiple time zones, our global BPO teams provide uninterrupted service continuity, enabling business scalability without proportional overhead increases. Designed for both emerging startups and established enterprises, our solutions streamline operational workflows while maintaining strict confidentiality protocols, regulatory compliance standards, and consistently high service-level agreements. Partnering with Nata Consultancy Services means accessing skilled professionals dedicated to supporting your strategic objectives while delivering quantifiable cost savings and operational excellence.`,
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
    benefits: [
      'Cost reduction of 30-50% compared to in-house operations',
      '24/7/365 operational availability across global time zones',
      'Scalable workforce models aligned with business demand',
      'Enhanced focus on revenue-generating core competencies',
      'Advanced quality assurance and compliance frameworks',
    ],
    services: [
      'Omnichannel customer service',
      'Inbound/outbound sales support',
      'Technical help desk services',
      'Payroll administration',
      'Accounts payable processing',
      'Data entry and back-office administration',
      'Financial operations and accounting',
      'Human resources administration',
      'Procurement management',
      'Vendor coordination',
    ],
    technologies: ['AI-augmented Workflows', 'CRM', 'RPA', 'Quality Assurance Tools'],
  },
  cloud: {
    name: 'Cloud Infrastructure Services (Azure, AWS, Google Cloud Platform)',
    icon: Cloud,
    subtitle: 'Accelerate Innovation with Enterprise Cloud Architecture and Migration',
    description:
      'Harness the transformative capabilities of industry-leading cloud platforms—Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform—to modernize IT infrastructure, enhance operational agility, improve security posture, and achieve significant cost optimization.',
    longDescription:
      `Harness the transformative capabilities of industry-leading cloud platforms—Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform—to modernize IT infrastructure, enhance operational agility, improve security posture, and achieve significant cost optimization. Our cloud consulting, migration planning, architecture design, and managed services empower enterprises to transition from legacy on-premises systems to flexible, scalable cloud environments that accelerate digital transformation initiatives.

Whether your strategic objectives include complete datacenter migration, implementation of hybrid or multi-cloud architectures, workload optimization, or cloud-native application development, our team of certified cloud architects and engineers delivers customized solutions aligned with your business requirements and compliance mandates. We emphasize Infrastructure-as-Code (IaC) methodologies, serverless computing architectures, containerization strategies, automated deployment pipelines, and comprehensive disaster recovery frameworks that ensure operational resilience and business continuity.

With robust focus on cloud security best practices, identity and access management (IAM), data encryption protocols, and regulatory governance frameworks, we protect sensitive enterprise data while ensuring compliance with industry-specific regulations, including HIPAA, GDPR, SOC 2, PCI-DSS, and FedRAMP. Our global service delivery model spanning the United States and India provides round-the-clock technical support, rapid incident response, and deployment expertise tailored to your organizational objectives.`,
    image: '/ci.jpeg',
    benefits: [
      'Cloud readiness assessment and migration strategy',
      'Multi-cloud and hybrid cloud architecture design',
      'Cloud-native application development and modernization',
      'Cost optimization and FinOps implementation',
      'Managed cloud operations and 24/7 monitoring',
      'Cloud security and compliance management',
    ],
    services: [
      'Cloud readiness assessment and migration strategy',
      'Multi-cloud and hybrid cloud architecture design',
      'Cloud-native application development and modernization',
      'Cost optimization and FinOps implementation',
      'Managed cloud operations and 24/7 monitoring',
      'Cloud security and compliance management',
      'Infrastructure-as-Code deployment',
      'Serverless computing architectures',
      'Containerization and Kubernetes orchestration',
      'Disaster recovery and business continuity planning',
    ],
    technologies: ['Azure', 'AWS', 'Google Cloud', 'IaC', 'Kubernetes'],
  },
  devops: {
    name: 'DevOps Engineering and Automation Services',
    icon: Code,
    subtitle: 'Transform Software Delivery with Continuous Integration and Deployment Excellence',
    description:
      'Accelerate your software development lifecycle and improve collaboration between development and operations teams through comprehensive DevOps implementation services that enable continuous delivery, automated testing, and enhanced software quality while dramatically reducing time-to-market.',
    longDescription:
      `Accelerate your software development lifecycle and improve collaboration between development and operations teams through comprehensive DevOps implementation services that enable continuous delivery, automated testing, and enhanced software quality while dramatically reducing time-to-market. We implement fully automated CI/CD pipelines, infrastructure automation frameworks, real-time monitoring solutions, and observability platforms that improve system reliability and operational efficiency.

Our DevOps engineering experts leverage industry-standard tools and platforms—including Jenkins, GitLab CI/CD, Azure DevOps, AWS CodePipeline, Terraform, Ansible, Docker, Kubernetes, and Prometheus—to orchestrate containerized environments, implement microservices architectures, and enable scalable cloud-native deployments. From infrastructure provisioning and configuration management to automated testing frameworks and continuous deployment strategies, we systematically reduce manual intervention, minimize human error, and improve system stability.

Whether your organization is initiating DevOps transformation or optimizing existing workflows and toolchains, we design strategies specifically aligned with your technical environment, team structure, and business objectives. Our methodology drives innovation velocity, operational efficiency, improved mean time to recovery (MTTR), and faster feedback cycles from production environments, enabling rapid response to changing market conditions and customer requirements.`,
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    benefits: [
      'CI/CD pipeline design and implementation',
      'Infrastructure-as-Code (IaC) with Terraform and Ansible',
      'Container orchestration with Kubernetes',
      'Automated testing and quality assurance frameworks',
      'Monitoring, logging, and observability solutions',
      'DevSecOps integration and security automation',
    ],
    services: [
      'CI/CD pipeline design and implementation',
      'Infrastructure-as-Code with Terraform and Ansible',
      'Container orchestration with Kubernetes',
      'Automated testing and quality assurance frameworks',
      'Monitoring, logging, and observability solutions',
      'DevSecOps integration and security automation',
      'Configuration management',
      'Continuous deployment strategies',
      'Microservices architecture implementation',
      'Real-time monitoring and alerting',
    ],
    technologies: ['Jenkins', 'GitLab', 'Terraform', 'Docker', 'Kubernetes', 'Prometheus'],
  },
  cybersecurity: {
    name: 'Cybersecurity Solutions and Risk Management',
    icon: Brain,
    subtitle: 'Safeguard Critical Assets with Enterprise-Grade Security Frameworks',
    description:
      'Protect your organization\'s critical digital infrastructure, sensitive data assets, and intellectual property with comprehensive, multi-layered cybersecurity solutions designed to defend against sophisticated threat actors and ensure continuous regulatory compliance.',
    longDescription:
      `Protect your organization's critical digital infrastructure, sensitive data assets, and intellectual property with comprehensive, multi-layered cybersecurity solutions designed to defend against sophisticated threat actors and ensure continuous regulatory compliance. We deliver advanced threat detection and response, comprehensive vulnerability assessments, enterprise risk management frameworks, security incident response planning, and proactive security monitoring services customized to your industry's threat landscape.

Our cybersecurity framework encompasses cloud security architecture, network perimeter defense, endpoint detection and response (EDR), security information and event management (SIEM), identity and access management (IAM), privileged access management (PAM), data loss prevention (DLP), and zero-trust network architecture implementation. We assist organizations in achieving and maintaining compliance with stringent regulatory requirements including HIPAA, GDPR, SOC 2 Type II, ISO 27001, PCI-DSS, NIST Cybersecurity Framework, and CMMC.

Our team of certified security professionals—including CISSPs, CEHs, and CISMs—employs cutting-edge technologies and methodologies for penetration testing, red team/blue team exercises, security architecture reviews, threat modeling, security awareness training programs, and phishing simulation campaigns to systematically minimize organizational risk exposure. By establishing a proactive security posture with continuous threat intelligence integration, your organization can prevent costly data breaches, maintain stakeholder trust, protect brand reputation, and ensure uninterrupted business operations in an increasingly hostile cyber threat environment.`,
    image: '/cs.jpeg',
    benefits: [
      'Security assessment and vulnerability management',
      'Penetration testing and ethical hacking',
      'Security Operations Center (SOC) services',
      'Incident response and forensics',
      'Compliance management (HIPAA, GDPR, SOC 2, ISO 27001)',
      'Security awareness training and phishing simulation',
      'Cloud security and zero-trust architecture',
    ],
    services: [
      'Security assessment and vulnerability management',
      'Penetration testing and ethical hacking',
      'Security Operations Center (SOC) services',
      'Incident response and forensics',
      'Compliance management (HIPAA, GDPR, SOC 2, ISO 27001)',
      'Security awareness training and phishing simulation',
      'Cloud security and zero-trust architecture',
      'Network perimeter defense',
      'Endpoint detection and response (EDR)',
      'Identity and access management (IAM)',
      'Privileged access management (PAM)',
      'Data loss prevention (DLP)',
    ],
    technologies: ['SIEM', 'EDR', 'DLP', 'IAM', 'SOAR'],
  },
  etl: {
    name: 'ETL and Data Integration with Informatica',
    icon: Database,
    subtitle: 'Unlock Business Intelligence with Scalable Data Integration Solutions',
    description:
      'Transform raw, disparate data sources into reliable, actionable business intelligence with our specialized ETL (Extract, Transform, Load) and data integration services powered by Informatica\'s enterprise-grade platform.',
    longDescription:
      `Transform raw, disparate data sources into reliable, actionable business intelligence with our specialized ETL (Extract, Transform, Load) and data integration services powered by Informatica's enterprise-grade platform. We design, develop, and implement scalable, high-performance ETL pipelines that seamlessly integrate data from multiple heterogeneous sources, apply complex business logic and transformations, ensure data quality and consistency, and deliver analytics-ready datasets to enterprise data warehouses and business intelligence platforms.

Our expertise encompasses comprehensive data warehousing architecture, advanced data cleansing and standardization, master data management (MDM), data quality assurance frameworks, and metadata governance within the Informatica ecosystem including PowerCenter, Informatica Cloud (IICS), Data Quality, and MDM solutions. By implementing intelligent automation of complex data workflows, we dramatically improve data consistency, eliminate manual data processing errors, accelerate reporting and analytics cycles, and enable real-time decision support.

Our solutions support hybrid deployment models across cloud platforms (AWS, Azure, Google Cloud) and on-premises data centers, ensuring comprehensive data governance, regulatory compliance, lineage tracking, and metadata management throughout complex data lifecycles. Leverage the power of trusted, high-quality data to drive informed strategic decisions, optimize operational processes, personalize customer engagement, and maintain competitive advantage in data-driven markets.`,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    benefits: [
      'ETL pipeline design and development with Informatica',
      'Data warehouse architecture and implementation',
      'Real-time data integration and streaming',
      'Data quality management and cleansing',
      'Master data management (MDM) solutions',
      'Cloud data migration and integration',
      'Data governance and compliance frameworks',
    ],
    services: [
      'ETL pipeline design and development with Informatica',
      'Data warehouse architecture and implementation',
      'Real-time data integration and streaming',
      'Data quality management and cleansing',
      'Master data management (MDM) solutions',
      'Cloud data migration and integration',
      'Data governance and compliance frameworks',
      'PowerCenter implementation',
      'Informatica Cloud (IICS) deployment',
      'Data lineage and metadata tracking',
      'Advanced data transformations',
    ],
    technologies: ['Informatica', 'Apache Spark', 'Airflow', 'Kafka'],
  },
  staffing: {
    name: 'Strategic Staffing Solutions (IT, Non-IT, Healthcare)',
    icon: Users,
    subtitle: 'Build High-Performance Teams with Global Talent Acquisition Expertise',
    description:
      'Access exceptional talent across technology, business operations, and healthcare sectors through our comprehensive staffing and workforce solutions encompassing permanent placement, contract staffing, contract-to-hire arrangements, offshore team augmentation, and managed workforce services.',
    longDescription:
      `Access exceptional talent across technology, business operations, and healthcare sectors through our comprehensive staffing and workforce solutions encompassing permanent placement, contract staffing, contract-to-hire arrangements, offshore team augmentation, and managed workforce services. We specialize in recruiting highly qualified professionals, including software developers, cloud architects, cybersecurity engineers, data scientists, DevOps engineers, business analysts, administrative personnel, financial specialists, and licensed healthcare practitioners.

Our rigorous candidate screening methodology includes technical skills assessment, behavioral interviewing, cultural fit evaluation, reference verification, background checks, and credential validation to ensure optimal alignment between candidates and clients. Leveraging an extensive global recruitment network spanning the United States and India, we enable rapid, scalable hiring while significantly reducing time-to-fill metrics and overall recruitment costs.

We support comprehensive talent acquisition strategies, including diversity and inclusion hiring initiatives, skills development and upskilling programs, regulatory compliance management for immigration and employment law, and workforce analytics. Partner with Nata Consultancy Services to build agile, high-performing teams that drive innovation, operational excellence, and sustained business growth across your critical business domains.`,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    benefits: [
      'IT staffing: software developers, cloud engineers, cybersecurity specialists',
      'Non-IT staffing: business analysts, project managers, administrative professionals',
      'Healthcare staffing: nurses, medical coders, healthcare administrators',
      'Contract, contract-to-hire, and permanent placement',
      'Offshore team augmentation and global talent solutions',
      'Diversity and inclusion recruiting programs',
    ],
    services: [
      'IT staffing: software developers, cloud engineers, cybersecurity specialists',
      'Non-IT staffing: business analysts, project managers, administrative professionals',
      'Healthcare staffing: nurses, medical coders, healthcare administrators',
      'Contract staffing',
      'Contract-to-hire arrangements',
      'Permanent placement services',
      'Offshore team augmentation',
      'Executive search',
      'Skills assessment and evaluation',
      'Background verification and screening',
    ],
    technologies: ['ATS', 'Assessment Platforms', 'HRMS Integration'],
  },
  tax: {
    name: 'US Tax Preparation and Compliance Services',
    icon: DollarSign,
    subtitle: 'Navigate Complex Tax Regulations with Expert US Tax Solutions',
    description:
      'Successfully navigate the complexities of United States federal and state tax regulations with our comprehensive tax preparation, filing, compliance advisory, and strategic tax planning services designed for individuals, expatriates, small businesses, and corporations.',
    longDescription:
      `Successfully navigate the complexities of United States federal and state tax regulations with our comprehensive tax preparation, filing, compliance advisory, and strategic tax planning services designed for individuals, expatriates, small businesses, and corporations. Our experienced tax professionals maintain current expertise on evolving tax codes, recent legislative changes, and regulatory updates to maximize available deductions and tax credits while ensuring complete, timely, and accurate tax submissions.

We specialize in tax services for international professionals and businesses including Individual Taxpayer Identification Number (ITIN) applications, nonresident alien tax returns, expatriate tax preparation, Foreign Bank Account Reporting (FBAR), international information returns, small business tax planning and preparation, corporate tax compliance, multi-state tax filing, sales and use tax, and comprehensive tax audit support.

From strategic tax planning to year-end compliance and IRS representation, our comprehensive methodology simplifies complex tax processes, reduces overall tax liability through legitimate optimization strategies, minimizes audit risk exposure, and ensures full regulatory compliance. Gain confidence and peace of mind knowing your US tax obligations are managed efficiently by knowledgeable professionals committed to transparent communication, proactive planning, and exceptional client service.`,
    image: '/ut.jpeg',
    benefits: [
      'Individual and business tax preparation and filing',
      'ITIN and EIN application assistance',
      'Expatriate and nonresident alien tax services',
      'Corporate tax planning and compliance',
      'Multi-state tax filing and nexus analysis',
      'Sales tax and use tax compliance',
      'Tax audit support and IRS representation',
      'Strategic tax planning and optimization',
    ],
    services: [
      'Individual and business tax preparation and filing',
      'ITIN and EIN application assistance',
      'Expatriate and nonresident alien tax services',
      'Corporate tax planning and compliance',
      'Multi-state tax filing and nexus analysis',
      'Sales tax and use tax compliance',
      'Tax audit support and IRS representation',
      'Strategic tax planning and optimization',
      'Foreign Bank Account Reporting (FBAR)',
      'International information returns',
      'Tax deduction and credit optimization',
    ],
    technologies: ['Tax Prep Software', 'Secure Document Portals'],
  },
  ai: {
    name: 'Artificial Intelligence and Machine Learning Solutions',
    icon: TrendingUp,
    subtitle: 'Unlock Transformative Business Value with Enterprise AI and Machine Learning',
    description:
      'Harness the power of Artificial Intelligence and Machine Learning to drive intelligent automation, predictive analytics, and data-driven decision-making across your enterprise operations. Nata Consultancy Services delivers end-to-end AI/ML solutions enabling organizations to extract actionable insights from complex data, automate repetitive processes, enhance customer experiences, and unlock new revenue opportunities.',
    longDescription:
      `Harness the power of Artificial Intelligence and Machine Learning to drive intelligent automation, predictive analytics, and data-driven decision-making across your enterprise operations. Nata Consultancy Services delivers end-to-end AI/ML solutions—from strategic consulting and use case identification to custom model development, deployment, and ongoing optimization—enabling organizations to extract actionable insights from complex data, automate repetitive processes, enhance customer experiences, and unlock new revenue opportunities.

Our comprehensive AI/ML service portfolio encompasses Natural Language Processing (NLP) for text analytics and chatbot development, Computer Vision for image and video analysis, Predictive Analytics for forecasting and risk assessment, Recommendation Engines for personalized customer engagement, Intelligent Process Automation (IPA) combining RPA with AI capabilities, and Custom Machine Learning Model Development tailored to your specific business challenges. We leverage cutting-edge frameworks and platforms including TensorFlow, PyTorch, Scikit-learn, Azure Machine Learning, AWS SageMaker, Google Vertex AI, and OpenAI APIs to build scalable, production-ready AI solutions.

Our team of certified data scientists, ML engineers, and AI architects follows rigorous methodologies encompassing data collection and preparation, feature engineering, model training and validation, hyperparameter tuning, A/B testing, model deployment using MLOps best practices, and continuous performance monitoring to ensure sustained accuracy and business impact. We specialize in implementing responsible AI frameworks that address bias detection, model explainability, privacy preservation, and ethical AI governance aligned with regulatory requirements and industry standards.

Whether you're implementing conversational AI chatbots to enhance customer service, deploying computer vision systems for quality control and defect detection, building predictive maintenance models to reduce equipment downtime, developing fraud detection algorithms to protect financial transactions, or creating personalized recommendation systems to increase conversion rates, our AI/ML expertise transforms data into competitive advantage. We support deployment across cloud platforms (AWS, Azure, Google Cloud), on-premises infrastructure, and edge computing environments, ensuring optimal performance, scalability, and cost-efficiency.

From proof-of-concept development and pilot programs to enterprise-scale AI transformation initiatives, we partner with organizations across healthcare, financial services, retail, manufacturing, telecommunications, and professional services to accelerate AI adoption and maximize return on investment. Our global delivery model spanning the United States and India provides access to world-class AI talent, 24/7 development support, and cost-effective innovation that drives measurable business outcomes.`,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    benefits: [
      'Natural Language Processing (NLP): Sentiment analysis, text classification, chatbots, document processing, language translation',
      'Computer Vision: Image classification, object detection, facial recognition, video analytics, medical imaging analysis',
      'Predictive Analytics: Demand forecasting, churn prediction, risk modeling, sales forecasting, trend analysis',
      'Recommendation Systems: Personalized product recommendations, content recommendation engines, collaborative filtering',
      'Intelligent Automation: RPA integration with AI, document intelligence, invoice processing, automated decision-making',
      'Custom ML Model Development: Supervised learning, unsupervised learning, deep learning, reinforcement learning',
    ],
    services: [
      'Natural Language Processing (NLP): Sentiment analysis, text classification, chatbots, document processing',
      'Computer Vision: Image classification, object detection, facial recognition, video analytics',
      'Predictive Analytics: Demand forecasting, churn prediction, risk modeling, sales forecasting',
      'Recommendation Systems: Personalized recommendations, content engines, collaborative filtering',
      'Intelligent Automation: RPA integration with AI, document intelligence, invoice processing',
      'Custom ML Model Development: Supervised, unsupervised, deep, and reinforcement learning',
      'MLOps and Model Management: CI/CD for ML, model monitoring, retraining pipelines, version control',
      'Generative AI Solutions: Large Language Models, prompt engineering, custom GPT applications',
      'AI Strategy and Consulting: Use case identification, ROI analysis, AI roadmap development',
      'Responsible AI: Bias detection and mitigation, model explainability, privacy-preserving ML',
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn', 'AWS SageMaker', 'Azure ML', 'Google Vertex AI'],
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
      <div className="relative min-h-[80vh] md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative min-h-[80vh] md:h-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 flex flex-col justify-center py-8 md:py-0">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-lg">
              <div className="text-3xl sm:text-4xl md:text-5xl text-blue-700">
                <Icon />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">{service.name}</h1>
              {service.subtitle && (
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mt-2 sm:mt-3 font-semibold leading-snug">{service.subtitle}</h2>
              )}
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg mt-3 sm:mt-4 leading-relaxed">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-blue-900">Overview</h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed text-justify">{service.longDescription}</p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-3 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-blue-900">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {service.services.map((item: string, idx: number) => (
              <div
                key={idx}
                className="flex items-start gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 lg:p-8 bg-blue-50 border border-blue-100 rounded-lg"
              >
                <div className="mt-0.5 text-blue-600 flex-shrink-0">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-slate-800 leading-snug">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-24">
      <section className="py-8 sm:py-10 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-blue-900">Key Benefits</h2>
          <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
            {service.benefits.map((benefit: string, i: number) => (
              <div
                key={i}
                className="flex items-start sm:items-center gap-3 sm:gap-4 md:gap-6 bg-white p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg border border-blue-100 shadow-sm"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                  {i + 1}
                </div>
                <p className="text-slate-800 text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* Get Started */}
      <div className="mt-0 md:mt-[-6rem]">
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-tight leading-snug">Ready to Get Started?</h2>
          <p className="text-blue-100 text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 md:mb-10 leading-relaxed">
            Let's discuss how {service.name} can transform your business and drive growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition-colors text-xs sm:text-sm md:text-base min-h-[44px] w-full sm:w-auto justify-center"
          >
            Get Started Today
          </Link>
        </div>
      </section>
      </div>
    </div>
  );
}
