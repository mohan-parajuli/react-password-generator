# React Password Generator

## Overview
React Password Generator is a simple and customizable tool that allows users to generate secure passwords based on specified criteria. The application is designed with a user-friendly interface to make password creation straightforward for everyone.

## Features
- 🔐 Generate random passwords with customizable length (1-16 characters)
- 🔢 Toggle to include/exclude numbers
- ✨ Toggle to include/exclude special characters (!@#$%^&*()~{}[])
- 📋 One-click copy to clipboard
- 🎨 Modern UI with Tailwind CSS styling
- ⚡ Fast and responsive performance

## Tech Stack
- **Frontend Framework:** React 19.1.0
- **Build Tool:** Vite 7.0.4
- **Styling:** Tailwind CSS 4.1.11
- **Languages:** JavaScript (79.6%), CSS (13%), HTML (7.4%)
- **Linting:** ESLint 9.30.1

## Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/mohan-parajuli/react-password-generator.git
   cd react-password-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development
To start the development server with hot module reloading:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to see the application.

### Production Build
To create an optimized production build:
```bash
npm run build
```

### Preview Build
To preview the production build locally:
```bash
npm run preview
```

### Linting
To run ESLint and check code quality:
```bash
npm run lint
```

## Project Structure
```
react-password-generator/
├── public/                 # Static assets
├── src/
│   ├── App.jsx            # Main App component
│   ├── App.css            # App styling
│   ├── main.jsx           # Entry point
│   ├── index.css          # Global styles
│   └── assets/            # Asset files
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

## How It Works

### Core Functionality
The application provides an intuitive interface where users can:
1. **Adjust Password Length**: Use a slider to set the desired password length (1-16 characters)
2. **Include Numbers**: Toggle a checkbox to include numeric characters (0-9)
3. **Include Special Characters**: Toggle a checkbox to include special symbols
4. **Generate Password**: Passwords are automatically generated based on the selected criteria
5. **Copy to Clipboard**: Click the "copy" button to instantly copy the generated password to the clipboard

### State Management
The app uses React Hooks for state management:
- `length`: Controls the password length
- `number`: Boolean for including numbers
- `character`: Boolean for including special characters
- `password`: Stores the currently generated password

## Contributing

We welcome contributions! To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is currently unlicensed. Feel free to use it for personal or commercial purposes.

## Author
Created by [mohan-parajuli](https://github.com/mohan-parajuli)

## Support
If you encounter any issues or have suggestions, please open an issue on the [GitHub Issues](https://github.com/mohan-parajuli/react-password-generator/issues) page.