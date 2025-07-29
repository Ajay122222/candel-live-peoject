'use client';
import Image from 'next/image';
import { Star } from 'lucide-react';
import user1 from '../../public/feedback/image1.png';
import user2 from '../../public/feedback/image2.png';
import user3 from '../../public/feedback/image4.png';

const feedbacks = [
  {
    name: 'Anjali Sharma',
    message: 'I loved the candles! The fragrance is amazing and lasts long.',
    image: user1,
    rating: 5,
  },
  {
    name: 'Rahul Mehta',
    message: 'Great quality and beautiful design. Will definitely order again.',
    image: user2,
    rating: 4,
  },
  {
    name: 'Ajay kushwaha',
    message: 'Customer service was very helpful and delivery was quick.',
    image: user3,
    rating: 5,
  },
];

const Feedbacksection = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 font-serif">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {feedbacks.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-8 border border-gray-100 flex flex-col items-center text-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-full ring-2 ring-[#b67258] mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-gray-700">{item.name}</h4>
              <div className="flex justify-center text-yellow-500 text-sm mt-2 mb-4">
                {Array(item.rating)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                “{item.message}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedbacksection;
