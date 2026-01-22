import { useState, useEffect, useCallback } from 'react';
import { calculateSunrise } from '../utils/sunriseCalculator';
import { generateWeatherData } from '../services/weatherService';
import { APP_CONFIG } from '../constants';

export const useSunriseData = () => {
  const [sunriseDays, setSunriseDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);

    try {
      const days = [];
      const today = new Date();

      for (let i = 0; i < APP_CONFIG.forecast.daysToShow; i++) {
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
    } catch (err) {
      setError(err.message || 'Failed to load sunrise data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    sunriseDays,
    selectedDay,
    setSelectedDay,
    loading,
    error,
    refetch: fetchData
  };
};
