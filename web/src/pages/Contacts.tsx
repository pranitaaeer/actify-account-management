import { contacts } from '@shared/data';
import { Mail, Phone, Building } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Contacts() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 } // Har row 0.08s ke gap se aayegi
    }
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300 } }
  };

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-bold text-gray-900">All Contacts</h1>
        <p className="text-sm text-gray-500 mt-1">Manage all your business contacts here.</p>
      </motion.div>

      {/* Table Container with Fade In */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Company</th>
                <th className="px-6 py-4 font-semibold">Contact Info</th>
              </tr>
            </thead>
            {/* Body ko motion tag diya taaki stagger kaam kare */}
            <motion.tbody 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="divide-y divide-gray-100"
            >
              {contacts.map((c) => (
                <motion.tr 
                  key={c.id} 
                  variants={rowVariants}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                    {/* Avatar with hover effect */}
                    <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-xs font-bold group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                      {c.name.charAt(0)}
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {c.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Building size={14} className="text-gray-400"/> {c.company}
                    </div>
                  </td>
                  <td className="px-6 py-4 space-y-1">
                    <div className="flex items-center gap-2 text-xs hover:text-gray-900 transition-colors">
                      <Mail size={12} className="text-gray-400"/> {c.email}
                    </div>
                    <div className="flex items-center gap-2 text-xs hover:text-gray-900 transition-colors">
                      <Phone size={12} className="text-gray-400"/> {c.phone}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}