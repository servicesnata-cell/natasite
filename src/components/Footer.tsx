import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-200 pt-8 sm:pt-10 md:pt-12 pb-6">
      <div className="w-full px-3 sm:px-4 md:px-6 max-w-7xl mx-auto">

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 md:gap-8">

          {/* LOGO + SOCIAL */}
          <div className="text-center sm:text-left col-span-1">
            <div className="flex justify-center sm:justify-start mb-4">
              <img
                src="/natalogo.svg"
                alt="Nata Consultancy Logo"
                className="h-16 sm:h-20 md:h-24 w-auto"
              />
            </div>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm ml-1">
              Empowering businesses through innovative technology solutions and expert staffing services.
            </p>

            <div className="flex justify-center sm:justify-start gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/nata-consultancy-services-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 border border-blue-400 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all min-h-[44px] min-w-[44px]"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>

              <a href="#" aria-label="X" className="w-10 h-10 sm:w-12 sm:h-12 border border-blue-400 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all min-h-[44px] min-w-[44px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 300.251"
                  className="sm:w-4 sm:h-4 w-4 h-4"
                  stroke="currentColor"
                 strokeWidth="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
                </svg>
              </a>

              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 border border-blue-400 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all min-h-[44px] min-w-[44px]">
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>

              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 border border-blue-400 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all min-h-[44px] min-w-[44px]">
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center sm:text-left col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-xs sm:text-sm text-gray-700 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-xs sm:text-sm text-gray-700 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-xs sm:text-sm text-gray-700 hover:text-blue-600 transition-colors">What we do</Link></li>
              <li><Link to="/careers" className="text-xs sm:text-sm text-gray-700 hover:text-blue-600 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="text-center sm:text-left col-span-1 sm:col-span-1 lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2 text-xs sm:text-sm">
              <li><Link to="/services/cloud" className="text-gray-700 hover:text-blue-600 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/services/devops" className="text-gray-700 hover:text-blue-600 transition-colors">DevOps & Automation</Link></li>
              <li><Link to="/services/cybersecurity" className="text-gray-700 hover:text-blue-600 transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services/etl" className="text-gray-700 hover:text-blue-600 transition-colors">ETL & Data Integration</Link></li>
              <li><Link to="/services/ai" className="text-gray-700 hover:text-blue-600 transition-colors">AI / Machine Learning</Link></li>
              <li><Link to="/services/tax" className="text-gray-700 hover:text-blue-600 transition-colors">US Tax Services</Link></li>
              <li><Link to="/services/bpo" className="text-gray-700 hover:text-blue-600 transition-colors">BPO Services</Link></li>
              <li><Link to="/services/staffing" className="text-gray-700 hover:text-blue-600 transition-colors">Staffing Solutions</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-center sm:text-left col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-700 text-xs sm:text-sm">
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <Mail size={17} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="whitespace-nowrap">info@nataservices.com</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <MapPin size={17} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Atlanta, Georgia</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <MapPin size={17} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-6 sm:pt-8 mt-8 sm:mt-10 border-t border-blue-100 text-center text-gray-500 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Nata Consultancy Services. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
