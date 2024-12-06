import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CloudRain, MapPin } from 'lucide-react';
import { WeatherCard } from './components/WeatherCard';
import { WeatherBackground } from './components/WeatherBackground';
import { SearchBar } from './components/SearchBar';
import { getWeatherData, searchLocation } from './utils/api';
import { WeatherData } from './types/weather';
import { useGeolocation } from './hooks/useGeolocation';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [locationName, setLocationName] = useState<string>('');
  const { latitude, longitude, error: geoError, loading: geoLoading } = useGeolocation();

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const location = await searchLocation(query);
      if (location) {
        const data = await getWeatherData(location.latitude, location.longitude);
        setWeatherData(data);
        setLocationName(location.name);
      } else {
        setError('Location not found. Please try another search.');
      }
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const data = await getWeatherData(lat, lon);
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch weather data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (latitude && longitude) {
      fetchWeather(latitude, longitude);
    } else if (!geoLoading && geoError) {
      fetchWeather(51.51, -0.13);
      setError('Using default location (London). ' + geoError);
    }
  }, [latitude, longitude, geoError, geoLoading]);

  return (
    <>
      {weatherData && (
        <WeatherBackground weatherCode={weatherData.current_weather.weathercode} />
      )}
      <div className="min-h-screen relative z-10">
        <div className="max-w-6xl mx-auto p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-white">
              Fun Weather Forecast
            </h1>
            <SearchBar onSearch={handleSearch} />
            {locationName && (
              <p className="text-white text-xl">
                Weather for {locationName}
              </p>
            )}
            {latitude && longitude && !locationName && (
              <p className="flex items-center justify-center gap-2 text-white">
                <MapPin className="w-4 h-4" />
                Your Location: {latitude.toFixed(2)}°, {longitude.toFixed(2)}°
              </p>
            )}
          </div>

          {(loading || geoLoading) && (
            <div className="flex justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <CloudRain className="w-12 h-12 text-white" />
              </motion.div>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          {weatherData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <WeatherCard
                temperature={weatherData.current_weather.temperature}
                weatherCode={weatherData.current_weather.weathercode}
                time={weatherData.current_weather.time}
                windspeed={weatherData.current_weather.windspeed}
              />
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;