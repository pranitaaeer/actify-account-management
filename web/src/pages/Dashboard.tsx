import { Link } from 'react-router-dom';
import { accounts, getStats, industries } from '../data/accounts';
import StatCard from '../components/StatCard';
import AccountRow from '../components/AccountRow';
import IndustryBar from '../components/IndustryBar';

export default function Dashboard() {
  const stats = getStats();
  const recent = accounts.slice(0, 5);

  const industryCounts = industries.map((ind) => ({
    name: ind,
    count: accounts.filter((a) => a.industry === ind).length,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Welcome back! Here's your business overview.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Accounts" value={stats.total} sub="All records" />
        <StatCard
          label="Active"
          value={stats.active}
          sub={`${Math.round((stats.active / stats.total) * 100)}% of total`}
        />
        <StatCard label="Inactive" value={stats.inactive} sub="Needs re-engagement" />
        <StatCard label="Industries" value={stats.industries} sub="Sectors covered" />
      </div>

      {/* Recent Accounts */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-gray-900">Recent Accounts</h2>
          <Link to="/accounts" className="text-sm text-gray-600 hover:text-gray-900">
            View all
          </Link>
        </div>
        {recent.map((acc) => (
          <AccountRow key={acc.id} account={acc} />
        ))}
      </div>

      {/* Top Industries */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Top Industries</h2>
        {industryCounts.slice(0, 5).map((ind) => (
          <IndustryBar
            key={ind.name}
            name={ind.name}
            count={ind.count}
            total={stats.total}
          />
        ))}
      </div>
    </div>
  );
}