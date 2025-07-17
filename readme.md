# 🌐 DigitalStudio

**DigitalStudio** is a web project built entirely with **HTML**, **CSS**, and **vanilla JavaScript**, following a unique architecture focused on **object-oriented programming (OOP)** and **runtime rendering**.

Rather than relying on frameworks like React or Vue, DigitalStudio features a self-built engine that dynamically generates the page content through reusable JS objects and multilingual support.


## ⚙️ How It Works

Each HTML file acts as a lightweight entry point — it contains minimal markup and simply loads a dedicated JavaScript file (e.g., `about.js`, `portfolio.js`, etc.). That script:

1. Loads the **`engine.js`** file, which contains all core classes and rendering logic.
2. Loads the **language system** from `strings.js`, which automatically selects the correct locale based on a **browser cookie**.
3. Builds the actual HTML content using the engine’s predefined object structures.


## 📁 Project Structure

```plaintext
DigitalStudio/
├── css/
│ ├── about.css
│ ├── animations.css
│ ├── errors.css
│ ├── home.css
│ ├── projects.css
│ ├── shared.css
│ └── themes.css
├── docs/
├── errors/
│ ├── 400.html
│ ├── 401.html
│ ├── ...
│ └── 504.html
├── js/
│ ├── about.js
│ ├── engine.js # Core rendering engine with all classes
│ ├── home.js
│ └── projects.js
├── languages/
│ ├── en.js # English locale
│ ├── es.js # Spanish locale
│ └── strings.js # Multilanguage manager (cookie-based)
├── resources/ # Not uploaded for size
│ ├── images/
│ └── videos/
├── about.html
├── credentials.txt
├── projects.html
├── robots.txt
├── home.html
└── .gitignore
```


## 🌍 Multilanguage Support

The site supports multiple languages (currently English and Spanish) using modular language files:

- `languages/en.js`, `languages/es.js` — locale strings
- `languages/strings.js` — detects language preference via cookies and loads the corresponding locale

Each page-specific script (like `about.js`) loads `strings.js`, which then uses the desired locale when rendering content. You simply pass the language code to the string manager, and it handles the rest.


## ♻️ Component-Like Reusability

Thanks to the `engine.js`, content is built from reusable object-oriented classes that simulate the behavior of components:

- Sections, labels, buttons, and other elements are generated through instantiable objects.
- Layout logic and structure is **centralized**, reducing repetition and ensuring consistency across pages.
- This approach is conceptually similar to React, but fully native.


## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
  - Object-Oriented Programming (OOP)
  - DOM manipulation
  - Dynamic rendering


## 🚧 Purpose

DigitalStudio explores a lightweight and framework-free approach to dynamic website construction. It aims to:

- Provide a testbed for advanced JavaScript logic without using libraries.
- Support multilingual, modular, and scalable web page generation.
- Simulate a component-based architecture using just native technologies.


## 📜 License

This project is released under the **MIT License**.  
Feel free to use, modify, and distribute it.
