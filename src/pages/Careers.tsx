import { Upload, Send } from 'lucide-react';
import { useState } from 'react';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      file: e.target.files ? e.target.files[0] : null,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Application sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '', file: null });
  };

  return (
    <>
      {/* --- Hero Section (full-bleed, outside padded container) --- */}
      <div
        className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-cover bg-center mb-0 mx-3 sm:mx-4 md:mx-0 rounded-lg sm:rounded-xl md:rounded-none"
        style={{ backgroundImage: "url('/aphe.jpeg')", backgroundAttachment: 'scroll' }}
      >
        <div className="relative max-w-4xl mx-auto px-3 sm:px-4 md:px-6 text-center z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight leading-tight">
            Apply <span className="text-white">Now</span>
          </h1>
          <p className="mt-2 sm:mt-3 md:mt-4 text-blue-100 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Ready to take the next step? Fill in your details and send us your application today.
          </p>
        </div>
      </div>

  <div className="bg-white min-h-screen flex flex-col items-center justify-start px-3 sm:px-4 md:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-16">
      <style>{`
        .form-field { position: relative; width: 100%; }
        .form-field input,
        .form-field textarea {
          transition: box-shadow .15s ease, border-color .15s ease;
        }
        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: transparent;
        }
        .form-label {
          position: absolute;
          left: 12px;
          top: 12px;
          pointer-events: none;
          color: #3b82f6; /* blue-500 */
          background: transparent;
          padding: 0 4px;
          transform-origin: left top;
          transition: transform .18s ease, color .18s ease, top .18s ease;
        }
        .form-field input:focus + .form-label,
        .form-field textarea:focus + .form-label,
        .form-field input:not(:placeholder-shown) + .form-label,
        .form-field textarea:not(:placeholder-shown) + .form-label {
          transform: translateY(-12px) scale(.85);
          color: #1e3a8a; /* blue-900 */
        }
      `}</style>

      {/* --- Application Form --- */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-blue-50 shadow-xl rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 sm:mb-6 text-center">Apply Now</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {/* Name */}
          <div className="form-field">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-blue-200 rounded-md text-blue-900 outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm min-h-[40px]"
              placeholder=" "
            />
            <label htmlFor="name" className="form-label text-xs sm:text-sm">Full Name <span className="text-red-500">*</span></label>
          </div>

          {/* Email */}
          <div className="form-field">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-blue-200 rounded-md text-blue-900 outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm min-h-[40px]"
              placeholder=" "
            />
            <label htmlFor="email" className="form-label text-xs sm:text-sm">Email Address <span className="text-red-500">*</span></label>
          </div>

          {/* Phone */}
          <div className="form-field">
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-blue-200 rounded-md text-blue-900 outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm min-h-[40px]"
              placeholder=" "
            />
            <label htmlFor="phone" className="form-label">Phone Number <span className="text-red-500">*</span></label>
          </div>

          {/* Resume Upload */}
          <div className="form-field">
            <label className="block text-sm font-medium text-blue-900 mb-2">Upload Resume</label>
            <div className="relative flex items-center justify-between bg-white border border-blue-200 rounded-md px-4 py-3 text-blue-900 cursor-pointer hover:border-blue-400 transition-all">
              <input
                type="file"
                id="resume"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <span className="truncate text-blue-500 text-sm sm:text-base">
                {formData.file ? formData.file.name : 'Choose file'}
              </span>
              <Upload size={18} className="text-blue-500" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="form-field mb-4">
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-blue-200 rounded-md text-blue-900 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder=" "
          />
          <label htmlFor="message" className="form-label">Message <span className="text-red-500">*</span></label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 px-6 py-3 text-white font-semibold rounded-md transition-all duration-300 shadow-lg bg-blue-600 hover:bg-blue-700"
        >
          <Send size={18} />
          <span>Send Application</span>
        </button>
      </form>
    </div>
    </>
  );
}
