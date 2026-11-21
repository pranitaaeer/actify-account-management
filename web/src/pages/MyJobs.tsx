import { myJobs } from '@shared/data';
import { Briefcase, Building2, Calendar, ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function MyJobs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-2xl font-bold text-gray-900">My Jobs</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your assigned jobs and applications.</p>
      </motion.div>

      {/* Job Cards List */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-4"
      >
        {myJobs.map((job) => (
          <motion.div 
            key={job.id} 
            variants={cardVariants}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              {/* Job Icon Avatar */}
              <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-colors duration-300 shrink-0">
                <Briefcase size={20} />
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 text-lg group-hover:text-black transition-colors">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1.5"><Building2 size={14} /> {job.company}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {job.type}</span>
                </div>
              </div>
            </div>

            {/* Status & Action */}
            <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-0 border-gray-100">
              <span className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                job.status === 'Active' 
                  ? 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200' 
                  : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
              }`}>
                {job.status}
              </span>
              
              {/* Arrow Icon (Hover Effect) */}
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}