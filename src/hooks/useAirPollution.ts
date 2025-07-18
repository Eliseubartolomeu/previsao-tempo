import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export function useAirPollution(lat: number, lon: number) {
  return useQuery({
    queryKey: ['air', lat, lon],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      return res.data;
    },
    enabled: !!lat && !!lon,
  });
}
