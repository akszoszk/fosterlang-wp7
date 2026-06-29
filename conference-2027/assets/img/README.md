# Images

Put image files here and reference them from the data files.

- **poster.jpg** — the official conference poster, shown in the *About* section.
  Save the FOSTERLANG Forum poster here as `poster.jpg` (portrait orientation).
  Until it exists the site shows a tidy placeholder. To use a different filename or a
  PDF download, set `posterImage` / `posterDownload` in `data/config.js`.
- **Speaker photos** — square images (~400×400 px) look best. Reference in
  `data/speakers.js` as `photo: "assets/img/filename.jpg"`. Leave `photo: ""` to show the
  speaker's initials instead.
- **Logos** (institution / sponsors) — add here and embed in `index.html` if needed.
- **og-image.svg** — the social-sharing preview card (already provided as a placeholder;
  replace with a 1200×630 image and update the `og:image` URL in `index.html` once hosted).

Keep file names lowercase, no spaces (use hyphens). Optimise large photos before adding.
