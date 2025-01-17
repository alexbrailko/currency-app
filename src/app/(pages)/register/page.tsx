import Link from 'next/link';
import { RegisterForm } from '@/app/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-md px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Create an account</h1>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <Link href="/login" className="text-blue-600 hover:text-blue-500">
              sign in to your account
            </Link>
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
