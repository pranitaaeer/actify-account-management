import { accounts, getStats, industries } from '@shared/data';
import { Building2, CheckCircle2, XCircle, PieChart } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function AccountReport() {
  const stats = getStats();
  
  // Calculate industry breakdown
  const industryData = industries.map((industry, index) => {
    const industryAccounts = accounts.filter((a) => a.industry === industry);
    const active = industryAccounts.filter((a) => a.status === 'Active').length;
    const inactive = industryAccounts.filter((a) => a.status === 'Inactive').length;
    const count = industryAccounts.length;
    const share = ((count / stats.total) * 100).toFixed(1);

    const colors = [
      'bg-blue-500', 'bg-emerald-500', 'bg-violet-500', 'bg-amber-500', 
      'bg-rose-500', 'bg-cyan-500', 'bg-orange-500', 'bg-teal-500', 
      'bg-indigo-500', 'bg-pink-500'
    ];
    
    return {
      name: industry,
      count,
      active,
      inactive,
      share,
      color: colors[index % colors.length],
    };
  });

  const activePercent = Math.round((stats.active / stats.total) * 100);
  const inactivePercent = Math.round((stats.inactive / stats.total) * 100);

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-bold text-gray-900">Account Report</h1>
        <p className="text-sm text-gray-500 mt-1">
          Live analytics derived from your account dataset. Figures update automatically when accounts change.
        </p>
      </motion.div>

      {/* 4 Stat Cards with Stagger Effect */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {/* Total */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Accounts</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stats.total}</p>
            <p className="text-xs text-gray-400 mt-1">All records</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
            <Building2 size={20} />
          </div>
        </motion.div>

        {/* Active */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stats.active}</p>
            <p className="text-xs text-gray-400 mt-1">{activePercent}% of total</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
            <CheckCircle2 size={20} />
          </div>
        </motion.div>

        {/* Inactive */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Inactive</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stats.inactive}</p>
            <p className="text-xs text-gray-400 mt-1">{inactivePercent}% of total</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gray-400 text-white flex items-center justify-center">
            <XCircle size={20} />
          </div>
        </motion.div>

        {/* Industries */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Industries</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stats.industries}</p>
            <p className="text-xs text-gray-400 mt-1">Unique sectors</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-violet-500 text-white flex items-center justify-center">
            <PieChart size={20} />
          </div>
        </motion.div>
      </motion.div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Status Distribution */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-6">
            <PieChart size={18} className="text-gray-500" />
            <h2 className="text-sm font-semibold text-gray-900">Status Distribution</h2>
          </div>
          
          {/* Animated Progress Bar */}
          <div className="h-3 w-full bg-gray-200 rounded-full flex overflow-hidden mb-3">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${activePercent}%` }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="h-full bg-emerald-500"
            />
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${inactivePercent}%` }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="h-full bg-gray-400"
            />
          </div>
          
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-8">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Active — {stats.active} ({activePercent}%)
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              Inactive — {stats.inactive} ({inactivePercent}%)
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Active Rate</p>
              <p className="text-lg font-bold text-emerald-600">{activePercent}%</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Inactive Rate</p>
              <p className="text-lg font-bold text-gray-600">{inactivePercent}%</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Total Records</p>
              <p className="text-lg font-bold text-gray-900">{stats.total}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Sectors</p>
              <p className="text-lg font-bold text-gray-900">{stats.industries}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Industry Breakdown (Bars) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-6">
            <Building2 size={18} className="text-gray-500" />
            <h2 className="text-sm font-semibold text-gray-900">Industry Breakdown</h2>
          </div>
          <div className="space-y-4">
            {industryData.map((ind, i) => (
              <div key={ind.name} className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${ind.color}`}></span>
                <span className="text-xs text-gray-700 w-32 truncate">{ind.name}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  {/* Animated Bar Growth */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(ind.count / stats.total) * 100 * 3}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.05), ease: "easeOut" }}
                    className={`h-full ${ind.color} opacity-80`}
                  />
                </div>
                <span className="text-xs text-gray-500 font-medium w-20 text-right">{ind.count} • {ind.share}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: All Industries Summary Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
      >
        <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PieChart size={18} className="text-gray-500" />
            <h2 className="text-sm font-semibold text-gray-900">All Industries Summary</h2>
          </div>
          <span className="text-xs text-gray-500">{stats.total} total accounts</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-white border-b border-gray-200 text-[10px] uppercase text-gray-500">
              <tr>
                <th className="px-6 py-3 font-semibold">Industry</th>
                <th className="px-6 py-3 font-semibold text-center">Count</th>
                <th className="px-6 py-3 font-semibold text-center">Active</th>
                <th className="px-6 py-3 font-semibold text-center">Inactive</th>
                <th className="px-6 py-3 font-semibold text-right">Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {industryData.map((ind, index) => (
                <motion.tr 
                  key={ind.name} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (index * 0.05) }}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-3 flex items-center gap-2 font-medium text-gray-900">
                    <span className={`w-2 h-2 rounded-full ${ind.color}`}></span>
                    {ind.name}
                  </td>
                  <td className="px-6 py-3 text-center">{ind.count}</td>
                  <td className="px-6 py-3 text-center text-emerald-600 font-medium">{ind.active}</td>
                  <td className="px-6 py-3 text-center text-gray-500">{ind.inactive}</td>
                  <td className="px-6 py-3 text-right">{ind.share}%</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}