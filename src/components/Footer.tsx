import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-200 pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">

          {/* LOGO + SOCIAL */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-3 sm:mb-4">
              <img
                src="/logonata.svg"
                alt="Nata Consultancy Logo"
                className="h-16 sm:h-20 md:h-24 w-auto"
              />
            </div>

            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed px-2 lg:px-0">
              Empowering businesses through innovative technology solutions and expert consultancy services.
            </p>

            <div className="flex justify-center lg:justify-start gap-2 sm:gap-3 mt-3 sm:mt-4">
              <a
                href="https://www.linkedin.com/company/nata-consultancy-services-private-limited/"
                target="_blank"
                className="w-9 h-9 sm:w-10 sm:h-10 border border-blue-400 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all min-h-[40px] min-w-[40px]"
              >
                <Linkedin size={16} className="sm:w-5 sm:h-5" />
              </a>

              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 border border-blue-400 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all min-h-[40px] min-w-[40px]"
              >
                <Twitter size={16} className="sm:w-5 sm:h-5" />
              </a>

              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 border border-blue-400 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all min-h-[40px] min-w-[40px]"
              >
                <Facebook size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center lg:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link to="/" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="text-center lg:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li><Link to="/services/bpo" className="text-gray-600 hover:text-blue-600 transition-colors">BPO Services</Link></li>
              <li><Link to="/services/cloud" className="text-gray-600 hover:text-blue-600 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/services/devops" className="text-gray-600 hover:text-blue-600 transition-colors">DevOps & Automation</Link></li>
              <li><Link to="/services/cybersecurity" className="text-gray-600 hover:text-blue-600 transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services/etl" className="text-gray-600 hover:text-blue-600 transition-colors">ETL & Data Integration</Link></li>
              <li><Link to="/services/staffing" className="text-gray-600 hover:text-blue-600 transition-colors">Staffing Solutions</Link></li>
              <li><Link to="/services/tax" className="text-gray-600 hover:text-blue-600 transition-colors">US Tax Services</Link></li>
              <li><Link to="/services/ai" className="text-gray-600 hover:text-blue-600 transition-colors">AI / Machine Learning</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-center lg:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600 text-xs sm:text-sm">
              <li className="flex items-start justify-center lg:justify-start gap-2">
                <Mail size={14} className="text-blue-600 flex-shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                <span className="break-all">info@nataservices.com</span>
              </li>
              <li className="flex items-start justify-center lg:justify-start gap-2">
                <Phone size={14} className="text-blue-600 flex-shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                <span>+1 404-593-8792</span>
              </li>
              <li className="flex items-start justify-center lg:justify-start gap-2">
                <Phone size={14} className="text-blue-600 flex-shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                <span>+91 8886665220</span>
              </li>
              <li className="flex items-start justify-center lg:justify-start gap-2">
                <MapPin size={14} className="text-blue-600 flex-shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                <span>Atlanta, Georgia</span>
              </li>
              <li className="flex items-start justify-center lg:justify-start gap-2">
                <MapPin size={14} className="text-blue-600 flex-shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                <span>Hyderabad, Telangana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-4 sm:pt-6 md:pt-8 mt-6 sm:mt-8 md:mt-10 border-t border-blue-100 text-center text-gray-500 text-xs sm:text-sm px-2">
          <p>&copy; {new Date().getFullYear()} Nata Consultancy Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
