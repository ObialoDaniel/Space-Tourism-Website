# Frontend Mentor - Space Tourism Website

![Design preview for the Space Tourism Website](./preview.jpg)

## Overview

### The Challenge

This is my solution to the [Space Tourism Website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). The goal was to build a multi-page space tourism website that matches the provided Figma design as closely as possible.

Users are able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle between tabs to see new destination, crew, and technology information
- Navigate between the four pages: Home, Destination, Crew, and Technology

---

### Screenshot

![Screenshot of the project](./assets/screenshot.png)

---

### Links

- **Live Site URL:** [Add your live site URL here]
- **Repository URL:** [Add your GitHub repo URL here]

---

## My Process

### Built With

- Semantic HTML5
- CSS3 custom properties (variables)
- CSS Grid and Flexbox
- Glassmorphism (`backdrop-filter`)
- CSS animations and keyframes
- Vanilla JavaScript (ES6+)
- Mobile-first responsive design

---

### Project Structure

```
space-tourism-website/
│
├── assets/
│   ├── home/
│   │   ├── background-home-desktop.jpg
│   │   ├── background-home-tablet.jpg
│   │   └── background-home-mobile.jpg
│   ├── destination/
│   ├── crew/
│   ├── technology/
│   └── shared/
│       ├── icon-hamburger.svg
│       └── icon-close.svg
│
├── index.html       ← HTML structure
├── style.css        ← All styling
├── index.js         ← All interactivity
└── README.md
```

---

### What I Learned
**1. CSS Custom Properties**

Using variables for colors and fonts made it easy to stay consistent across all sections:

```css
:root {
  --clr-dark:     #0B0D17;
  --clr-accent:   #D0D6F9;
  --clr-white:    #FFFFFF;
  --ff-serif:     'Bellefair', serif;
  --ff-sans-cond: 'Barlow Condensed', sans-serif;
  --ff-sans:      'Barlow', sans-serif;
}
```

**2. Glassmorphism**

The frosted glass navigation effect requires two properties working together — a semi-transparent background AND `backdrop-filter`:

```css
.primary-nav {
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
}
```

The effect only becomes visible when there is rich content (like the hero image) behind the element.

**3. CSS Pseudo-elements for the hamburger icon**

Instead of using extra HTML elements, `::before` and `::after` pseudo-elements create the top and bottom bars of the hamburger icon with the middle bar being the real element itself.

**4. Intersection Observer API**

Used to track which section is currently in view and automatically highlight the correct nav link:

```javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // update active nav link
    }
  });
}, { threshold: 0.5 });
```

**5. Background image layering**

A comma between the gradient and image URL is required to stack them as separate background layers:

```css
background:
  linear-gradient(to right, rgba(11,13,23,0.85) 40%, transparent 100%),
  url('./assets/home/background-home-desktop.jpg') center/cover no-repeat;
```

---

### Continued Development

Areas I want to improve going forward:

- Add smooth page transitions between sections
- Improve accessibility with better focus management and ARIA attributes
- Refactor the JavaScript to use a more structured, modular pattern
- Add tablet-specific breakpoints to better match the design at mid-screen sizes

---

### Useful Resources

- [Kevin Powell's Scrimba Course](https://scrimba.com/learn/spacetravel) — A free walkthrough of this exact challenge. Very helpful for understanding layout decisions.
- [MDN — backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) — Explains how glassmorphism works and browser support details.
- [MDN — Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) — Used for the active nav link on scroll feature.
- [Google Fonts — Bellefair & Barlow](https://fonts.google.com/) — The two font families used in this project.
- [Frontend Mentor Community](https://www.frontendmentor.io/community) — Great place to get feedback and see other solutions.

---

## Author

- **Frontend Mentor Profile:** [Add your profile link here]
- **GitHub:** [Add your GitHub link here]

---

## Acknowledgements

- Design by [Frontend Mentor](https://www.frontendmentor.io)
- Original course collaboration with [Scrimba](https://scrimba.com) and [Kevin Powell](https://www.youtube.com/kevinpowell)
