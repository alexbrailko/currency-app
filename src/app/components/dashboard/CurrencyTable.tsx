'use client';

import React, { useMemo, useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Balance } from '@/app/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';

interface CurrencyTableProps {
  balances: Balance[];
}

export default function CurrencyTable({ balances }: CurrencyTableProps) {
  const [columnsCount, setColumnsCount] = useState(3);

  const rows = useMemo(() => {
    const result = [];
    for (let i = 0; i < balances.length; i += columnsCount) {
      result.push(balances.slice(i, i + columnsCount));
    }
    return result;
  }, [balances, columnsCount]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Balances</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table className="">
            <TableHeader>
              <TableRow>
                {[...Array(columnsCount)].map((_, index) => (
                  <TableHead key={index} className="pr-5 text-left">
                    <div className="flex justify-between">
                      <div className="text-muted-foreground text-sm font-medium">Name</div>
                      <div className="text-muted-foreground text-sm font-medium">Balance</div>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : ''}>
                  {row.map((balance, cellIndex) => (
                    <TableCell key={cellIndex} className="pr-5 text-left">
                      <div className="flex justify-between">
                        <span className="text-sm font-bold">{balance.currency}</span>
                        <span className="text-muted-foreground text-sm">
                          {Number(balance.amount).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </TableCell>
                  ))}
                  {/* Add empty cells to maintain grid structure */}
                  {[...Array(columnsCount - row.length)].map((_, index) => (
                    <TableCell key={`empty-${index}`}></TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button
          variant="outline"
          onClick={() => setColumnsCount((prev) => Math.max(1, prev - 1))}
          disabled={columnsCount <= 1}
        >
          Decrease Columns
        </Button>
        <Button
          variant="outline"
          onClick={() => setColumnsCount((prev) => prev + 1)}
          disabled={columnsCount >= balances.length}
        >
          Increase Columns
        </Button>
      </CardFooter>
    </Card>
  );
}
