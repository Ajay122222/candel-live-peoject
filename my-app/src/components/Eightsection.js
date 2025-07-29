'use client';

import Image from 'next/image';
import img1 from '../../public/editesection/image1.png'; // Adjust the path as necessary
import img2 from '../../public/editesection/image2.png'; // Adjust the path as necessary
import img3 from '../../public/editesection/image3.png'; // Adjust the path as necessary
import icon1 from '../../public/editesection/iconeeight.png'; // Optional, if you want a candle icon near heading

const blogs = [
  {
    img: img1,
    category: 'Sub Category 2',
    title: 'You’ll Fall In Love With These Soy Wax Candle Brands',
    date: '19 Jul 2021',
    author: 'Demo Demo',
    excerpt:
      'Here at Osmology, we have one of the largest collections of premium soy wax candles crafted by fragrance brands wh...',
  },
  {
    img: img2,
    category: 'Sub Category 2',
    title: 'The Best New Candles Launching Summer 2021',
    date: '19 Jul 2021',
    author: 'Demo Demo',
    excerpt:
      'Want to know about the best new candle fragrances arriving at Osmology? We’ve rounded up the latest scented candle...',
  },
  {
    img: img3,
    category: 'Sub Category 1',
    title: 'Bright Citrus Scented Candles To Energise Your Home',
    date: '19 Jul 2021',
    author: 'Demo Demo',
    excerpt:
      'If you’re not sure about which size is best for you, we can help. The best way to know which sock size to order is to...',
  },
];

const Eightsection = () => {
  return (
    <section className="bg-white px-4 py-16">
      <div className="text-center mb-8">
        {/* Optional icon */}
        <Image src={icon1} alt="icon" width={100} height={100} className="mx-auto mb-2" />
        <h3 style={{ fontFamily: 'Beautiella', color: '#b67258', fontStyle: 'italic', lineHeight: '1.3', }}
          className="text-4xl">Latest News</h3>
        <h2 className="text-2xl md:text-3xl font-semibold text-black">Our Blog Updates</h2>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((post, i) => (
          <div key={i} className="flex flex-col">
            {/* Image with category tag */}
            <div className="relative w-full h-64 mb-4">
              <Image
                src={post.img}
                alt={post.title}
                fill
                className="object-cover rounded"
              />
              <span className="absolute top-3 left-3 bg-[#b67258] text-white text-xs px-3 py-1 rounded-sm uppercase font-medium tracking-wide">
                {post.category}
              </span>
            </div>

            {/* Meta info */}
            <div className="text-sm text-gray-500 mb-1">
              {post.author.toUpperCase()} &nbsp;&nbsp;|&nbsp;&nbsp; {post.date}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-black mb-2">{post.title}</h3>

            {/* Excerpt */}
            <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>

            {/* Read More */}
            <a href="#" className="text-[#b67258] text-sm font-medium hover:underline inline-flex items-center gap-1">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Eightsection;
