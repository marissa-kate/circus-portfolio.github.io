# Marissa Shaffer — Circus Portfolio

A minimal, gallery-white portfolio site. Plain HTML/CSS/JS — no build step, no
installation. To view it, just double-click `index.html`.

## Pages
- `index.html` — About (landing page)
- `media.html` — Photos + YouTube videos
- `resume.html` — Resume, with a downloadable PDF
- `contact.html` — Email + social links

## Editing content

### Swap the photos (Media page)
1. Put your image files in the `assets/` folder (`.jpg`, `.png`, `.webp`, or `.svg`).
2. Open `js/main.js` and edit the `photos` list near the top — one filename per line:
   ```js
   const photos = [
     "my-photo-1.jpg",
     "my-photo-2.jpg",
   ];
   ```
   The order in the list is the order shown on the page.
   (Tip: you can also just overwrite the placeholder files `gallery-1.svg` … keeping
   the same names, and they'll appear automatically.)

### Add / change YouTube videos (Media page)
Edit the `videos` list in `js/main.js`. For each video you need its **ID** — the part
of the URL after `watch?v=`:

```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                 ^^^^^^^^^^^  ← this is the id
```

```js
const videos = [
  { id: "dQw4w9WgXcQ", caption: "Show name — 2025" },
  { id: "aqz-KE-bpKQ", caption: "Festival act" },
];
```

### The About text, Resume, and Contact links
These are edited directly in the HTML files — look for the `EDIT ...` comments:
- Bio paragraphs → `index.html`
- Resume sections → `resume.html`
- Email / Instagram / YouTube links → `contact.html`

### The portrait photo (About page)
Replace `assets/portrait.svg` with your own image. If you use a different filename
(e.g. `portrait.jpg`), update the `src` in `index.html` (search for `about-portrait`).

### The resume PDF
Replace `assets/resume.pdf` with your real resume, keeping the same filename.

## Navigation note
The menu bar is copied into the top of each of the four HTML pages. If you add a page
or rename one, update the `<ul class="nav-links">` block in **all four** files so they
stay in sync. On phones the menu collapses into a ☰ dropdown automatically.

## Publishing it online (optional)
Because it's a plain static site, you can drag the whole `portfolio` folder onto
[app.netlify.com/drop](https://app.netlify.com/drop) or connect it to Netlify / GitHub
Pages / Cloudflare Pages. No build command needed — just serve the folder.
