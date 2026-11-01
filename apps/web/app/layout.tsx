import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Logo } from './logo';
import './globals.css';

export const metadata: Metadata = {
  title: 'Get · Admin',
  description: 'Simulated inventory, stores and orders behind the Get app.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="top">
          <Link href="/" aria-label="Get home">
            <Logo size={36} />
          </Link>
          <nav>
            <Link href="/search">Search</Link>
            <Link href="/inventory">Inventory</Link>
            <Link href="/stores">Stores</Link>
            <Link href="/orders">Orders</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
