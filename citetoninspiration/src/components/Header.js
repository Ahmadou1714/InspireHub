import React from "react";
import DarkMode from "./DarkMode";
import Logo from "./Logo";
import Search from "./SearchBar";
export default function Header({ setFilteredQuotes }) {
  return (
    <header>
      <Logo />
      <Search setFilteredQuotes={setFilteredQuotes} />
      <DarkMode />
    </header>
  );
}
