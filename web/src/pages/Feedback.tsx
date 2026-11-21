export default function Feedback() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Feedback</h1>
        <p className="text-sm text-gray-500 mt-1">User feedback and reviews.</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm flex flex-col items-center justify-center text-gray-400 h-64">
        <p className="text-lg font-medium">Feedback Inbox</p>
        <p className="text-sm">No new feedback at the moment.</p>
      </div>
    </div>
  );
}