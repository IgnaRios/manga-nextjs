'use client';
import { useEffect, useState } from 'react';

const ThemeSelector = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';

    setTheme(storedTheme);

    const body = document.body;
    body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeChange = (theme) => {
    const themeChange = theme;
    setTheme(themeChange);

    localStorage.setItem('theme', theme);
  };

  return (
    <div>
      <select
        name="theme"
        className="select select-sm mx-3 border border-red-300"
      >
        <option
          defaultValue={'Theme'}
          hidden
        >
          Theme
        </option>
        <option
          value={'light'}
          onClick={() => handleThemeChange('light')}
        >
          Light
        </option>
        <option
          value={'dim'}
          onClick={() => handleThemeChange('dim')}
        >
          Dark
        </option>
        <option
          value={'valentine'}
          onClick={() => handleThemeChange('valentine')}
        >
          Valentine
        </option>
        <option
          value={'night'}
          onClick={() => handleThemeChange('night')}
        >
          Night
        </option>
      </select>
    </div>
  );
};

export default ThemeSelector;
