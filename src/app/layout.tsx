import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';


export const metadata: Metadata = {
  title: 'Paytm : Frontend',
  description: 'Paytm frontend from 100xdevs.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full',
        'antialiased',
        'font-sans',
      )}
    >
      <body className="flex min-h-full flex-col selection:bg-neutral-700 selection:text-white">
        <header>
          {/* <link rel="preconnect" href="https://rsms.me/" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> */}
        </header>
        {children}
      </body>
    </html>
  );
}
