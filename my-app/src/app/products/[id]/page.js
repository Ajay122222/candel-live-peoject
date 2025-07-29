'use client';
import { useCart } from '../../../components/context/CartContext';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import product1 from '../../../../public/foursection/image1.png';
import product2 from '../../../../public/foursection/image2.png';
import product3 from '../../../../public/foursection/image3.png';
import product4 from '../../../../public/foursection/image4.png';
import Headerpage from '@/components/Headerpage';
import Logosection from '@/components/Logosection';

const allProducts = [
  {
    name: 'Chesapeake Bay Candle',
    oldPrice: '$23.90',
    price: '$19.12',
    image: product1,
  },
  {
    name: 'Hummingbird Printed Sweater',
    oldPrice: '$35.90',
    price: '$28.72',
    image: product4,
  },
  {
    name: 'Village Candle Cinnamon',
    oldPrice: '',
    price: '$29.00',
    image: product2,
  },
  {
    name: 'Chesapeake Bay Candle',
    oldPrice: '$23.90',
    price: '$19.12',
    image: product1,
  },
  {
    name: 'Hummingbird Printed Sweater',
    oldPrice: '$35.90',
    price: '$28.72',
    image: product4,
  },
  {
    name: 'Eucalyptus Mint 3-Wick Candle',
    oldPrice: '',
    price: '$29.00',
    image: product3,
  },
];

export default function ProductDetailPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const { id } = useParams();

  const product = allProducts[id];

  const handleAddToCart = () => {
    addToCart(product);
    // alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(product);
    router.push('/cart'); // or alert for now
  };

  return (
    <>
      <div className=''>
        <Headerpage />
      </div>


      <div className="max-w-4xl mx-auto p-8 pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image src={product.image} alt={product.name} width={400} height={300} />
          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-[#b67258] text-xl mt-2">{product.price}</p>
            {product.oldPrice && <p className="line-through text-gray-400">{product.oldPrice}</p>}

            <div className="mt-6 space-x-4">
              <button
                className="bg-black text-white px-4 py-2 rounded"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="bg-[#b67258] text-white px-4 py-2 rounded"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
