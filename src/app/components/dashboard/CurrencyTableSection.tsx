import React from 'react';
import { LoadingSpinner } from '../LoadingSpinner';
import { ErrorMessage } from '../ErrorMessage';
import CurrencyTable from './CurrencyTable';
import { useBalances } from '@/app/hooks/useBalances';

interface CurrencyTableSectionProps {
  url: string;
}

export const CurrencyTableSection: React.FC<CurrencyTableSectionProps> = ({ url }) => {
  const { balances, isLoading, error } = useBalances(url);

  return (
    <section className="space-y-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <CurrencyTable balances={balances} />
      )}
    </section>
  );
};
