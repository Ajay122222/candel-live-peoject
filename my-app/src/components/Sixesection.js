
// 'use client';

// import Image from 'next/image';
// import icon2 from '../../public/sixesection/sixicone1.png';
// import image1 from '../../public/sixesection/pic1.png';
// import image2 from '../../public/sixesection/pic2.png';
// import image3 from '../../public/sixesection/pic3.png';
// import image4 from '../../public/sixesection/pic4.png';
// import image5 from '../../public/sixesection/pic5.png';
// import image6 from '../../public/sixesection/pic6.png';
// import image7 from '../../public/sixesection/pic7.png';
// import image8 from '../../public/sixesection/pic8.png';
// import image9 from '../../public/sixesection/pic9.png';

// const products = [
//     {
//         title: "Chesapeake Bay Candle",
//         reviews: 1,
//         oldPrice: 23.90,
//         price: 19.12,
//         img: image1,
//     },
//     {
//         title: "Hummingbird Printed Sweater",
//         reviews: 1,
//         oldPrice: 35.90,
//         price: 28.72,
//         img: image2,
//     },
//     {
//         title: "Village Candle Cinnamon",
//         reviews: 1,
//         price: 29.00,
//         img: image3,
//     },
//     {
//         title: "Eucalyptus Mint 3-Wick Candle",
//         reviews: 0,
//         price: 29.00,
//         img: image4,
//     },
//     {
//         title: "Tried & True Eucalyptus & Sage",
//         reviews: 0,
//         price: 29.00,
//         img: image5,
//     },
//     {
//         title: "White Barn Bath & Body Works 3 Wick",
//         reviews: 0,
//         price: 11.90,
//         img: image6,
//     },
//     {
//         title: "Candle Eucalyptus Spearmint",
//         reviews: 1,
//         price: 11.90,
//         img: image7,
//     },
//     {
//         title: "Eucalyptus Spearmint Scent",
//         reviews: 0,
//         price: 11.90,
//         img: image8,
//     },
//     {
//         title: "Eucalyptus Classic Candle",
//         reviews: 0,
//         price: 18.90,
//         img: image9,
//     },
// ];

// const Sixesection = () => {
//     return (
//         <section className="w-full bg-[#efefef] relative py-12 px-4 md:px-12 flex flex-col md:flex-row">


//             {/* Left Side */}
//             <div className="md:w-1/3 relative z-10 mb-1 md:mb-0">
//                 {/* Background Icon */}
//                 <div className="absolute top-0 left-1/2 md:left-0">
//                     <Image src={icon2} alt="bg icon" width={150} height={100} />
//                 </div>
//                 <br />

//                 {/* Foreground Text Over Icon */}
//                 <div className="relative z-10">
//                     <h3 style={{ fontFamily: 'Beautiella', color: '#b67258', fontStyle: 'italic', lineHeight: '2.3', }}
//                         className="text-5xl">New Items</h3>
//                     <h2 className="text-3xl  font-serif mt-2">Latest Products</h2>
//                     <p className="text-gray-600 mt-4 max-w-xs">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Tempor incididunt ut labore…
//                     </p>
//                 </div>
//             </div>






//             {/* Right Side - Products Grid */}
//             <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-10">
//                 {products.map((product, index) => (
//                     <div
//                         key={index}
//                         className="flex bg-white rounded-md shadow-sm overflow-hidden h-[120px]"
//                     >
//                         {/* Product Image */}
//                         <div className="w-[40%] relative">
//                             <Image
//                                 src={product.img}
//                                 alt={product.title}
//                                 // fill
//                                 // style={{ objectFit: 'cover' }}

//                                 className="w-full h-30 object-contain mx-auto flip-hover"
//                                 width={200}
//                                 height={100}
//                             />
//                         </div>

//                         {/* Text Content */}
//                         <div className="w-[60%] p-4 flex flex-col justify-center">
//                             <h4 className="text-black font-semibold text-sm mb-1">{product.title}</h4>
//                             <div className="text-xs text-gray-500 mb-1">
//                                 {'★'.repeat(product.reviews) + '☆'.repeat(5 - product.reviews)}
//                                 <span className="ml-1 text-gray-400">
//                                     ({product.reviews} Review{product.reviews !== 1 ? 's' : ''})
//                                 </span>
//                             </div>
//                             <div className="text-black font-semibold text-sm">
//                                 {product.oldPrice && (
//                                     <span className="line-through text-gray-400 mr-2">
//                                         ${product.oldPrice.toFixed(2)}
//                                     </span>
//                                 )}
//                                 ${product.price.toFixed(2)}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Sixesection;



'use client';

import Image from 'next/image';
import icon2 from '../../public/sixesection/sixicone1.png';
import image1 from '../../public/sixesection/pic1.png';
import image2 from '../../public/sixesection/pic2.png';
import image3 from '../../public/sixesection/pic3.png';
import image4 from '../../public/sixesection/pic4.png';
import image5 from '../../public/sixesection/pic5.png';
import image6 from '../../public/sixesection/pic6.png';
import image7 from '../../public/sixesection/pic7.png';
import image8 from '../../public/sixesection/pic8.png';
import image9 from '../../public/sixesection/pic9.png';
import { useRouter } from 'next/navigation';

const products = [
  {
    id: "1",
    title: "Chesapeake Bay Candle",
    reviews: 1,
    oldPrice: 23.90,
    price: 19.12,
    img: image1,
  },
  {
    id: "2",
    title: "Hummingbird Printed Sweater",
    reviews: 1,
    oldPrice: 35.90,
    price: 28.72,
    img: image2,
  },
  {
    id: "3",
    title: "Village Candle Cinnamon",
    reviews: 1,
    price: 29.00,
    img: image3,
  },
  {
    id: "4",
    title: "Eucalyptus Mint 3-Wick Candle",
    reviews: 0,
    price: 29.00,
    img: image4,
  },
  {
    id: "5",
    title: "Tried & True Eucalyptus & Sage",
    reviews: 0,
    price: 29.00,
    img: image5,
  },
  {
    id: "6",
    title: "White Barn Bath & Body Works 3 Wick",
    reviews: 0,
    price: 11.90,
    img: image6,
  },
  {
    id: "7",
    title: "Candle Eucalyptus Spearmint",
    reviews: 1,
    price: 11.90,
    img: image7,
  },
  {
    id: "8",
    title: "Eucalyptus Spearmint Scent",
    reviews: 0,
    price: 11.90,
    img: image8,
  },
  {
    id: "9",
    title: "Eucalyptus Classic Candle",
    reviews: 0,
    price: 18.90,
    img: image9,
  },
];

const Sixesection = () => {
  const router = useRouter();

  // 🔧 Fix: define this missing function
  const handleProductClick = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <section className="w-full bg-[#efefef] relative py-12 px-4 md:px-12 flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="md:w-1/3 relative z-10 mb-1 md:mb-0">
        {/* Background Icon */}
        <div className="absolute top-0 left-1/2 md:left-0">
          <Image src={icon2} alt="bg icon" width={150} height={100} />
        </div>
        <br />

        {/* Foreground Text Over Icon */}
        <div className="relative z-10">
          <h3
            style={{
              fontFamily: 'Beautiella',
              color: '#b67258',
              fontStyle: 'italic',
              lineHeight: '2.3',
            }}
            className="text-5xl"
          >
            New Items
          </h3>
          <h2 className="text-3xl font-serif mt-2">Latest Products</h2>
          <p className="text-gray-600 mt-4 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Tempor
            incididunt ut labore…
          </p>
        </div>
      </div>

      {/* Right Side - Products Grid */}
      <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-10">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className="cursor-pointer flex bg-white rounded-md shadow-sm overflow-hidden h-[120px]"
          >
            <div className="w-[40%] relative">
              <Image
                src={product.img}
                alt={product.title}
                className="w-full h-30 object-contain mx-auto flip-hover"
                width={200}
                height={100}
              />
            </div>

            <div className="w-[60%] p-4 flex flex-col justify-center">
              <h4 className="text-black font-semibold text-sm mb-1">{product.title}</h4>
              <div className="text-xs text-gray-500 mb-1">
                {'★'.repeat(product.reviews) + '☆'.repeat(5 - product.reviews)}
                <span className="ml-1 text-gray-400">
                  ({product.reviews} Review{product.reviews !== 1 ? 's' : ''})
                </span>
              </div>
              <div className="text-black font-semibold text-sm">
                {product.oldPrice && (
                  <span className="line-through text-gray-400 mr-2">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
                ${product.price.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sixesection;
