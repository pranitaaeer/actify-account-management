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