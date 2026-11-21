import { feedbackList } from '@shared/data';
import { Star, MessageSquareQuote } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Feedback() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
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
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-bold text-gray-900">Feedback</h1>
        <p className="text-sm text-gray-500 mt-1">User feedback and reviews.</p>
      </motion.div>

      {/* Feedback Cards List */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-4"
      >
        {feedbackList.map((f) => (
          <motion.div 
            key={f.id} 
            variants={cardVariants}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center font-bold text-sm group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                  {f.user.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{f.user}</h3>
                  <div className="flex gap-0.5 mt-0.5">
                    {/* Animated Stars */}
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        className={`transition-colors duration-300 ${
                          i < f.rating 
                            ? "fill-amber-400 text-amber-400" 
                            : "fill-gray-100 text-gray-200"
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                {f.date}
              </span>
            </div>
            
            {/* Comment Box */}
            <div className="mt-4 relative pl-8">
              <MessageSquareQuote size={20} className="absolute left-0 top-0 text-gray-200 group-hover:text-gray-300 transition-colors" />
              <p className="text-sm text-gray-600 leading-relaxed italic">
                "{f.comment}"
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}