/**
 * Application configuration
 * These values can be overridden by environment variables or build-time configuration
 */

import { MIAMI_LAT, MIAMI_LON } from './location';

export const APP_CONFIG = {
  // Location configuration
  location: {
    name: 'Miami',
    latitude: MIAMI_LAT,
    longitude: MIAMI_LON,
    timezone: 'America/New_York',
    waterBodyName: 'Biscayne Bay',
  },

  // Forecast settings
  forecast: {
    daysToShow: 14,
    defaultSelectedDay: 0, // 0 = today
  },

  // API configuration
  api: {
    weatherApiKey: process.env.REACT_APP_WEATHER_API_KEY || '',
    weatherApiBaseUrl: 'https://api.openweathermap.org/data/2.5',
  },

  // Feature flags
  features: {
    enableDarkMode: false,
    enableNotifications: false,
    enableLocationChange: false, // Future feature: allow users to change location
  },

  // Theming (could be extended for multiple themes)
  theme: {
    primaryColor: '#FFD93D',
    accentColor: '#FF6B35',
  },
};

export default APP_CONFIG;
