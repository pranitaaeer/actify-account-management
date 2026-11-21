import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Bell, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between shrink-0 z-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{getPageTitle()}</h2>
            <p className="text-xs text-gray-500">Actify Business &gt; {getPageTitle()}</p>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-gray-900 transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            
            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 border-l border-gray-200 pl-6 hover:opacity-80 transition-opacity"
              >
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
                  A
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-gray-900">Admin</span>
                  <ChevronDown size={14} className={`text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50"
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">Admin User</p>
                      <p className="text-xs text-gray-500 truncate">admin@actify.io</p>
                    </div>
                    <button onClick={() => { navigate('/profile'); setIsDropdownOpen(false); }} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <User size={16} /> Profile
                    </button>
                    <button onClick={() => setIsDropdownOpen(false)} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <Settings size={16} /> Settings
                    </button>
                    <div className="border-t border-gray-100 mt-1">
                      <button onClick={() => setIsDropdownOpen(false)} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                        <LogOut size={16} /> Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8 relative">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}