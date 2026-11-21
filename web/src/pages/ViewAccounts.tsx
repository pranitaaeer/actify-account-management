import { useState, useMemo } from 'react';
import { accounts} from '@shared/data';
import { Search, PenSquare } from 'lucide-react';
import CreateAccountModal from '../pages/AddAccount';
import { motion } from 'framer-motion';

export default function ViewAccounts() {
  const [search, setSearch] = useState('');
  const [statusFilter, _] = useState<'All' | 'Active' | 'Inactive'>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = useMemo(() => {
    return accounts.filter((acc) => {
      const matchesSearch =
        acc.name.toLowerCase().includes(search.toLowerCase()) ||
        acc.email.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'All' || acc.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <div className="space-y-6">
      {/* Header with Create Button */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Accounts</h1>
          <p className="text-sm text-gray-500 mt-1">Here's a list of your accounts.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium shadow-sm">
            Account
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition flex items-center gap-2 shadow-sm"
          >
            <PenSquare size={16} /> Create
          </button>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search Here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition shadow-sm flex items-center gap-2">
            View
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 whitespace-nowrap">
            <thead className="bg-gray-50 border-b border-gray-200 text-xs text-gray-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Account Name</th>
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">Phone No.</th>
                <th className="px-4 py-3 font-semibold">Website</th>
                <th className="px-4 py-3 font-semibold">Industry</th>
                <th className="px-4 py-3 font-semibold">Account Status</th>
                <th className="px-4 py-3 font-semibold">Remark</th>
                <th className="px-4 py-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <motion.tbody 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="divide-y divide-gray-100"
            >
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-gray-500">No accounts found.</td>
                </tr>
              ) : (
                filtered.map((acc) => (
                  <tr key={acc.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-4 py-3 font-medium text-gray-900">{acc.name}</td>
                    <td className="px-4 py-3">{acc.email}</td>
                    <td className="px-4 py-3 text-gray-500">+91-0000000000</td>
                    <td className="px-4 py-3 text-blue-500 hover:underline cursor-pointer">
                      {acc.name.toLowerCase().replace(/\s+/g, '')}.example.in
                    </td>
                    <td className="px-4 py-3">{acc.industry}</td>
                    <td className="px-4 py-3">
                      <span className={`${acc.status === 'Active' ? 'text-emerald-600' : 'text-red-500'}`}>
                        {acc.status === 'Active' ? 'true' : 'false'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500">Demo remark goes here</td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-gray-400 hover:text-gray-900 font-bold">...</button>
                    </td>
                  </tr>
                ))
              )}
            </motion.tbody>
          </table>
        </div>
      </div>

      {/* Popup */}
      <CreateAccountModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}