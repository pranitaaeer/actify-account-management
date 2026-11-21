import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Building2, Users, TrendingUp, Handshake, 
  MessageSquare, User, Inbox, Briefcase, ClipboardList, ChevronDown, Zap 
} from 'lucide-react';

const menuItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  {
    label: 'Account', icon: Building2, path: '/account',
    subItems: [
      { label: 'Accounts', path: '/accounts' },
      { label: 'Account Report', path: '/account-report' },
      { label: 'Account Upload', path: '/account-upload' },
    ]
  },
  {
    label: 'Contact', icon: Users, path: '/contact',
    subItems: [
      { label: 'All Contacts', path: '/contacts' },
    ]
  },
  {
    label: 'Lead', icon: TrendingUp, path: '/lead',
    subItems: [
      { label: 'All Leads', path: '/leads' },
    ]
  },
  {
    label: 'Deal', icon: Handshake, path: '/deal',
    subItems: [
      { label: 'All Deals', path: '/deals' },
    ]
  },
  { label: 'Feedback', icon: MessageSquare, path: '/feedback' },
  { label: 'Profile', icon: User, path: '/profile' },
  { label: 'Inbox', icon: Inbox, path: '/inbox' },
  { label: 'My Jobs', icon: Briefcase, path: '/my-jobs' },
  { label: 'Test Results', icon: ClipboardList, path: '/test-results' },
];

export default function Sidebar() {
  const location = useLocation();
  
  // State to manage open dropdowns
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    'Account': true, 
  });

  const toggleMenu = (label: string) => {
    setOpenMenus(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen hidden flex-col md:flex shrink-0">
      {/* Logo Area */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
          <Zap size={24} fill="currentColor" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 leading-tight">Actify</h1>
          <p className="text-[10px] font-semibold text-gray-500 tracking-wider">BUSINESS</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || 
                           (item.subItems && item.subItems.some(sub => location.pathname === sub.path));
          const isOpen = openMenus[item.label];

          return (
            <div key={item.label} className="flex flex-col">
              {/* Main Item */}
              <div 
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition ${
                  isActive && !item.subItems ? 'bg-black text-white' : 
                  isActive ? 'text-white font-medium' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => item.subItems ? toggleMenu(item.label) : null}
              >
                <NavLink 
                  to={item.subItems ? '#' : item.path} 
                  className="flex items-center gap-3 flex-1"
                  onClick={(e) => item.subItems && e.preventDefault()}
                >
                  <item.icon size={18} className={isActive ? 'text-white' : 'text-gray-500'} />
                  <span className="text-sm">{item.label}</span>
                </NavLink>
                {item.subItems && (
                  <ChevronDown size={16} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                )}
              </div>

              {/* Sub Items (Dropdown) */}
              {item.subItems && isOpen && (
                <div className="mt-1 ml-4 border-l-2 border-gray-100 pl-3 space-y-1">
                  {item.subItems.map((sub) => (
                    <NavLink
                      key={sub.label}
                      to={sub.path}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-lg text-sm transition ${
                          isActive ? 'text-black bg-blue-50 font-medium' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                        }`
                      }
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Profile */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">Admin</span>
            <span className="text-xs text-gray-500">admin@actify.com</span>
          </div>
        </div>
      </div>
    </aside>
  );
}