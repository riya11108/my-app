import { useState, useEffect } from 'react';
import { searchProperties, transformZillowProperty } from '../services/api';
import { properties as mockProperties } from '../data/mockData';

export const useProperties = (searchParams = {}) => {
  const [properties, setProperties] = useState(mockProperties);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProperties = async (params = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await searchProperties(params);
      
      if (data.props && data.props.length > 0) {
        const transformedProperties = data.props.map(transformZillowProperty);
        setProperties(transformedProperties);
      } else {
        // Use mock data if no API results
        setProperties(mockProperties);
      }
    } catch (err) {
      setError('Failed to fetch properties');
      setProperties(mockProperties); // Fallback to mock data
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Object.keys(searchParams).length > 0) {
      fetchProperties(searchParams);
    }
  }, []);

  return {
    properties,
    loading,
    error,
    fetchProperties
  };
};