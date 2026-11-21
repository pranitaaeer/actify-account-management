import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: number | string;
  sub: string;
  icon: LucideIcon;
  iconColor?: string; 
}

export default function StatCard({ label, value, sub, icon: Icon, iconColor = 'bg-gray-900' }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default flex items-start justify-between">
      <div>
        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{label}</p>
        <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        <p className="text-xs text-gray-400 mt-1 font-medium">{sub}</p>
      </div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm ${iconColor}`}>
        <Icon size={24} />
      </div>
    </div>
  );
}