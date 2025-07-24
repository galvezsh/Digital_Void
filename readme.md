# 🌐 DigitalVoid

**DigitalVoid** is a modular and multilingual web project built entirely with **HTML**, **CSS**, and **vanilla JavaScript**, using a custom runtime rendering engine and a component-oriented architecture.

Unlike frameworks like React or Vue, DigitalVoid relies on a fully native and framework-free approach, using JavaScript classes to dynamically generate content, support multiple languages, and simulate reusable components.

---

## ⚙️ How It Works

Each HTML file serves as a lightweight entry point. It only needs minimal markup and a corresponding JS file (`about.js`, `projects.js`, etc.). That JS file does the following:

1. Loads the **`engine.js`** file, which acts as the **component renderer and entry point**.
2. Loads the **multilanguage manager** (`strings.js`), which selects the locale automatically based on a **browser cookie**.
3. Dynamically builds the page by rendering imported UI components, each defined in its own file under `/js/componentes`.


### ✅ What's New

- All UI components (e.g., Navbar, Footer, Toast) are now in **separate JavaScript files** inside the `/js/componentes/` directory.
- `engine.js` no longer contains the full component definitions — it now **orchestrates** rendering and **connects logic**.
- There's no need to manually create full HTML blocks for components. You simply **declare an element with a class** in your HTML (e.g. `<nav></nav> || <div class="modal"></div>`) and the engine will render it automatically.
- This makes the system even more similar to **React**, as components are:
  - Fully isolated and reusable
  - Auto-rendered
  - Data-driven and dynamic

---

## 📁 Project Structure

```plaintext
Digital_Void/
├── css/
│   ├── about.css
│   ├── animations.css
│   ├── errors.css
│   ├── home.css
│   ├── projects.css
│   ├── shared.css
│   └── themes.css
├── docs/
│   ├── flipper.html
│   ├── minecraft.html
│   └── homelab.html
├── errors/
│   ├── 400.html
│   ├── 401.html
│   ├── ...
│   └── 504.html
├── js/
│   ├── componentes/
│   │   ├── Footer.js
│   │   ├── Modal.js
│   │   ├── NavBar.js
│   │   ├── Toast.js
│   │   └── Void.js
│   ├── about.js
│   ├── engine.js  # Only handles rendering logic and component bootstrapping
│   ├── home.js
│   └── projects.js
├── languages/
│   ├── en.js       # English strings
│   ├── es.js       # Spanish strings
│   └── strings.js  # Language detection and loader
├── resources/
│   ├── images/
│   └── videos/
├── about.html
├── credentials.txt
├── home.html
├── projects.html
├── robots.txt
└── .gitignore
```

---

## 🌍 Multilanguage Support

The site supports multiple languages (currently English and Spanish) using modular language files:

- `languages/en.js`, `languages/es.js` — locale strings
- `languages/strings.js` — detects language preference via cookies and loads the corresponding locale

Each page-specific script (like `about.js`) loads `strings.js`, which then uses the desired locale when rendering content. You simply pass the language code to the string manager, and it handles the rest.


## ♻️ Component-Like Reusability

DigitalVoid’s rendering engine simulates React-like behavior using native JavaScript classes:

- UI components like NavBar, Footer, and Toast are now standalone modules inside /js/componentes/.
- Components are automatically created and rendered by the engine — you just need to declare a placeholder tag in your HTML (e.g. `<footer></footer> || <div class="toast"></div>`).
- Logic, structure, and styling are handled dynamically — no need to repeat layout or markup patterns.


## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
  - Object-Oriented Programming (OOP)
  - DOM manipulation
  - Dynamic rendering

---

## 🚧 Purpose

DigitalVoid explores a clean and scalable way to build interactive, localized, and reusable interfaces without relying on third-party frameworks or build tools.

- Provide a testbed for advanced JavaScript logic without using libraries.
- Support multilingual, modular, and scalable web page generation.
- Simulate a component-based architecture using just native technologies.


## 📜 License

This project is released under the **MIT License**.  
Feel free to use, modify, and distribute it.
