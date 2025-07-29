'use client';

import Image from 'next/image';
import logo1 from '../../public/logo/logo1.png';
import logo2 from '../../public/logo/logo2.png';
import logo3 from '../../public/logo/logo3.png';
import logo4 from '../../public/logo/logo4.png';
import logo5 from '../../public/logo/logo5.png';
import logo6 from '../../public/logo/logo6.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const Logosection = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center justify-center gap-y-8 gap-x-4">
                    {logos.map((logo, i) => (
                        <div key={i} className="flex justify-center items-center bg-blend-color-burn">
                            <Image
                                src={logo}
                                alt={`brand-logo-${i}`}
                                className="w-auto h-15 grayscale opacity-80 hover:opacity-100 transition-all duration-300 col-span-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logosection;
