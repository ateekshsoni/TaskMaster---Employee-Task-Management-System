# TaskMaster Maintenance Page

## Overview

A modern, animated maintenance page created with React, Framer Motion, and Tailwind CSS. This page displays when the application is undergoing maintenance or updates.

## Features

### 🎨 Visual Design
- **Dark Theme**: Modern dark gradient background (gray-900 to black)
- **Accent Colors**: Bright cyan and neon green highlights
- **Responsive Design**: Optimized for both mobile and desktop
- **Animated Background**: Floating particles and grid pattern

### ⚡ Animations (Framer Motion)
- **Rotating Gear Icon**: Centered animated gear with rotating motion
- **Entrance Animations**: Smooth scale, opacity, and bounce effects
- **Floating Elements**: Continuous floating motion for visual interest
- **Loading Bar**: Animated progress indicator
- **Sparkle Effects**: Subtle sparkle animations around the gear
- **Hover Effects**: Interactive cards with scale and glow effects

### 📱 Responsive Layout
- **Mobile First**: Optimized for mobile devices
- **Breakpoint Responsive**: Adapts to different screen sizes
- **Touch Friendly**: Optimized for touch interactions

### 🛠️ Developer Features
- **Toggle Mode**: Press `Ctrl+Shift+M` to toggle between maintenance and normal mode
- **Easy Configuration**: Simple boolean flag to enable/disable maintenance mode
- **Performance Optimized**: Efficient animations and minimal re-renders

## Usage

### Enable Maintenance Mode
In `src/App.jsx`, set the maintenance mode state:

```javascript
const [isMaintenanceMode, setIsMaintenanceMode] = useState(true);
```

### Disable Maintenance Mode
Set the state to false or use the keyboard shortcut `Ctrl+Shift+M`.

### Customization
The maintenance page can be customized by editing:
- `src/components/Maintenance/MaintenancePage.jsx`
- Colors, text, and animations can be modified
- Additional features can be added

## Content

### Main Message
- **Heading**: "🚧 We're Working on Something Awesome!"
- **Subtitle**: Information about TaskMaster update
- **Progress Bar**: Visual progress indicator
- **Feature Cards**: Highlights of upcoming improvements

### Features Highlighted
1. **⚡ Faster**: Lightning-fast performance
2. **✨ Better UI**: Beautiful new interface  
3. **🚀 More Features**: Enhanced productivity tools

## Technical Details

### Dependencies
- React 19.0.0
- Framer Motion (latest)
- Tailwind CSS 4.0.12

### File Structure
```
src/
├── components/
│   └── Maintenance/
│       └── MaintenancePage.jsx
└── App.jsx (modified to include maintenance mode)
```

### Animation Details
- **Container Animation**: Staggered children with opacity and scale
- **Gear Rotation**: Continuous 360° rotation every 8 seconds
- **Floating Motion**: Y-axis movement with rotation variation
- **Loading Bar**: Width animation with infinite repeat
- **Background Particles**: Random floating elements with varied timing

## Performance Notes

- Animations are optimized for 60fps
- Uses CSS transforms for hardware acceleration
- Minimal DOM updates during animations
- Responsive design reduces layout shifts

## Browser Support

- Modern browsers with CSS Grid support
- Works on mobile Safari, Chrome, Firefox
- Requires JavaScript enabled for animations

---

**Created for TaskMaster v2.0 - Employee Task Management System**
