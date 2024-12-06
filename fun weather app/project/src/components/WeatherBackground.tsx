import React from 'react';
import { getWeatherBackground } from '../utils/weatherBackgrounds';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  weatherCode: number;
}

export const WeatherBackground = ({ weatherCode }: Props) => {
  const imageSource = getWeatherBackground(weatherCode);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={imageSource}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${imageSource})`,
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};