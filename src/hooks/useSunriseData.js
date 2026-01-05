import { useState, useEffect } from 'react';
import { calculateSunrise } from '../utils/sunriseCalculator';
import { generateWeatherData } from '../services/weatherService';

export const useSunriseData = () => {
  const [sunriseDays, setSunriseDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const days = [];
    const today = new Date();

    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const sunrise = calculateSunrise(date);
      const weather = generateWeatherData(date);

      days.push({
        date,
        sunrise,
        weather,
        isToday: i === 0
      });
    }

    setSunriseDays(days);
    setSelectedDay(days[0]);
    setLoading(false);
  }, []);

  return {
    sunriseDays,
    selectedDay,
    setSelectedDay,
    loading
  };
};
