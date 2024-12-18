import React, { forwardRef } from "react";
import { IonIcon } from "@ionic/react";
import { heart, arrowDownCircle, shareSocial } from "ionicons/icons";

const Section = forwardRef(({ imageSrc, altText, quote, author }, ref) => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: author,
          text: quote,
          url: window.location.href,
        });
      } else {
        // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
        navigator.clipboard.writeText(`${quote} - ${author}`);
        alert("Citation copiée dans le presse-papier !");
      }
    } catch (error) {
      console.error("Erreur lors du partage :", error);
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const text = `${quote}\n- ${author}`;
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `citation-${author
      .replace(/\s+/g, "-")
      .toLowerCase()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section ref={ref} className="quote-card">
      <img src={imageSrc} alt={altText} loading="lazy" />
      <p className="quote">{quote}</p>
      <h2 className="author">{author}</h2>
      <div className="buttons">
        <button className="icon-button" aria-label="Ajouter aux favoris">
          <IonIcon icon={heart} />
        </button>
        <button
          className="icon-button"
          onClick={handleDownload}
          aria-label="Télécharger la citation"
        >
          <IonIcon icon={arrowDownCircle} />
        </button>
        <button
          className="icon-button"
          onClick={handleShare}
          aria-label="Partager la citation"
        >
          <IonIcon icon={shareSocial} />
        </button>
      </div>
    </section>
  );
});

export default Section;
