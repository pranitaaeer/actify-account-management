import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Bell } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  
  // Get page title based on route
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Dashboard';
    if (path === '/accounts') return 'Accounts';
    if (path === '/account-report') return 'Account Report';
    if (path === '/account-upload') return 'Account Upload';
    if (path === '/contacts') return 'All Contacts';
    if (path === '/leads') return 'All Leads';
    if (path === '/deals') return 'All Deals';
    return path.split('/')[1]?.charAt(0).toUpperCase() + path.split('/')[1]?.slice(1) || 'Dashboard';
  };

  return (
    <div className="h-screen flex bg-gray-50 overflow-hidden font-sans">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{getPageTitle()}</h2>
            <p className="text-xs text-gray-500">Actify Business &gt; {getPageTitle()}</p>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-gray-900">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
                A
              </div>
              <span className="text-sm font-medium text-gray-900">Admin</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}