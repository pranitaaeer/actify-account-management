import { deals } from '@shared/data';
import { motion, type Variants } from 'framer-motion';

export default function Deals() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
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
        <h1 className="text-2xl font-bold text-gray-900">All Deals</h1>
        <p className="text-sm text-gray-500 mt-1">View your ongoing and closed deals.</p>
      </motion.div>

      {/* Table Container */}
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
                <th className="px-6 py-4 font-semibold">Deal Name</th>
                <th className="px-6 py-4 font-semibold">Account</th>
                <th className="px-6 py-4 font-semibold">Stage</th>
                <th className="px-6 py-4 font-semibold text-right">Amount</th>
              </tr>
            </thead>
            <motion.tbody 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="divide-y divide-gray-100"
            >
              {deals.map((d) => (
                <motion.tr 
                  key={d.id} 
                  variants={rowVariants}
                  className="hover:bg-gray-50 transition-colors group cursor-default"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {d.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{d.account}</td>
                  <td className="px-6 py-4">
                    {/* Animated Stage Badge */}
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105 ${
                      d.stage === 'Negotiation' ? 'bg-amber-100 text-amber-700' :
                      d.stage === 'Proposal' ? 'bg-blue-100 text-blue-700' :
                      d.stage === 'Closed Won' ? 'bg-emerald-100 text-emerald-700' : 
                      'bg-gray-100 text-gray-700'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        d.stage === 'Negotiation' ? 'bg-amber-500' :
                        d.stage === 'Proposal' ? 'bg-blue-500' :
                        d.stage === 'Closed Won' ? 'bg-emerald-500' : 
                        'bg-gray-500'
                      }`}></span>
                      {d.stage}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">
                    ${d.amount.toLocaleString()}
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