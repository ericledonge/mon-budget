# Projet Mon Budget

<img width="1132" alt="Capture d’écran, le 2021-12-21 à 21 32 25" src="https://user-images.githubusercontent.com/6333396/147025199-05b80bee-8cb8-4c0c-8405-a342c447b915.png">

You can play with it there: https://elated-lichterman-c7d00b.netlify.app/

## Concepts

Un plan de dépense est caractérisé par:

- une plage temporelle (date de début et date de fin considérés : exemple entre le 1er avril et le 30 avril) ;
- une date de réalisation (date à laquelle le plan de dépense est calculé: exemple le 10 mai) ;
- une liste de catégories (revenus ou dépense), de sous-catégories (habitation, transport, etc...) et d'articles (loyer, électricité, etc...).

Pour chacun des articles, deux montants (pour chacun des conjoints, si pertinent), ainsi que des notes peuvent être saisis.

Le plan de dépense permet de produire le sommaire de budget.

Le sommaire de budget est caractérisé par:

- le total du revenu mensuel ;
- le total des dépenses mensuelles ;
- la différence entre le total du revenu mensuel et le total des dépenses mensuelles.

La section des dettes est caratérisée par: (à venir).

La section épargne est caratérisée par: (à venir).

## Objectifs du projet

1. Permettre à un visiteur (anonyme) de réaliser un plan de dépense pour disposer d'un sommaire de budget.
2. Permettre à un utilisateur (authentifié) de réaliser des plans de dépense disposer de sommaires de budget et de suivre son évolution.
3. Permettre à un administrateur de consulter tous les plans de dépenses réalisées (par des utilisateurs anonymes ou authentifiés.)
4. Permettre à un administrateur de pouvoir modifier les informations demandées (catégorie, sous-catégories et articles).

## Architecture du projet

Frontend en Vue.JS + Buefy.
Backend sur FireStore avec des API REST.

## Proposition de MVP:

- Demander la situation familiale du visiteur.
- Permettre la saisie des revenus du visiteur.
- Présenter le sommaire de budget, avec uniquement la section revenus.

MVP : Avec une liste statique des catégories, des sous-catégories et des articles, stockée dans le frontend.

## Questions et points en suspens

1. Préciser la section des dettes.
2. Préciser la section épargne.
