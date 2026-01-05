export const formatTime = (sunrise) => {
  const period = sunrise.hours >= 12 ? 'PM' : 'AM';
  const displayHours = sunrise.hours % 12 || 12;
  return `${displayHours}:${sunrise.minutes.toString().padStart(2, '0')} ${period}`;
};
