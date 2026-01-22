import { formatTime, formatCondition, formatWeekday, formatDate } from './formatters';

describe('formatTime', () => {
  it('formats morning time correctly', () => {
    const sunrise = { hours: 6, minutes: 30 };
    expect(formatTime(sunrise)).toBe('6:30 AM');
  });

  it('formats afternoon time correctly', () => {
    const sunrise = { hours: 14, minutes: 45 };
    expect(formatTime(sunrise)).toBe('2:45 PM');
  });

  it('formats midnight correctly', () => {
    const sunrise = { hours: 0, minutes: 0 };
    expect(formatTime(sunrise)).toBe('12:00 AM');
  });

  it('formats noon correctly', () => {
    const sunrise = { hours: 12, minutes: 0 };
    expect(formatTime(sunrise)).toBe('12:00 PM');
  });

  it('pads single-digit minutes with zero', () => {
    const sunrise = { hours: 6, minutes: 5 };
    expect(formatTime(sunrise)).toBe('6:05 AM');
  });

  it('handles edge case of 11:59 AM', () => {
    const sunrise = { hours: 11, minutes: 59 };
    expect(formatTime(sunrise)).toBe('11:59 AM');
  });

  it('handles edge case of 12:01 PM', () => {
    const sunrise = { hours: 12, minutes: 1 };
    expect(formatTime(sunrise)).toBe('12:01 PM');
  });
});

describe('formatCondition', () => {
  it('replaces hyphen with space', () => {
    expect(formatCondition('partly-cloudy')).toBe('partly cloudy');
  });

  it('returns single word conditions unchanged', () => {
    expect(formatCondition('clear')).toBe('clear');
  });

  it('handles condition with multiple hyphens (only first replaced)', () => {
    expect(formatCondition('very-partly-cloudy')).toBe('very partly-cloudy');
  });

  it('returns empty string for empty input', () => {
    expect(formatCondition('')).toBe('');
  });
});

describe('formatWeekday', () => {
  it('formats weekday in long format by default', () => {
    const date = new Date('2024-06-21'); // Friday
    const result = formatWeekday(date);
    expect(result).toBe('Friday');
  });

  it('formats weekday in short format', () => {
    const date = new Date('2024-06-21'); // Friday
    const result = formatWeekday(date, 'en-US', 'short');
    expect(result).toBe('Fri');
  });

  it('formats weekday in narrow format', () => {
    const date = new Date('2024-06-21'); // Friday
    const result = formatWeekday(date, 'en-US', 'narrow');
    expect(result).toBe('F');
  });

  it('uses en-US locale by default', () => {
    const date = new Date('2024-06-21');
    const result = formatWeekday(date);
    expect(result).toBe('Friday');
  });
});

describe('formatDate', () => {
  it('formats date with month and day by default', () => {
    const date = new Date('2024-06-21');
    const result = formatDate(date);
    expect(result).toBe('June 21');
  });

  it('formats date with custom options', () => {
    const date = new Date('2024-06-21');
    const result = formatDate(date, 'en-US', { month: 'short', day: 'numeric' });
    expect(result).toBe('Jun 21');
  });

  it('uses en-US locale by default', () => {
    const date = new Date('2024-12-25');
    const result = formatDate(date);
    expect(result).toBe('December 25');
  });

  it('formats date with year when specified', () => {
    const date = new Date('2024-06-21');
    const result = formatDate(date, 'en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    expect(result).toBe('June 21, 2024');
  });
});
