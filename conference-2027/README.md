# FOSTERLANG Forum on Multilingualism — website

A small, static website for the **FOSTERLANG Forum on Multilingualism**, held at
Adam Mickiewicz University (AMU), Poznań, **7–10 April 2027**. The Forum is part of the
[FOSTERLANG](https://fosterlang.al.uw.edu.pl/) project (Horizon Europe). Colours follow
AMU's official identity (navy `#002d69` with a gold accent).
Built with plain HTML, CSS, and JavaScript — **no build step, no dependencies**.
You edit a few data files and refresh the page.

The site is **bilingual (English / Polish)** with an EN/PL switch in the header, and is
designed around **Hick's Law**: a short, flat menu, one clear primary action (*Register*)
per screen, and programme details tucked behind expandable rows so nothing overwhelms the
visitor.

---

## 1. Run it locally

You need any static file server. The simplest is Python (already used elsewhere in this
repo):

```bash
cd conference-2027
python -m http.server 3131
```

Then open <http://localhost:3131> in a browser. Edit a file → save → refresh the browser.

> Don't open `index.html` directly with `file://` — browsers block the `data/*.js` scripts
> that way. Always use a local server.

---

## 2. What's where

```
conference-2027/
├── index.html          # page skeleton — rarely needs editing
├── css/styles.css      # all styling; change the palette at the top (:root)
├── js/
│   ├── i18n.js         # interface labels (buttons, menu, headings) EN + PL
│   └── app.js          # renders the page from the data files (don't usually touch)
├── data/               # ←★ THIS is where you edit content
│   ├── config.js       # dates, venue, fees, deadlines, all external links
│   ├── content.js      # the paragraphs of each section (EN + PL)
│   ├── programme.js    # the 4-day schedule
│   └── speakers.js     # speaker cards + bios
├── assets/
│   ├── img/            # logos, speaker photos, og-image (social preview)
│   └── docs/           # PDFs (programme, call for papers) when ready
└── README.md           # this file
```

**Rule of thumb:** day-to-day updates happen in `data/` (and `assets/`). You almost never
touch `index.html`, `css/`, or `js/app.js`.

---

## 3. How to make common changes

Each file is heavily commented. Quick map:

| I want to change…                                   | Edit this file        |
|-----------------------------------------------------|-----------------------|
| Dates, city, venue address, email                   | `data/config.js`      |
| Registration **link** (external form)               | `data/config.js` (`registerUrl`) |
| Key deadlines                                       | `data/config.js` (`deadlines`) |
| The map location                                    | `data/config.js`      |
| Hero tagline, About text, committees, travel info   | `data/content.js`     |
| A programme session (add / edit / remove)           | `data/programme.js`   |
| A speaker (add / edit / remove)                     | `data/speakers.js`    |
| The poster image                                    | save `assets/img/poster.jpg` (or set `posterImage` in `config.js`) |
| Project link / EU funding note / grant number       | `data/config.js` (`project`, `funding`) |
| A button / menu / heading label                     | `js/i18n.js`          |
| Colours, fonts, spacing                             | `css/styles.css` (`:root`) |

### Bilingual content
Fields come in pairs ending `_en` and `_pl` (e.g. `title_en` / `title_pl`). Edit **both**.
For interface labels in `js/i18n.js`, add the key under both the `en` and `pl` blocks.
If a Polish value is missing, the site falls back to English automatically.

### Add a programme session
In `data/programme.js`, copy one `{ ... }` line inside the right day's `sessions` array and
edit it:
```js
{ time: "11:00 – 12:30", title_en: "My talk", title_pl: "Moje wystąpienie",
  speaker: "Jane Doe", room: "Room 1.1", type: "session",
  abstract_en: "Optional. If present, the row expands on click.",
  abstract_pl: "Opcjonalne. Jeśli podane, wiersz rozwija się po kliknięciu." }
```
`type` is one of `keynote`, `session`, `break`, `social` (controls the colour stripe).
Omit `abstract_en`/`abstract_pl` for a simple, non-expanding row.

### Add a speaker
In `data/speakers.js`, copy a `{ ... }` block. Put a photo in `assets/img/` and set
`photo: "assets/img/jane.jpg"` — or leave `photo: ""` to show the speaker's initials.
Set `keynote: true` to add a badge and sort them first.

### Registration
There is no on-page registration section or fees. The **Register** buttons (header + hero)
open the external form set in `registerUrl` (in `data/config.js`) in a new tab. Until you
add a URL, the buttons fall back to the Contact section.

### Publish the programme PDF
Drop the file in `assets/docs/`, then set `programmePdf` in `data/config.js`. The
**Download programme** button appears automatically; leave the value `""` to hide it.

---

## 4. Deploy

The site is fully static, so any static host works. Two easy options:

### GitHub Pages (recommended)
1. Push this repo to GitHub.
2. Repo → **Settings → Pages** → *Build and deployment* → **Deploy from a branch**.
3. Choose the branch and set the folder. Either:
   - move the contents of `conference-2027/` to the repo root, **or**
   - put the site on its own branch / repo whose root is this folder.
   (Pages serves from the repo/branch root or `/docs`, not an arbitrary subfolder.)
4. Save. The site appears at `https://<user>.github.io/<repo>/` within a minute or two.
5. Optional: add a `CNAME` file for a custom domain.

### Netlify / Vercel
Drag-and-drop the `conference-2027/` folder (Netlify) or import the repo and set the
**publish/root directory** to `conference-2027`. No build command is needed.

> A university (amu.edu.pl) web space also works — just upload the folder's contents.

After deploying, update the `og:image`/`og:title` URLs in `index.html` if you want correct
link previews when the site is shared.

---

## 5. A year of updates — suggested checklist

Roughly in order, from now to the event:

- [ ] Fill in the **committees** and confirm the About text (`content.js`).
- [ ] Add the official **poster** (`assets/img/poster.jpg`) and set `posterImage`.
- [ ] Open **registration**: paste the external form link into `registerUrl`.
- [ ] Announce **keynote speakers** as they are confirmed (`speakers.js`).
- [ ] Publish the **draft programme**, then the **final programme** + PDF.
- [ ] Update **deadline statuses** (`upcoming` → `open` → `closed`) as they pass.
- [ ] Add **venue & travel / accommodation** details.
- [ ] After the event: post slides, photos, or proceedings links.

Tip: keep the deadline `status` values current — that little coloured dot is the fastest
signal a returning visitor reads.

---

## 6. Notes

- All text currently marked **TODO** is placeholder — search the `data/` files for `TODO`.
- No backend: registration and submission are external links you control in `config.js`.
- Tested as a static site; works offline once loaded (except the map iframe and web fonts).
