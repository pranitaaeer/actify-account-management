// shared/data.ts

export type AccountStatus = 'Active' | 'Inactive';

export interface Account {
  id: number;
  name: string;
  email: string;
  status: AccountStatus;
  industry: string;
}

export interface Stats {
  total: number;
  active: number;
  inactive: number;
  industries: number;
}

export const industries: string[] = [
  'Information Technology', 'Healthcare', 'Finance', 'Retail',
  'Manufacturing', 'Education', 'Logistics', 'Real Estate',
  'Hospitality', 'Automotive',
];

const companyPrefixes: string[] = [
  'Astra', 'Bharat', 'Crest', 'Dhan', 'Eka',
  'Falcon', 'Ganga', 'Himalaya', 'Indus', 'Jupiter',
];

const suffixes: string[] = [
  'Technologies', 'Solutions', 'Systems', 'Enterprises', 'Industries',
];

export const accounts: Account[] = [];
let id = 1;

industries.forEach((industry: string) => {
  companyPrefixes.forEach((prefix: string) => {
    const name = `${prefix} ${suffixes[id % suffixes.length]}`;
    const status: AccountStatus = id % 3 === 0 ? 'Inactive' : 'Active';

    accounts.push({
      id,
      name,
      email: `contact@${name.toLowerCase().replace(/\s+/g, '')}.example.in`,
      status,
      industry,
    });

    id++;
  });
});

export const getStats = (): Stats => ({
  total: accounts.length,
  active: accounts.filter((a: Account) => a.status === 'Active').length,
  inactive: accounts.filter((a: Account) => a.status === 'Inactive').length,
  industries: industries.length,
});


// 1. Contacts Data
export const contacts = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@techcorp.in', phone: '+91 9876543210', company: 'Astra Technologies' },
  { id: 2, name: 'Priya Singh', email: 'priya@healthplus.com', phone: '+91 8765432109', company: 'Bharat Technologies' },
  { id: 3, name: 'Amit Patel', email: 'amit@financesolutions.in', phone: '+91 7654321098', company: 'Crest Technologies' },
  { id: 4, name: 'Neha Gupta', email: 'neha@retailmart.com', phone: '+91 6543210987', company: 'Dhan Technologies' },
  { id: 5, name: 'Vikram Verma', email: 'vikram@buildcon.in', phone: '+91 5432109876', company: 'Eka Technologies' },
];

// 2. Leads Data
export const leads = [
  { id: 1, name: 'Acme Corp', source: 'Website', status: 'New', value: 50000, date: '2023-10-25' },
  { id: 2, name: 'Globex Inc', source: 'Referral', status: 'Contacted', value: 120000, date: '2023-10-24' },
  { id: 3, name: 'Soylent Corp', source: 'Cold Call', status: 'Qualified', value: 75000, date: '2023-10-23' },
  { id: 4, name: 'Initech', source: 'Event', status: 'Lost', value: 30000, date: '2023-10-22' },
];

// 3. Deals Data
export const deals = [
  { id: 1, name: 'Acme Corp Renewal', account: 'Astra Technologies', stage: 'Negotiation', amount: 45000, closeDate: '2023-11-15' },
  { id: 2, name: 'Globex New Deal', account: 'Bharat Technologies', stage: 'Proposal', amount: 150000, closeDate: '2023-12-01' },
  { id: 3, name: 'Soylent Expansion', account: 'Crest Technologies', stage: 'Closed Won', amount: 80000, closeDate: '2023-10-20' },
];

// 4. Inbox Messages (Inbox)
export const inboxMessages = [
  { id: 1, sender: 'Rahul Sharma', subject: 'Pricing Inquiry', message: 'Can you share the pricing for enterprise plan?', time: '10:30 AM', unread: true },
  { id: 2, sender: 'Priya Singh', subject: 'Demo Request', message: 'We would like to schedule a demo next week.', time: 'Yesterday', unread: true },
  { id: 3, sender: 'System', subject: 'Account Updated', message: 'Your account details were successfully updated.', time: '2 days ago', unread: false },
];

// 5. Feedback Data
export const feedbackList = [
  { id: 1, user: 'Amit Patel', rating: 5, comment: 'Great platform, very easy to use!', date: '2023-10-25' },
  { id: 2, user: 'Neha Gupta', rating: 4, comment: 'Good, but needs more integrations.', date: '2023-10-20' },
];

// 6. My Jobs Data
export const myJobs = [
  { id: 1, title: 'Frontend Developer', company: 'Astra Technologies', type: 'Full-time', status: 'Active', posted: '2023-10-01' },
  { id: 2, title: 'UI/UX Designer', company: 'Bharat Technologies', type: 'Contract', status: 'Closed', posted: '2023-09-15' },
];

// 7. Test Results Data
export const testResults = [
  { id: 1, testName: 'React Fundamentals', score: '85%', status: 'Passed', date: '2023-10-20' },
  { id: 2, testName: 'TypeScript Advanced', score: '72%', status: 'Passed', date: '2023-10-18' },
  { id: 3, testName: 'Tailwind CSS', score: '45%', status: 'Failed', date: '2023-10-15' },
];