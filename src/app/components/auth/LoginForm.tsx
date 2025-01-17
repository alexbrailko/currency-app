'use client';

import { SpinnerIcon } from '@/app/assets/icons/SpinnerIcon';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { INCORRECT_EMAIL, INCORRECT_PASSWORD } from '@/app/utils/constants';

enum steps {
  credentials = 'credentials',
  otp = 'otp',
}

export const LoginForm = () => {
  const router = useRouter();
  const [step, setStep] = useState<steps.credentials | steps.otp>(steps.credentials);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    otp: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    setLoading(true);

    if (formData.email === INCORRECT_EMAIL) {
      newErrors.push('Invalid email');
      setLoading(false);
    }

    if (formData.password === INCORRECT_PASSWORD) {
      newErrors.push('Invalid password');
      setLoading(false);
    }

    if (newErrors.length > 0) {
      setError(newErrors);
      setLoading(false);
      return;
    } else {
      setError([]);
    }

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setStep(steps.otp);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError([]);
    setLoading(true);

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);

    localStorage.setItem('token', 'mock-token');

    router.push('/');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow">
        <h2 className="text-center text-3xl font-bold">Login</h2>

        {step === steps.credentials ? (
          <form onSubmit={handleCredentialsSubmit} className="mt-8 space-y-6">
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="mb-2">
                <Input
                  type="email"
                  required
                  className="w-full"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <Input
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            {error && error.length > 0 && (
              <div className="mb-4">
                {error.map((err, index) => (
                  <div key={index} className="text-red-500">
                    {err}
                  </div>
                ))}
              </div>
            )}

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <span className="flex items-center">
                  <SpinnerIcon />
                  Verifying...
                </span>
              ) : (
                'Continue'
              )}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="mt-8 space-y-6">
            <div>
              <Input
                type="text"
                required
                className="w-full"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
              />
            </div>

            {error && <div className="text-sm text-red-500">{error}</div>}

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <span className="flex items-center">
                  <SpinnerIcon />
                  Verifying OTP...
                </span>
              ) : (
                'Login'
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
