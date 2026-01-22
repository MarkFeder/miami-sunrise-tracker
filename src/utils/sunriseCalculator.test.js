import { calculateSunrise } from './sunriseCalculator';

describe('calculateSunrise', () => {
  it('returns an object with hours and minutes', () => {
    const date = new Date('2024-06-21');
    const result = calculateSunrise(date);

    expect(result).toHaveProperty('hours');
    expect(result).toHaveProperty('minutes');
    expect(typeof result.hours).toBe('number');
    expect(typeof result.minutes).toBe('number');
  });

  it('returns valid hour range (0-23)', () => {
    const date = new Date('2024-06-21');
    const result = calculateSunrise(date);

    expect(result.hours).toBeGreaterThanOrEqual(0);
    expect(result.hours).toBeLessThanOrEqual(23);
  });

  it('returns valid minute range (0-59)', () => {
    const date = new Date('2024-06-21');
    const result = calculateSunrise(date);

    expect(result.minutes).toBeGreaterThanOrEqual(0);
    expect(result.minutes).toBeLessThanOrEqual(59);
  });

  it('calculates earlier sunrise in summer (June) than winter (December) for Miami', () => {
    const summerDate = new Date('2024-06-21'); // Summer solstice
    const winterDate = new Date('2024-12-21'); // Winter solstice

    const summerSunrise = calculateSunrise(summerDate);
    const winterSunrise = calculateSunrise(winterDate);

    const summerMinutes = summerSunrise.hours * 60 + summerSunrise.minutes;
    const winterMinutes = winterSunrise.hours * 60 + winterSunrise.minutes;

    // In Miami, summer sunrise is earlier than winter sunrise
    expect(summerMinutes).toBeLessThan(winterMinutes);
  });

  it('calculates sunrise around expected time for Miami (5-7 AM range)', () => {
    const date = new Date('2024-06-21');
    const result = calculateSunrise(date);

    // Miami summer sunrise is typically between 6:30-6:35 AM
    expect(result.hours).toBeGreaterThanOrEqual(5);
    expect(result.hours).toBeLessThanOrEqual(7);
  });

  it('produces consistent results for the same date', () => {
    const date1 = new Date('2024-06-21');
    const date2 = new Date('2024-06-21');

    const result1 = calculateSunrise(date1);
    const result2 = calculateSunrise(date2);

    expect(result1.hours).toBe(result2.hours);
    expect(result1.minutes).toBe(result2.minutes);
  });

  it('handles different dates throughout the year', () => {
    const dates = [
      new Date('2024-01-15'),
      new Date('2024-03-20'),
      new Date('2024-06-21'),
      new Date('2024-09-22'),
      new Date('2024-12-21'),
    ];

    dates.forEach((date) => {
      const result = calculateSunrise(date);
      expect(result.hours).toBeGreaterThanOrEqual(0);
      expect(result.hours).toBeLessThanOrEqual(23);
      expect(result.minutes).toBeGreaterThanOrEqual(0);
      expect(result.minutes).toBeLessThanOrEqual(59);
    });
  });

  it('handles leap year dates', () => {
    const leapDate = new Date('2024-02-29');
    const result = calculateSunrise(leapDate);

    expect(result).toHaveProperty('hours');
    expect(result).toHaveProperty('minutes');
  });
});
