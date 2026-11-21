import { myJobs } from '@shared/data';

export default function MyJobs() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Jobs</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your assigned jobs.</p>
      </div>
      <div className="grid gap-4">
        {myJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.company} • {job.type}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
              {job.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}