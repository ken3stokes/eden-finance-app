import React, { Suspense } from 'react';
import { ErrorBoundary } from '../shared/ErrorBoundary';
import { Budget } from './Budget';
import { LoadingSpinner } from '../shared/LoadingSpinner';

export const BudgetContainer: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div className="p-6">Error loading budget information</div>}>
      <Suspense fallback={<LoadingSpinner />}>
        <Budget />
      </Suspense>
    </ErrorBoundary>
  );
};