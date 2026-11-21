import { useState, useMemo } from 'react';
import { accounts, industries } from '@shared/data';
import AccountRow from '../components/AccountRow';

export default function ViewAccounts() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Active' | 'Inactive'>('All');
  const [industryFilter, setIndustryFilter] = useState('All');

  const filtered = useMemo(() => {
    return accounts.filter((acc) => {
      const matchesSearch =
        acc.name.toLowerCase().includes(search.toLowerCase()) ||
        acc.email.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'All' || acc.status === statusFilter;
      const matchesIndustry = industryFilter === 'All' || acc.industry === industryFilter;
      return matchesSearch && matchesStatus && matchesIndustry;
    });
  }, [search, statusFilter, industryFilter]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">View Accounts</h1>
        <p className="text-sm text-gray-500 mt-1">
          {filtered.length} of {accounts.length} accounts
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as 'All' | 'Active' | 'Inactive')}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <select
          value={industryFilter}
          onChange={(e) => setIndustryFilter(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        >
          <option value="All">All Industries</option>
          {industries.map((ind) => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>
      </div>

      {/* Accounts List */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-8">No accounts found.</p>
        ) : (
          filtered.map((acc) => <AccountRow key={acc.id} account={acc} />)
        )}
      </div>
    </div>
  );
}