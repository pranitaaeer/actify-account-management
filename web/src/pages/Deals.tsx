import { deals } from '@shared/data';

export default function Deals() {
  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">All Deals</h1>
        <p className="text-sm text-gray-500 mt-1">View your ongoing and closed deals.</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4 font-semibold">Deal Name</th>
              <th className="px-6 py-4 font-semibold">Account</th>
              <th className="px-6 py-4 font-semibold">Stage</th>
              <th className="px-6 py-4 font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {deals.map((d) => (
              <tr key={d.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{d.name}</td>
                <td className="px-6 py-4">{d.account}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">{d.stage}</span>
                </td>
                <td className="px-6 py-4 font-medium">${d.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}