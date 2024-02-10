"use client"

import { QueryClient,QueryClientProvider } from 'react-query';

const getqueryClient = new QueryClient();

export { getqueryClient,QueryClientProvider };