import { Balance } from '@/app/types';
import { CURRENCY_MAPPINGS } from '@/app/utils/constants';
import { NextResponse } from 'next/server';

const getBalances = async (): Promise<Balance[]> => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL!);
    const data: Omit<Balance, 'currency'>[] = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const updatedData = data.map((item) => ({
      ...item,
      currency: CURRENCY_MAPPINGS[item.id],
    }));

    return updatedData;
  } catch (error) {
    console.log('Error fetch currencies:', error);
    throw new Error('Failed to fetch currencies');
  }
};

export async function GET() {
  try {
    const balances = await getBalances();

    return NextResponse.json(
      {
        balances,
      },
      { status: 200 }
    );
  } catch (error) {
    const err = error instanceof Error ? error.message : error;
    console.error('Failed to get balances:', err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
