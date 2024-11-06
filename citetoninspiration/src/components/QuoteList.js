import React, { useEffect, useState } from "react";
import Section from "./Section";

export default function QuoteList({ quotes }) {
  const [quotesData, setQuotesData] = useState([]);

  useEffect(() => {
    fetch("/quotes.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur HTTP " + response.status);
        }
        return response.json();
      })
      .then((data) => setQuotesData(data))
      .catch((error) => console.error("Erreur de chargement des citations :", error));
  }, []);

  const displayedQuotes = quotes && quotes.length > 0 ? quotes : quotesData;

  return (
    <div className="section-class">
      {displayedQuotes.map((quote, index) => (
        <Section
          key={index}
          imageSrc={quote.imageSrc}
          altText={quote.altText}
          quote={quote.quote}
          author={quote.author}
        />
      ))}
    </div>
  );
}
