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
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16">
      {/* --- Apply Now Header --- */}
      <div className="relative text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
          Apply Now
        </h1>
        <div className="absolute -inset-x-10 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-transparent h-[2px] blur-md"></div>
        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Ready to take the next step? Fill in your details and send us your application today.
        </p>
      </div>

      {/* --- Application Form --- */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/80 border border-gray-700/50 rounded-2xl p-10 shadow-2xl shadow-cyan-500/10 backdrop-blur-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all resize-none"
            />
          </div>
        </div>

        {/* File Upload */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-300 mb-2">Upload Resume / File</label>
          <div className="relative flex items-center justify-between bg-black border border-gray-700 rounded-lg px-4 py-3 text-white cursor-pointer hover:border-cyan-400 transition-all">
            <input
              type="file"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <span className="truncate text-gray-400">
              {formData.file ? formData.file.name : 'Choose a file to upload'}
            </span>
            <Upload className="text-cyan-400" size={20} />
          </div>
        </div>

        {/* Send Message Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30"
        >
          <Send size={20} />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
}
