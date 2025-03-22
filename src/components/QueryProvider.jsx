'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
export const api = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
});
const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
        retry: 1,
      },
    },
  });
  
  export default function QueryProvider({ children }) {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  }