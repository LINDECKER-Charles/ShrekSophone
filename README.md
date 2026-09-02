<div align="center">

# Shreksophone

### Un clic. Un saxo. Plus aucun respect pour l'interface.

[![Production](https://img.shields.io/badge/production-github_pages-88d942?style=for-the-badge)](https://lindecker-charles.github.io/ShrekSophone/)
[![Repository](https://img.shields.io/badge/github-ShrekSophone-1f6feb?style=for-the-badge)](https://github.com/LINDECKER-Charles/ShrekSophone)
[![CDN](https://img.shields.io/badge/cdn-temporairement_desactive-ffb020?style=for-the-badge)](#cdn-public-temporairement-desactive)

**Production:** [lindecker-charles.github.io/ShrekSophone](https://lindecker-charles.github.io/ShrekSophone/)

</div>

---

## Apercu

Shreksophone est un mini CDN troll qui remplace l'experience utilisateur par une video plein ecran de Shrek sur un solo de saxophone.

En pratique:

- tu cliques sur un bouton
- la page abandonne toute dignite
- Shrek prend le controle

> Projet techniquement simple, moralement discutable, esthetiquement assume.

---

## Acces rapide

| Ressource | Lien |
|---|---|
| Site en production | [lindecker-charles.github.io/ShrekSophone](https://lindecker-charles.github.io/ShrekSophone/) |
| Repository GitHub | [LINDECKER-Charles/ShrekSophone](https://github.com/LINDECKER-Charles/ShrekSophone) |
| Auteur | [Charles LINDECKER](https://www.linkedin.com/in/charles-lindecker) |

---

## Ce que fait le projet

```text
clic utilisateur
   ↓
interception du bouton ou du lien
   ↓
remplacement du body
   ↓
video fullscreen de Shrek
   ↓
incident produit
```

### Resultat

- intercepte des clics sur des boutons ou des liens
- vide la page
- injecte une video de Shrek en plein ecran
- active le son
- transforme un site normal en experience de marais

---

## CDN public temporairement desactive

Le CDN public n'est plus distribue pour le moment. L'infrastructure a quitte le VPS
pour GitHub Pages, et les snippets d'integration sont retires du site le temps que
tout soit stabilise. Ca revient bientot.

En attendant:

- le site de demo fonctionne normalement, boutons trolls compris
- le code source reste ouvert et reutilisable (Apache-2.0)
- rien ne t'empeche de builder les scripts toi-meme avec `npm run build`

---

## Modes disponibles

Les deux modes existent toujours dans le code, ils ne sont juste plus servis
publiquement.

### Mode cible

**Script:** `shrek.min.js`

N'affecte que les elements avec la classe `shrek-troll`.

```html
<button class="shrek-troll">Clique pas</button>
<button class="shrek-troll">Moi non plus</button>

<script src="dist/shrek.min.js"></script>
```

**Quand l'utiliser:** si tu veux garder un semblant de controle sur le niveau de nuisance.

### Mode total

**Script:** `shrek-all.min.js`

Affecte tous les `<button>` et tous les `<a>` de la page.

```html
<a href="#">Ne clique pas</a>
<button>Moi non plus</button>

<script src="dist/shrek-all.min.js"></script>
```

**Quand l'utiliser:** si ton objectif est de ruiner une interface avec conviction.

---

## Demo

Le site de demo en production est ici:

## [lindecker-charles.github.io/ShrekSophone](https://lindecker-charles.github.io/ShrekSophone/)

Tu peux aussi lancer `npm run build` puis ouvrir `index.html` en local pour admirer
le desastre sans quitter ta machine.

---

## Structure du projet

```text
ShrekSophone/
|-- index.html              # Landing page du projet
|-- src/
|   |-- img/                # Images et variantes responsives
|   |-- lib/
|   |   |-- dom.js          # Selection et interception des elements
|   |   `-- video.js        # Creation de la video plein ecran
|   |-- style/
|   |   |-- input.css       # Source CSS
|   |   `-- output.css      # CSS compile
|   |-- shrek.js            # Version ciblee
|   `-- shrek-all.js        # Version totale
|-- dist/                   # Builds minifies, generes par npm run build (non versionne)
|-- meta/                   # Favicons, manifest et assets SEO
|-- scripts/                # Scripts de build
|-- tests/                  # Tests du coeur du projet
|-- test-github/            # Page de test hors site pour le script publie
|-- sitemap.xml
`-- robots.txt
```

---

## Dev local

### Installation

```bash
git clone https://github.com/LINDECKER-Charles/ShrekSophone.git
cd ShrekSophone
npm install
```

### Commandes utiles

| Commande | Effet |
|---|---|
| `npm run lint` | Verifie le code |
| `npm test` | Lance les tests |
| `npm run build` | Recompile les assets |

Puis ouvre `index.html` dans ton navigateur, ou sers le dossier avec ton outil local prefere si tu veux inspecter le rendu plus confortablement.

---

## Comportement technique

| Fichier | Role |
|---|---|
| `src/shrek.js` | Cible `.shrek-troll` |
| `src/shrek-all.js` | Cible `button, a` |
| `src/lib/dom.js` | Neutralise les clics et remplace le contenu du `body` |
| `src/lib/video.js` | Construit la video fullscreen |
| `tests/` | Verifie que le chaos principal reste fonctionnel |

Le projet reste volontairement simple: pas de framework applicatif, peu de magie, juste un concept discutable execute avec une rigueur franchement disproportionnee.

---

## Pourquoi ce projet existe

Excellente question. Plusieurs hypotheses:

- pour tester rapidement un script CDN
- pour troller des collegues avec une precision chirurgicale
- pour honorer la culture web absurde comme il se doit
- parce que "et si Shrek jouait du saxo sur mon site ?" meritait manifestement une reponse

---

## CI / CD

```text
push sur dev
   ↓
lint + tests + build
   ↓
promotion vers main
   ↓
build du dossier _site
   ↓
deploiement sur GitHub Pages
```

L'hebergement est entierement sur GitHub Pages: page, styles, images, scripts
minifies et video sont servis depuis le meme artefact, construit par la CI. Aucun
serveur a maintenir, aucune cle SSH a faire tourner.

Autrement dit: meme le chaos est deploye avec methode.

---

## Contribution

Les PR sont bienvenues si elles respectent au moins une de ces conditions:

- elles rendent le projet plus propre
- elles rendent le projet plus drole
- elles rendent le projet plus absurde sans le rendre inutilement complique

---

## Licence morale

Le projet est distribue sous licence Apache-2.0 avec fichier [NOTICE](NOTICE) d'attribution.

En clair:

- tu peux reutiliser, modifier et redistribuer le projet
- tu dois conserver la licence
- tu dois conserver l'attribution au projet original et a son auteur

Fais-en bon usage, c'est-a-dire probablement un usage tres mauvais.
