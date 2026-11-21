export default function TestResults() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Test Results</h1>
        <p className="text-sm text-gray-500 mt-1">View the results of recent tests.</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm flex flex-col items-center justify-center text-gray-400 h-64">
        <p className="text-lg font-medium">No Results Found</p>
        <p className="text-sm">Test results will appear here once available.</p>
      </div>
    </div>
  );
}