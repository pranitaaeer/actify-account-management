import { Upload, Download, FileText } from 'lucide-react';

export default function AccountUpload() {
  return (
    <div className="space-y-6 max-w-5xl">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Account Upload</h1>
        <p className="text-sm text-gray-500 mt-1">
          Import account records from a CSV file. Preview and validate before importing.
        </p>
      </div>

      {/* How to use Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-3">How to use</h2>
          <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1.5">
            <li>Download the CSV template to see the required column format.</li>
            <li>Fill in your account data — <span className="font-medium text-gray-900">AccountName</span>, <span className="font-medium text-gray-900">Email</span>, and <span className="font-medium text-gray-900">Phone</span> are required.</li>
            <li>Upload your completed CSV file.</li>
            <li>Review the preview — invalid rows are highlighted in red.</li>
            <li>Click <span className="font-medium text-gray-900">Import Valid Records</span> to add them to your account list.</li>
          </ol>
        </div>
        
        {/* Download Template Button - Black Theme */}
        <button className="flex items-center gap-2 border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition whitespace-nowrap shadow-sm">
          <Download size={16} />
          Download Template
        </button>
      </div>

      {/* Select CSV File Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-900 mb-4">Select CSV File</h2>
        
        {/* Drag & Drop Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition cursor-pointer bg-gray-50/50">
          <div className="w-12 h-12 mb-4 text-gray-400">
            <Upload size={48} strokeWidth={1.5} />
          </div>
          <p className="text-sm font-medium text-gray-900">Click to browse or drag & drop</p>
          <p className="text-xs text-gray-500 mt-1">Only .csv files are accepted</p>
        </div>
      </div>

      {/* Empty State (No file selected) */}
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-12 h-12 mb-3 text-gray-300">
          <FileText size={48} strokeWidth={1.5} />
        </div>
        <p className="text-sm font-medium text-gray-900">No file selected</p>
        <p className="text-xs text-gray-500 mt-1">
          Upload a CSV file above to preview and import accounts.
        </p>
      </div>
    </div>
  );
}