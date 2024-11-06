import { IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";
import React, { useEffect, useState } from "react";

export default function SearchBar({ setFilteredQuotes }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("/quotes.json")
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error("Erreur de chargement des citations :", error));
  }, []);

  const handleFilter = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = quotes.filter(
      (quote) =>
        quote.quote.toLowerCase().includes(value.toLowerCase()) ||
        quote.author.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredQuotes(filtered);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Rechercher..." value={searchTerm} onChange={handleFilter} />
      <button type="button">
        <IonIcon icon={search} />
      </button>
    </div>
  );
}
