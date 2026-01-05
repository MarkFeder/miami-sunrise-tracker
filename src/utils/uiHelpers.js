import React from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';

export const getScoreColor = (score) => {
  if (score >= 80) return '#FF6B35';
  if (score >= 60) return '#FFB84D';
  if (score >= 40) return '#F4A261';
  return '#A8DADC';
};

export const getConditionIcon = (condition) => {
  switch (condition) {
    case 'clear': return <Sun className="w-5 h-5" />;
    case 'partly-cloudy': return <Cloud className="w-5 h-5" />;
    case 'cloudy': return <Cloud className="w-5 h-5" />;
    case 'rain': return <CloudRain className="w-5 h-5" />;
    default: return <Sun className="w-5 h-5" />;
  }
};
