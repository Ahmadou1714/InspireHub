import Lenis from "lenis";
import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QuoteList from "./components/QuoteList";
import ScrollToTopButton from "./components/ScrollTopButton";

function App() {
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="container">
      <Header setFilteredQuotes={setFilteredQuotes} />
      <QuoteList quotes={filteredQuotes} />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
