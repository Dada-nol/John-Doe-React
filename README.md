## Getting Started

Les captures d’écran des résultats de validation W3C pour chaque page se trouvent dans le dossier `public/img/W3C result`.

Cette application, entièrement réalisée avec **React** et **Bootstrap**, présente le profil de *John Doe* et est accessible à l’adresse suivante :

👉 [Voir l'application sur CodeSandbox](https://codesandbox.io/p/github/Dada-nol/John-Doe-React/main?import=true)

### Aperçu général

À l’exception de la page de profil, le **header** et le **footer** sont identiques sur l’ensemble des pages.

- **Header** : il inclut la navigation vers toutes les pages du site, et le logo redirige vers la page d’accueil.
- **Footer** : il contient les informations de contact de John Doe, ses réseaux sociaux, les liens de navigation, ses réalisations et ses derniers articles de blog.

### Librairies utilisées

- **React Router**  
  Mise en place d’un système de routage pour gérer plusieurs pages.

- **React Icons**  
  Utilisé notamment pour le bouton "scroll to top".

- **Bootstrap**  
  Une grande partie de la mise en page repose sur Bootstrap :
  - Composants utilisés :
    - `Card` pour les projets, articles de blog et sections de services
    - `Form` pour le formulaire de contact
    - `Btn` pour les boutons
    - `Progressbar` pour les barres de progression
