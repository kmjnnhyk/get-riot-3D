import React from 'react';
import App from '@/App';
import '@styles/index.scss';

import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
  </React.StrictMode>
);
