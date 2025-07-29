

'use client';

import { useState } from 'react';
import { useCart } from '@/components/context/CartContext';
import { Search, User, ShoppingBag, Heart, Headphones, Menu, X } from 'lucide-react';
import Link from 'next/link';
import LocationLink from '@/Alllogosection/LocationLink';

const products = [
  { id: 1, name: 'Chesapeake Bay Candle' },
  { id: 2, name: 'Eucalyptus Mint 3-Wick Candle' },
  { id: 3, name: 'Village Candle Cinnamon' },
  { id: 4, name: 'Hummingbird Printed Sweater' },
];

const Headerpage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const { cart } = useCart();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === '') {
      setFiltered([]);
    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(results);
    }
  };

  return (
    <header className="w-full border-b bg-white z-50 fixed top-0 left-0 shadow-sm">
      {/* Top Header */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="font-serif tracking-wide text-brown-600">OLARS</span>
          </Link>
          <p className="text-xs font-light tracking-widest">CANDLE SHOP</p>
        </div>

        {/* Search Box */}
        <div className="hidden md:flex flex-col relative w-1/3">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search"
              className="border-b w-full outline-none text-sm placeholder:text-gray-400"
            />
            <Search size={18} />
          </div>
          {filtered.length > 0 && (
            <ul className="absolute top-full mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-md z-50">
              {filtered.map((product) => (
                <li
                  key={product.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-left"
                >
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-6">
            <User />
            <div className="relative">
              <ShoppingBag />
              {cart?.length > 0 && (
                <span className="absolute -top-2 -right-2 text-xs text-white bg-brown-700 rounded-full w-4 h-4 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
            <div className="relative">
              <Heart />
              <span className="absolute -top-2 -right-2 text-xs text-white bg-brown-700 rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-2">
        <div className="relative">
          <div className="flex items-center space-x-2 border-b">
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search"
              className="w-full text-sm placeholder:text-gray-400 outline-none py-1"
            />
            <Search size={18} />
          </div>
          {filtered.length > 0 && (
            <ul className="absolute top-full mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-md z-50">
              {filtered.map((product) => (
                <li
                  key={product.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-left"
                >
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 md:px-8 py-2 text-sm font-medium text-gray-700">
        <div className="hidden md:flex justify-between items-center">
          <div className="flex space-x-6">
            <Link href="/" className="text-brown-600">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Headphones size={16} />
              <span>(+01) 123 567 99</span>
            </div>
            <div className="flex items-center space-x-2">
              <LocationLink />
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            <Link href="/" className="text-brown-600">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <div className="flex items-center space-x-2 pt-2">
              <Headphones size={17} />
              <span>(+01) 86 51 80 84 60</span>
            </div>
            <div className="flex items-center space-x-2">
              <LocationLink />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Headerpage;



























