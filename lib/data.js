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
  { label: 'My Orders', href: '/my-orders' },
  { label: 'Cart', href: '/cart' },
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

export const PRODUCTS = [
  {
    id: 1,
    name: 'Skin Care Hamper 💜 ✨',
    category: 'gift-hampers',
    categoryLabel: 'GIFTS HAMPERS',
    price: 2700,
    originalPrice: 3000,
    image: '/images/skincare-hamper.jpg',
    badges: ['bestseller', 'sale'],
    salePercent: 10,
    description: 'A luxurious gift hamper box with premium skincare products, bath bombs, scented candles, silk ribbons, and rose petals arranged beautifully.',
  },
  {
    id: 2,
    name: 'Islamic Resin Frame ✨',
    category: 'resin-art',
    categoryLabel: 'RESIN ART',
    price: 2500,
    originalPrice: null,
    image: '/images/resin-frame.jpg',
    badges: ['bestseller'],
    salePercent: null,
    description: 'Beautiful Islamic resin art frame with golden calligraphy, dried flowers and gold leaf embedded inside.',
  },
  {
    id: 3,
    name: 'Premium Ring Platter ✨',
    category: 'nikkah-essentials',
    categoryLabel: 'NIKKAH ESSENTIALS',
    price: 1599,
    originalPrice: null,
    image: '/images/ring-platter.jpg',
    badges: ['bestseller'],
    salePercent: null,
    description: 'Premium ring platter for wedding/nikkah ceremony. Circular white resin tray decorated with pearls, crystals, and gold accents.',
  },
  {
    id: 4,
    name: 'Heart Shaped Flower Bouquet 💖 ✨',
    category: 'bouquets',
    categoryLabel: 'BOUQUETS',
    price: 2999,
    originalPrice: null,
    image: '/images/rose-bouquet.jpg',
    badges: ['bestseller'],
    salePercent: null,
    description: 'A stunning heart-shaped bouquet of deep red roses wrapped in premium white paper with satin ribbon.',
  },
  {
    id: 5,
    name: 'Luxury Chocolate Bouquet 🍫',
    category: 'chocolate-bouquets',
    categoryLabel: 'CHOCOLATE BOUQUETS',
    price: 1999,
    originalPrice: 2499,
    image: '/images/chocolate-bouquet.jpg',
    badges: ['bestseller', 'sale'],
    salePercent: 20,
    description: 'Luxurious chocolate bouquet with Galaxy, Ferrero Rocher arranged with golden wrapping and ribbons.',
  },
  {
    id: 6,
    name: 'Mehendi Ceremony Tray ✨',
    category: 'mehendi-trays',
    categoryLabel: 'MEHENDI TRAYS',
    price: 3499,
    originalPrice: null,
    image: '/images/mehendi-tray.jpg',
    badges: ['bestseller'],
    salePercent: null,
    description: 'Beautifully decorated mehndi ceremony tray with resin art base, flowers, candles and henna cones.',
  },
  {
    id: 7,
    name: 'Bridal Gift Hamper 👰 ✨',
    category: 'gift-hampers',
    categoryLabel: 'GIFTS HAMPERS',
    price: 4500,
    originalPrice: 5000,
    image: '/images/skincare-hamper.jpg',
    badges: ['bestseller', 'sale'],
    salePercent: 10,
    description: 'Premium bridal gift hamper with skincare, perfumes, and luxury accessories.',
  },
  {
    id: 8,
    name: 'Rose Gold Resin Tray ✨',
    category: 'resin-art',
    categoryLabel: 'RESIN ART',
    price: 1899,
    originalPrice: null,
    image: '/images/resin-frame.jpg',
    badges: ['bestseller'],
    salePercent: null,
    description: 'Elegant rose gold resin serving tray with embedded flowers and gold leaf.',
  },
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
