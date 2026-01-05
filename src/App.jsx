import React from 'react';
import { Calendar } from 'lucide-react';
import { useSunriseData } from './hooks/useSunriseData';
import { Header } from './components/Header';
import { DayDetail } from './components/DayDetail';
import { DayCard } from './components/DayCard';
import { Footer } from './components/Footer';
import { STRINGS } from './constants';
import './components/App.css';

const MiamiSunriseTracker = () => {
  const { sunriseDays, selectedDay, setSelectedDay, loading } = useSunriseData();

  if (loading) {
    return (
      <div className="app-loading">
        <div className="app-loading-text">{STRINGS.app.loading}</div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="app-background-gradient" />

      <div className="app-content">
        <Header />

        <DayDetail selectedDay={selectedDay} />

        <div className="app-forecast-section">
          <h2 className="app-forecast-title">
            <Calendar className="app-forecast-title-icon" aria-label={STRINGS.a11y.calendarIcon} />
            {STRINGS.forecast.title}
          </h2>

          <div className="app-forecast-grid">
            {sunriseDays.map((day, index) => (
              <DayCard
                key={index}
                day={day}
                index={index}
                isSelected={selectedDay?.date.getTime() === day.date.getTime()}
                onClick={() => setSelectedDay(day)}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default MiamiSunriseTracker;
