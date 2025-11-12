import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in required fields (name, email, message).');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Message sent successfully. Thank you — we will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 700);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === leftRef.current && entry.isIntersecting) setLeftVisible(true);
          if (entry.target === rightRef.current && entry.isIntersecting) setRightVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    if (leftRef.current) obs.observe(leftRef.current);
    if (rightRef.current) obs.observe(rightRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-black min-h-screen pt-16 md:pt-20">
      {/* Hero */}
      <div
        className="relative py-24 md:py-32 overflow-hidden bg-cover bg-center kenburns-bg"
        style={{ backgroundImage: "url('/che.jpeg')", backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Get In <span className="text-white">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We'd love to hear from you. Let's discuss how we can help transform your business.
          </p>
        </div>
      </div>

      <style>{`
        .kenburns-bg { transform-origin: center; animation: kenburns 18s ease-out both; }
        @keyframes kenburns { 0%{ transform: scale(1.08);}50%{ transform: scale(1.03);}100%{ transform: scale(1);} }

        .reveal-up { transform: translateY(24px); opacity: 0; }
        .reveal-up.visible { transform: translateY(0); opacity: 1; transition: all 700ms cubic-bezier(.2,.9,.2,1); }

        .form-field { position: relative; }
        .form-field input,
        .form-field textarea,
        .form-field select { transition: box-shadow .15s ease, border-color .15s ease; }
        .form-field input::placeholder,
        .form-field textarea::placeholder { color: transparent; }
        .form-label {
          position: absolute; left: 12px; top: 12px; pointer-events: none;
          color: #6b7280; background: transparent; padding: 0 4px;
          transform-origin: left top;
          transition: transform .18s ease, color .18s ease, top .18s ease;
        }
        .form-field input:focus + .form-label,
        .form-field textarea:focus + .form-label,
        .form-field select:focus + .form-label,
        .form-field input:not(:placeholder-shown) + .form-label,
        .form-field textarea:not(:placeholder-shown) + .form-label {
          transform: translateY(-12px) scale(.85);
          color: #111827;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Contact Info */}
          <div ref={leftRef} className={`space-y-6 ${leftVisible ? 'reveal-up visible' : 'reveal-up'}`}>
            <div className="bg-gray-900/70 p-6 sm:p-8 border border-gray-800 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-gray-300">
                Reach out to us for enquiries on our services — sales, partnerships, or general questions.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center rounded-md flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <a href="mailto:info@nataconsultancy.com" className="text-gray-300 hover:text-white">
                      info@nataservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center rounded-md flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-300">USA: +1 404-593-8792</p>
                    <p className="text-gray-300">India: +91 8886665220</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center rounded-md flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Offices</h4>
                    <p className="text-gray-300">Atlanta, Georgia</p>
                    <p className="text-gray-300">Hyderabad, Telangana</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center rounded-md flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Business Hours</h4>
                    <p className="text-gray-300">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Sat: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-300">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-900 border border-gray-800 rounded-2xl">
                <h4 className="text-white font-semibold">Atlanta, USA</h4>
                <p className="text-gray-300 text-sm mt-2">123 Technology Drive<br />Atlanta, GA 30303</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Atlanta%2C+GA" target="_blank" rel="noreferrer" className="mt-2 inline-block text-cyan-400">Open in Maps</a>
              </div>
              <div className="p-4 bg-gray-900 border border-gray-800 rounded-2xl">
                <h4 className="text-white font-semibold">Hyderabad, India</h4>
                <p className="text-gray-300 text-sm mt-2">Hitech City, Hyderabad<br />Telangana, 500081</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Hyderabad%2C+India" target="_blank" rel="noreferrer" className="mt-2 inline-block text-cyan-400">Open in Maps</a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div ref={rightRef} className={`${rightVisible ? 'reveal-up visible' : 'reveal-up'}`}>
            <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-black mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-field">
                    <input
                      id="name" name="name" required
                      value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black outline-none focus:ring-2 focus:ring-gray-300"
                      placeholder=" "
                    />
                    <label htmlFor="name" className="form-label">Full Name <span className="text-red-500">*</span></label>
                  </div>
                  <div className="form-field">
                    <input
                      id="email" name="email" type="email" required
                      value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black outline-none focus:ring-2 focus:ring-gray-300"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="form-label">Email Address <span className="text-red-500">*</span></label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-field">
                    <input
                      id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black outline-none focus:ring-2 focus:ring-gray-300"
                      placeholder=" "
                    />
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                  </div>
                  <div className="form-field">
                    <input
                      id="company" name="company" value={formData.company} onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black outline-none focus:ring-2 focus:ring-gray-300"
                      placeholder=" "
                    />
                    <label htmlFor="company" className="form-label">Company Name</label>
                  </div>
                </div>

                <div className="form-field">
                  <select
                    id="service" name="service" value={formData.service} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    <option value="">Select a service</option>
                    <option value="bpo">BPO</option>
                    <option value="payrolls">Payrolls</option>
                    <option value="devops">DevOps</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="ml">Machine Learning</option>
                    <option value="etl">ETL Services</option>
                    <option value="staffing">Staffing Solutions</option>
                  </select>
                </div>

                <div className="form-field">
                  <textarea
                    id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black outline-none focus:ring-2 focus:ring-gray-300 resize-none"
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message" className="form-label">Message <span className="text-red-500">*</span></label>
                </div>

                <div>
                  <button
                    type="submit" disabled={loading}
                    className={`w-full flex items-center justify-center space-x-2 px-6 py-3 text-white font-semibold rounded-md transition-all duration-300 shadow-lg ${
                      loading ? 'bg-gray-600 cursor-wait shadow-gray-700/40' : 'bg-black/90 hover:bg-black/100'
                    }`}
                  >
                    <Send size={18} />
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  </button>

                  {errorMessage && (
                    <p className="mt-3 text-red-500 font-medium">{errorMessage}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h3>
          <div className="space-y-3">
            <details className="bg-gray-900 p-4 rounded-lg border border-gray-800">
              <summary className="cursor-pointer text-white font-medium">How quickly will you respond to enquiries?</summary>
              <div className="mt-2 text-gray-300">We typically respond within 24-48 hours for standard enquiries. For urgent matters, please call our sales line.</div>
            </details>

            <details className="bg-gray-900 p-4 rounded-lg border border-gray-800">
              <summary className="cursor-pointer text-white font-medium">Do you offer global staffing and remote teams?</summary>
              <div className="mt-2 text-gray-300">Yes — we provide global staffing solutions across India and the USA with flexible engagement models.</div>
            </details>

            <details className="bg-gray-900 p-4 rounded-lg border border-gray-800">
              <summary className="cursor-pointer text-white font-medium">Can you handle enterprise-scale cloud migrations?</summary>
              <div className="mt-2 text-gray-300">Absolutely. We have experience migrating large-scale workloads across Azure, AWS and Google Cloud with minimal disruption.</div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
