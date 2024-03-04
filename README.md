# Getting Started

Tout d'abord les captures d'écran des résultats des validateurs W3C pour le code de chaque page ce trouve dans le dossier public/img/W3C result.

Puis cette application, entièrement réalisé avec React et Bootstrap, montre le profil de John Doe et est consultable à partir de cette URL :

https://codesandbox.io/p/github/Dada-nol/John-Doe-React/main?import=true&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clsmbn3uk00062a67pc0ig6jq%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clsmbn3uk00022a67ngmv7gql%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clsmbn3uk00042a67kb1ga37t%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clsmbn3uk00052a67h3uxb8pb%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clsmbn3uk00022a67ngmv7gql%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clsmbn3uk00012a67wifp4jwm%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clsmbn3uk00022a67ngmv7gql%2522%252C%2522activeTabId%2522%253A%2522clsmbn3uk00012a67wifp4jwm%2522%257D%252C%2522clsmbn3uk00052a67h3uxb8pb%2522%253A%257B%2522id%2522%253A%2522clsmbn3uk00052a67h3uxb8pb%2522%252C%2522activeTabId%2522%253A%2522clsmd9u3j01ny2a67vlj9db28%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522ENV_SETUP%2522%252C%2522id%2522%253A%2522clsmd9u3j01ny2a67vlj9db28%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clsmbn3uk00042a67kb1ga37t%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clsmbn3uk00032a67kkm8fw74%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clsmbn577000hddfbawaeh1ns%2522%257D%255D%252C%2522id%2522%253A%2522clsmbn3uk00042a67kb1ga37t%2522%252C%2522activeTabId%2522%253A%2522clsmbn3uk00032a67kkm8fw74%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D

Aperçu général :

Hormis la page de profil, le header et le footer sont identiques sur toutes les pages.

Le footer reprend les informations de contact de John Doe, ses réseaux sociaux, les liens des différentes pages du site, ses réalisation ainsi que ses derniers articles.

Le header reprend toutes les pages du site et le logo renvoit à la page d'accueil.

Librairies installées :

React-rooter

L'application dispose d'un système de rootage pour l'ajout de plusieurs pages

React-icons

Le bouton scroll to top a été réalisé en utilisant la librairie react-icons.

Bootstrap

Une grande partie de la mise en page à été réalisé à l'aide de bootstrap.

Les projets et les articles de blog et les blocs de "services" ont été réalisé à l'aide de la classe Card de bootstrap.

Le formulaire de la page de contact à l'aide de la classe Form, les boutons grâce à la classe Btn et la progress bar à l'aide de la classe progressbar
