# Frontend Mentor - QR Code Component Solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

---

## 📋 Table of Contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

---

## 📌 Overview

### 📱 Screenshots

#### Mobile (iPhone SE – 375x667)

![Mobile Screenshot](<./screenshots/_article-preview-component-master_index.html(iPhone SE).png>)

#### Desktop (1440x980)

![Desktop Screenshot](<./screenshots/_article-preview-component-master_index.html.png>)

The layout is fully responsive and adapts to various screen sizes while maintaining consistent proportions and paddings.

---

### 🔗 Links

- **Solution URL**: [View the solution on GitHub](https://github.com/o-k-harmash/Article-preview-component)
- **Live Site URL**: [View live demo](https://o-k-harmash.github.io/Article-preview-component/)

---

## 🔧 My Process

Tooltip and Footer Behavior Implementation: Summary & Notes
🧩 Problem Overview
The task involved implementing a tooltip display on desktop and a footer transformation on mobile view as part of a social sharing UI component. The functionality is somewhat similar to a classic responsive navigation menu — for example, a hamburger button that reveals a sidebar menu on smaller screens.

✅ Approach
It was decided to delegate only the toggling logic to JavaScript, which simply updates the data-share attribute on the footer element. JavaScript answers the question “what should be displayed?”, while the UI layer (CSS) answers “how should it look and behave?”.

The UI is fully responsible for deciding which layout to show based on the screen size. Two distinct views are implemented:

A tooltip-style popup shown above the share button on desktop.

A footer replacement view shown on mobile.

This separation is clean, intuitive, and aligns well with modern responsive design patterns.

⚠️ Limitations & Accessibility Consideration
What was not implemented in this task is ARIA accessibility management. Specifically:

The aria-hidden attribute is not updated dynamically to reflect visibility changes.

This may affect screen reader support and accessibility tree clarity.

Proper aria-hidden, role="tooltip" usage, and keyboard navigation handling could be considered for future improvement.

### ✅ Built With

- Semantic HTML5
- SEO with `<meta>` tags and other metadata
- CSS with cascade and inheritance
- Flexbox layout
- Mediaquery
- Fluid font
- adaptive + optimized images
- BEM, SMACSS

---

### 🧠 What I Learned

I deepened my understanding of:

- **Semantic HTML5**: Using meaningful tags and clean structure
- **Custom attributes**: Including `data-*` attributes when needed
- **CSS cascade and inheritance**: Applying styles thoughtfully using the cascade and specificity
- **Efficient selector usage**: Combining selectors and using combinators instead of over-classing

I also focused on building a structure that’s both **logical** and **scalable**, avoiding unnecessary classes when tag-based styling suffices.
Working with adaptive loyaut, fluid fonts, adaptive and optimized images.

---

### 🚀 Continued Development

I plan to build on these core concepts and use them as a solid foundation for more advanced layouts and components. Future learning will expand into accessibility (a11y), reusable design systems, and responsiveness using modern CSS tools like `grid`, `clamp()`, and container queries.

---

### 📚 Useful Resources

- [HTML – web.dev](https://web.dev/learn/html) – A great deep-dive into modern semantic HTML.
- [JS – web.dev](https://web.dev/learn/javascript) – A great deep-dive into modern js.
- [CSS fluid design – web.dev](https://web.dev/learn/design/welcome?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fdesign&hl=ru#article-https://web.dev/learn/design/welcome&hl=ru) – Covers key CSS concepts like specificity, cascade, and layout techniques.

---

## 👤 Author

- Frontend Mentor – [@o-k-harmash](https://www.frontendmentor.io/profile/o-k-harmash)
- GitHub – [@o-k-harmash](https://github.com/o-k-harmash)
