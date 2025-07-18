import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export function useWeather(city: string) {
  return useQuery({
    queryKey: ['weather', city],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt`
      );
      return res.data;
    },
    enabled: !!city,
  });
}
