export default function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your personal information.</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm h-64">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold">
            D
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Admin</h2>
            <p className="text-sm text-gray-500">admin@actify.io</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 border-t border-gray-100 pt-4">
          Profile settings and options coming soon.
        </p>
      </div>
    </div>
  );
}