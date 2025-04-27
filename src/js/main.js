// File: src/js/main.js

import '../yellow.css';
import { getParkData } from './parkService.mjs';

const parkData = getParkData();

// Update Disclaimer link
const disclaimer = document.querySelector(".disclaimer > a");
if (disclaimer) {
  disclaimer.href = parkData.url;
  disclaimer.innerHTML = parkData.fullName;
}

// Update Page Title
document.title = parkData.fullName;

// Update Hero Image
const heroImg = document.getElementById("hero-img");
if (heroImg) {
  heroImg.src = parkData.images[0]?.url || "";
  heroImg.alt = parkData.images[0]?.altText || parkData.fullName;
}

// Update Hero Content
const heroContent = document.getElementById("hero-content");
if (heroContent) {
  heroContent.innerHTML = `
    <a href="/" class="hero-banner__title">${parkData.name}</a>
    <p class="hero-banner__subtitle">
      <span>${parkData.designation}</span>
      <span>${parkData.states}</span>
    </p>
  `;
}
