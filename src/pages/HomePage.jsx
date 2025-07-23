import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import PropertyCard from '../components/PropertyCard';
import PropertyModal from '../components/PropertyModal';
import { properties, testimonials } from '../data/mockData';
import { CheckCircle, Users, Award, Shield } from 'lucide-react';

const HomePage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProperties = properties.filter(prop => prop.featured);

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const renderPropertyCard = (property) => (
    <div className="px-2">
      <PropertyCard 
        property={property} 
        onViewDetails={handleViewDetails}
      />
    </div>
  );

  const renderTestimonial = (testimonial) => (
    <div className="px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 h-full">
        <div className="flex items-center mb-6">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
            <p className="text-gray-600 text-sm">{testimonial.location}</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`h-5 w-5 ${
                i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              ⭐
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Perfect Rental in India
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto">
            Discover verified rental properties across Indian cities with transparent pricing, detailed amenities, and honest reviews from real tenants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Browse Properties
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked premium rentals across Mumbai, Bangalore, Delhi NCR and other major Indian cities
            </p>
          </div>

          <Carousel
            items={featuredProperties}
            renderItem={renderPropertyCard}
            autoPlay={true}
            autoPlayInterval={6000}
            className="max-w-6xl mx-auto"
          />
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose RentFinder?</h2>
            <p className="text-xl text-gray-600">We make finding your perfect rental in India simple, safe, and stress-free</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Verified Listings</h3>
              <p className="text-gray-600">Every property across Indian cities is verified and inspected to ensure quality and accuracy</p>
            </div>

            <div className="text-center group">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <Users className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Real Reviews</h3>
              <p className="text-gray-600">Honest feedback from verified Indian tenants helps you make informed decisions</p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <Award className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Premium Service</h3>
              <p className="text-gray-600">Dedicated support team helps you throughout your rental journey across India</p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Shield className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure Process</h3>
              <p className="text-gray-600">Safe and secure application process with Aadhaar and identity verification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real experiences from satisfied renters</p>
          </div>

          <Carousel
            items={testimonials}
            renderItem={renderTestimonial}
            autoPlay={true}
            autoPlayInterval={8000}
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your New Home?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of satisfied renters who found their perfect place across India with RentFinder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Searching
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Property Modal */}
      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default HomePage;