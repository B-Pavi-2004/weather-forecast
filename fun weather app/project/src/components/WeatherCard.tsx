import { motion } from 'framer-motion';
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning } from 'lucide-react';
import { getFunnyMessage, formatTemperature, getWeatherInfo, getWeatherPrediction } from '../utils/weatherUtils';

interface Props {
  temperature: number;
  weatherCode: number;
  time: string;
  windspeed: number;
}

export const WeatherCard = ({ temperature, weatherCode, time, windspeed }: Props) => {
  const weather = getWeatherInfo(weatherCode);

  const getWeatherIcon = () => {
    switch (true) {
      case weatherCode === 0:
        return <Sun className="w-16 h-16 text-yellow-400" />;
      case weatherCode >= 61 && weatherCode <= 65:
        return <CloudRain className="w-16 h-16 text-blue-400" />;
      case weatherCode >= 71 && weatherCode <= 77:
        return <CloudSnow className="w-16 h-16 text-blue-200" />;
      case weatherCode >= 95:
        return <CloudLightning className="w-16 h-16 text-purple-500" />;
      default:
        return <Cloud className="w-16 h-16 text-gray-400" />;
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto"
    >
      <div className="flex items-center justify-between mb-4">
        <motion.div
          animate={{ rotate: weatherCode === 0 ? 360 : 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {getWeatherIcon()}
        </motion.div>
        <div className="text-right">
          <div className="text-4xl font-bold">{formatTemperature(temperature)}°C</div>
          <div className="text-sm text-gray-500">
            Wind: {Math.round(windspeed)} km/h
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          {weather.icon} {weather.label}
        </h2>
        <p className="text-gray-600">
          {new Date(time).toLocaleDateString('en-US', { 
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
          })}
        </p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg font-medium text-indigo-600 mt-4"
      >
        {getFunnyMessage(weatherCode, temperature)}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 p-4 bg-indigo-50 rounded-lg"
      >
        <h3 className="text-lg font-semibold text-indigo-800 mb-2">Today's Forecast</h3>
        <p className="text-indigo-600">{getWeatherPrediction(weatherCode)}</p>
      </motion.div>
    </motion.div>
  );
};