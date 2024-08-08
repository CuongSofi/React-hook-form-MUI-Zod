# Features

- ⚡️ React-hook-form v7
- 🚓 Zod v3
- 💖 MUI v5
- ⚛️ React 18
- ⛑ TypeScript

## Quick Start

### Development

To start the project locally, run:

```
npm i
npm run dev
```

Open `http://localhost:3000` with your browser to see the result.

### Requirements

- Node.js >= 18

## Structure

- Assets: includes images and icons
- Components: includes + CommonStyles => is components was be customize from library example (Input, Select, ....) + Others component from main page
- Configs: settings from systems : Url api backend
- Constants: variables used and re-use more time
- interfaces: interfaces common use
- modules: + hooks => using many hook from react exists make useHook new call API handle Logic + interface => interface only module + service => httpService for module
- routes: include path for application
- services: setting axios or fetch httpService for app
- style: style for app
- themes: setting colorTheme, font text,....
