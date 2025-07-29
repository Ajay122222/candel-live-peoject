// 'use client';

// import { Truck, Building2, ShoppingBag } from 'lucide-react'; // Icons from lucide-react

// const FeatureSection = () => {
//   const features = [
//     {
//       icon: <ShoppingBag size={36} className="text-[#334155]" />,
//       title: '100% Satisfaction Guarantee',
//       description: 'All Of Our Products Comes With 100% Refund Guarantee',
//     },
//     {
//       icon: <Building2 size={36} className="text-[#334155]" />,
//       title: 'From Factory To Your Door',
//       description:
//         'Best Pricing Promise, As We Delivery Directly From Factory To Your Door.',
//     },
//     {
//       icon: <Truck size={36} className="text-[#334155]" />,
//       title: 'COD Available',
//       description: 'PAN India Cash On Delivery Available',
//     },
//   ];

//   return (
//     <section className="py-14 bg-white">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//         {features.map((item, idx) => (
//           <div key={idx} className="flex flex-col items-center gap-4">
//             {item.icon}
//             <div>
//               <h4 className="text-sm text-gray-500 font-semibold mb-1">{item.title}</h4>
//               <p className="text-lg text-slate-800 leading-snug">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;






'use client';

import { Truck, Building2, ShoppingBag } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <ShoppingBag size={30} className="text-[#334155]" />,
      // title: '100% Satisfaction Guarantee',
      description: '100% Satisfaction Guarantee',
    },
    {
      icon: <Building2 size={30} className="text-[#334155]" />,
      //   title: '100% Satisfaction Guarantee',
      description: `
      
      'Best Pricing Promise , As We Delivery Directly From  Home.'`,
    },
    {
      icon: <Truck size={30} className="text-[#334155]" />,

      description: 'PAN India Cash On Delivery Available',
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="mt-1">{item.icon}</div>
            <div>
              <h4 className="text-sm text-gray-500 font-medium mb-1">{item.title}</h4>
              <p className="text-lg text-slate-800 font-medium leading-snug">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
