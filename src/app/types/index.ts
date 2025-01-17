export interface Balance {
  id: string;
  currency: string;
  amount: string;
}

export interface Currency {
  [key: string]: string;
}

export interface User {
  email: string;
  token: string;
}
