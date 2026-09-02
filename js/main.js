/* ============================================================
   Marissa Shaffer — Circus Portfolio
   ============================================================ */

/* ------------------------------------------------------------
   1. EDIT YOUR MEDIA HERE
   ------------------------------------------------------------
   These two lists control the Media page. To add or remove
   items, just edit the lists below — no HTML needed.
   ------------------------------------------------------------ */

// PHOTOS: filenames inside the /assets folder, shown in a grid.
// Drop your image into /assets and add it here. Two forms are allowed:
//   "hoop.JPG"                                   → no caption
//   { src: "hoop.JPG", credit: "Photo — Jane Doe" }  → caption shown below
// Use the object form to credit a photographer. (Order = display order.
// Any web image works: .jpg .png .webp .svg)
const photos = [
  { src: "hoop.JPG", credit: "Photo - Jean-Luc Martin, 2025." },
  { src: "rope again.JPG", credit: "Photo — Jean-Luc Martin, 2025." },
  { src: "rope3.jpg", credit: "Photo — Kseniia Dolgopolova, 2024." },
  { src: "cane.jpg", credit: "Photo — Kseniia Dolgopolova, 2024." },
  { src: "straps.jpg", credit: "Photo — Kseniia Dolgopolova, 2024." },
  { src: "newclub.JPeG", credit: "Photo — Jean-Luc Martin, 2024" },
  { src: "newclown.JPeG", credit: "Photo — Jean-Luc Martin, 2024." },
  { src: "bend.jpeg", credit: "Photo — Sia Ghatak, 2025" },
  { src: "base2.jpeg", credit: "Photo - Sia Ghatak, 2026." },
   { src: "hoop-foot2.png", credit: "Photo — Jean-Luc Martin, 2025." },
   { src: "acro.jpeg", credit: "Photo — Kaiolena Tacazon, 2025." },
  { src: "rope2.JPG", credit: "Photo — Jean-Luc Martin, 2025." },
];

// VIDEOS: paste the YouTube ID (the part after "watch?v=").
// Example: for https://www.youtube.com/watch?v=dQw4w9WgXcQ
// the id is "dQw4w9WgXcQ".  Add a short caption for each.
const videos = [
  { id: "qavxfTbLBiM", caption: "Performance Demo Reel - 2025" },
  { id: "c32Us-dXcwk", caption: "Hula Hoop & Clown Act — 2025" },
  { id: "UNc83BKrShM", caption: "Aerial Rope Act — 2025" },
];

/* ------------------------------------------------------------
   2. Site behaviour (no need to edit below)
   ------------------------------------------------------------ */

// --- Mobile navigation dropdown ---
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close the menu after tapping a link (mobile).
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// --- Render the photo gallery (Media page only) ---
// Each photo keeps its natural aspect ratio; rows fill the width. Once an
// image loads we measure it and set the figure's `--r` (width / height),
// which the CSS uses to size the row (see .gallery in css/style.css).
function renderGallery() {
  const grid = document.querySelector("[data-gallery]");
  if (!grid) return;

  photos.forEach((item, i) => {
    const data = typeof item === "string" ? { src: item } : item;
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = "assets/" + data.src;
    img.alt = data.alt || "Performance photo " + (i + 1);
    img.loading = "lazy";

    const setRatio = () => {
      if (img.naturalWidth && img.naturalHeight) {
        figure.style.setProperty("--r", (img.naturalWidth / img.naturalHeight).toFixed(4));
      }
    };
    img.addEventListener("load", setRatio);
    if (img.complete) setRatio(); // already cached

    figure.appendChild(img);

    if (data.credit) {
      const cap = document.createElement("figcaption");
      cap.className = "photo-credit";
      cap.textContent = data.credit;
      figure.appendChild(cap);
    }

    grid.appendChild(figure);
  });
}

// --- Render the YouTube embeds (Media page only) ---
function renderVideos() {
  const grid = document.querySelector("[data-videos]");
  if (!grid) return;
  grid.innerHTML = videos
    .map(
      (v) => `
      <div>
        <div class="video-embed">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${v.id}"
            title="${v.caption ? v.caption.replace(/"/g, "&quot;") : "Video"}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"></iframe>
        </div>
        ${v.caption ? `<p class="video-caption">${v.caption}</p>` : ""}
      </div>`
    )
    .join("");
}

// --- Stamp the current year in the footer ---
function initYear() {
  const el = document.querySelector("[data-year]");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderGallery();
  renderVideos();
  initYear();
});
