import axios from 'axios';
import { WeatherData } from '../types/weather';

export const searchLocation = async (query: string) => {
  try {
    const response = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`
    );
    return response.data.results?.[0] || null;
  } catch (error) {
    console.error('Error searching location:', error);
    throw new Error('Failed to search location');
  }
};

export const getWeatherData = async (latitude: number, longitude: number): Promise<WeatherData> => {
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  return response.data;
};