import { CurrencyTable } from '@/app/components/dashboard/CurrencyTable';
import { Navigation } from '@/app/components/Navigation';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <CurrencyTable />
      </main>
    </div>
  );
}
