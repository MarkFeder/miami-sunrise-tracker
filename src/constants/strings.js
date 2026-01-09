/**
 * UI strings and labels for the application
 * Centralized for easy maintenance and future i18n support
 */

export const STRINGS = {
  // App-level strings
  app: {
    title: 'Miami Sunrise',
    subtitle: 'Track the perfect mornings to witness the sun rise over Biscayne Bay',
    loading: 'Loading...',
  },

  // Time and date labels
  date: {
    today: 'Today',
    weekdayFormat: 'long', // used in toLocaleDateString options
    dateFormat: { month: 'long', day: 'numeric' },
  },

  // Forecast section
  forecast: {
    title: '30-Day Forecast',
    dayCount: 30,
  },

  // Score and quality
  score: {
    label: 'Quality Score',
  },

  // Weather conditions labels
  weather: {
    conditions: 'Conditions',
    temperature: 'Temperature',
    humidity: 'Humidity',
    windSpeed: 'Wind Speed',
    visibility: 'Visibility',
    cloudCover: 'Cloud Cover',
  },

  // Units
  units: {
    temperature: '°F',
    percentage: '%',
    speed: 'mph',
    distance: 'mi',
  },

  // Footer content
  footer: {
    explanation:
      "The quality score considers visibility, cloud cover, and weather conditions to help you find the perfect morning to catch Miami's spectacular sunrise. Higher scores indicate clearer skies and better viewing conditions.",
  },

  // Accessibility labels (for screen readers)
  a11y: {
    sunIcon: 'Sun icon',
    calendarIcon: 'Calendar icon',
    selectDay: 'Select this day to view details',
  },
};

export default STRINGS;
