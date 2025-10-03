# Shrek Sophone 💚🎷

Bienvenue dans le projet le plus inutile et donc le plus essentiel de GitHub.
Une page troll qui fait danser Shrek en plein écran sur du saxophone.
Parce que… pourquoi pas ?

---

## 🎜 Démo

> Tu peux tester directement sur : [https://shrek.hexanti.fr](https://shrek.hexanti.fr)
> Ou bien ouvre simplement `index.html` dans ton navigateur et profite du spectacle.

---

## 🌐 Utilisation en CDN

Le projet est disponible directement via **CDN maison** ou via **GitHub Pages**.
Il existe **2 scripts différents** selon le niveau de chaos que tu veux dans ta page :

### 1. Version ciblée : `shrek.min.js`

Affecte uniquement les éléments ayant la classe `shrek-troll`.

```html
<button class="shrek-troll">Clique pas</button>
<button class="shrek-troll">Moi non plus</button>

<script src="https://shrek.hexanti.fr/dist/shrek.min.js"></script>
```

👉 Dès que tu cliques sur un bouton `shrek-troll`, la page entière est remplacée par une vidéo de Shrek en fullscreen avec le son à fond.

---

### 2. Version totale : `shrek-all.min.js`

Affecte **tous les boutons et tous les liens** (`<button>` et `<a>`).

```html
<a href="#">Ne clique pas</a>
<button>Moi non plus</button>

<script src="https://shrek.hexanti.fr/dist/shrek-all.min.js"></script>
```

👉 Ici, impossible d’y échapper : n’importe quel clic sur un bouton ou un lien déclenche Shrek.
Parfait pour un chaos absolu 💚🎷

---

## 🎞 Source vidéo

Par défaut, la vidéo est servie depuis :

```
https://shrek.hexanti.fr/shrek.mp4
```

---

## 🗂 Structure

```
shrek-sophone/
├── index.html           # La page principale
├── src/                 # Code source organisé
│   ├── lib/             # Fonctions génériques (DOM, vidéo)
│   │   ├── dom.js
│   │   └── video.js
│   ├── shrek.js         # Version ciblée
│   └── shrek-all.js     # Version chaos total
├── dist/                # Builds minifiés pour le CDN
│   ├── shrek.min.js
│   └── shrek-all.min.js
├── shrek.mp4            # La vidéo troll
├── meta/                # Favicons & manifest
├── test-github/         # Exemple via CDN GitHub Pages
│   └── index.html
└── test-vps/            # Exemple via CDN VPS (hexanti.fr)
    └── index.html
```

---

## 🚀 Installation locale

Si tu veux tester sans CDN :

```bash
git clone https://github.com/LINDECKER-Charles/ShrekSophone.git
cd ShrekSophone
open index.html
```

---

## 🥝 Features

* Shrek en plein écran
* Un groove au saxophone inarrêtable
* 200% troll, 0% utile
* Version ciblée ou version chaos total
* Fonctionne mieux qu’un café ☕

---

## 🤝 Contribution

Envie d’ajouter plus de mèmes, d’animations, ou de musiques ridicules ?
Les PR sont les bienvenues, mais sache que Shrek veille.

---

## ⚙️ CI/CD

* Push sur **`dev`** → Lint + build + minification avec esbuild.
* CI merge automatiquement `dev` → `main`.
* `main` contient le code + les fichiers minifiés dans `dist/`.
* CD déploie automatiquement sur le VPS [shrek.hexanti.fr](https://shrek.hexanti.fr).

---

*"SomeBODY once told me..."* mais ici, c’est plutôt **Saxo-body**. 🎷💚
