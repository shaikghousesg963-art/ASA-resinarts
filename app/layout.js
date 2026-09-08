import './globals.css';
import { BRAND } from '@/lib/data';

export const metadata = {
  title: `${BRAND.name} — Handcrafted Gift Hampers & Resin Art`,
  description: 'Premium handcrafted gift hampers, resin art, bouquets, and custom gifts in Kadapa. Same day delivery. Order via WhatsApp.',
  keywords: 'gift hampers, resin art, bouquets, custom gifts, kadapa, wedding hampers, nikkah essentials',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
