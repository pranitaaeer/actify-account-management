import { testResults } from '@shared/data';
import { motion, type Variants } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function TestResults() {
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
    <div className="space-y-6 max-w-4xl">
      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-bold text-gray-900">Test Results</h1>
        <p className="text-sm text-gray-500 mt-1">View the results of recent tests.</p>
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
                <th className="px-6 py-4 font-semibold">Test Name</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Score</th>
                <th className="px-6 py-4 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <motion.tbody 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="divide-y divide-gray-100"
            >
              {testResults.map((t) => {
                // Score ko number mein convert karna progress bar ke liye
                const scoreNum = parseInt(t.score.replace('%', ''), 10);

                return (
                  <motion.tr 
                    key={t.id} 
                    variants={rowVariants}
                    className="hover:bg-gray-50 transition-colors group cursor-default"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                        {t.testName}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{t.date}</td>
                    <td className="px-6 py-4">
                      {/* Score & Progress Bar */}
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-gray-900 w-10">{t.score}</span>
                        <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden hidden sm:block">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${scoreNum}%` }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            className={`h-full rounded-full ${
                              t.status === 'Passed' ? 'bg-emerald-500' : 'bg-red-500'
                            }`}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {/* Animated Status Badge */}
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105 ${
                        t.status === 'Passed' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {t.status === 'Passed' ? (
                          <CheckCircle2 size={12} />
                        ) : (
                          <XCircle size={12} />
                        )}
                        {t.status}
                      </span>
                    </td>
                  </motion.tr>
                );
              })}
            </motion.tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}