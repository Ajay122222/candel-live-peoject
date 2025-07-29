



import Image from 'next/image';
import bgLeft from '../../public/leftsize.png';
import bgRight from '../../public/rightsize.png';

const Fivesection = () => {
    return (
        <section className="w-full  h-screen top-2.5 flex flex-col md:flex-row">
            {/* Left Side - Promo Card */}
            <div className="w-full md:w-1/2 relative">
                <Image
                    src={bgLeft}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 flex items-center justify-center h-full min-h-[400px] px-4 py-8">
                    <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
                        <h3 style={{ fontFamily: 'Beautiella', color: '#b67258', fontStyle: 'italic', lineHeight: '1.3', }}
                            className="text-5xl">
                            <br></br>
                            Special offer
                        </h3>
                        <h2 className="text-4xl font-semibold text-black mb-6">
                            50% Off Gift Sets
                        </h2>
                        <button className="text-sm text-gray-900 font-medium border-b border-gray-800 hover:text-black transition">
                            Shop Now →
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Side - Image with Text Overlay */}
            <div className="w-full md:w-1/2 relative flex items-center justify-center min-h-[400px] bg-[#6ba5b4]">
                <Image
                    src={bgRight}
                    alt="Natural soy wax"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <p className="absolute bottom-6 right-6 text-white text-xl italic font-signature z-10">
                    Natural soy wax
                </p>
            </div>
        </section>
    );
};

export default Fivesection;
