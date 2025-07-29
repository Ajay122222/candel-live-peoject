'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

import image1 from '../../../../public/sixesection/pic1.png';
import image2 from '../../../../public/sixesection/pic2.png';
import image3 from '../../../../public/sixesection/pic3.png';
import image4 from '../../../../public/sixesection/pic4.png';
import image5 from '../../../../public/sixesection/pic5.png';
import image6 from '../../../../public/sixesection/pic6.png';
import image7 from '../../../../public/sixesection/pic7.png';
import image8 from '../../../../public/sixesection/pic8.png';
import image9 from '../../../../public/sixesection/pic9.png';

const ProductDetailPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  const productData = [
    { id: "1", title: "Chesapeake Bay Candle", reviews: 1, oldPrice: 23.90, price: 19.12, img: image1 },
    { id: "2", title: "Hummingbird Printed Sweater", reviews: 1, oldPrice: 35.90, price: 28.72, img: image2 },
    { id: "3", title: "Village Candle Cinnamon", reviews: 1, price: 29.00, img: image3 },
    { id: "4", title: "Eucalyptus Mint 3-Wick Candle", reviews: 0, price: 29.00, img: image4 },
    { id: "5", title: "Tried & True Eucalyptus & Sage", reviews: 0, price: 29.00, img: image5 },
    { id: "6", title: "White Barn Bath & Body Works 3 Wick", reviews: 0, price: 11.90, img: image6 },
    { id: "7", title: "Candle Eucalyptus Spearmint", reviews: 1, price: 11.90, img: image7 },
    { id: "8", title: "Eucalyptus Spearmint Scent", reviews: 0, price: 11.90, img: image8 },
    { id: "9", title: "Eucalyptus Classic Candle", reviews: 0, price: 18.90, img: image9 },
  ];

  useEffect(() => {
    const foundProduct = productData.find((p) => p.id === params.id);
    setProduct(foundProduct);
  }, [params.id]);

  const handleAddToCart = () => {
    alert(`${product.title} added to cart`);
  };

  const handleBuyNow = () => {
    alert(`Buying ${product.title} now...`);
  };

  if (!product) return <div className="p-8 text-center">Loading...</div>; // ✅ FIXED

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Image
        src={product.img}
        alt={product.title}
        width={400}
        height={300}
        className="mx-auto mb-6"
      />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-600 mb-2">
        {'★'.repeat(product.reviews) + '☆'.repeat(5 - product.reviews)} ({product.reviews} Review)
      </p>
      <p className="text-xl text-black font-semibold">
        {product.oldPrice && (
          <span className="line-through text-gray-500 mr-2">${product.oldPrice.toFixed(2)}</span>
        )}
        ${product.price.toFixed(2)}
      </p>
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleAddToCart}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
