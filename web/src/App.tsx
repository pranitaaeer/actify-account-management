import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from "./pages/Dashboard"
import ViewAccounts from "./pages/ViewAccounts"

function NavBar() {
  const location = useLocation();
  const linkClass = (path: string) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition ${
      location.pathname === path
        ? 'bg-gray-900 text-white'
        : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-gray-900">
        Actify Business
      </Link>
      <div className="flex gap-2">
        <Link to="/" className={linkClass('/')}>Dashboard</Link>
        <Link to="/accounts" className={linkClass('/accounts')}>View Accounts</Link>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/accounts" element={<ViewAccounts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}