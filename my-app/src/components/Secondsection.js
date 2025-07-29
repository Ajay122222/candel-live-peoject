


import Image from 'next/image';

const categories = [
    {
        titleTop: 'Spring',
        titleBottom: 'collection',
        button: 'Shop Now →',
        image: '/secondsection/image2.png', // अपनी image path यहाँ डालें
    },
    {
        titleTop: 'Up To 40% Off',
        titleBottom: 'autumn story',
        button: 'Shop Now →',
        image: '/secondsection/image3.png', // अपनी image path यहाँ डालें
    },
    {
        titleTop: 'Special',
        titleBottom: 'Gift Of Nature',
        button: 'Shop Now →',
        image: '/secondsection/image1.png', // अपनी image path यहाँ डालें
    },
];

const Secondsection = () => {
    return (
        <section className="py-10 px-4 md:px-20 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((item, index) => (
                    <div key={index} className="relative group rounded overflow-hidden shadow-sm">
                        <Image
                            src={item.image}
                            alt={item.titleTop}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"

                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 bg-black/20 text-white">
                            <h3 >{item.titleTop}</h3>
                            <h2 >{item.titleBottom}</h2>
                            <button className="mt-2 text-sm text-gray-800 hover:text-blue-700 border-b border-b-amber-950">
                                {item.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Secondsection;

