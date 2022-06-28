### Introduction

Le but de cet exercice est d'évaluer votre capacité à coder une interface  simple.

L'objectif est de créer une page unique, à partir d'un package comprenant quelques icônes et des petits jeux de données à représenter. **La page représentée en maquette n'est pas à reproduire strictement, il s'agit de s'en inspirer pour réaliser l'exercice.** 

Une fois terminé, vous pouvez uploader votre code sur ce repo.

L'exercice terminé, nous prendrons le temps de discuter ensemble de votre travail. Nous sommes tout à fait conscients qu'il existe plusieurs façons de bien faire les choses, veuillez coder ce qui, selon vous, serait naturellement élégant et simple. 

Si vous êtes bloqué.e sur quelque chose, ou si vous avez la moindre question, n'hésitez pas à nous contacter. 

### Exercice

![](https://hackmd.io/_uploads/ByRH6Huc9.jpg)


La page à coder contient les fonctionnalités suivantes : 

#### Première partie de la page : informations sur la réforme

* Un header statique comprenant logo, nom de l'application, navigation horizontale et informations de profil
* Une partie statique proposant des éléments introductifs et génériques sur la réforme (cf fichier `metadata_mesure.json`)
* Une jauge faisant apparaître 3 points de situation (les données vous sont fournies également dans le pack, cf fichier `metadata_mesure.json`) 

:::danger
Pas de bloc *synthèse des résultats* comme sur la capture d'écran ?
:::

#### Deuxième partie de la page : informations sur les indicateurs

Dans cette partie, vous ferez apparaître des informations concernant 2 indicateurs sur cette réforme : 
* Une liste déroulante permettant de sélectionner 
    * a) des **départements** et 
    * b) des **réformes** (*vous trouverez les éléments à y faire apparaître dans le jeu de données associé*)
* Deux cartes : 
    * une carte représentant le **taux d'avancement** de l'indicateur par département
    * une carte représentant la **valeur de l'indicateur** par département
* Enfin, vous intégrerez également un graphique représentant une **évolution temporelle** de cet indicateur dans le temps

> Vous pouvez tout à fait utiliser les widgets suivants en vue.JS pour créer les cartes et les graphiques : 
> * https://github.com/etalab/covid19-dashboard-widgets (description des widgets)
> * https://github.com/etalab/dashboard-widgets-template (comment créer un widget)

#### Données qualitatives

* Vous créerez 5 blocs de texte en accordéon avec un titre et un paragraphe de *lorem ipsum*:
    * Objectifs de la réforme
    * Suivi des décisions et réalisations
    * Difficultés rencontrées et risques anticipés
    * Solutions proposées et prochaines étapes
    * Exemple concret de réussite lié à la réforme


#### Footer

* le *footer*/pied de page est simple sur fond blanc


## Contraintes

Utilisez le [French Government Design System](https://www.systeme-de-design.gouv.fr/) pour le style et comme charte graphique (il existe aussi une [documentation pour les developpeurs](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/223019574/D+veloppeurs)).

Eléments d'interface : 
* https://gouvfr.atlassian.net/wiki/spaces/DB/pages/217251916/l+ments+d+interface
* Police d'écriture *Marianne*: https://gouvfr.atlassian.net/wiki/spaces/DB/pages/223019527/Typographie+-+Typography
* *favicons*: https://gouvfr.atlassian.net/wiki/spaces/DB/pages/577930274/Ic+nes+de+favoris+-+Favicons

