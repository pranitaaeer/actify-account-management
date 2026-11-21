export default function AccountUpload() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Account Upload</h1>
        <p className="text-sm text-gray-500 mt-1">Bulk upload accounts using a CSV file.</p>
      </div>
      <div className="bg-white rounded-xl border-2 border-gray-300 p-8 shadow-sm flex flex-col items-center justify-center border-dashed h-64 hover:bg-gray-50 transition cursor-pointer">
        <p className="text-lg font-medium text-gray-600">Click to upload or drag and drop</p>
        <p className="text-sm text-gray-400 mt-2">CSV, XLSX up to 10MB</p>
      </div>
    </div>
  );
}