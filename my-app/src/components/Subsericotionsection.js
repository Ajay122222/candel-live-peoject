







'use client';

import Image from 'next/image';
import formImage from '../../public/leftsize.png';

const SubscriptionSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#fffaf7] to-[#fdf1ec] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <Image
            src={formImage}
            alt="Form Visual"
            width={1200}
            height={1200}
            className="rounded-3xl shadow-x6 object-contain"
          />
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-4 rounded-3xl shadow-lg border border-[#f3e5dc]">
          <h2
            className="text-4xl mb-6 text-center"
            style={{
              fontFamily: 'Beautiella',
              color: '#b67258',
              fontStyle: 'italic',
              lineHeight: '1.3',
            }}
          >
            Enquiry Form
          </h2>

          <form className="space-y-5  rounded-6xl">
            <input
              type="text"
              placeholder="Enter Your name"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#b67258] focus:outline-none shadow-sm"
            />

            <input
              type="tel"
              placeholder=" Enter your phone"
              className="w-full border border-gray-200 rounded-md-6 px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#b67258] focus:outline-none shadow-sm"
            />

            <input
              type="number"
              placeholder="enter your quantity"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#b67258] focus:outline-none shadow-sm"
            />

            <input
              type="email"
              placeholder="  Enter your email"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#b67258] focus:outline-none shadow-sm"
            />

            <button
              type="submit"
              className="w-full bg-[#b67258] text-white text-lg font-semibold py-3 rounded-md hover:bg-[#a15c45] transition duration-300 shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;






