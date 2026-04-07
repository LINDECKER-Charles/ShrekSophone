<div align="center">

# Shreksophone

### Un clic. Un saxo. Plus aucun respect pour l'interface.

[![Production](https://img.shields.io/badge/production-online-88d942?style=for-the-badge)](https://shrek.charles-lindecker.com)
[![Repository](https://img.shields.io/badge/github-ShrekSophone-1f6feb?style=for-the-badge)](https://github.com/LINDECKER-Charles/ShrekSophone)
[![Chaos Level](https://img.shields.io/badge/chaos-certified_swamp-3c8d2f?style=for-the-badge)](https://shrek.charles-lindecker.com)

**Production:** [shrek.charles-lindecker.com](https://shrek.charles-lindecker.com)

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
| Site en production | [shrek.charles-lindecker.com](https://shrek.charles-lindecker.com) |
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

## Modes disponibles

### Mode cible

**Script:** `shrek.min.js`

N'affecte que les elements avec la classe `shrek-troll`.

```html
<button class="shrek-troll">Clique pas</button>
<button class="shrek-troll">Moi non plus</button>

<script src="https://shrek.charles-lindecker.com/dist/shrek.min.js"></script>
```

**Quand l'utiliser:** si tu veux garder un semblant de controle sur le niveau de nuisance.

### Mode total

**Script:** `shrek-all.min.js`

Affecte tous les `<button>` et tous les `<a>` de la page.

```html
<a href="#">Ne clique pas</a>
<button>Moi non plus</button>

<script src="https://shrek.charles-lindecker.com/dist/shrek-all.min.js"></script>
```

**Quand l'utiliser:** si ton objectif est de ruiner une interface avec conviction.

---

## Demo

Le site de demo en production est ici:

## [shrek.charles-lindecker.com](https://shrek.charles-lindecker.com)

Tu peux aussi ouvrir `index.html` en local pour admirer le desastre sans passer par le CDN public.

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
|-- dist/                   # Builds CDN minifies en production
|-- meta/                   # Favicons, manifest et assets SEO
|-- scripts/                # Scripts de build
|-- tests/                  # Tests du coeur du projet
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
deploiement automatique en production
```

Autrement dit: meme le chaos est deploye avec methode.

---

## Contribution

Les PR sont bienvenues si elles respectent au moins une de ces conditions:

- elles rendent le projet plus propre
- elles rendent le projet plus drole
- elles rendent le projet plus absurde sans le rendre inutilement complique

---

## Licence morale

Le projet est distribue sous licence Apache-2.0 avec fichier [NOTICE](F:\Git\ShrekSophone\NOTICE) d'attribution.

En clair:

- tu peux reutiliser, modifier et redistribuer le projet
- tu dois conserver la licence
- tu dois conserver l'attribution au projet original et a son auteur

Fais-en bon usage, c'est-a-dire probablement un usage tres mauvais.
