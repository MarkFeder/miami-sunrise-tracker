# Miami Sunrise Tracker

A beautiful, maintainable web application to track the best days to watch sunrise in Miami, Florida. Built with modern React patterns, separated concerns, and ready for internationalization.

## Features

- 🌅 **14-day sunrise forecast** with accurate astronomical calculations
- 🌤️ **Weather-based quality scoring** to identify the best viewing days
- 📊 **Detailed weather information** including temperature, humidity, wind, and visibility
- 🎨 **Beautiful coastal-themed design** with smooth animations
- 📱 **Responsive layout** that works on all devices
- 🌐 **Localized strings** - centralized text management ready for i18n
- 🎨 **Separated CSS** - clean component-specific stylesheets
- ⚙️ **Configurable** - easy to adapt for other cities and locations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd miami-sunrise-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

## How It Works

### Sunrise Calculations
The app uses astronomical algorithms to calculate precise sunrise times for Miami's coordinates (25.7617°N, 80.1918°W), accounting for:
- Day of year
- Latitude/longitude
- Solar declination
- Hour angle

### Quality Scoring
Each day receives a score (0-100) based on:
- **Weather conditions** (clear, partly cloudy, cloudy, rain)
- **Visibility** (miles)
- **Cloud cover** (percentage)

Higher scores indicate better sunrise viewing conditions.

## Technologies Used

- **React 18** - UI framework
- **Lucide React** - Icon library
- **Create React App** - Build tooling
- **CSS Modules approach** - Component-specific stylesheets
- **Centralized constants** - String localization and configuration management

## Project Structure

```
miami-sunrise-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/           # React components with co-located CSS
│   │   ├── App.css          # Main app styles
│   │   ├── DayCard.jsx      # Individual day forecast card
│   │   ├── DayCard.css      # DayCard styles
│   │   ├── DayDetail.jsx    # Detailed day view
│   │   ├── DayDetail.css    # DayDetail styles
│   │   ├── Header.jsx       # App header
│   │   ├── Header.css       # Header styles
│   │   ├── Footer.jsx       # App footer
│   │   └── Footer.css       # Footer styles
│   ├── constants/           # Centralized configuration and strings
│   │   ├── index.js         # Main export point
│   │   ├── strings.js       # All UI text (i18n ready)
│   │   ├── config.js        # App configuration
│   │   └── location.js      # Location coordinates
│   ├── hooks/               # Custom React hooks
│   │   └── useSunriseData.js # Data fetching and state management
│   ├── services/            # External service integrations
│   │   └── weatherService.js # Weather data service
│   ├── utils/               # Utility functions
│   │   ├── formatters.js    # Data formatting utilities
│   │   ├── sunriseCalculator.js # Astronomical calculations
│   │   └── uiHelpers.js     # UI-related helper functions
│   ├── App.jsx              # Main application component
│   ├── index.js             # Entry point
│   └── index.css            # Global base styles
├── LOCALIZATION.md          # Localization and i18n guide
├── WEBSTORM_SETUP.md        # WebStorm IDE setup guide
├── package.json
├── .gitignore
└── README.md
```

## Architecture & Code Organization

### Component Structure
Each component follows a clean separation of concerns:
- **JSX files** contain only component logic and structure
- **CSS files** contain all styling (co-located with components)
- **No inline styles** except for dynamic values (animations, calculated colors)

### String Localization
All user-facing text is centralized in `src/constants/strings.js`:
```javascript
import { STRINGS } from '../constants';
<h1>{STRINGS.app.title}</h1>
```

This makes the app:
- Easy to update text globally
- Ready for multi-language support (i18n)
- Consistent across all components

See [LOCALIZATION.md](LOCALIZATION.md) for detailed documentation.

### Configuration Management
App settings are centralized in `src/constants/config.js`:
- Location coordinates and timezone
- API endpoints and keys
- Feature flags
- Theme colors

### Customization

#### Adapting for Another City
1. Update `src/constants/config.js`:
   ```javascript
   location: {
     name: 'Seattle',
     latitude: 47.6062,
     longitude: -122.3321,
     // ...
   }
   ```

2. Update `src/constants/strings.js`:
   ```javascript
   app: {
     title: 'Seattle Sunrise',
     subtitle: 'Track the perfect mornings...',
   }
   ```

#### Adding New Features
1. Add strings to `constants/strings.js`
2. Update configuration in `constants/config.js`
3. Create components in `components/` with co-located CSS
4. Use utility functions from `utils/` for logic

## Future Enhancements

- Integration with real weather APIs (OpenWeatherMap, Weather.gov)
- Location selection for other cities
- Historical sunrise quality data
- User favorites and notifications
- Sunset tracking
- Moon phase information
- Full i18n support with react-i18next
- Dark mode toggle
- Progressive Web App (PWA) capabilities

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Built with ☀️ for sunrise enthusiasts in Miami
