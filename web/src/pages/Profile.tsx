import { useState } from 'react';
import { Save, GraduationCap, Briefcase, Plus } from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('Personal');
  const tabs = ['Personal', 'Education', 'Experience', 'Other'];

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your personal information and preferences.</p>
      </div>

      {/* Tabs Container */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="flex border-b border-gray-200 px-4 pt-2 gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium transition border-b-2 ${
                activeTab === tab
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ========================================== */}
        {/* 1. PERSONAL TAB */}
        {/* ========================================== */}
        {activeTab === 'Personal' && (
          <div className="p-0">
            <div className="bg-gray-900 px-6 py-8">
              <h2 className="text-xl font-bold text-white">Personal Details</h2>
              <p className="text-sm text-gray-300 mt-1">
                Make changes to your Profile Account here. Click save when you're done.
              </p>
            </div>
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="First name" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
                  <input type="text" placeholder="Middle name" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Last name" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                  <input type="email" defaultValue="admin@gmail.com" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
                  <input type="tel" defaultValue="7108230454" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address <span className="text-red-500">*</span></label>
                <textarea rows={3} placeholder="Type your address here." className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Pin code" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900">
                    <option value="">Country</option>
                    <option value="India">India</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State <span className="text-red-500">*</span></label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900">
                    <option value="">State</option>
                    <option value="MH">Maharastra</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="City" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
              </div>
              <div className="border-t border-gray-200 pt-5 flex justify-end">
                <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition shadow-sm">
                  <Save size={16} /> Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* 2. EDUCATION TAB */}
        {/* ========================================== */}
        {activeTab === 'Education' && (
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Education</h2>
                <p className="text-sm text-gray-500">Add your educational qualifications.</p>
              </div>
              <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition shadow-sm">
                <Plus size={16} /> Add Education
              </button>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-12 flex flex-col items-center justify-center text-center">
              <div className="mb-4 text-gray-300">
                <GraduationCap size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-gray-900">No education records yet</h3>
              <p className="text-sm text-gray-500 mt-1">Click "Add Education" to add your first record.</p>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* 3. EXPERIENCE TAB */}
        {/* ========================================== */}
        {activeTab === 'Experience' && (
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Experience</h2>
                <p className="text-sm text-gray-500">Add your work experience records.</p>
              </div>
              <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition shadow-sm">
                <Plus size={16} /> Add Experience
              </button>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-12 flex flex-col items-center justify-center text-center">
              <div className="mb-4 text-gray-300">
                <Briefcase size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-gray-900">No experience records yet</h3>
              <p className="text-sm text-gray-500 mt-1">Click "Add Experience" to add your first role.</p>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* 4. OTHER TAB */}
        {/* ========================================== */}
        {activeTab === 'Other' && (
          <div className="p-0">
            <div className="bg-gray-50 px-6 py-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Other Details</h2>
              <p className="text-sm text-gray-500 mt-1">Skills, languages, certifications, and professional links.</p>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Skills & Languages */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
                  <input type="text" placeholder="e.g. React, Python..." className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                  <p className="text-xs text-gray-400 mt-1">Press Enter or comma to add</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Languages</label>
                  <input type="text" placeholder="e.g. English, Hindi..." className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                  <p className="text-xs text-gray-400 mt-1">Press Enter or comma to add</p>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Certifications</label>
                <textarea rows={2} placeholder="List your certifications (e.g. AWS Solutions Architect, PMP, Google Analytics...)" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"></textarea>
              </div>

              {/* Links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile</label>
                  <input type="url" placeholder="https://linkedin.com/in/username" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio Website</label>
                  <input type="url" placeholder="https://yourportfolio.com" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">GitHub Profile</label>
                  <input type="url" placeholder="https://github.com/username" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea rows={3} placeholder="Anything else relevant to your professional profile..." className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"></textarea>
              </div>

              {/* Save Button */}
              <div className="border-t border-gray-200 pt-5 flex justify-end">
                <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition shadow-sm">
                  <Save size={16} /> Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}