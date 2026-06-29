/* =============================================================================
 * i18n.js — Interface labels (EN/PL) + the language helper.
 *
 * UI_TEXT holds every fixed interface string: nav items, buttons, section
 * headings. To add or change a label, edit it under BOTH "en" and "pl".
 * (Longer section prose lives in data/content.js instead.)
 *
 * The I18N object is used by app.js to look up the right language at runtime.
 * Pattern mirrors the existing repo app (js/app.js).
 * ===========================================================================*/

const UI_TEXT = {
  en: {
    // nav
    navHome: "Home",
    navProgramme: "Programme",
    navSpeakers: "Speakers",
    navInfo: "Info",
    navAbout: "About",
    navVenue: "Venue & Travel",
    navContact: "Contact",
    register: "Register",
    skipToContent: "Skip to content",

    // hero
    heroCtaPrimary: "Register now",
    heroCtaSecondary: "View programme",
    countdownLabel: "until the conference",
    days: "days", hours: "hrs", minutes: "min", seconds: "sec",
    keyDeadlines: "Key deadlines",

    // section headings
    aboutHeading: "About the conference",
    committeeScientificHeading: "Scientific committee",
    committeeOrganisingHeading: "Organising committee",
    programmeHeading: "Programme",
    programmeNote: "Click a session with a ▸ marker to read its abstract.",
    downloadProgramme: "Download programme (PDF)",
    speakersHeading: "Speakers",
    keynoteBadge: "Keynote",
    venueHeading: "Venue & Travel",
    gettingThere: "Getting there",
    accommodation: "Accommodation",
    openInMaps: "Open in maps",
    contactHeading: "Contact",
    contactIntro: "Questions? Reach the organising team:",

    // poster + project + funding
    downloadPoster: "Download poster",
    organisedBy: "Organised by",
    partOf: "Part of the",
    projectWord: "project",
    fundedBy: "Funded by the European Union",

    // misc
    close: "Close",
    backToTop: "Back to top",
    tba: "To be announced"
  },

  pl: {
    navHome: "Start",
    navProgramme: "Program",
    navSpeakers: "Prelegenci",
    navInfo: "Informacje",
    navAbout: "O konferencji",
    navVenue: "Miejsce i dojazd",
    navContact: "Kontakt",
    register: "Rejestracja",
    skipToContent: "Przejdź do treści",

    heroCtaPrimary: "Zarejestruj się",
    heroCtaSecondary: "Zobacz program",
    countdownLabel: "do konferencji",
    days: "dni", hours: "godz.", minutes: "min", seconds: "sek.",
    keyDeadlines: "Najważniejsze terminy",

    aboutHeading: "O konferencji",
    committeeScientificHeading: "Komitet naukowy",
    committeeOrganisingHeading: "Komitet organizacyjny",
    programmeHeading: "Program",
    programmeNote: "Kliknij sesję oznaczoną ▸, aby przeczytać abstrakt.",
    downloadProgramme: "Pobierz program (PDF)",
    speakersHeading: "Prelegenci",
    keynoteBadge: "Wykład plenarny",
    venueHeading: "Miejsce i dojazd",
    gettingThere: "Jak dojechać",
    accommodation: "Noclegi",
    openInMaps: "Otwórz w mapach",
    contactHeading: "Kontakt",
    contactIntro: "Masz pytania? Skontaktuj się z organizatorami:",

    downloadPoster: "Pobierz plakat",
    organisedBy: "Organizator:",
    partOf: "Część projektu",
    projectWord: "",
    fundedBy: "Finansowane przez Unię Europejską",

    close: "Zamknij",
    backToTop: "Do góry",
    tba: "Wkrótce"
  }
};

const LANG_STORAGE_KEY = "conf2027.lang";

const I18N = {
  // Default to a stored choice, else browser language if Polish, else English.
  lang: (function () {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "pl" || saved === "en") return saved;
    return (navigator.language || "").toLowerCase().startsWith("pl") ? "pl" : "en";
  })(),

  // Look up an interface label.
  t(key) {
    return UI_TEXT[this.lang]?.[key] ?? UI_TEXT.en[key] ?? key;
  },

  // Pick the localized field from a data object, e.g. pick(s, "title") ->
  // s.title_pl (current lang) with English fallback.
  pick(obj, base) {
    if (!obj) return "";
    return obj[base + "_" + this.lang] ?? obj[base + "_en"] ?? "";
  },

  // Pull a content.js block for the active language.
  content() {
    return CONF_CONTENT[this.lang] ?? CONF_CONTENT.en;
  },

  setLang(code) {
    this.lang = code === "pl" ? "pl" : "en";
    localStorage.setItem(LANG_STORAGE_KEY, this.lang);
    document.documentElement.lang = this.lang;
  }
};
