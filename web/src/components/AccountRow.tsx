import type {Account} from "../types/accounts";

export default function AccountRow({ account }: { account: Account }) {
  const isActive = account.status === 'Active';
  return (
    <div className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-700">
        {account.name.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-gray-900 truncate">{account.name}</p>
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              isActive
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {account.status}
          </span>
        </div>
        <p className="text-xs text-gray-500 truncate">{account.email}</p>
      </div>
    </div>
  );
}