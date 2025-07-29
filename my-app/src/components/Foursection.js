
'use client';
import Image from 'next/image';
import candleIcon1 from '../../public/foursection/icone1.png';
import product1 from '../../public/foursection/image1.png';
import product2 from '../../public/foursection/image2.png';
import product3 from '../../public/foursection/image3.png';
import product4 from '../../public/foursection/image4.png';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Foursection = () => {
    const router = useRouter();

    const products = [
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

    const lastProduct = {
        name: 'Eucalyptus Mint 3-Wick Candle',
        oldPrice: '',
        price: '$29.00',
        image: product3,
    };

    return (
        <section className="w-full px-10 md:px-20 py-16 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header Layout Like Image */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start mb-12">

                    <div className="relative col-span-1 w-full p-4 overflow-hidden bg-white  ">
                        {/* Background Candle Icon */}
                        <div className="absolute -top-6 left-0 z-0">
                            <Image
                                src={candleIcon1}
                                alt="bg icon"
                                width={100}
                                height={200}
                                className="opacity-300"
                            />
                        </div>

                        {/* Text Content Overlay */}
                        <div className="relative z-10 flex flex-col items-start ">
                            <h3 style={{ fontFamily: 'Beautiella', color: '#b67258', fontStyle: 'italic', lineHeight: '1.3', }}
                                className="text-5xl">Best seller</h3>
                            <h2 className="text-4xl font-serif text-black">Best - seller</h2>
                            <p className="text-gray-500 text-sm pr-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Tempor incididunt ut labore…
                            </p>

                            {/* Last Product under icon section */}
                            <div className="mt-8 text-center group w-full">
                                <div className="relative bg-white rounded overflow-hidden shadow-sm">
                                    <span className="absolute top-2 left-2 bg-sky-400 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full z-10">New</span>
                                    <Image
                                        src={lastProduct.image}
                                        alt={lastProduct.name}
                                        className="w-full h-56 object-contain mx-auto flip-hover"
                                        width={240}
                                        height={200}
                                    />
                                </div>
                                <h3 className="mt-4 text-sm font-medium text-gray-800 group-hover:text-brown-600">
                                    {lastProduct.name}
                                </h3>
                                <div className="text-sm mt-1">
                                    <span className="text-[#b67258] font-semibold">{lastProduct.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Products in Grid of 3 cols */}
                    {/* Products in Grid of 3 cols */}
                    <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {products.map((item, index) => (
                            <div
                                key={index}
                                className="text-center group cursor-pointer"
                                onClick={() => router.push(`/products/${index}`)}
                            >
                                <div className="relative bg-white rounded overflow-hidden shadow-sm">
                                    <span className="absolute top-2 left-2 bg-sky-400 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full z-10">
                                        New
                                    </span>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-56 object-contain mx-auto flip-hover"
                                        width={240}
                                        height={200}
                                    />
                                </div>
                                <h3 className="mt-4 text-sm font-medium text-gray-800 group-hover:text-brown-600">
                                    {item.name}
                                </h3>
                                <div className="text-sm mt-1">
                                    {item.oldPrice && (
                                        <span className="line-through text-gray-400 mr-2">{item.oldPrice}</span>
                                    )}
                                    <span className="text-[#b67258] font-semibold">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Show More Button */}
                <div className="flex justify-center mt-12">
                    <Link href="/shop" className="flex items-center">
                        <button className="bg-black text-white px-6 py-2 text-sm rounded hover:bg-gray-800">
                            Show More →
                        </button>
                    </Link>
                </div>
            </div>


        </section >
    );
};

export default Foursection;


// 'use client';
// import Image from 'next/image';
// import product1 from '../../public/foursection/image1.png';
// import product2 from '../../public/foursection/image2.png';
// import product3 from '../../public/foursection/image3.png';
// import product4 from '../../public/foursection/image4.png';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// const Foursection = () => {
//   const router = useRouter();

//   const products = [
//     {
//       name: 'Chesapeake Bay Candle',
//       oldPrice: '$23.90',
//       price: '$19.12',
//       image: product1,
//     },
//     {
//       name: 'Hummingbird Printed Sweater',
//       oldPrice: '$35.90',
//       price: '$28.72',
//       image: product4,
//     },
//     {
//       name: 'Village Candle Cinnamon',
//       oldPrice: '',
//       price: '$29.00',
//       image: product2,
//     },
//     {
//       name: 'Chesapeake Bay Candle',
//       oldPrice: '$23.90',
//       price: '$19.12',
//       image: product1,
//     },
//     {
//       name: 'Hummingbird Printed Sweater',
//       oldPrice: '$35.90',
//       price: '$28.72',
//       image: product4,
//     },
//     {
//       name: 'Eucalyptus Mint 3-Wick Candle',
//       oldPrice: '',
//       price: '$29.00',
//       image: product3,
//     },
//   ];

//   const lastProduct = {
//     name: 'Eucalyptus Mint 3-Wick Candle',
//     oldPrice: '',
//     price: '$29.00',
//     image: product3,
//   };

//   return (
//     <section className="w-full px-6 md:px-20 py-16 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start mb-12">
//           {/* Left column: Hello + Image + Info */}
//           <div className="relative col-span-1 w-full p-4 bg-white flex flex-col items-start gap-6">
//             {/* Heading */}
//             <h1 className="text-5xl font-[Beautiella] italic text-[#b67258] leading-tight">
//               Hello Ajay
//             </h1>

//             {/* Image */}
//             <Image
//               src={lastProduct.image}
//               alt={lastProduct.name}
//               className="w-full h-56 object-contain mx-auto"
//               width={240}
//               height={200}
//             />

//             {/* Product Info */}
//             <div className="text-center w-full">
//               <h3 className="mt-4 text-sm font-medium text-gray-800">
//                 {lastProduct.name}
//               </h3>
//               <div className="text-sm mt-1">
//                 <span className="text-[#b67258] font-semibold">{lastProduct.price}</span>
//               </div>
//             </div>
//           </div>

//           {/* Right column: Products */}
//           <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
//             {products.map((item, index) => (
//               <div
//                 key={index}
//                 className="text-center group cursor-pointer"
//                 onClick={() => router.push(`/products/${index}`)}
//               >
//                 <div className="relative bg-white rounded overflow-hidden shadow-sm">
//                   <span className="absolute top-2 left-2 bg-sky-400 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full z-10">
//                     New
//                   </span>
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-56 object-contain mx-auto flip-hover"
//                     width={240}
//                     height={200}
//                   />
//                 </div>
//                 <h3 className="mt-4 text-sm font-medium text-gray-800 group-hover:text-brown-600">
//                   {item.name}
//                 </h3>
//                 <div className="text-sm mt-1">
//                   {item.oldPrice && (
//                     <span className="line-through text-gray-400 mr-2">{item.oldPrice}</span>
//                   )}
//                   <span className="text-[#b67258] font-semibold">{item.price}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Show More Button */}
//         <div className="flex justify-center mt-12">
//           <Link href="/shop" className="flex items-center">
//             <button className="bg-black text-white px-6 py-2 text-sm rounded hover:bg-gray-800">
//               Show More →
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Foursection;
