import React from 'react';
import { Heart, MapPin, Star, Bed, Bath, Square, Wifi, Car, Droplets, Dumbbell, Waves, Leaf } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const PropertyCard = ({ property, onViewDetails }) => {
  const [bookmarkedProperties, setBookmarkedProperties] = useLocalStorage('bookmarkedProperties', []);
  
  const isBookmarked = bookmarkedProperties.includes(property.id);

  const toggleBookmark = (e) => {
    e.stopPropagation();
    if (isBookmarked) {
      setBookmarkedProperties(prev => prev.filter(id => id !== property.id));
    } else {
      setBookmarkedProperties(prev => [...prev, property.id]);
    }
  };

  const getAmenityIcon = (amenity) => {
    const icons = {
      wifi: <Wifi className="h-4 w-4" />,
      ac: <Droplets className="h-4 w-4" />,
      parking: <Car className="h-4 w-4" />,
      gym: <Dumbbell className="h-4 w-4" />,
      pool: <Waves className="h-4 w-4" />,
      security: <Square className="h-4 w-4" />,
      lift: <Square className="h-4 w-4" />,
      garden: <Leaf className="h-4 w-4" />,
      balcony: <Square className="h-4 w-4" />,
      clubhouse: <Star className="h-4 w-4" />,
      housekeeping: <Square className="h-4 w-4" />
    };
    return icons[amenity] || <Square className="h-4 w-4" />;
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
      onClick={() => onViewDetails && onViewDetails(property)}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleBookmark}
            className={`p-2 rounded-full shadow-lg transition-all duration-200 ${
              isBookmarked 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Heart className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
        {property.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-1">{property.title}</h3>
          <span className="text-2xl font-bold text-green-600">₹{property.price.toLocaleString()}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center space-x-4 mb-4 text-gray-600">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.bedrooms}BHK</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.bathrooms} bath</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.sqft} sqft</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700 ml-1">
              {property.rating} ({property.reviews} reviews)
            </span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.amenities.slice(0, 4).map((amenity) => (
            <div
              key={amenity}
              className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-600"
            >
              {getAmenityIcon(amenity)}
              <span className="ml-1 capitalize">{amenity}</span>
            </div>
          ))}
          {property.amenities.length > 4 && (
            <div className="flex items-center bg-green-50 text-green-600 rounded-full px-3 py-1 text-xs font-medium">
              +{property.amenities.length - 4} more
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyCard;