'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { LoadingSpinner } from './components/LoadingSpinner';

const Navigation = dynamic(() => import('./components/Navigation'), {
  ssr: false,
});

const Dashboard = dynamic(() => import('./components/dashboard/Dashboard'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <Suspense fallback={<LoadingSpinner />}>
          <Dashboard />
        </Suspense>
      </main>
    </div>
  );
}
