/* =============================================================================
 * app.js — Renders the page from the data files and wires up interactions.
 *
 * Load order (see index.html): config.js → content.js → programme.js →
 * speakers.js → i18n.js → app.js. All data is plain JS objects; no fetch,
 * no build step. You normally never need to edit this file — change content
 * in the data/ files and labels in js/i18n.js.
 * ===========================================================================*/

(function () {
  "use strict";

  /* --- tiny DOM helpers ---------------------------------------------------*/
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  const state = { day: 0 };

  /* =========================================================================
   * Rendering
   * =======================================================================*/

  // Fill every element carrying a data-i18n="key" attribute with its label.
  function applyLabels() {
    $$("[data-i18n]").forEach((node) => {
      node.textContent = I18N.t(node.getAttribute("data-i18n"));
    });
    // aria-labels (e.g. icon buttons) via data-i18n-aria
    $$("[data-i18n-aria]").forEach((node) => {
      node.setAttribute("aria-label", I18N.t(node.getAttribute("data-i18n-aria")));
    });
  }

  function renderHeaderHero() {
    $("#brand-name").textContent = CONF_CONFIG.shortName;
    $("#hero-name").textContent = I18N.pick(CONF_CONFIG, "name");
    $("#hero-tagline").textContent = I18N.content().heroTagline;
    $("#hero-dates").textContent = I18N.pick(CONF_CONFIG, "datesLabel");
    $("#hero-city").textContent = I18N.pick(CONF_CONFIG, "city");

    // The Register buttons (header + hero) link to the external registration
    // form set in config.js. Until a URL is set, they fall back to Contact.
    $$(".register-link").forEach((a) => {
      const url = CONF_CONFIG.registerUrl;
      a.href = url || "#contact";
      if (url && /^https?:/i.test(url)) { a.target = "_blank"; a.rel = "noopener"; }
      else { a.removeAttribute("target"); a.removeAttribute("rel"); }
    });
    document.title = CONF_CONFIG.shortName + " — " + I18N.pick(CONF_CONFIG, "datesLabel");
  }

  function renderDeadlines() {
    const list = $("#deadline-list");
    list.innerHTML = "";
    CONF_CONFIG.deadlines.forEach((d) => {
      const li = el("li", "deadline " + (d.status || "upcoming"));
      li.appendChild(el("span", "deadline-date", I18N.pick(d, "date")));
      li.appendChild(el("span", "deadline-label", I18N.pick(d, "label")));
      list.appendChild(li);
    });
  }

  function renderParas(targetSel, paras) {
    const target = $(targetSel);
    target.innerHTML = "";
    (paras || []).forEach((p) => target.appendChild(el("p", null, p)));
  }

  function renderList(targetSel, items) {
    const target = $(targetSel);
    target.innerHTML = "";
    (items || []).forEach((i) => target.appendChild(el("li", null, i)));
  }

  function renderAbout() {
    const c = I18N.content();
    renderParas("#about-text", c.aboutParas);
    renderList("#committee-scientific", c.committeeScientific);
    renderList("#committee-organising", c.committeeOrganising);
    renderPoster();
  }

  function renderPoster() {
    const img = $("#poster-img");
    if (!img) return;
    const fig = img.closest(".poster-figure");
    img.alt = I18N.pick(CONF_CONFIG, "name") + " — poster";
    img.onerror = function () { showPosterPlaceholder(fig); };
    img.src = CONF_CONFIG.posterImage || "";
    const dl = $("#poster-download");
    if (dl) {
      const href = CONF_CONFIG.posterDownload || CONF_CONFIG.posterImage;
      if (href) { dl.href = href; dl.hidden = false; } else { dl.hidden = true; }
    }
  }

  // If the poster image is missing, show a tidy placeholder instead of a broken icon.
  function showPosterPlaceholder(fig) {
    if (!fig || fig.querySelector(".poster-placeholder")) return;
    const img = fig.querySelector("#poster-img");
    if (img) img.style.display = "none";
    const dl = fig.querySelector("#poster-download");
    if (dl) dl.hidden = true;
    const ph = el("div", "poster-placeholder");
    ph.innerHTML = "<strong>" + I18N.pick(CONF_CONFIG, "name") + "</strong><br>" +
      "Save the poster to <code>" + CONF_CONFIG.posterImage + "</code>";
    fig.insertBefore(ph, fig.firstChild);
  }

  // Show a download button only if a file path is configured.
  function toggleDownload(sel, path) {
    const btn = $(sel);
    if (!btn) return;
    if (path) { btn.href = path; btn.hidden = false; }
    else { btn.hidden = true; }
  }

  // Programme is presented as a downloadable PDF (published closer to the event).
  function renderProgramme() {
    const intro = $("#programme-intro");
    if (intro) intro.textContent = I18N.content().programmeIntro || "";

    // Day chips, generated from the configured date range (auto-updates with dates).
    const daysBox = $("#programme-days");
    if (daysBox) {
      daysBox.innerHTML = "";
      const locale = I18N.lang === "pl" ? "pl-PL" : "en-GB";
      const start = new Date(CONF_CONFIG.startISO + "T00:00:00");
      const end = new Date(CONF_CONFIG.endISO + "T00:00:00");
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const chip = el("li", "day-chip");
        chip.appendChild(el("span", "day-dow", d.toLocaleDateString(locale, { weekday: "short" })));
        chip.appendChild(el("span", "day-date", d.toLocaleDateString(locale, { day: "numeric", month: "short" })));
        daysBox.appendChild(chip);
      }
    }

    // Download button if a PDF is configured, otherwise a "coming soon" note.
    const dl = $("#programme-download");
    const soon = $("#programme-soon");
    const pdf = CONF_CONFIG.programmePdf;
    if (dl) { if (pdf) { dl.href = pdf; dl.hidden = false; } else { dl.hidden = true; } }
    if (soon) soon.hidden = !!pdf;
  }

  // Line icons for the Themes cards (cycled by index).
  const THEME_ICONS = [
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M7 21h10M5 7h14M5 7l-2.5 6a3 3 0 0 0 5 0L5 7zM19 7l-2.5 6a3 3 0 0 0 5 0L19 7z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 4 2 9l10 5 10-5-10-5zM6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M15.5 5.3A3 3 0 0 1 18 10M15.5 14.5A6 6 0 0 1 21 20"/></svg>'
  ];

  function renderThemes() {
    const grid = $("#themes-grid");
    if (!grid) return;
    const c = I18N.content();
    const intro = $("#themes-intro");
    if (intro) intro.textContent = c.themesIntro || "";
    grid.innerHTML = "";
    (c.themes || []).forEach((t, i) => {
      const card = el("div", "theme-card");
      const icon = el("div", "theme-icon");
      icon.innerHTML = THEME_ICONS[i % THEME_ICONS.length];
      card.appendChild(icon);
      card.appendChild(el("h3", "theme-title", t.title));
      card.appendChild(el("p", "theme-desc", t.desc));
      grid.appendChild(card);
    });
  }

  function renderSpeakers() {
    const grid = $("#speakers-grid");
    grid.innerHTML = "";
    // Keynotes first.
    const ordered = CONF_SPEAKERS.slice().sort((a, b) => (b.keynote ? 1 : 0) - (a.keynote ? 1 : 0));
    ordered.forEach((sp) => {
      const card = el("button", "speaker-card");
      card.type = "button";

      const avatar = el("div", "speaker-avatar");
      if (sp.photo) {
        const img = el("img");
        img.src = sp.photo; img.alt = sp.name; img.loading = "lazy";
        avatar.appendChild(img);
      } else {
        avatar.appendChild(el("span", "speaker-initials", initials(sp.name)));
      }
      card.appendChild(avatar);

      if (sp.keynote) card.appendChild(el("span", "speaker-badge", I18N.t("keynoteBadge")));
      card.appendChild(el("span", "speaker-name", sp.name));
      card.appendChild(el("span", "speaker-affil", I18N.pick(sp, "affiliation")));

      card.addEventListener("click", () => openSpeaker(sp));
      grid.appendChild(card);
    });
  }

  function initials(name) {
    return (name || "?").replace(/TODO\s*/i, "").trim().split(/\s+/)
      .slice(0, 2).map((w) => w[0] ? w[0].toUpperCase() : "").join("") || "?";
  }

  function renderVenue() {
    const c = I18N.content();
    $("#venue-intro").textContent = c.venueIntro;
    $("#venue-name").textContent = I18N.pick(CONF_CONFIG, "venueName");
    $("#venue-address").textContent = CONF_CONFIG.venueAddress;
    $("#map-frame").src = CONF_CONFIG.mapEmbedSrc;
    $("#map-link").href = CONF_CONFIG.mapLink;
    renderParas("#travel-text", c.travelParas);
    renderParas("#accommodation-text", c.accommodationParas);
  }

  function renderContact() {
    const mail = $("#contact-email");
    mail.textContent = CONF_CONFIG.email;
    mail.href = "mailto:" + CONF_CONFIG.email;

    const links = $("#social-links");
    links.innerHTML = "";
    const social = CONF_CONFIG.social || {};
    Object.keys(social).forEach((k) => {
      if (!social[k]) return;
      const a = el("a", "social-link", k.charAt(0).toUpperCase() + k.slice(1));
      a.href = social[k]; a.target = "_blank"; a.rel = "noopener";
      links.appendChild(a);
    });

    $("#footer-name").textContent = I18N.pick(CONF_CONFIG, "name");
    $("#footer-venue").textContent = I18N.pick(CONF_CONFIG, "city");
    $("#footer-dates").textContent = I18N.pick(CONF_CONFIG, "datesLabel");
    $("#year").textContent = new Date().getFullYear();

    // Parent project + EU funding
    const proj = CONF_CONFIG.project || {};
    const plink = $("#project-link");
    if (plink) { plink.textContent = proj.name || "FOSTERLANG"; plink.href = proj.url || "#"; }
    const fund = CONF_CONFIG.funding || {};
    const fn = $("#funding-note");
    if (fn) {
      fn.textContent = fund.grant ? " · " + fund.grant : "";
      fn.title = I18N.pick(fund, "note");
    }
  }

  // Re-render everything in the current language.
  function renderAll() {
    applyLabels();
    renderHeaderHero();
    renderDeadlines();
    renderAbout();
    renderThemes();
    renderProgramme();
    renderSpeakers();
    renderVenue();
    renderContact();
    markLangButtons();
  }

  /* =========================================================================
   * Speaker modal (accessible: focus + Esc + backdrop)
   * =======================================================================*/
  let lastFocused = null;

  function openSpeaker(sp) {
    lastFocused = document.activeElement;
    const body = $("#modal-body");
    body.innerHTML = "";

    const head = el("div", "modal-head");
    const avatar = el("div", "speaker-avatar lg");
    if (sp.photo) {
      const img = el("img"); img.src = sp.photo; img.alt = sp.name; avatar.appendChild(img);
    } else {
      avatar.appendChild(el("span", "speaker-initials", initials(sp.name)));
    }
    head.appendChild(avatar);
    const headText = el("div");
    if (sp.keynote) headText.appendChild(el("span", "speaker-badge", I18N.t("keynoteBadge")));
    const nameEl = el("h3", "modal-name", sp.name);
    nameEl.id = "modal-name";               // matches dialog aria-labelledby
    headText.appendChild(nameEl);
    headText.appendChild(el("p", "modal-affil", I18N.pick(sp, "affiliation")));
    head.appendChild(headText);
    body.appendChild(head);

    const bio = I18N.pick(sp, "bio");
    if (bio) body.appendChild(el("p", "modal-bio", bio));

    const modal = $("#modal");
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    $("#modal-close").focus();
  }

  function closeModal() {
    const modal = $("#modal");
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocused) lastFocused.focus();
  }

  /* =========================================================================
   * Language toggle
   * =======================================================================*/
  function markLangButtons() {
    $$(".lang-btn").forEach((b) => {
      const on = b.dataset.lang === I18N.lang;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function wireLangToggle() {
    $$(".lang-btn").forEach((b) => {
      b.addEventListener("click", () => {
        if (b.dataset.lang === I18N.lang) return;
        I18N.setLang(b.dataset.lang);
        renderAll();
      });
    });
  }

  /* =========================================================================
   * Navigation: mobile menu + Info dropdown
   * =======================================================================*/
  function wireNav() {
    const nav = $("#site-nav");
    const burger = $("#nav-toggle");
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close mobile menu after following a link.
    $$("#site-nav a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      })
    );

    // Info dropdown (desktop)
    const dd = $("#info-dropdown");
    const ddBtn = $("#info-toggle");
    if (ddBtn) {
      ddBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = dd.classList.toggle("open");
        ddBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      document.addEventListener("click", () => {
        dd.classList.remove("open");
        ddBtn.setAttribute("aria-expanded", "false");
      });
    }
  }

  /* =========================================================================
   * Countdown to the conference start
   * =======================================================================*/
  function startCountdown() {
    const target = new Date(CONF_CONFIG.startISO + "T09:00:00").getTime();
    const box = $("#countdown");
    function tick() {
      const diff = target - Date.now();
      if (diff <= 0) { box.classList.add("done"); return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      $("#cd-days").textContent = d;
      $("#cd-hours").textContent = String(h).padStart(2, "0");
      $("#cd-min").textContent = String(m).padStart(2, "0");
      $("#cd-sec").textContent = String(s).padStart(2, "0");
    }
    tick();
    setInterval(tick, 1000);
  }

  /* =========================================================================
   * Scroll reveal — subtle fade-up. Respects reduced-motion; without JS the
   * page stays fully visible (styles apply only under body.js-reveal).
   * =======================================================================*/
  function setupReveal() {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.body.classList.add("js-reveal");
    const targets = $$("#main .section .section-title, .about-grid, .themes-grid, .programme-card, .speakers-grid, .venue-grid, .contact-block > *");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    targets.forEach((t) => { t.classList.add("reveal"); io.observe(t); });
  }

  /* =========================================================================
   * Init
   * =======================================================================*/
  function init() {
    document.documentElement.lang = I18N.lang;
    renderAll();
    wireLangToggle();
    wireNav();
    startCountdown();
    setupReveal();

    // Modal close handlers
    $("#modal-close").addEventListener("click", closeModal);
    $("#modal-backdrop").addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !$("#modal").hidden) closeModal();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
