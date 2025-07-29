
'use client';
import './globals.css'; // your global styles
import { Geist,Jost } from 'next/font/google'; // import the font
import { CartProvider } from '../components/context/CartContext';
 // Import your CartProvider

const geistSans = Geist({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-geist',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['600', '900'],
});





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={geistSans.className}>
        {children}
      </body> */}
         <body className={jost.className}><CartProvider>
          {children}
        </CartProvider></body>
         
    </html>
  );
}



