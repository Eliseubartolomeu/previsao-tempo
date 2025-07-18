import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export function useForecast(city: string) {
  return useQuery({
    queryKey: ['forecast', city],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=pt`
      );

      const grouped: Record<string, any[]> = {};
      for (const forecast of res.data.list) {
        const dateKey = new Date(forecast.dt * 1000).toISOString().split('T')[0];
        if (!grouped[dateKey]) grouped[dateKey] = [];
        grouped[dateKey].push(forecast);
      }

      return Object.values(grouped)
        .slice(1, 6)
        .map((day: any[]) =>
          day.reduce((closest, current) => {
            const h1 = new Date(current.dt * 1000).getHours();
            const h2 = new Date(closest.dt * 1000).getHours();
            return Math.abs(h1 - 12) < Math.abs(h2 - 12) ? current : closest;
          })
        );
    },
    enabled: !!city,
  });
}
