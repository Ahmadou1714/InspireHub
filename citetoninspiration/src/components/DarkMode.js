import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { sunny, moon } from "ionicons/icons";
export default function DarkMode() {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    document.body.dataset.theme = currentTheme;
  }, [currentTheme]);

  const handleThemeToggle = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };
  return (
    <button className="theme-toggle" onClick={handleThemeToggle}>
      {currentTheme === "light" ? <IonIcon icon={sunny} /> : <IonIcon icon={moon} />}
    </button>
  );
}
