import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkMode() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
