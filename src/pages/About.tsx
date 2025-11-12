import { Target, Eye, Award, Users, Globe, TrendingUp, CheckCircle, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/ab.jpeg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            About <span className="text-white">Nata Consultancy</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Empowering businesses through innovative technology solutions and expert consultancy
            services since 2008
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight">
                Who <span className="text-black">We Are</span>
              </h2>
              <p className="text-gray-700 text-base mb-6 leading-relaxed">
               Welcome to Nata Consultancy Services, a leading provider of IT consulting, outsourcing, HR and payroll services, training, and BPO services. Our team of experienced professionals is dedicated to helping businesses of all sizes succeed in today's competitive market. We understand the importance of finding the right talent for your business, and that is why we offer comprehensive staffing services that are designed to meet your specific requirements.
              </p>
              <p className="text-gray-700 text-base mb-6 leading-relaxed">
               Our staffing services are tailored to help you find the right people for your team quickly and efficiently. Our team of experienced staffing professionals has a deep understanding of the job market and the skills needed to succeed in today's competitive business environment. We work closely with our clients to understand their specific requirements and design customized staffing solutions that align with their business goals.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                We offer a wide range of staffing services, including talent acquisition, recruitment, employee onboarding, and management. Our vast network of qualified candidates across various industries and disciplines enables us to quickly identify the right candidates for your business.
              </p>
            </div>

            <div className="space-y-6">
              {/* Mission Card */}
              <div className="group relative bg-white border border-gray-200 p-10 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:shadow-black/10">
                <div className="absolute top-0 right-0 w-24 h-24 bg-black/5 -mr-12 -mt-12 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <Target className="w-12 h-12 text-black mb-6" />
                  <h3 className="text-2xl font-semibold text-black mb-3">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To empower businesses worldwide by delivering innovative technology solutions that drive growth, efficiency, and competitive advantage.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group relative bg-white border border-gray-200 p-10 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:shadow-black/10">
                <div className="absolute top-0 right-0 w-24 h-24 bg-black/5 -mr-12 -mt-12 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <Eye className="w-12 h-12 text-black mb-6" />
                  <h3 className="text-2xl font-semibold text-black mb-3">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the global leader in technology consulting, recognized for excellence, innovation, and unwavering commitment to client success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Core Values Section */}
      <section className="py-32 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-gray-600 text-sm uppercase tracking-wider font-semibold mb-4">
              CORE VALUES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              The principles that guide everything we do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                  className="group relative bg-white border border-gray-200 p-10 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 min-h-[280px] flex flex-col"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 -mr-16 -mt-16"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gray-200 flex items-center justify-center mb-6 group-hover:bg-gray-300 transition-colors">
                      <Icon className="text-black group-hover:text-black transition-colors" size={28} />
                    </div>
                    <h3 className="text-2xl font-semibold text-black mb-4">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-base">{value.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Work Together?
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Let's discuss how we can help transform your business with our innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3.5 bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="px-8 py-3.5 bg-transparent text-white font-semibold border-2 border-white/40 hover:border-white/80 transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
