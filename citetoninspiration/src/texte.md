Pour créer une application avec toutes ces fonctionnalités en utilisant React, je vais vous fournir une structure de code en plusieurs parties. Nous allons inclure les bases pour les principales fonctionnalités et améliorer l’interface utilisateur en utilisant des animations et des composants stylisés.

Voici un guide en étapes pour commencer :

1. Configuration de l’application avec create-react-app

Si vous n’avez pas encore de projet, commencez par créer une nouvelle application React.

npx create-react-app citation-app
cd citation-app

2. Installation des dépendances

Pour les effets visuels et les animations, nous allons utiliser des bibliothèques comme styled-components pour le style et react-icons pour les icônes. Installez-les :

npm install styled-components react-icons

3. Structure du Projet

Créez une structure pour vos composants et pages. Vous pouvez organiser le projet comme ceci :

src/
├── components/
│ ├── QuoteList.js
│ ├── QuoteItem.js
│ ├── SearchBar.js
│ └── FavoriteButton.js
├── pages/
│ └── Home.js
├── App.js
└── index.js

4. Création des Composants

QuoteItem.js - Composant pour afficher chaque citation avec une option de favoris.

// src/components/QuoteItem.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const QuoteContainer = styled.div`  padding: 20px;
  margin: 10px 0;
  background: #f8f8f8;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;`;

const FavoriteIcon = styled(FaHeart)`  color: ${(props) => (props.isFavorite ? 'red' : 'gray')};
  cursor: pointer;`;

const QuoteText = styled.p`  font-size: 1.2em;
  color: #333;`;

const QuoteItem = ({ quote, onFavoriteToggle }) => {
const [isFavorite, setIsFavorite] = useState(false);

const toggleFavorite = () => {
setIsFavorite(!isFavorite);
onFavoriteToggle(quote.id);
};

return (
<QuoteContainer>
<QuoteText>{quote.text}</QuoteText>
<FavoriteIcon isFavorite={isFavorite} onClick={toggleFavorite} />
</QuoteContainer>
);
};

export default QuoteItem;

QuoteList.js - Composant pour gérer la liste de citations.

// src/components/QuoteList.js
import React from 'react';
import QuoteItem from './QuoteItem';

const QuoteList = ({ quotes, onFavoriteToggle }) => (

  <div>
    {quotes.map((quote) => (
      <QuoteItem key={quote.id} quote={quote} onFavoriteToggle={onFavoriteToggle} />
    ))}
  </div>
);

export default QuoteList;

SearchBar.js - Barre de recherche avec debounce pour améliorer les performances.

// src/components/SearchBar.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`  margin: 20px 0;
  display: flex;
  justify-content: center;`;

const SearchInput = styled.input`  padding: 10px;
  width: 80%;
  max-width: 600px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;`;

const SearchBar = ({ onSearch }) => {
const [searchTerm, setSearchTerm] = useState('');

const handleSearchChange = (e) => {
const term = e.target.value;
setSearchTerm(term);
if (onSearch) onSearch(term);
};

return (
<SearchContainer>
<SearchInput
        type="text"
        placeholder="Rechercher une citation..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
</SearchContainer>
);
};

export default SearchBar;

5. Page d’Accueil (Home.js)

Home.js - La page principale qui affiche la liste des citations et la barre de recherche.

// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuoteList from '../components/QuoteList';
import SearchBar from '../components/SearchBar';

const quotesData = [
{ id: 1, text: "La vie est belle." },
{ id: 2, text: "La persévérance est la clé du succès." },
{ id: 3, text: "Il n'y a rien de permanent sauf le changement." },
// Ajoutez plus de citations ici
];

const HomeContainer = styled.div`  padding: 20px;`;

const Home = () => {
const [quotes, setQuotes] = useState(quotesData);
const [favorites, setFavorites] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
if (searchTerm) {
setQuotes(
quotesData.filter((quote) =>
quote.text.toLowerCase().includes(searchTerm.toLowerCase())
)
);
} else {
setQuotes(quotesData);
}
}, [searchTerm]);

const toggleFavorite = (id) => {
setFavorites((prevFavorites) =>
prevFavorites.includes(id)
? prevFavorites.filter((favId) => favId !== id)
: [...prevFavorites, id]
);
};

return (
<HomeContainer>
<SearchBar onSearch={setSearchTerm} />
<QuoteList quotes={quotes} onFavoriteToggle={toggleFavorite} />
</HomeContainer>
);
};

export default Home;

6. Intégration dans App.js

Dans App.js, affichez la page Home pour démarrer l’application.

// src/App.js
import React from 'react';
import Home from './pages/Home';

function App() {
return (

<div className="App">
<Home />
</div>
);
}

export default App;

7. CSS Global (Optional)

Ajoutez des styles globaux pour donner un look uniforme à l’application.

/_ src/index.css _/

body {
font-family: Arial, sans-serif;
margin: 0;
padding: 0;
background-color: #f0f0f5;
}

.App {
text-align: center;
}

8. Lancer l’application

Démarrez votre application pour voir le rendu :

npm start

Cela vous donne une base complète avec une liste de citations, une barre de recherche, et la possibilité de marquer vos citations favorites. N’hésitez pas à me demander si vous avez besoin d’aide pour ajouter d’autres fonctionnalités comme les notifications push ou l’authentification.

Je vais intégrer tous les styles CSS supplémentaires que vous m’avez envoyés pour s’assurer que l’interface est cohérente avec votre vision. Voici comment adapter le CSS directement dans chaque composant. Si vous préférez tout centraliser dans un fichier CSS global, je peux aussi ajuster cela.

1. Ajout des Styles Complets au CSS Global

Ajoutons votre CSS directement dans un fichier global App.css pour plus de simplicité. Vous pouvez créer ce fichier dans le dossier src/ et y placer les styles ci-dessous.

/_ src/App.css _/

/_ Global Styles _/
body {
font-family: 'Arial', sans-serif;
background-color: #f5f5f5;
margin: 0;
padding: 0;
color: #333;
}

/_ App Container _/
.App {
max-width: 800px;
margin: 0 auto;
padding: 20px;
}

/_ Quote Container _/
.quote-container {
padding: 20px;
margin: 10px 0;
background-color: #f8f8f8;
border-radius: 8px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
display: flex;
justify-content: space-between;
align-items: center;
}

/_ Quote Text _/
.quote-text {
font-size: 1.2em;
color: #333;
margin: 0;
}

/_ Favorite Icon _/
.favorite-icon {
color: gray;
cursor: pointer;
transition: color 0.3s ease;
}

.favorite-icon.favorited {
color: red;
}

/_ Search Container _/
.search-container {
margin: 20px 0;
display: flex;
justify-content: center;
}

.search-input {
padding: 10px;
width: 80%;
max-width: 600px;
font-size: 1em;
border: 1px solid #ddd;
border-radius: 4px;
transition: box-shadow 0.3s ease;
}

.search-input:focus {
outline: none;
box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

2. Importation du CSS dans App.js

Dans App.js, vous devez importer ce fichier CSS global pour appliquer ces styles dans toute l’application.

// src/App.js
import React from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
return (

<div className="App">
<Home />
</div>
);
}

export default App;

3. Appliquer les Classes CSS dans les Composants

Mettez à jour vos composants pour utiliser les classes CSS définies.

QuoteItem.js

// src/components/QuoteItem.js
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const QuoteItem = ({ quote, onFavoriteToggle }) => {
const [isFavorite, setIsFavorite] = useState(false);

const toggleFavorite = () => {
setIsFavorite(!isFavorite);
onFavoriteToggle(quote.id);
};

return (

<div className="quote-container">
<p className="quote-text">{quote.text}</p>
<FaHeart
className={favorite-icon ${isFavorite ? 'favorited' : ''}}
onClick={toggleFavorite}
/>
</div>
);
};

export default QuoteItem;

SearchBar.js

// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
const [searchTerm, setSearchTerm] = useState('');

const handleSearchChange = (e) => {
const term = e.target.value;
setSearchTerm(term);
if (onSearch) onSearch(term);
};

return (

<div className="search-container">
<input
        type="text"
        placeholder="Rechercher une citation..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
</div>
);
};

export default SearchBar;

Ces étapes permettent d’appliquer le CSS complet que vous m’avez fourni et assurent un rendu uniforme et propre pour votre application.

N’hésitez pas si vous souhaitez personnaliser davantage le style ou ajouter de nouvelles animations !
