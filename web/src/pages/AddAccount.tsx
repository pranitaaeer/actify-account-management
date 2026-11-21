import { useState } from 'react';
import { industries } from '@shared/data';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface CreateAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateAccountModal({ isOpen, onClose }: CreateAccountModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    status: '',
    remark: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo logic
    alert('Account Created Successfully (Demo)');
    onClose();
    // Reset form after closing
    setTimeout(() => {
      setForm({ name: '', email: '', phone: '', website: '', industry: '', status: '', remark: '' });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-xl shadow-xl w-full max-w-2xl relative z-10 my-8 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-gray-100">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Add New Account</h2>
              <p className="text-sm text-gray-500 mt-1">Fill in the details to create a new account record.</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-900 transition-colors mt-1">
              <X size={20} />
            </button>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              
              {/* Account Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Account Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Deepu Maddheshiya"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="deepu18@example.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91-720-803-0455"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all"
                />
              </div>

              {/* Website */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Website
                </label>
                <input
                  name="website"
                  type="url"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="https://example.com (optional)"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all"
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Industry <span className="text-red-500">*</span>
                </label>
                <select
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all"
                >
                  <option value="" disabled>Select industry...</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              {/* Account Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Account Status <span className="text-red-500">*</span>
                </label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all"
                >
                  <option value="" disabled>Select status...</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              {/* Remark (Full Width) */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Remark
                </label>
                <textarea
                  name="remark"
                  value={form.remark}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Optional notes about this account..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all resize-none"
                ></textarea>
              </div>

            </div>

            {/* Footer Buttons */}
            <div className="pt-6 mt-6 border-t border-gray-100 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-black active:scale-95 transition-all shadow-sm"
              >
                Create Account
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}