# WebStorm Setup Guide for Miami Sunrise Tracker

## Quick Start

### Option 1: Open Existing Project in WebStorm

1. **Open WebStorm**
2. Click **File → Open**
3. Navigate to the `miami-sunrise-tracker` folder and select it
4. Click **OK**

### Option 2: Clone or Extract to Your Machine

If you downloaded this as a zip file:
1. Extract the `miami-sunrise-tracker` folder to your desired location
2. Open WebStorm
3. Click **File → Open** and select the extracted folder

## Installation Steps

Once you have the project open in WebStorm:

### 1. Install Dependencies

Open the terminal in WebStorm (View → Tool Windows → Terminal or Alt+F12) and run:

```bash
npm install
```

This will install all required packages:
- React 18
- React DOM
- Lucide React (icons)
- React Scripts (build tools)

### 2. Start the Development Server

In the same terminal, run:

```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

## WebStorm-Specific Configuration

### Enable React Support (if not already enabled)

1. Go to **File → Settings** (Windows/Linux) or **WebStorm → Preferences** (Mac)
2. Navigate to **Languages & Frameworks → JavaScript → Libraries**
3. Ensure React is checked/enabled
4. Click **OK**

### Create a Run Configuration (Optional)

For easier starting/stopping of the app:

1. Click **Run → Edit Configurations**
2. Click the **+** button and select **npm**
3. Configure:
   - **Name**: "Start Miami Sunrise Tracker"
   - **package.json**: Select the one in your project root
   - **Command**: `run`
   - **Scripts**: `start`
4. Click **OK**

Now you can use the run button in WebStorm's toolbar!

### Useful WebStorm Shortcuts

- **Ctrl+Alt+L** (Win/Linux) or **Cmd+Option+L** (Mac): Format code
- **Alt+F12**: Open terminal
- **Shift+Shift**: Search anywhere
- **Ctrl+B** (Win/Linux) or **Cmd+B** (Mac): Go to definition

## Project Structure

```
miami-sunrise-tracker/
├── public/
│   └── index.html           # HTML template
├── src/
│   ├── components/          # React components with co-located CSS
│   │   ├── App.css         # Main app styles
│   │   ├── DayCard.jsx     # Individual day forecast card
│   │   ├── DayCard.css     # DayCard styles
│   │   ├── DayDetail.jsx   # Detailed day view
│   │   ├── DayDetail.css   # DayDetail styles
│   │   ├── Header.jsx      # App header
│   │   ├── Header.css      # Header styles
│   │   ├── Footer.jsx      # App footer
│   │   └── Footer.css      # Footer styles
│   ├── constants/          # Centralized configuration and strings
│   │   ├── index.js        # Main export point
│   │   ├── strings.js      # All UI text (i18n ready)
│   │   ├── config.js       # App configuration
│   │   └── location.js     # Location coordinates
│   ├── hooks/              # Custom React hooks
│   │   └── useSunriseData.js # Data fetching and state management
│   ├── services/           # External service integrations
│   │   └── weatherService.js # Weather data service
│   ├── utils/              # Utility functions
│   │   ├── formatters.js   # Data formatting utilities
│   │   ├── sunriseCalculator.js # Astronomical calculations
│   │   └── uiHelpers.js    # UI-related helper functions
│   ├── App.jsx             # Main application component
│   ├── index.js            # React entry point
│   └── index.css           # Global base styles
├── LOCALIZATION.md         # Localization and i18n guide
├── WEBSTORM_SETUP.md       # This file
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## Troubleshooting

### Port 3000 already in use
If you see an error that port 3000 is in use:
- The app will ask if you want to use a different port (usually 3001)
- Type 'Y' and press Enter

### Dependencies not installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### WebStorm not recognizing JSX
1. Right-click on `src` folder
2. Select **Mark Directory as → Sources Root**

## Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Next Steps

### Understanding the Code

1. **Start with components**: Explore `src/components/` to see how the UI is built
   - Each component has its own `.jsx` and `.css` file
   - Components import from `constants/` for text and configuration

2. **Check the constants**: Review `src/constants/`
   - `strings.js` - All UI text (easy to change!)
   - `config.js` - App configuration and settings
   - `location.js` - Miami coordinates

3. **Explore utilities**: Look at `src/utils/`
   - `sunriseCalculator.js` - Astronomical calculations
   - `formatters.js` - Data formatting functions
   - `uiHelpers.js` - UI helper functions

4. **Custom hooks**: See `src/hooks/useSunriseData.js` for state management

### Customizing the App

- **Change text**: Edit `src/constants/strings.js`
- **Update styles**: Modify individual `.css` files in `src/components/`
- **Change location**: Update `src/constants/config.js` and `strings.js`
- **Add features**: Follow the pattern - create component, add CSS, use constants

### Additional Resources

- Check [LOCALIZATION.md](LOCALIZATION.md) for string management and i18n
- See main [README.md](README.md) for detailed architecture documentation
- Review React documentation: https://react.dev
- Check Create React App docs: https://create-react-app.dev

## Code Organization Best Practices

This project follows modern React patterns:

✅ **Separation of Concerns**
- Business logic separate from presentation
- Styles in dedicated CSS files
- Configuration separate from code

✅ **Clean Imports**
```javascript
import { STRINGS, APP_CONFIG } from '../constants';
```

✅ **Consistent Patterns**
- Each component has a `.jsx` and `.css` file
- All user-facing text uses `STRINGS`
- All configuration uses `APP_CONFIG`

✅ **Maintainability**
- Change text in one place (`strings.js`)
- Easy to add new features
- Ready for internationalization

---

Happy coding! 🌅
