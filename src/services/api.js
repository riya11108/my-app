import axios from 'axios';

const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const RAPIDAPI_HOST = 'zillow-com1.p.rapidapi.com';

const api = axios.create({
  baseURL: 'https://zillow-com1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': RAPIDAPI_KEY,
    'X-RapidAPI-Host': RAPIDAPI_HOST
  }
});

export const searchProperties = async (searchParams) => {
  // Check if API key is available
  if (!RAPIDAPI_KEY || RAPIDAPI_KEY === 'your-rapidapi-key-here') {
    console.warn('RapidAPI key not configured. Using mock data instead.');
    return { props: [] };
  }

  try {
    const { location, minPrice, maxPrice, propertyType, bedrooms } = searchParams;
    
    // Search for properties using Zillow API (adapted for Indian searches)
    const response = await api.get('/propertyExtendedSearch', {
      params: {
        location: location || 'Mumbai, India',
        status_type: 'ForRent',
        home_type: propertyType || 'Houses,Condos,Apartments,Townhomes',
        minPrice: minPrice || undefined,
        maxPrice: maxPrice || undefined,
        beds_min: bedrooms || undefined,
        sort: 'Newest'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    // Fallback to mock data if API fails
    return { props: [] };
  }
};

export const getPropertyDetails = async (zpid) => {
  try {
    const response = await api.get('/property', {
      params: { zpid }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching property details:', error);
    return null;
  }
};

export const getPropertyImages = async (zpid) => {
  try {
    const response = await api.get('/images', {
      params: { zpid }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching property images:', error);
    return { images: [] };
  }
};

// Utility function to transform Zillow API data to our format
export const transformZillowProperty = (zillowProperty) => {
  return {
    id: zillowProperty.zpid,
    title: zillowProperty.address?.streetAddress || 'Property',
    price: Math.round((zillowProperty.price || zillowProperty.rentZestimate || 0) * 75), // Convert USD to INR approximately
    location: `${zillowProperty.address?.city || ''}, ${zillowProperty.address?.state || ''}`,
    type: zillowProperty.homeType?.toLowerCase() || 'apartment',
    bedrooms: zillowProperty.bedrooms || 1,
    bathrooms: zillowProperty.bathrooms || 1,
    sqft: zillowProperty.livingArea || 1000,
    images: zillowProperty.photos?.map(photo => photo.url) || [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    ],
    amenities: ['wifi', 'ac', 'parking', 'security'],
    rating: 4.5,
    reviews: Math.floor(Math.random() * 50) + 5,
    description: zillowProperty.description || 'Beautiful property available for rent.',
    featured: Math.random() > 0.7
  };
};