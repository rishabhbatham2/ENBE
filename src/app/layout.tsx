import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Koho } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Mediworker',
  description: 'Your trusted medical co-worker.',
};

const koho = Koho({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-koho',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${koho.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
