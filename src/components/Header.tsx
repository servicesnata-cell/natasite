import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function HeaderCTA() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const servicesList = [
    { id: 'cloud', label: 'Cloud Infrastructure' },
    { id: 'devops', label: 'DevOps & Automation' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'etl', label: 'ETL & Data Integration' },
    { id: 'ai', label: 'AI / Machine Learning' },
    { id: 'tax', label: 'US Tax Services' },
    { id: 'bpo', label: 'BPO Services' },
    { id: 'staffing', label: 'Staffing Solutions' },
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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/70 backdrop-blur-md">
        <div className="w-full px-3 sm:px-4 md:px-6 py-2 sm:py-2.5">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/natalogo.svg"
                alt="Logo"
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 md:px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 flex items-center min-h-[44px] ${
                    location.pathname === link.path
                      ? 'text-black font-semibold'
                      : 'text-gray-800 hover:text-black font-bold'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              ))}

              {/* Desktop Services */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="px-3 md:px-4 py-2 text-sm md:text-base font-medium text-gray-800 hover:text-black flex items-center gap-1.5 min-h-[44px]"
                  aria-expanded={isServicesOpen}
                >
                  What we do
                </button>

                <div
                  className={`absolute right-0 mt-2 w-48 sm:w-56 bg-white border border-gray-200 shadow-lg rounded-md z-50 overflow-hidden transition-all duration-300 origin-top transform ${
                    isServicesOpen
                      ? 'max-h-none opacity-100 translate-y-0 pointer-events-auto'
                      : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="py-2 overflow-visible">
                    {servicesList.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.id}`}
                        className="block px-6 -mt-[0.5rem] -mb-[0.5rem] text-sm sm:text-base font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-600 min-h-[44px] flex items-center"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.slice(2).map((link) =>
                link.path === '/contact' ? (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="inline-flex items-center gap-2 px-4 md:px-5 py-2 bg-blue-500 border-2 border-sky-500 rounded-full text-white font-bold min-h-[44px] text-sm md:text-base"
                    aria-label="Contact Us"
                  >
                    <span>Contact Us</span>
                    <span className="w-6 h-6 md:w-7 md:h-7 hexagon flex items-center justify-center">
                      <span className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                        <ArrowUpRight size={10} className="md:w-3 md:h-3" />
                      </span>
                    </span>
                  </Link>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 md:px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 flex items-center min-h-[44px] ${
                      location.pathname === link.path
                        ? 'text-black font-semibold'
                        : 'text-gray-800 hover:text-black font-bold'
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                )
              )}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-blue-600 p-2 hover:bg-white/10 rounded-md transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden mt-3 pb-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto animate-slide-down">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm sm:text-base font-medium transition-all min-h-[44px] ${
                    location.pathname === link.path
                      ? 'bg-white/10 text-blue-600 border border-white/20'
                      : 'text-blue-600 hover:bg-white/5 hover:text-blue-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* MOBILE WHAT WE DO */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm sm:text-base font-medium text-blue-600 hover:text-blue-500 hover:bg-white/5 rounded-md transition-all min-h-[44px]"
                >
                  <span>What we do</span>
                  <ChevronDown
                    className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : 'rotate-0'}`}
                    size={20}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="mt-1 ml-2 space-y-1 animate-slide-down">
                    {servicesList.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2.5 text-xs sm:text-sm text-blue-600 hover:text-blue-500 hover:bg-white/5 rounded-md transition-all min-h-[44px] flex items-center"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* MOBILE CONTACT */}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-md text-sm sm:text-base font-medium transition-all min-h-[44px]"
              >
                <div className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 border-2 border-sky-500 text-white font-bold rounded-full min-h-[44px] w-full">
                  <span>Contact Us</span>
                  <span className="w-6 h-6 hexagon flex items-center justify-center flex-shrink-0">
                    <span className="w-4 h-4 flex items-center justify-center">
                      <ArrowUpRight size={10} />
                    </span>
                  </span>
                </div>
              </Link>
            </nav>
          )}
        </div>
      </header>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slideDown 220ms ease-out; }
        .hexagon { clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%); background:#0ea5ff; }
      `}</style>
    </>
  );
}
