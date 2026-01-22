import React, { memo, useCallback } from 'react';
import { Sun } from 'lucide-react';
import { formatTime, formatWeekday, formatDate, formatCondition } from '../utils/formatters';
import { getScoreColor, getConditionIcon } from '../utils/uiHelpers';
import { STRINGS, APP_CONFIG } from '../constants';
import './DayCard.css';

export const DayCard = memo(({ day, index, isSelected, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(day);
  }, [onClick, day]);

  return (
    <div
      className={`day-card ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      aria-label={STRINGS.a11y.selectDay}
      style={{
        animation: `slideIn 0.6s ease-out ${index * 0.05}s backwards`
      }}>
      {day.isToday && (
        <div className="day-card-today-badge">
          {STRINGS.date.today}
        </div>
      )}

      <div className="day-card-weekday">
        {formatWeekday(day.date, APP_CONFIG.locale.dateLocale, STRINGS.date.weekdayFormat)}
      </div>

      <div className="day-card-date">
        {formatDate(day.date, APP_CONFIG.locale.dateLocale, STRINGS.date.dateFormat)}
      </div>

      <div className="day-card-info-row">
        <div className="day-card-sunrise">
          <Sun className="day-card-sunrise-icon" aria-label={STRINGS.a11y.sunIcon} />
          {formatTime(day.sunrise)}
        </div>

        <div
          className="day-card-score-badge"
          style={{ '--score-color': getScoreColor(day.weather.score) }}>
          {day.weather.score}
        </div>
      </div>

      <div className="day-card-condition">
        {getConditionIcon(day.weather.condition)}
        <span className="day-card-condition-text">
          {formatCondition(day.weather.condition)}
        </span>
      </div>
    </div>
  );
});
