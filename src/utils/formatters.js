export const formatTime = (sunrise) => {
  const period = sunrise.hours >= 12 ? 'PM' : 'AM';
  const displayHours = sunrise.hours % 12 || 12;
  return `${displayHours}:${sunrise.minutes.toString().padStart(2, '0')} ${period}`;
};

/**
 * Format a condition string by replacing hyphens with spaces
 * @param {string} condition - The condition string (e.g., 'partly-cloudy')
 * @returns {string} Formatted condition (e.g., 'partly cloudy')
 */
export const formatCondition = (condition) => {
  return condition.replace('-', ' ');
};

/**
 * Format a date as a weekday string
 * @param {Date} date - The date to format
 * @param {string} locale - The locale to use (default: 'en-US')
 * @param {string} format - The weekday format ('long', 'short', 'narrow')
 * @returns {string} Formatted weekday
 */
export const formatWeekday = (date, locale = 'en-US', format = 'long') => {
  return date.toLocaleDateString(locale, { weekday: format });
};

/**
 * Format a date with month and day
 * @param {Date} date - The date to format
 * @param {string} locale - The locale to use (default: 'en-US')
 * @param {object} options - Format options (default: { month: 'long', day: 'numeric' })
 * @returns {string} Formatted date
 */
export const formatDate = (date, locale = 'en-US', options = { month: 'long', day: 'numeric' }) => {
  return date.toLocaleDateString(locale, options);
};
