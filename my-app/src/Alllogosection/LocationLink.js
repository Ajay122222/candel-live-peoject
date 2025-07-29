import { MapPin } from 'lucide-react';

const LocationLink = () => {
  return (
    <a
      href="https://www.google.com/maps/place/Taj+Mahal/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 hover:underline"
    >
      <MapPin size={17} className="mr-1" />
      View on shop
    </a>
  );
};

export default LocationLink;
