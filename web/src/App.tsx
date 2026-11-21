import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ViewAccounts from './pages/ViewAccounts';
import AddAccount from './pages/AddAccount';
import Settings from './pages/Settings';
import Contacts from './pages/Contacts';
import Leads from './pages/Leads';
import Deals from './pages/Deals';
import AccountReport from './pages/AccountReport';
import AccountUpload from './pages/AccountUpload';
import Feedback from './pages/Feedback';
import Profile from './pages/Profile';
import Inbox from './pages/Inbox';
import MyJobs from './pages/MyJobs';
import TestResults from './pages/TestResults';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          
          {/* Account Menu */}
          <Route path="/accounts" element={<ViewAccounts />} />
          <Route path="/add-account" element={<AddAccount />} />
          <Route path="/account-report" element={<AccountReport />} />
          <Route path="/account-upload" element={<AccountUpload />} />
          
          {/* Other Menus */}
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/my-jobs" element={<MyJobs />} />
          <Route path="/test-results" element={<TestResults />} />
          
          {/* Fallback route */}
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}