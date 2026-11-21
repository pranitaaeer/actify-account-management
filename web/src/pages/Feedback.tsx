import { feedbackList } from '@shared/data';
import { Star } from 'lucide-react';

export default function Feedback() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Feedback</h1>
        <p className="text-sm text-gray-500 mt-1">User feedback and reviews.</p>
      </div>
      <div className="grid gap-4">
        {feedbackList.map((f) => (
          <div key={f.id} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900">{f.user}</h3>
              <span className="text-xs text-gray-400">{f.date}</span>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={i < f.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
            <p className="text-sm text-gray-600">{f.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}