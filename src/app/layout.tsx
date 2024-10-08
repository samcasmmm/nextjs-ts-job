import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/redux/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJob',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      {/* <QueryClientProvider client={queryClient}> */}
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
      {/* </QueryClientProvider> */}
    </StoreProvider>
  );
}
