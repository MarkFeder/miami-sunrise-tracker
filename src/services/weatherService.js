export const generateWeatherData = (date) => {
  const seed = date.getDate() + date.getMonth();
  const conditions = ['clear', 'partly-cloudy', 'cloudy', 'rain'];
  const condition = conditions[seed % 4];

  return {
    condition,
    temperature: 72 + (seed % 10),
    humidity: 60 + (seed % 30),
    windSpeed: 5 + (seed % 15),
    visibility: condition === 'clear' ? 10 : condition === 'partly-cloudy' ? 8 : condition === 'cloudy' ? 5 : 3,
    cloudCover: condition === 'clear' ? 10 : condition === 'partly-cloudy' ? 40 : condition === 'cloudy' ? 80 : 90,
    score: condition === 'clear' ? 95 : condition === 'partly-cloudy' ? 75 : condition === 'cloudy' ? 40 : 20
  };
};
