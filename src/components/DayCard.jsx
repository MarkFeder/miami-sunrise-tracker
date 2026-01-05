import React from 'react';
import { Sun } from 'lucide-react';
import { formatTime } from '../utils/formatters';
import { getScoreColor, getConditionIcon } from '../utils/uiHelpers';
import { STRINGS } from '../constants';
import './DayCard.css';

export const DayCard = ({ day, index, isSelected, onClick }) => {
  return (
    <div
      className={`day-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
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
        {day.date.toLocaleDateString('en-US', { weekday: STRINGS.date.weekdayFormat })}
      </div>

      <div className="day-card-date">
        {day.date.toLocaleDateString('en-US', STRINGS.date.dateFormat)}
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
          {day.weather.condition.replace('-', ' ')}
        </span>
      </div>
    </div>
  );
};
