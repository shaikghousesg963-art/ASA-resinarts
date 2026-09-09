export const BRAND = {
  name: 'ASA Resin Arts',
  tagline: 'We don\'t just deliver gifts — we deliver feelings, wrapped with care.',
  whatsapp: '918639965719',
  whatsappDisplay: '+91 8639965719',
  location: 'Kadapa City',
  pincode: '516001',
  deliveryNote: 'Within 24 hours · Kadapa City',
  currency: '₹',
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
  { icon: '💍', title: 'Wedding Hampers', description: 'Bridal hampers, engagement gifts, mehendi trays — fully customisable.' },
  { icon: '🎂', title: 'Birthday & Celebration', description: 'Cakes, chocolates, flowers — we bundle joy in every box.' },
  { icon: '🎓', title: 'Congratulations', description: 'Celebrate achievements with premium hampers and personalized gifts.' },
  { icon: '💝', title: 'Anniversary Special', description: 'Express your love with curated romantic gift hampers.' },
];

export const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

export const getWhatsAppLink = (message = '') => {
  const encodedMessage = encodeURIComponent(message || 'Hi! I would like to place an order.');
  return `https://wa.me/${BRAND.whatsapp}?text=${encodedMessage}`;
};
