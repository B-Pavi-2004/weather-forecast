import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { WeatherData } from '../types/weather';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  weatherData: WeatherData;
}

export const WeatherChart = ({ weatherData }: Props) => {
  const labels = weatherData.consolidated_weather.map((day) => 
    new Date(day.applicable_date).toLocaleDateString('en-US', { weekday: 'short' })
  );

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: weatherData.consolidated_weather.map((day) => day.the_temp),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Min Temperature (°C)',
        data: weatherData.consolidated_weather.map((day) => day.min_temp),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Max Temperature (°C)',
        data: weatherData.consolidated_weather.map((day) => day.max_temp),
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Temperature Forecast',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <Line options={options} data={data} />
    </div>
  );
};