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
            <p className="text-blue-100 text-xs sm:text-sm md:text-base lg:text-lg text-center w-full whitespace-normal break-words">
              Nata Consultancy Services is a global technology and business solutions provider dedicated to helping organizations operate with clarity, speed, and confidence.
            </p>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-8">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-gray-700">
              <p className="text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed text-justify">
                Nata Consultancy Services is a global technology and business solutions provider dedicated to helping organizations operate with clarity, speed, and confidence. We focus on delivering outcome-driven services that simplify complex processes, strengthen digital foundations, and support long-term business advancement.
              </p>

              <p className="text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed text-justify">
                Our company was built with a simple belief—technology should enable growth, not create barriers. With this vision, we bring together a diverse team of specialists who excel in cloud engineering, automation, cybersecurity, data integration, staffing solutions, business operations support, and regulatory services. Every solution we deliver is carefully designed to align with each client's goals, industry standards, and future roadmap.
              </p>

              <p className="text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed text-justify">
                What sets us apart is our ability to blend technical expertise with practical business understanding. We collaborate closely with our clients to understand their challenges, design tailored strategies, and support seamless implementation from start to finish. Our teams in the United States and India work in unified coordination to ensure reliability, timely execution, and around-the-clock support.
              </p>

              <p className="text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed text-justify">
                Over the years, we've helped companies strengthen their digital ecosystems, build efficient workflows, adopt secure cloud infrastructures, and access the right talent to support mission-critical operations. We take pride in building long-lasting partnerships rooted in trust, transparency, and consistent results.
              </p>

              <p className="text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed text-justify">
                At our core, we are committed to enabling organizations to adapt faster, innovate confidently, and operate at their highest potential in a rapidly changing digital environment. As your trusted partner, Nata Consultancy Services delivers the expertise, dedication, and forward-thinking approach required to accelerate your growth journey.
              </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
 <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-24 bg-blue-600 text-white">
  <div className="max-w-none w-full text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight">
      Ready to Work Together?
    </h2>

    <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto">
      Let's discuss how we can help transform your business with our innovative solutions
    </p>

    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition-colors text-sm sm:text-base min-h-[44px]"
      >
        Contact Us
      </Link>
    </div>
  </div>
</section>
</div>
    </div>
  );
}
