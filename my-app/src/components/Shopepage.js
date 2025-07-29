

'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import image1 from '../../public/sixesection/pic1.png';
import image2 from '../../public/sixesection/pic2.png';
import image3 from '../../public/sixesection/pic3.png';
import image4 from '../../public/sixesection/pic4.png';
import image5 from '../../public/sixesection/pic5.png';
import image6 from '../../public/sixesection/pic6.png';
import image7 from '../../public/sixesection/pic7.png';
import image8 from '../../public/sixesection/pic8.png';
import image9 from '../../public/sixesection/pic9.png';

const products = [
  { id: "1", title: "White Barn Bath & Body Works 3 Wick", price: 11.90, img: image6, size: 'S', color: 'White', composition: 'Ceramic', property: 'Removable cover', brand: 'Studio Design' },
  { id: "2", title: "Candle Eucalyptus Spearmint", price: 11.90, img: image7, size: 'M', color: 'Black', composition: 'Cotton', property: 'Short sleeves', brand: 'Studio Design' },
  { id: "3", title: "Eucalyptus Spearmint Scent", price: 11.90, img: image8, size: 'L', color: 'White', composition: 'Polyester', property: 'Removable cover', brand: 'Studio Design' },
  { id: "4", title: "Eucalyptus Classic Candle", price: 18.90, img: image9, size: 'XL', color: 'Black', composition: 'Ceramic', property: 'Short sleeves', brand: 'Studio Design' },
  { id: "5", title: "Colonial Candle", price: 18.90, img: image4, size: 'S', color: 'White', composition: 'Cotton', property: 'Removable cover', brand: 'Studio Design' },
  { id: "6", title: "Heaven Scent Soy Wax", price: 18.90, img: image5, size: 'M', color: 'Black', composition: 'Polyester', property: 'Removable cover', brand: 'Studio Design' },
  { id: "7", title: "Village Candle Rain 26 Oz", price: 35.00, img: image3, size: 'L', color: 'White', composition: 'Cotton', property: 'Short sleeves', brand: 'Studio Design' },
  { id: "8", title: "Spring Scented Tin Candle", price: 13.90, img: image2, size: 'XL', color: 'Black', composition: 'Ceramic', property: 'Removable cover', brand: 'Studio Design' },
  { id: "9", title: "Chesapeake Bay Candle", oldPrice: 23.90, price: 19.12, img: image1, size: 'S', color: 'White', composition: 'Polyester', property: 'Short sleeves', brand: 'Studio Design' },
];

const filters = [
  { label: 'SIZE', key: 'size', items: ['S', 'M', 'L', 'XL'] },
  { label: 'COLOR', key: 'color', items: ['White', 'Black'] },
  { label: 'COMPOSITION', key: 'composition', items: ['Ceramic', 'Cotton', 'Polyester'] },
  { label: 'PROPERTY', key: 'property', items: ['Removable cover', 'Short sleeves'] },
  { label: 'BRAND', key: 'brand', items: ['Studio Design'] },
];

export default function Shopepage() {
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState({});
  const [maxPrice, setMaxPrice] = useState(35); // Price range state

  const toggleFilter = (key, value) => {
    setSelectedFilters((prev) => {
      const current = prev[key] || [];
      const isActive = current.includes(value);
      return {
        ...prev,
        [key]: isActive ? current.filter((item) => item !== value) : [...current, value],
      };
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchFilters = Object.entries(selectedFilters).every(([key, values]) => {
      if (!values || values.length === 0) return true;
      return values.includes(product[key]);
    });

    const matchPrice = product.price <= maxPrice;

    return matchFilters && matchPrice;
  });

  return (
    <section className="w-full py-12 px-4 md:px-10 bg-white">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="w-full md:w-[250px]">
          <div className="space-y-6">
            {filters.map(({ label, key, items }) => (
              <div key={key}>
                <h3 className="font-semibold text-sm text-gray-700 mb-2">{label}</h3>
                {items.map((item) => (
                  <div key={item} className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedFilters[key]?.includes(item) || false}
                      onChange={() => toggleFilter(key, item)}
                    />
                    <label className="text-sm text-gray-600">{item}</label>
                  </div>
                ))}
              </div>
            ))}

            {/* Price Range */}
            <div>
              <h3 className="font-semibold text-sm text-gray-700 mb-2">PRICE</h3>
              <input
                type="range"
                min="11"
                max="35"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-sm text-gray-500 mt-1">Up to ${maxPrice.toFixed(2)}</p>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => router.push(`/product/${product.id}`)}
              className="cursor-pointer bg-white border rounded-lg shadow-sm p-3 group hover:shadow-md flex flex-col h-full"
            >
              <div className="relative mb-2 h-[220px] flex items-center justify-center">
                <span className="absolute top-2 left-2 bg-sky-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                  New
                </span>
                <Image
                  src={product.img}
                  alt={product.title}
                  className="object-contain"
                  width={200}
                  height={180}
                />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <h3 className="text-[14px] font-medium text-gray-800 group-hover:text-brown-600 mb-1">
                  {product.title}
                </h3>
                <div className="text-sm">
                  {product.oldPrice && (
                    <span className="line-through text-gray-400 mr-2">${product.oldPrice}</span>
                  )}
                  <span className="text-[#b67258] font-semibold">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
