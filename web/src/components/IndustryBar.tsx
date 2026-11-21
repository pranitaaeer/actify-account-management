import { motion } from 'framer-motion';

interface IndustryBarProps {
  name: string;
  count: number;
  total: number;
}

export default function IndustryBar({ name, count, total }: IndustryBarProps) {
  const percent = Math.round((count / total) * 100);

  return (
    <div className="flex items-center justify-between py-2 group cursor-default">
      <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors w-1/3 truncate pr-2">
        {name}
      </p>
      <div className="flex items-center gap-3 w-2/3 justify-end">
        <div className="w-32 md:w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="h-full bg-black rounded-full group-hover:bg-gray-800 transition-colors"
          />
        </div>
        <p className="text-xs text-gray-500 w-24 text-right font-medium">
          {count} accounts
        </p>
      </div>
    </div>
  );
}