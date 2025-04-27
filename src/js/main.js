import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

document.querySelector("head > title").textContent = parkData.fullName;

document.getElementById("hero-img").src = parkData.images[0].url;
document.getElementById("hero-img").alt = parkData.images[0].altText || parkData.fullName;

document.getElementById("hero-content").innerHTML = parkInfoTemplate(parkData);
