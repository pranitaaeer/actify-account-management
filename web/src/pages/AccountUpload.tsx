import { useState, useRef } from 'react';
import { Upload, Download, FileText, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccountUpload() {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const clearFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-2xl font-bold text-gray-900">Account Upload</h1>
        <p className="text-sm text-gray-500 mt-1">
          Import account records from a CSV file. Preview and validate before importing.
        </p>
      </motion.div>

      {/* How to use Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-6"
      >
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
        
        <button className="flex items-center gap-2 border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 active:scale-95 transition-all whitespace-nowrap shadow-sm">
          <Download size={16} />
          Download Template
        </button>
      </motion.div>

      {/* Select CSV File Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
      >
        <h2 className="text-sm font-semibold text-gray-900 mb-4">Select CSV File</h2>
        
        {/* Hidden Input */}
        <input 
          type="file" 
          accept=".csv" 
          className="hidden" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
        />

        {/* Drag & Drop Area */}
        <motion.div 
          whileHover={{ scale: 1.01, borderColor: '#111827' }}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
            file ? 'border-emerald-500 bg-emerald-50/30' : 'border-gray-300 bg-gray-50/50 hover:bg-gray-50'
          }`}
        >
          <AnimatePresence mode="wait">
            {!file ? (
              <motion.div 
                key="upload"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 mb-4 text-gray-400">
                  <Upload size={48} strokeWidth={1.5} />
                </div>
                <p className="text-sm font-medium text-gray-900">Click to browse or drag & drop</p>
                <p className="text-xs text-gray-500 mt-1">Only .csv files are accepted</p>
              </motion.div>
            ) : (
              <motion.div 
                key="file-selected"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 mb-4 text-emerald-500">
                  <CheckCircle2 size={48} strokeWidth={1.5} />
                </div>
                <p className="text-sm font-medium text-gray-900">{file.name}</p>
                <p className="text-xs text-gray-500 mt-1">{(file.size / 1024).toFixed(1)} KB</p>
                <button 
                  onClick={(e) => { e.stopPropagation(); clearFile(); }}
                  className="mt-4 flex items-center gap-1 text-xs text-red-600 hover:text-red-700 font-medium px-3 py-1.5 bg-red-50 rounded-full transition-colors"
                >
                  <X size={14} /> Remove File
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Empty State / Preview Animation */}
      <AnimatePresence>
        {!file && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-12 h-12 mb-3 text-gray-300">
              <FileText size={48} strokeWidth={1.5} />
            </div>
            <p className="text-sm font-medium text-gray-900">No file selected</p>
            <p className="text-xs text-gray-500 mt-1">
              Upload a CSV file above to preview and import accounts.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* File Selected - Fake Import Button */}
      <AnimatePresence>
        {file && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-end"
          >
            <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 active:scale-95 transition-all shadow-sm">
              Import Valid Records
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}