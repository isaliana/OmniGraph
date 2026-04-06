# 📖 Narrative Nexus

**An interactive character relationship explorer for literary works.**

> *Currently featuring: The Brothers Karamazov by Fyodor Dostoevsky*

---

## ✨ Features

- **15 Characters** with illustrated portraits in a consistent hand-drawn watercolour style
- **Physics-driven graph** — nodes float organically using D3.js force simulation
- **Click to focus** — selecting a character pulls them to centre and clusters their connections by relationship type
- **Sentiment-coloured links** — connections are colour-coded by relationship category (family, love, rivalry, mentor, etc.)
- **Hover tooltips** — mouse over any character to see their bio and relationship to the selected character
- **Search bar** — instantly find and focus any character by name or nickname
- **Bilingual UI** — full English / 中文 toggle, including all labels, character names, and the connection legend
- **Connection Legend** — sidebar legend explaining all 8 relationship colour categories
- **Customisable appearance** — change the focus highlight colour and background via the sidebar
- **Battery-friendly** — the D3 simulation auto-pauses when the tab is hidden

---

## 🎨 Connection Legend

| Colour | Category |
|--------|----------|
| 🟡 Gold | Family (father-son, brothers) |
| 🟤 Muted Gold | Illegitimate |
| 🔴 Red | Romantic Love |
| 🟣 Purple | Ex-fiancée / Unrequited Love |
| 🟠 Orange | Conflict / Rivalry / Scheme |
| 🟢 Green | Spiritual Mentor |
| 🔵 Blue | Friendship / Intellectual Influence |
| ⚫ Grey | Acquaintance / Servant |

---

## 🚀 Getting Started

This is a pure **HTML + JavaScript** project with no build step required.

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/NarrativeNexus.git
   cd NarrativeNexus
   ```

2. Open `index.html` in your browser:
   ```bash
   open index.html
   ```

That's it — no server, no dependencies to install!

---

## 🗂 Project Structure

```
NarrativeNexus/
├── index.html          # Main application (all logic self-contained)
└── assets/
    └── portraits/      # 15 circular character portrait PNGs
        ├── fyodor.png
        ├── dmitri.png
        ├── ivan.png
        ├── alyosha.png
        ├── smerdyakov.png
        ├── katerina.png
        ├── grushenka.png
        ├── zosima.png
        ├── lise.png
        ├── rakitin.png
        ├── ilyusha.png
        ├── snegiryov.png
        ├── grigory.png
        ├── miusov.png
        └── khokhlakova.png
```

---

## 🛠 Tech Stack

| Technology | Role |
|------------|------|
| **D3.js v7** | Force-directed physics graph and SVG rendering |
| **Vanilla JS** | All interaction logic, no framework needed |
| **CSS3** | Glassmorphism UI, animations, dark theme |
| **Google Fonts** | Cinzel (headings) + Lato (body) |

---

## 🗺 Roadmap

- [ ] Dynamic data loading from external `data.json`
- [ ] Support for additional books / stories
- [ ] LLM-powered data generation for any user-inputted title
- [ ] Mobile-responsive layout
- [ ] Canvas renderer for larger character sets (20+ nodes)

---

## 📄 License

MIT — feel free to fork and adapt for your own favourite story!
