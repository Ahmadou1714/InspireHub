import React, { useEffect, useState, useCallback, useRef } from "react";
import Section from "./Section";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export default function QuoteList({ quotes }) {
  const [quotesData, setQuotesData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const observer = useRef();

  useEffect(() => {
    fetch("/quotes.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur HTTP " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setQuotesData(data);
        setIsInitialLoading(false);
      })
      .catch((error) => {
        console.error("Erreur de chargement des citations :", error);
        setIsError(true);
        setIsInitialLoading(false);
      });
  }, []);

  const displayedQuotes = quotes && quotes.length > 0 ? quotes : quotesData;
  const { displayedItems, isLoading, hasMore, loadMore } = useInfiniteScroll(displayedQuotes);

  const lastQuoteRef = useCallback(node => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });
    if (node) observer.current.observe(node);
  }, [isLoading, hasMore, loadMore]);

  if (isInitialLoading) {
    return <div className="loading">Chargement des citations...</div>;
  }

  if (isError) {
    return <div className="error">Une erreur est survenue lors du chargement des citations.</div>;
  }

  return (
    <div className="section-class">
      {displayedItems.map((quote, index) => (
        <Section
          ref={index === displayedItems.length - 1 ? lastQuoteRef : null}
          key={index}
          imageSrc={quote.imageSrc}
          altText={quote.altText}
          quote={quote.quote}
          author={quote.author}
        />
      ))}
      {isLoading && <div className="loading">Chargement...</div>}
    </div>
  );
}
