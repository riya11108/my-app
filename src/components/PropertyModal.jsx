import React from 'react';
import { X, MapPin, Star, Bed, Bath, Square, Heart, Wifi, Car, Droplets, Dumbbell, Waves, Leaf } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Carousel from './Carousel';

const PropertyModal = ({ property, isOpen, onClose }) => {
  const [bookmarkedProperties, setBookmarkedProperties] = useLocalStorage('bookmarkedProperties', []);
  
  if (!isOpen || !property) return null;

  const isBookmarked = bookmarkedProperties.includes(property.id);

  const toggleBookmark = () => {
    if (isBookmarked) {
      setBookmarkedProperties(prev => prev.filter(id => id !== property.id));
    } else {
      setBookmarkedProperties(prev => [...prev, property.id]);
    }
  };

  const getAmenityIcon = (amenity) => {
    const icons = {
      wifi: <Wifi className="h-5 w-5" />,
      ac: <Droplets className="h-5 w-5" />,
      parking: <Car className="h-5 w-5" />,
      gym: <Dumbbell className="h-5 w-5" />,
      pool: <Waves className="h-5 w-5" />,
      security: <Square className="h-5 w-5" />,
      lift: <Square className="h-5 w-5" />,
      garden: <Leaf className="h-5 w-5" />,
      balcony: <Square className="h-5 w-5" />,
      clubhouse: <Star className="h-5 w-5" />,
      housekeeping: <Square className="h-5 w-5" />
    };
    return icons[amenity] || <Square className="h-5 w-5" />;
  };

  const renderImage = (image) => (
    <img 
      src={image} 
      alt={property.title}
      className="w-full h-96 object-cover"
    />
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{property.title}</h2>
            <div className="flex items-center text-gray-600 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image Carousel */}
          <Carousel
            items={property.images}
            renderItem={renderImage}
            className="mb-6"
          />

          {/* Property Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Price & Basic Info */}
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 mr-2" />
                    <span>{property.bedrooms}BHK</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 mr-2" />
                    <span>{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-5 w-5 mr-2" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
                <span className="text-3xl font-bold text-green-600">
                  ₹{property.price.toLocaleString()}/month
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-800 ml-2">
                    {property.rating} ({property.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center bg-gray-50 rounded-lg px-4 py-3 text-gray-700"
                    >
                      {getAmenityIcon(amenity)}
                      <span className="ml-3 capitalize">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={toggleBookmark}
                  className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-semibold transition-colors ${
                    isBookmarked
                      ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100'
                      : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
                  <span>{isBookmarked ? 'Remove from Saved' : 'Save Property'}</span>
                </button>
                
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                  Contact Landlord
                </button>
                
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                  Schedule Tour
                </button>
              </div>

              {/* Property Type */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Property Type</h4>
                <span className="text-gray-600 capitalize">{property.type}</span>
              </div>

              {/* Quick Facts */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">Quick Facts</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Type:</span>
                    <span className="font-medium capitalize">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Square Feet:</span>
                    <span className="font-medium">{property.sqft} sqft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bedrooms:</span>
                    <span className="font-medium">{property.bedrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bathrooms:</span>
                    <span className="font-medium">{property.bathrooms}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;