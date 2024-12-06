// Map weather codes to background images from Unsplash
export const getWeatherBackground = (weatherCode: number): string => {
  const images = {
    clear: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&q=80&w=1920',
    cloudy: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=1920',
    rain: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&q=80&w=1920',
    snow: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&q=80&w=1920',
    thunder: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&q=80&w=1920'
  };

  // Map weather codes to image types
  switch (true) {
    case weatherCode === 0:
      return images.clear;
    case weatherCode >= 1 && weatherCode <= 3:
      return images.cloudy;
    case weatherCode >= 61 && weatherCode <= 65:
      return images.rain;
    case weatherCode >= 71 && weatherCode <= 77:
      return images.snow;
    case weatherCode >= 95:
      return images.thunder;
    default:
      return images.cloudy;
  }
};