import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-200 pt-12 pb-6">
      <div className="max-w-9xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* LOGO + SOCIAL */}
          <div className="text-center lg:text-left col-span-1">
            <div className="flex justify-center lg:justify-start mb-4">
              <img
                src="/nata.svg"
                alt="Nata Consultancy Logo"
                className="h-24 md:h-28 w-auto"
              />
            </div>

            <p className="text-gray-600 text-sm mb-8 leading-relaxed max-w-xl lg:max-w-2xl">
              Empowering businesses through innovative technology solutions and expert consultancy services.
            </p>

            <div className="flex justify-center lg:justify-start gap-3 mt-4">
              <a
                href="https://www.linkedin.com/company/nata-consultancy-services-private-limited/"
                target="_blank"
                className="w-12 h-12 border border-blue-400 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>

              <a href="#" className="w-12 h-12 border border-blue-400 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                <Twitter size={20} />
              </a>

              <a href="#" className="w-12 h-12 border border-blue-400 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>

              <a href="#" className="w-12 h-12 border border-blue-400 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
   <div className="px-28 text-center lg:text-left col-span-1">
  <h4 className="text-xl font-semibold text-gray-900 mb-5">Quick Links</h4>
  <ul className="space-y-3">
    <li><Link to="/" className="text-base text-gray-700 hover:text-blue-600">Home</Link></li>
    <li><Link to="/about" className="text-base text-gray-700 hover:text-blue-600">About Us</Link></li>
    <li><Link to="/services" className="text-base text-gray-700 hover:text-blue-600">What we do</Link></li>
    <li><Link to="/careers" className="text-base text-gray-700 hover:text-blue-600">Careers</Link></li>
  </ul>
</div>

{/* SERVICES */}
<div className="px-36 text-center lg:text-left col-span-2">
  <h4 className="text-xl font-semibold text-gray-900 mb-5">Services</h4>
  <ul className="space-y-3 text-base">
    <li><Link to="/services/cloud" className="text-gray-700 hover:text-blue-600">Cloud Infrastructure</Link></li>
    <li><Link to="/services/devops" className="text-gray-700 hover:text-blue-600">DevOps & Automation</Link></li>
    <li><Link to="/services/cybersecurity" className="text-gray-700 hover:text-blue-600">Cybersecurity</Link></li>
    <li><Link to="/services/etl" className="text-gray-700 hover:text-blue-600">ETL & Data Integration</Link></li>
    <li><Link to="/services/ai" className="text-gray-700 hover:text-blue-600">AI / Machine Learning</Link></li>
    <li><Link to="/services/tax" className="text-gray-700 hover:text-blue-600">US Tax Services</Link></li>
    <li><Link to="/services/bpo" className="text-gray-700 hover:text-blue-600">BPO Services</Link></li>
    <li><Link to="/services/staffing" className="text-gray-700 hover:text-blue-600">Staffing Solutions</Link></li>
  </ul>
</div>

{/* CONTACT */}
<div className="-mx-40 text-center lg:text-left col-span-1">
  <h4 className="text-xl font-semibold text-gray-900 mb-5">Contact</h4>
  <ul className="space-y-3 text-gray-700 text-base">
    <li className="flex items-start justify-center lg:justify-start gap-3">
      <Mail size={20} className="text-blue-600" />
      <span className="break-all">info@nataservices.com</span>
    </li>
    <li className="flex items-start justify-center lg:justify-start gap-3">
      <MapPin size={20} className="text-blue-600" />
      <span>Atlanta, Georgia</span>
    </li>
    <li className="flex items-start justify-center lg:justify-start gap-3">
      <MapPin size={20} className="text-blue-600" />
      <span>Hyderabad, Telangana</span>
    </li>
  </ul>
</div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 mt-10 border-t border-blue-100 text-center text-gray-500 text-sm">
  <p>&copy; {new Date().getFullYear()} Nata Consultancy Services. All rights reserved.</p>
  <p className="mt-2">
    Made with ❤️ by{" "}
    <a
      href="https://staffarc.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      Staffarc
    </a>
  </p>
</div>


      </div>
    </footer>
  );
}
