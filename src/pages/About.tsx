import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white min-h-screen pt-16 sm:pt-20 md:pt-24 px-3 sm:px-4 md:px-6">
      {/* Hero Section */}
      <div
        className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-cover bg-center mb-6 sm:mb-8 md:mb-12 rounded-lg sm:rounded-xl"
        style={{ backgroundImage: "url('/ab.jpeg')", backgroundAttachment: 'scroll' }}
      >
        <div className="absolute inset-0 bg-blue-600/70 rounded-lg sm:rounded-xl"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 text-center z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight leading-tight">
            Driving Business Performance <span className="text-white">Through Strategic Technology and Outsourcing Excellence</span>
          </h1>
          <p className="mt-2 sm:mt-3 md:mt-4 text-blue-100 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Nata Consultancy Services is a global technology and business solutions provider dedicated to helping organizations operate with clarity, speed, and confidence.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-gray-700">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              Nata Consultancy Services is a global technology and business solutions provider dedicated to helping organizations operate with clarity, speed, and confidence. We focus on delivering outcome-driven services that simplify complex processes, strengthen digital foundations, and support long-term business advancement.
            </p>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              Our company was built with a simple belief—technology should enable growth, not create barriers. With this vision, we bring together a diverse team of specialists who excel in cloud engineering, automation, cybersecurity, data integration, staffing solutions, business operations support, and regulatory services. Every solution we deliver is carefully designed to align with each client's goals, industry standards, and future roadmap.
            </p>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              What sets us apart is our ability to blend technical expertise with practical business understanding. We collaborate closely with our clients to understand their challenges, design tailored strategies, and support seamless implementation from start to finish. Our teams in the United States and India work in unified coordination to ensure reliability, timely execution, and around-the-clock support.
            </p>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              Over the years, we've helped companies strengthen their digital ecosystems, build efficient workflows, adopt secure cloud infrastructures, and access the right talent to support mission-critical operations. We take pride in building long-lasting partnerships rooted in trust, transparency, and consistent results.
            </p>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              At our core, we are committed to enabling organizations to adapt faster, innovate confidently, and operate at their highest potential in a rapidly changing digital environment. As your trusted partner, Nata Consultancy Services delivers the expertise, dedication, and forward-thinking approach required to accelerate your growth journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-blue-100">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-800 mb-3 sm:mb-4 md:mb-6 tracking-tight">
            Ready to Work Together?
          </h2>
          <p className="text-blue-700 text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed px-2">
            Let's discuss how we can help transform your business with our innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
            <Link
              to="/contact"
              className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 rounded-md text-xs sm:text-sm md:text-base min-h-[44px] flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
