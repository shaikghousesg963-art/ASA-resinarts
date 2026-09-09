export const BRAND = {
  name: 'ASA Resin Arts',
  tagline: 'We don\'t just deliver gifts — we deliver feelings, wrapped with care.',
  whatsapp: '918639965719',
  whatsappDisplay: '+91 8639965719',
  location: 'Kadapa City',
  pincode: '516001',
  deliveryNote: 'Within 24 hours · Kadapa City',
  currency: '₹',
  upiId: '8639965719@ybl',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/collections' },
  { label: 'Admin', href: '/admin' },
];

export const MARQUEE_ITEMS = [
  'FREE DELIVERY ABOVE ₹999',
  'HANDCRAFTED WITH LOVE',
  'DELIVERY WITHIN 24 HRS IN KADAPA',
  'CUSTOM HAMPERS AVAILABLE',
  'PREMIUM QUALITY GUARANTEED',
];

export const CATEGORIES = [
  { id: 'gift-hampers', name: 'Gift Hampers', image: '/images/skincare-hamper.jpg', count: 12 },
  { id: 'resin-art', name: 'Resin Art', image: '/images/resin-frame.jpg', count: 8 },
  { id: 'bouquets', name: 'Bouquets', image: '/images/rose-bouquet.jpg', count: 15 },
  { id: 'nikkah-essentials', name: 'Nikkah Essentials', image: '/images/ring-platter.jpg', count: 6 },
  { id: 'chocolate-bouquets', name: 'Chocolate Bouquets', image: '/images/chocolate-bouquet.jpg', count: 10 },
  { id: 'mehendi-trays', name: 'Mehendi Trays', image: '/images/mehendi-tray.jpg', count: 5 },
];


export const FEATURES = [
  {
    icon: '🎁',
    title: 'Handcrafted',
    description: 'Every hamper is assembled by hand using premium, curated materials selected with love.',
  },
  {
    icon: '🚚',
    title: 'Same Day Delivery',
    description: 'Order today and we deliver within 24 hours to your doorstep anywhere in Kadapa — guaranteed.',
  },
  {
    icon: '💎',
    title: 'Premium Quality',
    description: 'Only the finest, most premium products earn a place inside our handpicked hampers.',
  },
  {
    icon: '✨',
    title: 'Custom Orders',
    description: 'Want something unique? We create fully custom hampers tailored to your occasion.',
  },
];

export const OCCASIONS = [
  { icon: '💍', title: 'Wedding & Nikkah Resin Art', description: 'Custom ring platters, varmala preservation, and beautiful Islamic resin frames.' },
  { icon: '🕰️', title: 'Resin Clocks & Home Decor', description: 'Personalized resin clocks, geode wall art, coasters, and custom nameplates.' },
  { icon: '🎁', title: 'Custom Resin Keepsakes', description: 'Preserve your precious memories with personalized resin frames, keychains, and photo plaques.' },
  { icon: '✨', title: 'Resin Trays & Hampers', description: 'Premium epoxy resin serving trays, mehendi trays, and curated gift hampers.' },
];

export const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

export const getWhatsAppLink = (message = '') => {
  const defaultMessage = 'Hi! I would like to place an order.';
  const upiMessage = `\n\nI can pay via PhonePe UPI at: ${BRAND.upiId}`;
  const finalMessage = (message || defaultMessage) + upiMessage;
  const encodedMessage = encodeURIComponent(finalMessage);
  return `https://wa.me/${BRAND.whatsapp}?text=${encodedMessage}`;
};
