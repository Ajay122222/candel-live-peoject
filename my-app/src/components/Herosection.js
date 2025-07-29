
'use client';
import Image from 'next/image';
import heroImage from '../../public/herosection/image.png'; // 🔁 Image path
import Link from 'next/link';

const Herosection = () => {
    return (

        <section className="relative w-auto min-h-2.5 flex items-center justify-start px-6 md:px-20 pt-38 pb-5 md:pb-10 bg-[#fdfaf7] overflow-hidden">

            {/* ✅ Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImage}
                    alt="Background Candle"
                    fill
                    className="object-cover object-right md:object-scale-down opacity-70"
                    quality={50}
                    priority
                />
            </div>

            {/* ✅ Content Overlay */}
            <div className="relative z-10 max-w-3xl text-left text-black space-y-6 p-6 md:p-10">
                <p style={{ fontFamily: 'Beautiella', color: '#b67258', fontStyle: 'italic', lineHeight: '1.3', }}
                    className="text-6xl">Best for you</p>
                <h1 className="text-4xl md:text-5xl font-family:'jost','sans-serif' text-gray-900 leading-tight">
                    Meet Our <br />
                    <span className="text--gray-900 font-family:'jost','sans-serif'">Latest Creations</span>
                    <br />
                    {/* Latest Creations */}
                </h1>

                <p className="text-gray-700 text-sm md:text-base max-w-lg font-family:'jost','sans-serif'">
                    Elevates any retail environment and sustainable, too!
                </p>
                <Link href="/shop" className="inline-block">
                    <button className="bg-[#b67258] text-white px-6 py-3 text-sm font-medium rounded hover:bg-[#454ba2]">
                        Shop Now →
                    </button>
                </Link>
             <span style={{paddingLeft: '10px', paddingRight: '10px'}}>
                  <Link href="/about" className="inline-block">
                    <button className="bg-[#b67258] text-white px-6 py-3 text-sm font-medium rounded hover:bg-[#454ba2]">
                        More details →
                    </button>
                </Link>
                </span>
            </div>




            {/* ✅ Floating Buttons (fixed on scroll) */}
            <div className="fixed right-4 top-36 z-50 flex flex-col items-center space-y-2">
                <span className="bg-yellow-400 text-[10px] px-2 py-1 rounded-full font-bold shadow">NEW</span>
                <button className="p-1 bg-white border shadow-sm text-xs">⚙️</button>
                <button className="p-1 bg-white border shadow-sm text-xs">🎚️</button>
                <button className="p-1 bg-white border shadow-sm text-xs">🌙</button>
            </div>
        </section>


    );
};

export default Herosection;
