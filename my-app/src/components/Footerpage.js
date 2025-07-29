import { MapPin, Headphones, Send } from 'lucide-react';
import Image from 'next/image';
import mastercard from '../../public/pamenticone.png';


const Footerpage = () => {
    return (
        <footer className="bg-[#1e1e1e] text-gray-300 pt-16 pb-6 px-4 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Logo + About */}
                <div>
                    <h2 className="text-white text-2xl font-bold font-serif">OLARS</h2>
                    <p className="text-sm tracking-widest text-gray-400">CANDLE SHOP</p>
                    <p className="mt-4 text-sm text-gray-400">
                        Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.
                        Accumsan in nisl nisi scelerisque eu ultrices vitae.
                    </p>
                </div>

                {/* Information */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Information</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Custom Service</li>
                        <li>FAQs</li>
                        <li>Ordering Tracking</li>
                        <li>Contacts</li>
                        <li>Events</li>
                    </ul>
                </div>

                {/* My Account */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">My Account</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Discount</li>
                        <li>Custom</li>
                        <li>Service Term</li>
                    </ul>
                </div>

                {/* Secure Payment */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Secure Payment:</h3>
                    <div className="flex items-center gap-6">
                        <Image src={mastercard} alt="mastercard" />

                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
                <p>Copyright © 2021 Olars. All Rights Reserved</p>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>9200 E Iowa Ave, Denver, USA</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Headphones size={16} />
                        <span>(+01) 123 567 999</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Send size={16} />
                        <span>contact@olars.com</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footerpage;
