# Shreksophone

Le projet le plus inutile de ce repo, et donc probablement le plus important.

Shreksophone est un mini CDN troll qui remplace l'experience utilisateur par une video plein ecran de Shrek sur un solo de saxophone. En pratique, tu cliques sur un bouton. En consequence, toute dignite quitte la page.

## Demo

Site live: [shrek.charles-lindecker.com](https://shrek.charles-lindecker.com)

Tu peux aussi ouvrir simplement `index.html` dans un navigateur pour admirer le desastre en local.

## Ce que fait le projet

- intercepte des clics sur des boutons ou des liens
- vide la page
- injecte une video de Shrek en plein ecran
- active le son
- transforme un site normal en incident produit

## Modes disponibles

### 1. Mode cible: `shrek.min.js`

N'affecte que les elements avec la classe `shrek-troll`.

```html
<button class="shrek-troll">Clique pas</button>
<button class="shrek-troll">Moi non plus</button>

<script src="https://shrek.charles-lindecker.com/dist/shrek.min.js"></script>
```

Usage recommande si tu veux garder un semblant de controle sur le niveau de nuisance.

### 2. Mode total: `shrek-all.min.js`

Affecte tous les `<button>` et tous les `<a>` de la page.

```html
<a href="#">Ne clique pas</a>
<button>Moi non plus</button>

<script src="https://shrek.charles-lindecker.com/dist/shrek-all.min.js"></script>
```

Usage recommande si ton objectif est de ruiner une interface avec conviction.

## Structure du projet

```text
ShrekSophone/
|-- index.html              # Landing page du projet
|-- src/
|   |-- img/
|   |   `-- shrek.jpg       # Visuel de la page
|   |-- lib/
|   |   |-- dom.js          # Selection et interception des elements
|   |   `-- video.js        # Creation de la video plein ecran
|   |-- style/
|   |   |-- input.css       # Source CSS
|   |   `-- output.css      # CSS compile
|   |-- shrek.js            # Version ciblee
|   `-- shrek-all.js        # Version totale
|-- dist/                   # Builds CDN minifies
|-- meta/                   # Favicons et manifest
|-- test-github/            # Exemple d'integration via GitHub Pages
`-- test-vps/               # Exemple d'integration via VPS
```

## Dev local

### Ouvrir le projet

```bash
git clone https://github.com/LINDECKER-Charles/ShrekSophone.git
cd ShrekSophone
```

Puis ouvre `index.html` dans ton navigateur.

### Recompiler le CSS

```bash
npx @tailwindcss/cli -i src/style/input.css -o src/style/output.css
```

Tres utile si tu touches au style. Beaucoup moins utile si tu veux juste deployer du chaos brut.

## Comportement technique

- `src/shrek.js` cible `.shrek-troll`
- `src/shrek-all.js` cible `button, a`
- `src/lib/dom.js` neutralise les clics d'origine et remplace le contenu du `body`
- `src/lib/video.js` construit la video fullscreen et lance la lecture

Le projet est volontairement simple: pas de framework, pas de bundler obligatoire pour la page, pas de sur-ingenierie. Juste un concept discutable execute tres serieusement.

## Pourquoi ce projet existe

Excellente question. Plusieurs hypotheses:

- pour tester rapidement un script CDN
- pour troller des collegues avec une precision chirurgicale
- pour honorer la culture web absurde comme il se doit
- parce que "et si Shrek jouait du saxo sur mon site ?" est une phrase qui meritait une reponse

## Roadmap tres raisonnable

- plus de variantes visuelles
- options de configuration du lecteur
- version encore plus douteuse

## Contribution

Les PR sont bienvenues si elles respectent au moins une de ces conditions:

- elles rendent le projet plus propre
- elles rendent le projet plus drole
- elles rendent le projet plus absurde sans le rendre inutilement complique

## Licence morale

Fais-en bon usage, c'est-a-dire probablement un usage tres mauvais.
