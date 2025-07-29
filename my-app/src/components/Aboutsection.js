'use client';

import Image from 'next/image';
import aboutImg from '../../public/aboutsection.png'; // Use your actual path

const AboutSection = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Side Image */}
        <div>
          <Image
            src={aboutImg}
            alt="Rue Collection Computer"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-family:'jost','sans-serif' text-gray-900 leading-tight">About Aroma story</h2>
          <p className="text-gray-700 text-sm md:text-base max-w-lg font-family:'jost','sans-serif'">
            At Rue Collection, we believe style should be as comfortable as it is beautiful. Created for women who lead with purpose and dress with poise, our garments merge timeless shapes with modern, refined accents.
          </p>
          <p className="text-gray-700 text-sm md:text-base max-w-lg font-family:'jost','sans-serif'">
            Every collection is carefully assembled—because you deserve exceptional quality, effortless comfort, and that unmistakable touch of charm. Whether you're outfitting for the workplace or winding down on the weekend, Rue is your trusted source for sophisticated ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
