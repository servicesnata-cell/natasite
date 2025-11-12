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
    <div className="bg-black min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      {/* --- Hero Section --- */}
      <div
        className="relative w-full py-24 sm:py-32 overflow-hidden bg-cover bg-center mb-12"
        style={{ backgroundImage: "url('/aphe.jpeg')", backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Apply <span className="text-white">Now</span>
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Ready to take the next step? Fill in your details and send us your application today.
          </p>
        </div>
      </div>

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
          color: #6b7280;
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
          color: #111827;
        }
      `}</style>

      {/* --- Application Form --- */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 text-center">Apply Now</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* Name */}
          <div className="form-field">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black outline-none focus:ring-2 focus:ring-gray-300"
              placeholder=" "
            />
            <label htmlFor="name" className="form-label">Full Name <span className="text-red-500">*</span></label>
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
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black outline-none focus:ring-2 focus:ring-gray-300"
              placeholder=" "
            />
            <label htmlFor="email" className="form-label">Email Address <span className="text-red-500">*</span></label>
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
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black outline-none focus:ring-2 focus:ring-gray-300"
              placeholder=" "
            />
            <label htmlFor="phone" className="form-label">Phone Number <span className="text-red-500">*</span></label>
          </div>

          {/* Resume Upload */}
          <div className="form-field">
            <label className="block text-sm font-medium text-black mb-2">Upload Resume</label>
            <div className="relative flex items-center justify-between bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-black cursor-pointer hover:border-gray-300 transition-all">
              <input
                type="file"
                id="resume"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <span className="truncate text-gray-600 text-sm sm:text-base">
                {formData.file ? formData.file.name : 'Choose file'}
              </span>
              <Upload size={18} />
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
            className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-black outline-none focus:ring-2 focus:ring-gray-300 resize-none"
            placeholder=" "
          />
          <label htmlFor="message" className="form-label">Message <span className="text-red-500">*</span></label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 px-6 py-3 text-white font-semibold rounded-md transition-all duration-300 shadow-lg bg-black/90 hover:bg-black/100"
        >
          <Send size={18} />
          <span>Send Application</span>
        </button>
      </form>
    </div>
  );
}
