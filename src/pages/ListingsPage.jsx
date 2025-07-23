import React, { useState, useMemo } from 'react';
import PropertyCard from '../components/PropertyCard';
import PropertyModal from '../components/PropertyModal';
import SearchBar from '../components/SearchBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useProperties } from '../hooks/useProperties';
import { Filter, Grid, List, MapPin, DollarSign, Home, Bed, SlidersHorizontal, Heart } from 'lucide-react';

const ListingsPage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookmarkedProperties] = useLocalStorage('bookmarkedProperties', []);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [showBookmarked, setShowBookmarked] = useState(false);
  const { properties, loading, error, fetchProperties } = useProperties();
  
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    propertyType: '',
    bedrooms: '',
    minSqft: '',
    amenities: []
  });

  const allAmenities = ['wifi', 'ac', 'parking', 'gym', 'pool', 'security', 'lift', 'garden', 'balcony', 'clubhouse', 'housekeeping'];

  const filteredProperties = useMemo(() => {
    let filtered = [...properties];

    // Show only bookmarked properties if filter is active
    if (showBookmarked) {
      filtered = filtered.filter(prop => bookmarkedProperties.includes(prop.id));
    }

    if (filters.location) {
      filtered = filtered.filter(prop => 
        prop.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.minPrice) {
      filtered = filtered.filter(prop => prop.price >= parseInt(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(prop => prop.price <= parseInt(filters.maxPrice));
    }

    if (filters.propertyType) {
      filtered = filtered.filter(prop => prop.type === filters.propertyType);
    }

    if (filters.bedrooms) {
      filtered = filtered.filter(prop => prop.bedrooms >= parseInt(filters.bedrooms));
    }

    if (filters.minSqft) {
      filtered = filtered.filter(prop => prop.sqft >= parseInt(filters.minSqft));
    }

    if (filters.amenities.length > 0) {
      filtered = filtered.filter(prop => 
        filters.amenities.every(amenity => prop.amenities.includes(amenity))
      );
    }

    return filtered;
  }, [filters, bookmarkedProperties, showBookmarked]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleAmenityToggle = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      minPrice: '',
      maxPrice: '',
      propertyType: '',
      bedrooms: '',
      minSqft: '',
      amenities: []
    });
    setShowBookmarked(false);
  };

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleSearch = async (searchParams) => {
    await fetchProperties(searchParams);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Rental</h1>
            <p className="text-xl text-green-100">Search thousands of verified properties across India</p>
          </div>
          <SearchBar onSearch={handleSearch} className="max-w-6xl mx-auto" />
        </div>
      </section>

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Property Listings</h2>
              <p className="text-gray-600 mt-1">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
                {showBookmarked && ' in your saved list'}
                {loading && ' (Loading...)'}
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              {/* View Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              {/* Bookmarks Toggle */}
              <button
                onClick={() => setShowBookmarked(!showBookmarked)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  showBookmarked 
                    ? 'bg-red-100 text-red-700 border border-red-200' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <Heart className={`h-5 w-5 ${showBookmarked ? 'fill-current' : ''}`} />
                <span>Saved ({bookmarkedProperties.length})</span>
              </button>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="City or Area (e.g., Mumbai, Bangalore)"
                      value={filters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="number"
                        placeholder="Min (₹)"
                        value={filters.minPrice}
                        onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="number"
                        placeholder="Max (₹)"
                        value={filters.maxPrice}
                        onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      value={filters.propertyType}
                      onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                    >
                      <option value="">Any Type</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="house">House</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="studio">Studio</option>
                    </select>
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bedrooms
                  </label>
                  <div className="relative">
                    <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      value={filters.bedrooms}
                      onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                    >
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                    </select>
                  </div>
                </div>

                {/* Square Feet */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Square Feet
                  </label>
                  <input
                    type="number"
                    placeholder="Min sqft"
                    value={filters.minSqft}
                    onChange={(e) => handleFilterChange('minSqft', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Amenities */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Amenities
                  </label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {['wifi', 'ac', 'parking', 'gym', 'pool', 'security', 'lift', 'garden', 'balcony', 'clubhouse', 'housekeeping'].map((amenity) => (
                      <label key={amenity} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.amenities.includes(amenity)}
                          onChange={() => handleAmenityToggle(amenity)}
                          className="rounded border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className="flex-1">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Home className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No Properties Found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or {showBookmarked ? 'bookmark some properties' : 'search in a different area'}.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                {loading && (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading properties...</p>
                  </div>
                )}
                {error && (
                  <div className="text-center py-12">
                    <div className="text-red-500 mb-4">
                      <p>Error loading properties: {error}</p>
                      <p className="text-sm text-gray-600 mt-2">Showing sample properties instead.</p>
                    </div>
                  </div>
                )}
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {filteredProperties.map((property) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How do I know if a listing is accurate?</h3>
              <p className="text-gray-600">All our listings are verified through our inspection process. We visit each property and confirm all details including photos, amenities, and pricing before publishing.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Can I schedule a viewing?</h3>
              <p className="text-gray-600">Yes! You can schedule viewings directly through our platform. Simply click on a property and use the "Schedule Tour" button to book a convenient time.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Are there any hidden fees?</h3>
              <p className="text-gray-600">No hidden fees! All costs are clearly displayed on each listing. The rent price shown is exactly what you'll pay, plus any explicitly mentioned deposits or fees.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How do I apply for a property?</h3>
              <p className="text-gray-600">After viewing a property, you can submit an application through our secure online portal. You'll need to provide basic information, references, and income verification.</p>
            </div>
          </div>
        </div>
      </section>

      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ListingsPage;