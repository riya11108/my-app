import React from 'react';
import Carousel from '../components/Carousel';
import { teamMembers } from '../data/mockData';
import { Target, Heart, Users, Zap } from 'lucide-react';

const AboutPage = () => {
  const renderTeamMember = (member) => (
    <div className="px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center h-full">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
        />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-4">{member.position}</p>
        <p className="text-gray-600 leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-green-900 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Revolutionizing Rental Housing in India
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
              We believe everyone in India deserves access to quality rental housing with transparent pricing, verified listings, and honest reviews.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, SmartLease was born out of frustration with the traditional Indian rental market. 
                  Our founders experienced firsthand the challenges of finding quality rental housing in cities like 
                  Mumbai, Bangalore, and Delhi – from misleading listings to excessive broker fees and unresponsive landlords.
                </p>
                <p>
                  We set out to create a platform that puts transparency first, where renters can trust the 
                  information they see and landlords can connect with quality tenants across Indian cities. Today, 
                  we've helped over 50,000 renters find their perfect homes from Mumbai to Bangalore.
                </p>
                <p>
                  Our platform combines cutting-edge technology with human expertise to verify listings, 
                  facilitate connections, and ensure a smooth rental experience tailored for the Indian market.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg" 
                alt="Our story"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-green-600 opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do, from product development to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Transparency</h3>
              <p className="text-gray-600">
                We believe in complete honesty about pricing, property conditions, and the Indian rental process including security deposits and broker fees.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Empathy</h3>
              <p className="text-gray-600">
                We understand the unique challenges of finding a home in Indian cities and strive to make the process as smooth as possible.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Community</h3>
              <p className="text-gray-600">
                We foster strong relationships between renters, landlords, and local communities across Indian cities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our platform with new features and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-2xl text-green-100 leading-relaxed">
            "To make quality rental housing accessible to everyone across India by creating a transparent, 
            trustworthy platform that connects renters with verified properties and responsible landlords in major Indian cities."
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate Indian professionals dedicated to transforming the rental experience across India
            </p>
          </div>

          <Carousel
            items={teamMembers}
            renderItem={renderTeamMember}
            autoPlay={true}
            autoPlayInterval={7000}
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Renters</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">10K+</div>
              <div className="text-gray-600">Verified Properties</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-green-100 mb-8">
            Whether you're looking for a rental in Mumbai, Bangalore, Delhi NCR or want to list your property, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Find a Rental
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              List Your Property
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;