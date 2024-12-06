export interface WeatherData {
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
  };
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface WeatherCode {
  code: number;
  label: string;
  icon: string;
}