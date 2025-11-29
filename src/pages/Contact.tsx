import { useState, useRef } from "react";
import { Mail, MapPin, Send, Clock } from 'lucide-react';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues: any) => {
    let errors: any = {};
    if (!inputValues.name || inputValues.name.length < 2) errors.name = "Name too short";
    if (!inputValues.email || inputValues.email.length < 5) errors.email = "Invalid email";
    if (!inputValues.message || inputValues.message.length < 10) errors.message = "Message too short";
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateValues(formData);
    setErrors(validationErrors);
    setSubmitting(true);

    if (Object.keys(validationErrors).length === 0) {
      setTimeout(() => {
        alert("Message sent successfully. Thank you — we will get back to you soon.");
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
        setSubmitting(false);
      }, 700);
    } else {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-16 sm:pt-20 md:pt-24 px-3 sm:px-4 md:px-6 overflow-x-hidden">
      {/* Hero */}
      <div
        className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-cover bg-center mb-6 sm:mb-8 md:mb-12 rounded-lg sm:rounded-xl"
        style={{ backgroundImage: "url('/che.jpeg')", backgroundAttachment: 'scroll' }}
      >
        <div className="absolute inset-0 bg-blue-600/40 rounded-lg sm:rounded-xl"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 text-center z-10">
          <h1 className="-mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight leading-tight">
            Get In <span className="text-white">Touch</span>
          </h1>
          <p className="mt-2 sm:mt-3 md:mt-4 text-blue-100 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            We'd love to hear from you. Let's discuss how we can help transform your business.
          </p>
        </div>
      </div>

      <main id="main" className="px-4 sm:px-6 md:px-8 overflow-x-hidden">
        <section id="contact" className="contact py-12 sm:py-16 md:py-20 bg-contain sm:bg-cover bg-center bg-no-repeat sm:bg-repeat bg-fixed">
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Left: Contact Info */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                                <div className="info-item flex gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-white/30 backdrop-blur-xs shadow-lg rounded-lg sm:rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 text-white flex items-center justify-center rounded-full min-w-[40px]">
                    <Mail size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-blue-900 font-bold text-xl sm:text-2xl md:text-3xl">Email:</h4>
                    <p className="text-blue-800 text-xs sm:text-sm md:text-base break-all">
                      <a href="mailto:info@nataservices.com" className="hover:text-blue-900 font-semibold">info@nataservices.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="info-item flex gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-white/30 backdrop-blur-xs shadow-lg rounded-lg sm:rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 text-white flex items-center justify-center rounded-full min-w-[40px]">
                    <MapPin size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-blue-900 font-bold text-xl sm:text-2xl md:text-3xl break-words">Location:</h4>
                    <h5 className="text-blue-700 mt-1 sm:mt-2 text-base sm:text-lg md:text-xl font-semibold">India:</h5>
                    <p className="text-blue-800 font-semibold text-xs sm:text-sm md:text-base leading-relaxed">
                      Hyderabad, Telangana
                    </p>
                    <h5 className="text-blue-700 mt-2 text-base sm:text-lg md:text-xl font-semibold">U.S.A:</h5>
                    <p className="text-blue-800 font-semibold text-xs sm:text-sm md:text-base">Atlanta, Georgia</p>
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8176068155844!2d78.474991!3d17.406688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sHyderabad!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg sm:rounded-xl"
                ></iframe>
              </div>

              {/* Right: Contact Form */}
              <div className="info-item p-4 sm:p-5 md:p-6 bg-white/30 backdrop-blur-xs shadow-lg rounded-lg sm:rounded-xl">
                <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="form-group">
                      <input
                        type="text" name="name" placeholder="Your Name" value={formData.name}
                        onChange={handleChange} className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 outline-none bg-white text-black placeholder-gray-500 text-sm sm:text-base rounded-md min-h-[44px]"
                        style={{ borderColor: errors.name ? 'red' : '' }}
                      />
                      {errors.name && <small className="text-red-500 text-xs">{errors.name}</small>}
                    </div>
                    <div className="form-group">
                      <input
                        type="email" name="email" placeholder="Your Email" value={formData.email}
                        onChange={handleChange} className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 outline-none bg-white text-black placeholder-gray-500 text-sm sm:text-base rounded-md min-h-[44px]"
                        style={{ borderColor: errors.email ? 'red' : '' }}
                      />
                      {errors.email && <small className="text-red-500 text-xs">{errors.email}</small>}
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="text" name="phone" placeholder="Phone Number" value={formData.phone}
                      onChange={handleChange} className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 outline-none bg-white text-black placeholder-gray-500 text-sm sm:text-base rounded-md min-h-[44px]"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text" name="company" placeholder="Company Name" value={formData.company}
                      onChange={handleChange} className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 outline-none bg-white text-black placeholder-gray-500 text-sm sm:text-base rounded-md min-h-[44px]"
                    />
                  </div>

                  <div className="form-group">
                    <select
                      name="service" value={formData.service} onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 outline-none bg-white text-gray-800 font-medium text-sm sm:text-base rounded-md min-h-[44px]"
                    >
                      <option value="" className="text-gray-600">Select a service</option>
                      <option value="cloud" className="text-gray-800">Cloud Infrastructure</option>
                      <option value="devops" className="text-gray-800">DevOps & Automation</option>
                      <option value="cybersecurity" className="text-gray-800">Cybersecurity</option>
                      <option value="etl" className="text-gray-800">ETL & Data Integration</option>
                      <option value="ai" className="text-gray-800">AI / Machine Learning</option>
                      <option value="tax" className="text-gray-800">US Tax Services</option>
                      <option value="bpo" className="text-gray-800">BPO Services</option>
                      <option value="staffing" className="text-gray-800">Staffing Solutions</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message" placeholder="Your Message" value={formData.message}
                      onChange={handleChange} rows={5} className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 outline-none bg-white text-black placeholder-gray-500 text-sm sm:text-base rounded-md min-h-[120px]"
                      style={{ borderColor: errors.message ? 'red' : '' }}
                    />
                    {errors.message && <small className="text-red-500 text-xs">{errors.message}</small>}
                  </div>

                  {submitting && Object.keys(errors).length === 0 && (
                    <div className="bg-green-100 text-green-800 p-3 rounded text-center text-sm sm:text-base">
                      Successfully submitted ✓
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-all rounded-md text-sm sm:text-base min-h-[44px] flex items-center justify-center gap-2"
                  >
                    <Send size={16} className="sm:w-5 sm:h-5" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
