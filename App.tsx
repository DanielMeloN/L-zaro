import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import ThemeContext from './src/contexts/themeContext';

import dark from './src/styles/themes/dark';
import light from './src/styles/themes/light';

import Routes from './src/routes';

export default function App() {

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{titleTheme: theme.title, toggleTheme}}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
