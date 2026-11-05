/**
 * 20 de Noviembre - Efecto del Dia de la Revolucion Mexicana
 * Anima un sombrero revolucionario, fotos históricas, papel picado y confeti.
 * Se autodispara una vez por sesion de navegador.
 */
(function() {
  function inject() {
    const previousOverlay = document.getElementById("revolucion-overlay");
    if (previousOverlay) previousOverlay.remove();

    const overlay = document.createElement("div");
    overlay.id = "revolucion-overlay";
    overlay.classList.add("playing");

    const papelLine = document.createElement("div");
    papelLine.className = "revolucion-papel-line";
    papelLine.setAttribute("aria-hidden", "true");
    ["#087f48", "#d83a32", "#f5c451", "#fff3d3", "#087f48", "#d83a32", "#f5c451", "#fff3d3"].forEach((color, index) => {
      const flag = document.createElement("span");
      flag.className = "revolucion-papel";
      flag.style.setProperty("--paper-color", color);
      flag.style.setProperty("--paper-delay", (index * -0.22) + "s");
      papelLine.appendChild(flag);
    });
    overlay.appendChild(papelLine);

    const train = document.createElement("div");
    train.className = "revolucion-train";
    train.setAttribute("aria-hidden", "true");
    train.innerHTML = `
      <svg viewBox="0 0 640 230">
        <defs>
          <linearGradient id="train-boiler" x1="0" x2="0" y1="0" y2="1">
            <stop stop-color="#68717a"/><stop offset=".48" stop-color="#252c32"/><stop offset="1" stop-color="#111619"/>
          </linearGradient>
          <linearGradient id="train-brass" x1="0" x2="1">
            <stop stop-color="#8c5426"/><stop offset=".45" stop-color="#f4c451"/><stop offset="1" stop-color="#9a5d25"/>
          </linearGradient>
        </defs>
        <path d="M0 204h640" stroke="#d7b56d" stroke-width="5" opacity=".8"/>
        <path d="M42 216h570M80 203v16m48-16v16m48-16v16m48-16v16m48-16v16m48-16v16m48-16v16m48-16v16m48-16v16m48-16v16" stroke="#8f6944" stroke-width="5"/>
        <g class="revolucion-smoke">
          <circle cx="128" cy="35" r="20" fill="#fff3d3" opacity=".42"/>
          <circle cx="100" cy="20" r="13" fill="#fff3d3" opacity=".35"/>
          <circle cx="75" cy="33" r="9" fill="#fff3d3" opacity=".3"/>
        </g>
        <path d="M53 113h78l24 32v47H42v-47z" fill="#a82d25" stroke="#261b18" stroke-width="7"/>
        <path d="M63 122h57v38H63z" fill="#f3c45d" stroke="#341f17" stroke-width="5"/>
        <path d="M70 128h20v24H70zm28 0h16v24H98z" fill="#18252a"/>
        <path d="M139 151h105v41H135z" fill="#b33328" stroke="#261b18" stroke-width="7"/>
        <path d="M154 160h77v9h-77z" fill="url(#train-brass)"/>
        <path d="M91 111V71h29v42M91 72h29l-5-17H96z" fill="url(#train-brass)" stroke="#261b18" stroke-width="6"/>
        <path d="M101 51V24h15v28" fill="#242b2f" stroke="#171a1c" stroke-width="6"/>
        <path d="M94 25h29l-4-10H98z" fill="#d6a440" stroke="#26201a" stroke-width="4"/>
        <path d="M219 110h299a28 28 0 0 1 28 28v54H242v-41h-23z" fill="url(#train-boiler)" stroke="#15191b" stroke-width="8"/>
        <path d="M245 125h275" stroke="#d5aa4b" stroke-width="7"/>
        <path d="M280 107V74h25v34m40 0V64h25v44m39 0V72h25v36" fill="#313a40" stroke="#171b1e" stroke-width="6"/>
        <path d="M277 74h31l-4-10h-23zm40-10h35l-5-11h-25zm40 10h34l-4-10h-26z" fill="#c99a3c" stroke="#201c18" stroke-width="4"/>
        <path d="M538 142h34l25 25v25h-59z" fill="#a82d25" stroke="#171b1e" stroke-width="7"/>
        <path d="M548 151h18v20h-18z" fill="#f3c45d" stroke="#281e17" stroke-width="4"/>
        <circle cx="597" cy="176" r="14" fill="#f5d477" stroke="#211b16" stroke-width="5"/>
        <path d="M595 190h26l-18 17h-38z" fill="#333b40" stroke="#15191b" stroke-width="5"/>
        <path d="M142 140h16m78 0h18m273 0h18" stroke="#f5c451" stroke-width="5"/>
        <g fill="#171b1e" stroke="#d5aa4b" stroke-width="7">
          <circle cx="104" cy="190" r="27"/><circle cx="197" cy="190" r="27"/>
          <circle cx="299" cy="190" r="27"/><circle cx="388" cy="190" r="27"/>
          <circle cx="478" cy="190" r="27"/><circle cx="552" cy="190" r="27"/>
        </g>
        <g fill="#d9d4c8">
          <circle cx="104" cy="190" r="5"/><circle cx="197" cy="190" r="5"/>
          <circle cx="299" cy="190" r="5"/><circle cx="388" cy="190" r="5"/>
          <circle cx="478" cy="190" r="5"/><circle cx="552" cy="190" r="5"/>
        </g>
        <path d="M104 190h93m-93 0-22-17m22 17 20 17m166-17h89m-89 0-20-17m20 17 20 17" fill="none" stroke="#d4aa4f" stroke-width="6"/>
      </svg>`;
    overlay.appendChild(train);

    const center = document.createElement("div");
    center.className = "revolucion-center";
    center.innerHTML = `
      <div class="revolucion-hat-wrap">
        <svg class="revolucion-hat" viewBox="0 0 320 210" role="img" aria-label="Sombrero mexicano tricolor">
          <defs>
            <linearGradient id="sombrero-copa" x1="0" x2="1" y1="0" y2="1">
              <stop stop-color="#f8d66d"/><stop offset=".5" stop-color="#d89c32"/><stop offset="1" stop-color="#9b5b20"/>
            </linearGradient>
            <linearGradient id="sombrero-ala" x1="0" x2="0" y1="0" y2="1">
              <stop stop-color="#f4c453"/><stop offset="1" stop-color="#ad6b25"/>
            </linearGradient>
          </defs>
          <path d="M22 151 Q72 111 160 119 Q248 111 298 151 Q310 165 287 175 Q224 198 160 194 Q96 198 33 175 Q10 165 22 151Z" fill="url(#sombrero-ala)" stroke="#63391d" stroke-width="8"/>
          <path d="M75 132 Q84 91 112 49 Q130 23 160 23 Q190 23 208 49 Q236 91 245 132 Q207 116 160 117 Q113 116 75 132Z" fill="url(#sombrero-copa)" stroke="#63391d" stroke-width="8"/>
          <path d="M65 143 Q160 115 255 143 L248 158 Q160 136 72 158Z" fill="#087f48" stroke="#63391d" stroke-width="5"/>
          <path d="M72 159 Q160 137 248 159 L241 173 Q160 154 79 173Z" fill="#fff3d3" stroke="#63391d" stroke-width="4"/>
          <path d="M79 173 Q160 154 241 173 L230 185 Q160 171 90 185Z" fill="#d83a32" stroke="#63391d" stroke-width="4"/>
          <path d="M115 91 Q160 76 205 91" fill="none" stroke="#fff3d3" stroke-width="5" stroke-linecap="round"/>
          <circle cx="160" cy="51" r="8" fill="#d83a32"/><path d="M160 35v32M144 51h32" stroke="#fff3d3" stroke-width="4" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="revolucion-eyebrow">20 DE NOVIEMBRE</div>
      <h2 class="revolucion-text">¡VIVA LA<span>REVOLUCIÓN!</span></h2>
      <div class="revolucion-subtitle">TIERRA · LIBERTAD · MÉXICO</div>
    `;
    overlay.appendChild(center);

    const photo = document.createElement("figure");
    photo.className = "revolucion-photo";
    photo.innerHTML = `
      <img src="pancho-villa.jpg" alt="Pancho Villa y su estado mayor; llevan sombreros, bigotes, cananas y rifles." />
      <figcaption><a href="https://www.loc.gov/pictures/item/2014710040/" target="_blank" rel="noopener noreferrer">Pancho Villa y su estado mayor · 1915 · Library of Congress</a></figcaption>
    `;
    overlay.appendChild(photo);

    const pino = document.createElement("figure");
    pino.className = "revolucion-photo revolucion-photo--pino";
    pino.innerHTML = `
      <img src="pino-suarez.jpg" alt="José María Pino Suárez, originario de Tenosique, Tabasco" />
      <figcaption><a href="https://commons.wikimedia.org/wiki/File:Jose_Maria_Pino_Suarez.jpg" target="_blank" rel="noopener noreferrer">José María Pino Suárez · Tenosique, Tab.</a></figcaption>
    `;
    overlay.appendChild(pino);

    const colors = ["#087f48", "#d83a32", "#f5c451", "#fff3d3", "#3b7cba"];
    const rain = document.createElement("div");
    rain.className = "revolucion-rain";
    overlay.appendChild(rain);
    const icons = ["icono-sombrero.svg", "icono-rifle.svg"];
    for (let i = 0; i < 26; i++) {
      const ic = document.createElement("img");
      ic.className = "revolucion-confetti revolucion-icon";
      ic.src = icons[i % 2];
      ic.alt = "";
      ic.style.setProperty("--fall-left", Math.random() * 96 + "vw");
      ic.style.setProperty("--fall-top", "0px");
      ic.style.setProperty("--fall-delay", (-Math.random() * 6) + "s");
      ic.style.setProperty("--fall-duration", (4 + Math.random() * 3) + "s");
      ic.style.setProperty("--fall-size", (28 + Math.random() * 20) + "px");
      ic.style.setProperty("--fall-drift", (Math.random() * 14 - 7) + "vw");
      rain.appendChild(ic);
    }
    for (let i = 0; i < 160; i++) {
      const c = document.createElement("div");
      c.className = "revolucion-confetti";
      c.style.setProperty("--fall-left", Math.random() * 100 + "vw");
      c.style.setProperty("--fall-top", (-30 + Math.random() * 120) + "vh");
      c.style.setProperty("--fall-color", colors[Math.floor(Math.random() * colors.length)]);
      c.style.setProperty("--fall-delay", (-Math.random() * 5) + "s");
      c.style.setProperty("--fall-duration", (3.5 + Math.random() * 3) + "s");
      c.style.setProperty("--fall-size", (7 + Math.random() * 10) + "px");
      c.style.setProperty("--fall-drift", (Math.random() * 16 - 8) + "vw");
      const shape = Math.random();
      if (shape > 0.72) c.style.setProperty("--fall-radius", "50%");
      else if (shape > 0.45) c.style.clipPath = "polygon(50% 0, 100% 100%, 0 100%)";
      rain.appendChild(c);
    }
    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.classList.remove("playing");
      overlay.remove();
    }, 9000);
  }

  window.replayRevolucionEffect = function() {
    banner();
    inject();
  };

  function banner() {
    if (document.getElementById("revolucion-banner")) return;
    const b = document.createElement("div");
    b.id = "revolucion-banner";
    b.className = "revolucion-banner";
    document.body.appendChild(b);

    const t = document.createElement("div");
    t.className = "revolucion-badge";
    t.textContent = "20 DE NOVIEMBRE";
    document.body.appendChild(t);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      banner();
      setTimeout(inject, 400);
    });
  } else {
    banner();
    setTimeout(inject, 400);
  }
})();
