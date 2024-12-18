import React from "react";
import DarkMode from "./DarkMode";
import Logo from "./Logo";
import Profile from "./Profile";
import Search from "./SearchBar";

export default function Header({ setFilteredQuotes }) {
  return (
    <header>
      <div className="header-left">
        <Logo />
      </div>
      <div className="header-center">
        <Search setFilteredQuotes={setFilteredQuotes} />
      </div>
      <div className="header-right">
        <DarkMode />
        <Profile />
      </div>
    </header>
  );
}
