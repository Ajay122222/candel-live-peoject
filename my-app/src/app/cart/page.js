'use client';
import { useCart } from '../../components/context/CartContext';
import Image from 'next/image';

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 border-b py-4">
              <Image src={item.image} alt={item.name} width={100} height={80} />
              <div>
                <p>{item.name}</p>
                <p className="text-[#b67258]">{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
