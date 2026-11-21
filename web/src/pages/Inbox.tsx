import { inboxMessages } from '@shared/data';

export default function Inbox() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Inbox</h1>
        <p className="text-sm text-gray-500 mt-1">Your messages and notifications.</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm divide-y divide-gray-100">
        {inboxMessages.map((msg) => (
          <div key={msg.id} className={`p-4 flex gap-4 ${msg.unread ? 'bg-blue-50/30' : ''}`}>
            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
              {msg.sender.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className={`text-sm ${msg.unread ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>{msg.sender}</h3>
                <span className="text-xs text-gray-400">{msg.time}</span>
              </div>
              <p className="text-sm font-medium text-gray-800">{msg.subject}</p>
              <p className="text-sm text-gray-500 mt-1">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}