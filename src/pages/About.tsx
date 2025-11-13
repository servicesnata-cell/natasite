import { Target, Eye, Award, Users, Globe, TrendingUp, CheckCircle, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }

        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* Hero Section */}
      <div
        className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-cover bg-center mb-8 sm:mb-12 rounded-2xl"
        style={{ backgroundImage: "url('/ab.jpeg')", backgroundAttachment: 'scroll' }}
      >
        <div className="absolute inset-0 bg-blue-600/70 rounded-2xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
            About <span className="text-white">Nata Consultancy</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Empowering businesses through innovative technology solutions and expert consultancy services since 2008
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-700">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 tracking-tight text-blue-800">
                Who <span className="text-blue-600">We Are</span>
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Welcome to Nata Consultancy Services, a leading provider of IT consulting, outsourcing, HR and payroll services, training, and BPO services. Our team of experienced professionals is dedicated to helping businesses of all sizes succeed in today's competitive market.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Our staffing services are tailored to help you find the right people for your team quickly and efficiently. We work closely with our clients to understand their specific requirements and design customized staffing solutions that align with their business goals.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                We offer a wide range of staffing services, including talent acquisition, recruitment, employee onboarding, and management. Our vast network of qualified candidates across various industries enables us to quickly identify the right candidates for your business.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Mission Card */}
              <div className="card-hover relative bg-blue-50 border border-blue-100 p-6 sm:p-8 md:p-10 rounded-xl">
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-blue-100/20 -mr-10 sm:-mr-12 -mt-10 sm:-mt-12 transition-all duration-300 rounded-full"></div>
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-2 sm:mb-3">Our Mission</h3>
                <p className="text-blue-700 leading-relaxed text-sm sm:text-base">
                  To empower businesses worldwide by delivering innovative technology solutions that drive growth, efficiency, and competitive advantage.
                </p>
              </div>

              {/* Vision Card */}
              <div className="card-hover relative bg-blue-50 border border-blue-100 p-6 sm:p-8 md:p-10 rounded-xl">
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-blue-100/20 -mr-10 sm:-mr-12 -mt-10 sm:-mt-12 transition-all duration-300 rounded-full"></div>
                <Eye className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-2 sm:mb-3">Our Vision</h3>
                <p className="text-blue-700 leading-relaxed text-sm sm:text-base">
                  To be the global leader in technology consulting, recognized for excellence, innovation, and unwavering commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 border-t border-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-blue-500 text-xs sm:text-sm uppercase tracking-wider font-semibold mb-3 sm:mb-4">
            CORE VALUES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-8 sm:mb-10 md:mb-12 tracking-tight px-4">
            The principles that guide everything we do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              { icon: Award, title: 'Excellence', description: 'We strive for excellence in every project, delivering quality solutions that exceed expectations.' },
              { icon: Users, title: 'Client Focus', description: 'Our clients success is our success. We build lasting partnerships based on trust and mutual growth.' },
              { icon: TrendingUp, title: 'Innovation', description: 'We embrace innovation and continuously explore new technologies to stay ahead of the curve.' },
              { icon: CheckCircle, title: 'Integrity', description: 'We conduct business with the highest standards of integrity, transparency, and ethical practices.' },
              { icon: Globe, title: 'Global Perspective', description: 'We bring a global perspective with local expertise, serving clients across continents.' },
              { icon: Briefcase, title: 'Professionalism', description: 'We maintain the highest level of professionalism in all our interactions and deliverables.' },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card-hover relative bg-blue-50 border border-blue-100 p-6 sm:p-8 md:p-10 rounded-xl min-h-[240px] sm:min-h-[260px] md:min-h-[280px] flex flex-col">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 flex items-center justify-center mb-4 sm:mb-6 rounded-md">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-blue-700 leading-relaxed text-sm sm:text-base">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-blue-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 sm:mb-6 tracking-tight">
            Ready to Work Together?
          </h2>
          <p className="text-blue-700 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            Let's discuss how we can help transform your business with our innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 rounded-md text-sm sm:text-base min-h-[44px] flex items-center justify-center"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent text-blue-600 font-semibold border-2 border-blue-300 hover:border-blue-500 hover:text-blue-700 transition-all duration-300 rounded-md text-sm sm:text-base min-h-[44px] flex items-center justify-center"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
