import { IonIcon } from "@ionic/react";
import { download, heart } from "ionicons/icons";
export default function Section({ imageSrc, altText, quote, author }) {
  return (
    <section>
      <img src={imageSrc} alt={altText} />
      <p className="quote">{quote}</p>
      <h2 className="author">{author}</h2>
      <div className="buttons">
        <button className="icon-button">
          <IonIcon icon={heart} />
        </button>
        <button className="icon-button">
          <IonIcon icon={download} />
        </button>
      </div>
    </section>
  );
}
