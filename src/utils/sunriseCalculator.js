import { MIAMI_LAT, MIAMI_LON, APP_CONFIG } from '../constants';

export const calculateSunrise = (date) => {
  const n = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
  const lng = MIAMI_LON;
  const lat = MIAMI_LAT;

  const lngHour = lng / 15;
  const t = n + ((6 - lngHour) / 24);
  const M = (0.9856 * t) - 3.289;
  const L = M + (1.916 * Math.sin(M * Math.PI / 180)) + (0.020 * Math.sin(2 * M * Math.PI / 180)) + 282.634;
  const RA = Math.atan(0.91764 * Math.tan(L * Math.PI / 180)) * 180 / Math.PI;
  const Lquadrant = Math.floor(L / 90) * 90;
  const RAquadrant = Math.floor(RA / 90) * 90;
  const RA_adj = RA + (Lquadrant - RAquadrant);
  const RA_hours = RA_adj / 15;
  const sinDec = 0.39782 * Math.sin(L * Math.PI / 180);
  const cosDec = Math.cos(Math.asin(sinDec));
  const cosH = (Math.cos(90.833 * Math.PI / 180) - (sinDec * Math.sin(lat * Math.PI / 180))) / (cosDec * Math.cos(lat * Math.PI / 180));

  const H = 360 - (Math.acos(cosH) * 180 / Math.PI);
  const H_hours = H / 15;
  const T = H_hours + RA_hours - (0.06571 * t) - 6.622;
  const UT = T - lngHour;
  const localT = (UT + 24) % 24;

  // Apply timezone offset from configuration
  const localTime = (localT + APP_CONFIG.location.timezoneOffset + 24) % 24;
  const hours = Math.floor(localTime);
  const minutes = Math.floor((localTime - hours) * 60);

  return { hours, minutes };
};
