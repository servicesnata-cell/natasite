import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Nata <span>Consultancy Services</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Empowering businesses through innovative technology solutions and expert consultancy services.
            </p>
            <div className="flex space-x-3">
              <a
  href="https://www.linkedin.com/company/nata-consultancy-services-private-limited/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-cyan-400 transition-colors"
>
  <Linkedin size={20} />
</a>

              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                {/* Clients page removed */}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm"> <Link to="/services/bpo" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  BPO
                </Link></li>
              <li className="text-gray-400 text-sm"> <Link to="/services/payrolls" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Payroll Services
                </Link></li>
              <li className="text-gray-400 text-sm"> <Link to="/services/devops" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Dev Ops
                </Link></li>
              <li className="text-gray-400 text-sm"><Link to="/services/cloud" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Cloud Solutions
                </Link></li>
              <li className="text-gray-400 text-sm"><Link to="/services/ai" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Artificial Intelligence
                </Link></li>
              <li className="text-gray-400 text-sm"><Link to="/services/ml" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Machine Learning
                </Link></li>
              <li className="text-gray-400 text-sm"><Link to="/services/etl" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  ETL
                </Link></li>
              <li className="text-gray-400 text-sm"><Link to="/services/staffing" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Staffing
                </Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>info@nataservices.com</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+1 404-593-8792</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+91 8886665220</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Atlanta, Georgia</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Hyderabad, Telangana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Nata Consultancy Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
