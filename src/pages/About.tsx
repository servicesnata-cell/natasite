import { Target, Eye, Award, Users, Globe, TrendingUp, CheckCircle, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Nata Consultancy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering businesses through innovative technology solutions and expert consultancy
            services since 2008
          </p>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Who <span className="text-cyan-400">We Are</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
               Welcome to Nata Consultancy Services, a leading provider of IT consulting, outsourcing, HR and payroll services, training, and BPO services. Our team of experienced professionals is dedicated to helping businesses of all sizes succeed in today’s competitive market. We understand the importance of finding the right talent for your business, and that is why we offer comprehensive staffing services that are designed to meet your specific requirements.
               Our staffing services are tailored to help you find the right people for your team quickly and efficiently. Our team of experienced staffing professionals has a deep understanding of the job market and the skills needed to succeed in today’s competitive business environment. We work closely with our clients to understand their specific requirements and design customized staffing solutions that align with their business goals.
               We offer a wide range of staffing services, including talent acquisition, recruitment, employee onboarding, and management. Our vast network of qualified candidates across various industries and disciplines enables us to quickly identify the right candidates for your business.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                In addition to our staffing services, we also offer marketing services designed to help you promote your consultant’s resume and attract the right clients. Our team of marketing professionals can help you develop effective marketing strategies, optimize your online presence, and build a strong brand that resonates with your target audience.
                At Nata Consultancy Services, we are committed to delivering high-quality services that meet the unique needs of each client. We strive to provide customized solutions that cater to your specific business requirements. If you are looking for a reliable partner to help you find the right talent and build a strong brand that drives business success, contact us today to learn more about how we can help you achieve your goals.
              </p>
            </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-12">
            <div className="relative p-10 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-400/30"></div>
              <div className="relative">
                <Target className="w-16 h-16 text-cyan-400 mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To empower businesses worldwide by delivering innovative technology solutions that
                  drive growth, efficiency, and competitive advantage. We are committed to being a
                  trusted partner in our clients' digital transformation journey.
                </p>
              </div>
            </div>

            <div className="relative p-10 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-400/30"></div>
              <div className="relative">
                <Eye className="w-16 h-16 text-blue-400 mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the global leader in technology consulting, recognized for our excellence,
                  innovation, and unwavering commitment to client success. We envision a future where
                  technology seamlessly enables business transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>



      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core <span className="text-cyan-400">Values</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description:
                  'We strive for excellence in every project, delivering quality solutions that exceed expectations.',
              },
              {
                icon: Users,
                title: 'Client Focus',
                description:
                  'Our clients success is our success. We build lasting partnerships based on trust and mutual growth.',
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description:
                  'We embrace innovation and continuously explore new technologies to stay ahead of the curve.',
              },
              {
                icon: CheckCircle,
                title: 'Integrity',
                description:
                  'We conduct business with the highest standards of integrity, transparency, and ethical practices.',
              },
              {
                icon: Globe,
                title: 'Global Perspective',
                description:
                  'We bring a global perspective with local expertise, serving clients across continents.',
              },
              {
                icon: Briefcase,
                title: 'Professionalism',
                description:
                  'We maintain the highest level of professionalism in all our interactions and deliverables.',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all">
                      <Icon className="text-black" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's discuss how we can help transform your business with our innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/50"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
