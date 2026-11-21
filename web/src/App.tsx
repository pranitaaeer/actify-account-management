import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Layout import karein
import Dashboard from './pages/Dashboard';
import ViewAccounts from './pages/ViewAccounts';
import AddAccount from './pages/AddAccount';
import Settings from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout ko parent banayein, taaki Sidebar aur Header har page par dikhein */}
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/accounts" element={<ViewAccounts />} />
          <Route path="/add-account" element={<AddAccount />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}