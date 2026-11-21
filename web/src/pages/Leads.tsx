import { leads } from '@shared/data';

export default function Leads() {
  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">All Leads</h1>
        <p className="text-sm text-gray-500 mt-1">Track and manage your potential leads.</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4 font-semibold">Lead Name</th>
              <th className="px-6 py-4 font-semibold">Source</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {leads.map((l) => (
              <tr key={l.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{l.name}</td>
                <td className="px-6 py-4">{l.source}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    l.status === 'New' ? 'bg-blue-100 text-blue-700' :
                    l.status === 'Contacted' ? 'bg-yellow-100 text-yellow-700' :
                    l.status === 'Qualified' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>{l.status}</span>
                </td>
                <td className="px-6 py-4 font-medium">${l.value.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}