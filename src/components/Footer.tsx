import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-300 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              Nata <span>Consultancy Services</span>
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
              Empowering businesses through innovative technology solutions and expert consultancy services.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/company/nata-consultancy-services-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-cyan-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-cyan-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-cyan-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-cyan-500 text-xs sm:text-sm transition-colors inline-block min-h-[44px] flex items-center">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-cyan-500 text-xs sm:text-sm transition-colors inline-block min-h-[44px] flex items-center">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-cyan-500 text-xs sm:text-sm transition-colors inline-block min-h-[44px] flex items-center">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-cyan-500 text-xs sm:text-sm transition-colors inline-block min-h-[44px] flex items-center">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link to="/services/bpo" className="text-gray-600 hover:text-cyan-500 text-xs sm:text-sm transition-colors inline-block min-h-[44px] flex items-center">BPO</Link></li>
              <li><Link to="/services/payrolls" className="text-gray-600 hover:text-cyan-500 text-xs sm:text-sm transition-colors inline-block min-h-[44px] flex items-center">Payroll Services</Link></li>
              <li><Link to="/services/devops" className="text-gray-600 hover:text-cyan-500 text-xs sm:text-sm transition-colors inline-block min-h-[44px] flex items-center">Dev Ops</Link></li>
              <li><Link to="/services/cloud" className="text-gray-600 hover:text-cyan-500 text-xs sm:text-sm transition-colors inline-block min-h-[44px] flex items-center">Cloud Solutions</Link></li>
              <li><Link to="/services/ai" className="text-gray-600 hover:text-cyan-500 text-xs sm:text-sm transition-colors inline-block min-h-[44px] flex items-center">Artificial Intelligence</Link></li>
              <li><Link to="/services/ml" className="text-gray-600 hover:text-cyan-500 text-xs sm:text-sm transition-colors inline-block min-h-[44px] flex items-center">Machine Learning</Link></li>
              <li><Link to="/services/etl" className="text-gray-600 hover:text-cyan-500 text-xs sm:text-sm transition-colors inline-block min-h-[44px] flex items-center">ETL</Link></li>
              <li><Link to="/services/staffing" className="text-gray-600 hover:text-cyan-500 text-xs sm:text-sm transition-colors inline-block min-h-[44px] flex items-center">Staffing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start space-x-2 text-gray-600 text-xs sm:text-sm">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span className="break-all">info@nataservices.com</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-600 text-xs sm:text-sm">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+1 404-593-8792</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-600 text-xs sm:text-sm">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+91 8886665220</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-600 text-xs sm:text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Atlanta, Georgia</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-600 text-xs sm:text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Hyderabad, Telangana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-200 text-center text-gray-500 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Nata Consultancy Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
