import React from 'react';
import { Sun, Cloud, Droplets, Wind, Eye } from 'lucide-react';
import { formatTime, formatWeekday, formatDate, formatCondition } from '../utils/formatters';
import { getScoreColor, getConditionIcon } from '../utils/uiHelpers';
import { STRINGS, APP_CONFIG } from '../constants';
import './DayDetail.css';

export const DayDetail = ({ selectedDay }) => {
  if (!selectedDay) return null;

  return (
    <div className="day-detail">
      <div className="day-detail-header">
        <div className="day-detail-info">
          <div className="day-detail-day-label">
            {selectedDay.isToday
              ? STRINGS.date.today
              : formatWeekday(selectedDay.date, APP_CONFIG.locale.dateLocale, STRINGS.date.weekdayFormat)}
          </div>
          <div className="day-detail-date">
            {formatDate(selectedDay.date, APP_CONFIG.locale.dateLocale, STRINGS.date.dateFormat)}
          </div>
          <div className="day-detail-sunrise-time">
            <Sun className="day-detail-sunrise-icon" aria-label={STRINGS.a11y.sunIcon} />
            {formatTime(selectedDay.sunrise)}
          </div>
        </div>

        <div
          className="day-detail-score-container"
          style={{ '--score-color': getScoreColor(selectedDay.weather.score) }}>
          <div className="day-detail-score-value">
            {selectedDay.weather.score}
          </div>
          <div className="day-detail-score-label">
            {STRINGS.score.label}
          </div>
        </div>
      </div>

      <div className="day-detail-stats">
        <div className="day-detail-stat">
          {getConditionIcon(selectedDay.weather.condition)}
          <div>
            <div className="day-detail-stat-label">{STRINGS.weather.conditions}</div>
            <div className="day-detail-stat-value capitalize">
              {formatCondition(selectedDay.weather.condition)}
            </div>
          </div>
        </div>

        <div className="day-detail-stat">
          <Sun className="day-detail-stat-icon" />
          <div>
            <div className="day-detail-stat-label">{STRINGS.weather.temperature}</div>
            <div className="day-detail-stat-value">
              {selectedDay.weather.temperature}{STRINGS.units.temperature}
            </div>
          </div>
        </div>

        <div className="day-detail-stat">
          <Droplets className="day-detail-stat-icon" />
          <div>
            <div className="day-detail-stat-label">{STRINGS.weather.humidity}</div>
            <div className="day-detail-stat-value">
              {selectedDay.weather.humidity}{STRINGS.units.percentage}
            </div>
          </div>
        </div>

        <div className="day-detail-stat">
          <Wind className="day-detail-stat-icon" />
          <div>
            <div className="day-detail-stat-label">{STRINGS.weather.windSpeed}</div>
            <div className="day-detail-stat-value">
              {selectedDay.weather.windSpeed} {STRINGS.units.speed}
            </div>
          </div>
        </div>

        <div className="day-detail-stat">
          <Eye className="day-detail-stat-icon" />
          <div>
            <div className="day-detail-stat-label">{STRINGS.weather.visibility}</div>
            <div className="day-detail-stat-value">
              {selectedDay.weather.visibility} {STRINGS.units.distance}
            </div>
          </div>
        </div>

        <div className="day-detail-stat">
          <Cloud className="day-detail-stat-icon" />
          <div>
            <div className="day-detail-stat-label">{STRINGS.weather.cloudCover}</div>
            <div className="day-detail-stat-value">
              {selectedDay.weather.cloudCover}{STRINGS.units.percentage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
