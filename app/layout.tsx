import type { Metadata } from "next";
import "./globals.css";
import { Montserrat,Yellowtail  } from 'next/font/google';
import Navigation from '@/components/Navigation';
import { ThemeProvider } from '@/context/ThemeContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-montserrat',
});

const yellowtail = Yellowtail({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-yellowtail',
});

export const metadata: Metadata = {
  title: "Promo Dome",
  description: "Choose your winners randomly with quantum precision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${yellowtail.variable} antialiased min-h-screen`}
      >
        <ThemeProvider>
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
