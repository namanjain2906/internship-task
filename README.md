# Internship Task Project

A responsive plant-themed web application built as an internship assignment using **React + Vite**, **Tailwind CSS**, and **FontAwesome Icons**.

Live Project: **[https://internship-task-one.vercel.app/](https://internship-task-one.vercel.app/)**

---

## 🌿 Overview

This project is a modern and visually appealing frontend UI built to demonstrate skills in:

* React component structure
* Tailwind CSS utility-first styling
* Responsiveness across all devices
* Clean, reusable UI components
* FontAwesome for iconography

The website includes multiple sections such as:

* Hero Section
* Trending Plants
* Best Oxygen Plants
* Customer Reviews
* Footer Section
* Navigation Bar

---

## 📁 Folder Structure

Below is the structure of the project (as seen in VS Code):

```
src/
│
├── assets/
│   └── trendyPlant2.png
│
├── components/
│   ├── Content.jsx
│   ├── CustReviewSection.jsx
│   ├── DescriptiveSection.jsx
│   ├── Footer.jsx
│   ├── Heading.jsx
│   ├── HeroSection.jsx
│   ├── Navbar.jsx
│   ├── PlantCardLg.jsx
│   ├── PlantCardSm.jsx
│   ├── ReviewCard.jsx
│   ├── TopSellingSection.jsx
│   └── TrendySection.jsx
│
├── pages/
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🚀 Installation & Setup

Clone the project and run it locally.

### **1. Clone the repo**

```bash
git clone <repository-url>
```

### **2. Navigate into the project folder**

```bash
cd internship-task-one
```

### **3. Install dependencies**

```bash
npm install
```

### **4. Start development server**

```bash
npm run dev
```

---

## 🎨 Technologies Used

* **React.js** – Component-based UI
* **Vite** – Fast bundler and dev server
* **Tailwind CSS** – Utility-first styling
* **FontAwesome** – Icons (stars, arrows, social icons)
* **Vercel** – Deployment

---

## ⭐ Features Implemented

* Fully responsive UI
* Reusable card components (Plant Cards, Review Cards)
* Animated sections and shadow/gradient usage
* Background SVG frames
* Responsive navbar and footer
* Clean layout with modern typography

---

## 🔧 How FontAwesome Was Added

```bash
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
```

Then imported as:

```jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
```

---

## 📦 Deployment

The project is deployed on Vercel.
To deploy:

```bash
npm run build
```

Upload the **dist/** folder or connect GitHub repo directly to Vercel.

---

## 📸 Screenshots

The README can include visual previews of each section (optional).

---

## 📝 Conclusion

This project showcases frontend development skills, covering responsive layouts, modular React components, modern UI design, and clean Tailwind CSS usage.

Feel free to explore the live demo:
👉 [https://internship-task-one.vercel.app/](https://internship-task-one.vercel.app/)

---

For improvements or suggestions, feel free to reach out!
