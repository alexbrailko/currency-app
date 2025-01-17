import { useState, useEffect } from 'react';
import { Balance } from '@/app/types';

export const useBalances = (url: string) => {
  const [balances, setBalances] = useState<Balance[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setBalances(data.balances);
        setError('');
      } catch (error) {
        setError('Failed to fetch currency data');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { balances, isLoading, error };
};
