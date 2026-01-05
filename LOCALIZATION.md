# Localization & Configuration Guide

This document explains the string localization and configuration approach used in the Miami Sunrise Tracker application.

## Overview

All UI strings and application configuration have been centralized in the `src/constants/` directory for easy maintenance, reusability, and future internationalization (i18n) support.

## File Structure

```
src/constants/
├── index.js          # Central export point for clean imports
├── strings.js        # All UI text and labels
├── config.js         # Application configuration
└── location.js       # Location-specific constants (latitude/longitude)
```

## Usage

### Importing Constants

```javascript
// Import specific constants
import { STRINGS, APP_CONFIG } from '../constants';

// Use in components
<h1>{STRINGS.app.title}</h1>
<p>{STRINGS.weather.temperature}</p>
```

### String Constants (`strings.js`)

Contains all user-facing text organized by category:

- **app**: Application-level strings (title, subtitle, loading)
- **date**: Date and time format labels
- **forecast**: Forecast section labels
- **score**: Quality score labels
- **weather**: Weather-related labels (conditions, temperature, etc.)
- **units**: Measurement units (°F, %, mph, mi)
- **footer**: Footer content
- **a11y**: Accessibility labels for screen readers

### Application Config (`config.js`)

Contains configurable values:

- **location**: City-specific settings (name, coordinates, timezone)
- **forecast**: Forecast display settings
- **api**: API configuration (keys, URLs)
- **features**: Feature flags for toggling functionality
- **theme**: Theme-related constants

## Benefits

1. **Easy Maintenance**: Update all instances of a string in one place
2. **Consistency**: Ensures consistent terminology across the app
3. **Accessibility**: Centralized aria-labels and screen reader text
4. **Reusability**: Easy to adapt for other cities/locations
5. **Future i18n Ready**: Simple to migrate to a full i18n solution

## Future: Full Internationalization

To add multi-language support, you can migrate to a library like `react-i18next`:

### Step 1: Install i18next

```bash
npm install react-i18next i18next
```

### Step 2: Convert strings.js to JSON translation files

```
locales/
├── en/
│   └── translation.json
├── es/
│   └── translation.json
└── fr/
    └── translation.json
```

### Step 3: Initialize i18next

```javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: require('./locales/en/translation.json') },
    es: { translation: require('./locales/es/translation.json') },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});
```

### Step 4: Use in components

```javascript
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return <h1>{t('app.title')}</h1>;
};
```

## Adapting for Other Cities

To adapt this app for another city:

1. Update `constants/location.js` with new coordinates
2. Update `constants/config.js`:
   - Change `location.name` to the new city
   - Update `location.waterBodyName` if applicable
3. Update `constants/strings.js`:
   - Change `app.title` (e.g., "Seattle Sunrise")
   - Update `app.subtitle` with new description
   - Modify `footer.explanation` if needed

## Best Practices

1. **Always use constants** instead of hardcoded strings
2. **Add new strings** to `strings.js` when adding features
3. **Use semantic naming** that describes the string's purpose
4. **Group related strings** under logical categories
5. **Document** any new categories added to the constants

## Examples

### Adding a new feature

```javascript
// 1. Add strings to constants/strings.js
export const STRINGS = {
  // ... existing strings
  notifications: {
    title: 'Sunrise Alerts',
    enableButton: 'Enable Notifications',
    disableButton: 'Disable Notifications',
  },
};

// 2. Use in component
import { STRINGS } from '../constants';

const NotificationButton = () => (
  <button>{STRINGS.notifications.enableButton}</button>
);
```

### Changing units (e.g., to metric)

```javascript
// constants/strings.js
export const STRINGS = {
  units: {
    temperature: '°C',  // Changed from °F
    speed: 'km/h',      // Changed from mph
    distance: 'km',     // Changed from mi
    // ... rest remains same
  },
};

// Also update conversion logic in formatters/utils as needed
```

## Testing Localization

When testing:

1. Change strings in `constants/strings.js`
2. Verify all instances update across the app
3. Check that no hardcoded strings exist in components
4. Test with different languages (future)
5. Verify accessibility labels are working

## Questions?

For questions about localization or to suggest improvements, please open an issue in the project repository.
