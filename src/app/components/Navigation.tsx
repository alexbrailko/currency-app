'use client';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect } from 'react';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  const router = useRouter();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.replace('/login');
  };

  if (!token) return null;

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="text-xl font-semibold">Dashboard</div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
