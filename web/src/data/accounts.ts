import type {Account,AccountStatus,Stats} from "../types/accounts"

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