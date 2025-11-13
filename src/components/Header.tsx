import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/careers', label: 'Careers' },
  ];

  const servicesList = [
    { id: 'bpo', label: 'Business Process Outsourcing' },
    { id: 'payrolls', label: 'Payroll Management' },
    { id: 'devops', label: 'DevOps Solutions' },
    { id: 'cloud', label: 'Cloud Solutions' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'etl', label: 'ETL Services' },
    { id: 'staffing', label: 'Global Staffing Solutions' },
  ];
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);
  
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled
    ? 'bg-[#002E6D]/95 backdrop-blur-sm shadow-lg shadow-[#002E6D]/50 border-b border-[#002E6D]/20'
    : 'bg-[#002E6D]/70 backdrop-blur-sm border-b border-[#002E6D]/10'
}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img
                src="/natalogo1.svg"
                alt="Logo"
                className="w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 lg:w-[200px] lg:h-[100px] object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 group min-h-[44px] flex items-center ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <div
                  className={`absolute inset-0 rounded-none transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-white/10 border border-white/20'
                      : 'bg-white/0 group-hover:bg-white/5'
                  }`}
                ></div>
              </Link>
            ))}

            {/* Desktop Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen((s) => !s)}
                aria-expanded={isServicesOpen}
                className="relative px-3 xl:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white flex items-center gap-2 focus:outline-none min-h-[44px]"
              >
                <span className="relative z-10">Services</span>
                <ChevronDown className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`} size={16} />
              </button>

              <div
                className={`absolute right-0 mt-2 w-64 bg-black border border-white/10 shadow-lg rounded-md z-50 overflow-hidden transition-all duration-300 origin-top transform ${
                  isServicesOpen ? 'max-h-96 opacity-100 translate-y-0 pointer-events-auto' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="py-2 max-h-80 overflow-y-auto">
                  {servicesList.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      className="block px-4 py-3 text-sm text-gray-200 hover:bg-white/5 hover:text-white min-h-[44px] flex items-center"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-2 max-h-[70vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-all min-h-[44px] ${
                  location.pathname === link.path
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-all min-h-[44px]"
              >
                <span>Services</span>
                <ChevronDown className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : 'rotate-0'}`} size={20} />
              </button>
              {isMobileServicesOpen && (
                <div className="mt-2 ml-4 space-y-1">
                  {servicesList.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-all min-h-[44px]"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
