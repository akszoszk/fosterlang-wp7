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

  function renderProgramme() {
    // Tabs
    const tabs = $("#programme-tabs");
    tabs.innerHTML = "";
    CONF_PROGRAMME.forEach((day, i) => {
      const b = el("button", "tab" + (i === state.day ? " active" : ""), I18N.pick(day, "label"));
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", i === state.day ? "true" : "false");
      b.addEventListener("click", () => { state.day = i; renderProgramme(); });
      tabs.appendChild(b);
    });

    // Body: sessions for the active day
    const body = $("#programme-body");
    body.innerHTML = "";
    const day = CONF_PROGRAMME[state.day];
    if (!day) return;

    day.sessions.forEach((s) => {
      const type = s.type || "session";
      const abstract = I18N.pick(s, "abstract");
      const title = I18N.pick(s, "title");

      if (abstract) {
        // Expandable row (progressive disclosure) via native <details>.
        const d = el("details", "session expandable type-" + type);
        const sm = el("summary", "session-row");
        sm.appendChild(buildSessionMain(s, title, true));
        d.appendChild(sm);
        const ab = el("div", "session-abstract");
        ab.appendChild(el("p", null, abstract));
        d.appendChild(ab);
        body.appendChild(d);
      } else {
        const row = el("div", "session type-" + type);
        row.appendChild(buildSessionMain(s, title, false));
        body.appendChild(row);
      }
    });
  }

  function buildSessionMain(s, title, expandable) {
    const wrap = el("div", "session-row");
    wrap.appendChild(el("span", "session-time", s.time || ""));
    const main = el("div", "session-main");
    const h = el("span", "session-title", title);
    if (expandable) h.appendChild(el("span", "expand-marker", " ▸"));
    main.appendChild(h);
    const metaBits = [];
    if (s.speaker) metaBits.push(s.speaker);
    if (s.room) metaBits.push(s.room);
    if (metaBits.length) main.appendChild(el("span", "session-meta", metaBits.join(" · ")));
    wrap.appendChild(main);
    return wrap;
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
    $("#footer-host").textContent = I18N.pick(CONF_CONFIG, "venueName");
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
    renderProgramme();
    renderSpeakers();
    renderVenue();
    renderContact();
    toggleDownload("#programme-download", CONF_CONFIG.programmePdf);
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
   * Init
   * =======================================================================*/
  function init() {
    document.documentElement.lang = I18N.lang;
    renderAll();
    wireLangToggle();
    wireNav();
    startCountdown();

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
