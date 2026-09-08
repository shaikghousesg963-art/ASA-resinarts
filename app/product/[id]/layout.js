import { PRODUCTS } from '@/lib/data';

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductLayout({ children }) {
  return children;
}
