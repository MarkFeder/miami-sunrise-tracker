import React from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';

export const getScoreColor = (score) => {
  if (score >= 80) return '#FF6B35';
  if (score >= 60) return '#FFB84D';
  if (score >= 40) return '#F4A261';
  return '#A8DADC';
};

export const getConditionIcon = (condition) => {
  const iconProps = { style: { width: '20px', height: '20px' } };

  switch (condition) {
    case 'clear': return <Sun {...iconProps} />;
    case 'partly-cloudy': return <Cloud {...iconProps} />;
    case 'cloudy': return <Cloud {...iconProps} />;
    case 'rain': return <CloudRain {...iconProps} />;
    default: return <Sun {...iconProps} />;
  }
};
