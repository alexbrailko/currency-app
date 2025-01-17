'use client';

import React, { FC } from 'react';
import { CurrencyTableSection } from './CurrencyTableSection';

interface DashboardProps {}

export const CURRENCY_TABLES_CONFIG = [
  { id: 'primary', url: '/api/currencies' },
  { id: 'secondary', url: '/api/not-found' },
];

export const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <div className="space-y-8">
      {CURRENCY_TABLES_CONFIG.map((config) => (
        <CurrencyTableSection key={config.id} url={config.url} />
      ))}
    </div>
  );
};

export default Dashboard;
