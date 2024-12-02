import Lenis from 'lenis';
import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import QuoteList from './components/QuoteList';
import ScrollToTopButton from './components/ScrollTopButton';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const [filteredQuotes, setFilteredQuotes] = useState([]);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header setFilteredQuotes={setFilteredQuotes} />
      <QuoteList quotes={filteredQuotes} />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
