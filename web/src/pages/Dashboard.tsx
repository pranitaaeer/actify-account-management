import { Link } from 'react-router-dom';
import { accounts, getStats, industries } from '@shared/data';
import StatCard from '../components/StatCard';
import AccountRow from '../components/AccountRow';
import IndustryBar from '../components/IndustryBar';
import { motion, type Variants } from 'framer-motion';
import { Building2, CheckCircle2, XCircle, PieChart, Users, TrendingUp, Handshake, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  const stats = getStats();
  const recent = accounts.slice(0, 5);

  const industryCounts = industries.map((ind) => ({
    name: ind,
    count: accounts.filter((a) => a.industry === ind).length,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } }
  };

  return (
    <div className="space-y-6">
      {/* Header with View Accounts Link */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back! Here's your business overview.
          </p>
        </div>
        <Link 
          to="/accounts" 
          className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 group"
        >
          View Accounts 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Stat Cards */}
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="show" 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        <motion.div variants={itemVariants}>
          <StatCard label="Total Accounts" value={stats.total} sub="All records" icon={Building2} iconColor="bg-gray-900" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard label="Active" value={stats.active} sub={`${Math.round((stats.active / stats.total) * 100)}% of total`} icon={CheckCircle2} iconColor="bg-emerald-500" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard label="Inactive" value={stats.inactive} sub="Needs re-engagement" icon={XCircle} iconColor="bg-gray-400" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard label="Industries" value={stats.industries} sub="Sectors covered" icon={PieChart} iconColor="bg-violet-500" />
        </motion.div>
      </motion.div>

      {/* Middle Section: Recent Accounts & Top Industries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Accounts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Accounts</h2>
            <Link to="/accounts" className="text-sm text-blue-600 hover:underline">View all</Link>
          </div>
          <div className="divide-y divide-gray-100">
            {recent.map((acc) => (
              <AccountRow key={acc.id} account={acc} />
            ))}
          </div>
        </motion.div>

        {/* Top Industries */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Industries</h2>
          <div className="space-y-2">
            {industryCounts.slice(0, 5).map((ind) => (
              <IndustryBar key={ind.name} name={ind.name} count={ind.count} total={stats.total} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Shortcut Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2"
      >
        {/* Contacts Card */}
        <motion.div variants={cardVariants}>
          <Link to="/contacts" className="block bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mb-4 group-hover:bg-black group-hover:text-white transition-colors">
              <Users size={20} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Contacts</h3>
            <p className="text-sm text-gray-500">Manage your contact records</p>
          </Link>
        </motion.div>

        {/* Leads Card */}
        <motion.div variants={cardVariants}>
          <Link to="/leads" className="block bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mb-4 group-hover:bg-black group-hover:text-white transition-colors">
              <TrendingUp size={20} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Leads</h3>
            <p className="text-sm text-gray-500">Track incoming leads</p>
          </Link>
        </motion.div>

        {/* Deals Card */}
        <motion.div variants={cardVariants}>
          <Link to="/deals" className="block bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mb-4 group-hover:bg-black group-hover:text-white transition-colors">
              <Handshake size={20} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Deals</h3>
            <p className="text-sm text-gray-500">Monitor your deal pipeline</p>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}