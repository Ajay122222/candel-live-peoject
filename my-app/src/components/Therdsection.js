
'use client';

import Image from 'next/image';
import candlicon1 from '../../public/categryimg/icone1.png';
import img1 from '../../public/categryimg/image1.png';
import img2 from '../../public/categryimg/image2.png';
import img3 from '../../public/categryimg/image3.png';

const categories = [
  {
    img: img1,
    title: 'Pilars',
    count: '3 items',
  },
  {
    img: img2,
    title: 'Gift Sets',
    count: '6 items',
  },
  {
    img: img3,
    title: 'Accessories',
    count: '6 items',
  },
];

const Therdsection = () => {
  return (
    <section className="py-20 px-24 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-18">

        {/* Left Side Text */}
        <div className="md:w-1/3 w-full space-y-4 text-center md:text-left relative">
          {/* Background Icon Image */}
          <div className="absolute top-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 z-0">
            <Image
              src={candlicon1}
              alt="bg icon"
              width={100}
              height={200}
              className="opacity-30"
            />
          </div>

          {/* Foreground Text */}
          <div className="relative z-10 mt-16 md:mt-12 space-y-2">
            <h3
              style={{
                fontFamily: 'Beautiella',
                color: '#b67258',
                fontStyle: 'italic',
                lineHeight: '1.3',
              }}
              className="text-5xl"
            >
              Categories
            </h3>
            <h2 className="text-3xl md:text-4xl  font-serif">Feature collection</h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Right Side Category Circles */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 text-center group">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-md transform transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={item.img}

                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="font-semibold text-lg text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Therdsection;
