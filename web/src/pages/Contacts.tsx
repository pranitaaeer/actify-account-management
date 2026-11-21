import { contacts } from '@shared/data';
import { Mail, Phone, Building } from 'lucide-react';

export default function Contacts() {
  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">All Contacts</h1>
        <p className="text-sm text-gray-500 mt-1">Manage all your business contacts here.</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Company</th>
              <th className="px-6 py-4 font-semibold">Contact Info</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {contacts.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs">{c.name.charAt(0)}</div>
                  {c.name}
                </td>
                <td className="px-6 py-4"><div className="flex items-center gap-2"><Building size={14} className="text-gray-400"/> {c.company}</div></td>
                <td className="px-6 py-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs"><Mail size={12} className="text-gray-400"/> {c.email}</div>
                  <div className="flex items-center gap-2 text-xs"><Phone size={12} className="text-gray-400"/> {c.phone}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}