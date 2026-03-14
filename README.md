# ARK ASA HUB 🦖

A fan-made React web application inspired by **ARK: Survival Ascended**.
This project showcases creatures, survival tips, an interactive map, and community news for *The Island*, built following clean code principles and responsive design practices.

---

# 🚀 About The Project

ARK ASA HUB is a responsive multi-page web application developed with **React** and **Vite**.
The goal of the project is to demonstrate:

* Component-based architecture
* Clean folder structure and naming conventions
* JSON data rendering
* CRUD functionality using React state
* Third-party component integration (Leaflet)
* RSS feed integration
* Firebase Hosting deployment
* Responsive design using Flexbox and media queries

The application provides useful information about **ARK: Survival Ascended**, including creatures, survival tips, an interactive map, and project news.

---

# 🌐 Live Demo

The project is deployed using **Firebase Hosting**.

https://ark-proyecto.web.app

---

# 🏠 Pages Overview

## Home (`/` and `/home`)

The home page includes:

* Hero section introducing the project
* Featured creature cards rendered dynamically from a JSON array
* Survival objectives section
* CRUD board allowing users to manage posts (create, edit, delete)
* Responsive layout for mobile and desktop

---

## 🗺 Map (`/maps`)

Interactive map of **The Island** implemented with **React Leaflet**.

Features:

* Custom ImageOverlay map
* Dynamic markers loaded from JSON
* Zoom and navigation enabled

---

## 📩 Contact (`/contact`)

Community contact page including:

* Community information section
* Contact form with basic validation
* Feedback messages

---

## 📰 News (`/news`)

The news page contains articles related to the project.

Each news item links to an internal article page inside the application.

Example:

https://ark-proyecto.web.app/news/evento-invierno

---

# 🧩 JSON CRUD System

The project includes a **CRUD system implemented with React state and a JSON array**.

Users can:

* Create new posts
* Read posts from a JSON array
* Update existing posts
* Delete posts
* Filter posts by category
* Search posts dynamically

This functionality is implemented in the **TribeBoard component**.

---

# 📡 RSS Feed

The project includes a working **RSS feed**.

RSS file:

https://ark-proyecto.web.app/rss/ark-news.xml

Each RSS item points to a news page inside the application.

Example:

https://ark-proyecto.web.app/news/evento-invierno

This RSS feed can be opened in any RSS reader.

---

# 📷 RSS Reader Screenshot

The screenshot below shows the RSS feed opened in a feed reader pointing to the deployed Firebase application.

![RSS Reader Screenshot](./public/images/rss-reader-screenshot.png)

---

# 🛠 Built With

* React
* Vite
* React Router DOM
* React Leaflet
* Leaflet
* React Icons
* Firebase Hosting

---

# 📦 Project Structure

```
ark-asa-hub
│
├── public
│   ├── rss
│   │   └── ark-news.xml
│   └── images
│       └── rss-reader-screenshot.png
│
├── src
│   │
│   ├── components
│   │   ├── creature-card
│   │   ├── footer
│   │   ├── header
│   │   ├── tips-board
│   │   └── tribe-board
│   │
│   ├── pages
│   │   ├── home
│   │   ├── maps
│   │   ├── contact
│   │   ├── news
│   │   └── news-detail
│   │
│   ├── data
│   │   ├── creatures-data.js
│   │   ├── map-points-data.js
│   │   ├── tribe-posts-data.js
│   │   └── news-data.js
│   │
│   ├── app-router
│   │   └── AppRouter.jsx
│   │
│   ├── firebase
│   │   └── firebase-config.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── firebase.json
├── .firebaserc
├── package.json
└── README.md
```

---

# 📚 Tutorials and Resources

These resources helped during development:

React documentation
https://react.dev

Firebase Hosting documentation
https://firebase.google.com/docs/hosting

README template inspiration
https://github.com/othneildrew/Best-README-Template

---

# ⚙ Installation

Clone the repository:

```
git clone https://github.com/Alexander0044/proyecto-ark-v1.git
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Build the project:

```
npm run build
```

---

# ☁ Firebase Deployment

The application is deployed using Firebase Hosting.

Commands used:

```
npm run build
firebase deploy
```

---

# 📱 Responsive Design

The project is fully responsive.

Responsive techniques used:

* Flexbox layouts
* Media queries
* Mobile-friendly navigation
* Fluid containers

---

# 👨‍💻 Author

Alexander Castro
DAW Web Development Project
