# 🌟 InspireHub

**InspireHub** est une application web qui permet aux utilisateurs de naviguer parmi des citations inspirantes et de trouver celles qui résonnent le plus avec eux ! Grâce à une interface élégante, des fonctionnalités intuitives, et une ambiance personnalisable, InspireHub est le compagnon idéal pour retrouver un peu de motivation au quotidien. 🌈✨

## ✨ Fonctionnalités

- 📜 **Affichage de Citations Inspirantes** : Parcourez une sélection de citations soigneusement sélectionnées, avec l'auteur et une image associée pour enrichir l'expérience visuelle.
- 🔍 **Recherche Avancée** : Utilisez la barre de recherche pour filtrer les citations par texte ou par auteur, et trouvez rapidement celles qui vous inspirent le plus.
- 🌙 **Mode Sombre** : Changez l’apparence de l’application en activant le mode sombre pour un confort visuel amélioré.
- 🔝 **Bouton Retour en Haut** : Naviguez sans effort ! Un bouton "Retour en haut" apparaît automatiquement lors du défilement pour un accès facile.
- ❤️ **Interactions** : Aimez et téléchargez vos citations préférées avec des icônes interactives.

## 🚀 Installation

Suivez ces étapes pour installer et lancer InspireHub sur votre machine locale :

1. **Clonez le dépôt** :
   ```bash
   https://github.com/Ahmadou1714/InspireHub.git
   ```
2. **Accédez au dossier du projet** :
   ```bash
   cd citetoninspiration
   ```
3. **Installez les dépendances** :
   ```bash
   npm install
   ```
4. **Démarrez l'application** :
   ```bash
   npm start
   ```

L'application sera accessible à l'adresse `http://localhost:3000` dans votre navigateur. 🎉

## 🛠️ Structure du Projet

La structure de l'application est organisée comme suit :

```plaintext
public
 └── quotes.json            # Données JSON contenant les citations
src
 ├── components             # Composants de l'application
 │   ├── Header.js          # En-tête avec le logo et le menu de navigation
 │   ├── Footer.js          # Pied de page de l'application
 │   ├── SearchBar.js       # Barre de recherche pour filtrer les citations
 │   ├── QuoteList.js       # Liste principale des citations affichées
 │   ├── Section.js         # Composant de section pour chaque citation
 │   ├── DarkMode.js        # Composant pour le mode sombre
 │   ├── ScrollToTopButton.js # Bouton pour remonter en haut de la page
 │   ├── Logo.js            # Logo de l'application
 ├── App.js                 # Composant principal de l'application
 ├── App.css                # Styles globaux de l'application
 └── index.js               # Point d'entrée de l'application

```

## ⚙️ Utilisation

### 🎨 Personnalisation du Thème

InspireHub propose deux thèmes visuels :

- **Mode Clair** : Idéal pour une visualisation lumineuse.
- **Mode Sombre** : Conçu pour un confort visuel, surtout en basse luminosité.

### 🔍 Utilisation de la Recherche

Entrez des mots-clés dans la barre de recherche pour trouver des citations contenant ces mots dans le texte ou le nom de l’auteur.

### ❤️ Favoris et Téléchargement

Cliquez sur les icônes interactives pour :

- **Aimer** vos citations préférées.
- **Télécharger** la citation sous forme d’image.

## 🖼️ Aperçu

## 🖼️ Aperçu

![Aperçu de InspireHub](./assets/screenshot.png)

## 📚 Technologies Utilisées

- **React** : Framework JavaScript pour la construction de l'interface utilisateur.
- **Ionicons** : Bibliothèque d'icônes élégantes et modernes.
- **CSS3** : Pour un style réactif et une expérience utilisateur fluide.

## 🛠️ Améliorations Futures

- Ajouter une fonctionnalité de partage pour publier des citations sur les réseaux sociaux 📲.
- Intégrer une option de personnalisation pour changer les couleurs de fond et de texte 🌈.
- Enrichir la base de données avec plus de citations et catégories 📜.

## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le dépôt.
2. Créez une **branche** pour votre fonctionnalité (`git checkout -b nouvelle-fonctionnalite`).
3. **Commit** vos modifications (`git commit -m 'Ajouter une nouvelle fonctionnalité'`).
4. **Push** la branche (`git push origin nouvelle-fonctionnalite`).
5. Ouvrez une **pull request**.

## 📄 Licence

Ce projet est sous licence [MIT](LICENSE).

---

**InspireHub** – Car chaque journée mérite une touche d'inspiration ! 🌞
