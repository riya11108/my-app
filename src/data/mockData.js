// Mock data for properties, testimonials, blog posts, and team members - Indian System

export const properties = [
    {
      id: 1,
      title: "Modern 2BHK Apartment in Bandra",
      price: 45000,
      location: "Bandra West, Mumbai, Maharashtra",
      type: "apartment",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 850,
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg"
      ],
      amenities: ["wifi", "ac", "parking", "gym", "security", "lift"],
      rating: 4.8,
      reviews: 24,
      description: "Beautiful modern 2BHK apartment in prime Bandra location with all amenities and close to railway station.",
      featured: true
    },
    {
      id: 2,
      title: "Cozy 1BHK in Koramangala",
      price: 25000,
      location: "Koramangala 4th Block, Bangalore, Karnataka",
      type: "apartment",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 600,
      images: [
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      ],
      amenities: ["wifi", "ac", "parking", "security"],
      rating: 4.5,
      reviews: 18,
      description: "Cozy 1BHK apartment in IT hub Koramangala, perfect for working professionals.",
      featured: true
    },
    {
      id: 3,
      title: "Spacious 3BHK Villa in Gurgaon",
      price: 65000,
      location: "Sector 56, Gurgaon, Haryana",
      type: "villa",
      bedrooms: 3,
      bathrooms: 3,
      sqft: 1800,
      images: [
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
      ],
      amenities: ["wifi", "ac", "parking", "garden", "security", "clubhouse"],
      rating: 4.9,
      reviews: 32,
      description: "Luxurious 3BHK villa in premium gated community with excellent connectivity to Cyber City.",
      featured: false
    },
    {
      id: 4,
      title: "Premium 4BHK Penthouse in Powai",
      price: 85000,
      location: "Hiranandani Gardens, Powai, Mumbai, Maharashtra",
      type: "penthouse",
      bedrooms: 4,
      bathrooms: 4,
      sqft: 2200,
      images: [
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      ],
      amenities: ["wifi", "ac", "parking", "gym", "pool", "security", "balcony", "clubhouse"],
      rating: 4.7,
      reviews: 15,
      description: "Stunning penthouse with lake view in premium Hiranandani Gardens complex.",
      featured: true
    },
    {
      id: 5,
      title: "2BHK Independent House in Indiranagar",
      price: 35000,
      location: "Indiranagar, Bangalore, Karnataka",
      type: "house",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      images: [
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
        "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg"
      ],
      amenities: ["wifi", "ac", "parking", "garden", "security"],
      rating: 4.6,
      reviews: 28,
      description: "Beautiful independent house in vibrant Indiranagar with easy access to pubs and restaurants.",
      featured: false
    },
    {
      id: 6,
      title: "Modern 1BHK Studio in Cyber City",
      price: 28000,
      location: "DLF Cyber City, Gurgaon, Haryana",
      type: "studio",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 500,
      images: [
        "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg",
        "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
      ],
      amenities: ["wifi", "ac", "parking", "gym", "security"],
      rating: 4.4,
      reviews: 21,
      description: "Modern studio apartment perfect for IT professionals working in Cyber City.",
      featured: false
    },
    {
      id: 7,
      title: "3BHK Flat in Andheri East",
      price: 55000,
      location: "Andheri East, Mumbai, Maharashtra",
      type: "apartment",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1100,
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg"
      ],
      amenities: ["wifi", "ac", "parking", "gym", "security", "lift"],
      rating: 4.3,
      reviews: 19,
      description: "Spacious 3BHK apartment near metro station with easy access to airport and business districts.",
      featured: false
    },
    {
      id: 8,
      title: "2BHK Service Apartment in Whitefield",
      price: 32000,
      location: "Whitefield, Bangalore, Karnataka",
      type: "apartment",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 900,
      images: [
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      ],
      amenities: ["wifi", "ac", "parking", "gym", "pool", "security", "housekeeping"],
      rating: 4.5,
      reviews: 22,
      description: "Fully furnished service apartment in IT corridor with housekeeping and maintenance included.",
      featured: true
    }
  ];
  
  export const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Found my perfect 2BHK in Bandra within a week! The platform made searching so easy with great filters for Indian cities.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "Excellent service and verified listings in Koramangala. Saved so much time compared to other platforms.",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
    },
    {
      id: 3,
      name: "Sneha Patel",
      location: "Gurgaon, Haryana",
      rating: 4,
      text: "Great user experience and helpful customer support. Found a beautiful villa in Sector 56!",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
    }
  ];
  
  export const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Renting in Mumbai",
      category: "Renting Tips",
      author: "Anjali Mehta",
      date: "2024-01-15",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg",
      excerpt: "Navigate Mumbai's rental market with confidence using these proven strategies and insider tips for finding the perfect home."
    },
    {
      id: 2,
      title: "Bangalore Neighborhood Guide: IT Corridors vs Central Areas",
      category: "Location Guides",
      author: "Vikram Singh",
      date: "2024-01-10",
      image: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg",
      excerpt: "Discover the unique character and amenities of Bangalore's most popular neighborhoods for IT professionals."
    },
    {
      id: 3,
      title: "Understanding Rental Agreements in India",
      category: "Renting Tips",
      author: "Kavya Reddy",
      date: "2024-01-08",
      image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
      excerpt: "Learn about Indian rental laws, security deposits, and what to look for in lease agreements."
    },
    {
      id: 4,
      title: "Landlord's Guide to Property Management in India",
      category: "Landlord Advice",
      author: "Arjun Gupta",
      date: "2024-01-05",
      image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg",
      excerpt: "Best practices for managing rental properties in Indian cities and maintaining good tenant relationships."
    },
    {
      id: 5,
      title: "Gurgaon vs Noida: Which is Better for Renters?",
      category: "Location Guides",
      author: "Neha Agarwal",
      date: "2024-01-03",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg",
      excerpt: "Compare the pros and cons of renting in Gurgaon versus Noida for working professionals."
    },
    {
      id: 6,
      title: "Monsoon-Ready Homes: What to Look For",
      category: "Renting Tips",
      author: "Rohit Jain",
      date: "2024-01-01",
      image: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg",
      excerpt: "Essential checklist for renting monsoon-proof homes in Indian cities prone to heavy rainfall."
    }
  ];
  
  export const teamMembers = [
    {
      id: 1,
      name: "Arjun Malhotra",
      position: "CEO & Founder",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      bio: "Passionate about making rental housing accessible and transparent for everyone across Indian cities."
    },
    {
      id: 2,
      name: "Priyanka Sharma",
      position: "Head of Product",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      bio: "Design-focused leader with 10+ years in Indian real estate technology and user experience."
    },
    {
      id: 3,
      name: "Karthik Krishnan",
      position: "Lead Engineer",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      bio: "Full-stack developer committed to building scalable rental solutions for Indian markets."
    },
    {
      id: 4,
      name: "Deepika Nair",
      position: "Customer Success Manager",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      bio: "Dedicated to ensuring every user has an exceptional rental search experience across India."
    }
  ];