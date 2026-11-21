interface IndustryBarProps {
  name: string;
  count: number;
  total: number;
}

export default function IndustryBar({ name, count, total }: IndustryBarProps) {
  const percent = Math.round((count / total) * 100);
  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-sm text-gray-700">{name}</p>
      <div className="flex items-center gap-3">
        <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-800 rounded-full"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 w-20 text-right">{count} accounts</p>
      </div>
    </div>
  );
}