/* =============================================================================
 * config.js — Single source of truth for conference facts & external links.
 *
 * EDIT THIS FILE to change dates, venue, fees, deadlines, and the URLs that the
 * Register / Submit buttons point to. Anything marked TODO is a placeholder.
 * No coding knowledge needed — just change the text between the quotes.
 * ===========================================================================*/

const CONF_CONFIG = {
  /* --- Identity -------------------------------------------------------------*/
  // Short name shown in the header logo and browser tab.
  shortName: "FOSTERLANG Forum",
  // Full name (bilingual) shown in the hero.
  name_en: "FOSTERLANG Forum on Multilingualism",
  name_pl: "Forum Wielojęzyczności FOSTERLANG",

  /* --- Dates ---------------------------------------------------------------*/
  // The conference runs 7–10 April 2027. The countdown counts down to startISO.
  startISO: "2027-04-07",
  endISO:   "2027-04-10",
  datesLabel_en: "7–10 April 2027",
  datesLabel_pl: "7–10 kwietnia 2027",

  /* --- Place ---------------------------------------------------------------*/
  city_en: "Poznań, Poland",
  city_pl: "Poznań, Polska",
  venueName_en: "Adam Mickiewicz University, Poznań",
  venueName_pl: "Uniwersytet im. Adama Mickiewicza w Poznaniu",
  venueAddress: "Collegium Minus, ul. Wieniawskiego 1, 61-712 Poznań", // TODO confirm exact building
  // OpenStreetMap embed: replace the bbox & marker with your venue's coordinates.
  // Tip: openstreetmap.org → find venue → "Share" → "HTML" to get these numbers.
  // Currently centred on AMU Collegium Minus, Poznań.
  mapEmbedSrc: "https://www.openstreetmap.org/export/embed.html?bbox=16.910%2C52.401%2C16.940%2C52.416&layer=mapnik&marker=52.4082%2C16.9245",
  mapLink: "https://www.openstreetmap.org/?mlat=52.4082&mlon=16.9245#map=16/52.4082/16.9245",

  /* --- Contact -------------------------------------------------------------*/
  email: "conference2027@amu.edu.pl",  // TODO real inbox
  // Footer social/links — remove any you don't use (set to "").
  social: {
    twitter: "",                       // e.g. "https://x.com/yourconf"
    facebook: "",
    linkedin: ""
  },

  /* --- Parent project & funding --------------------------------------------*/
  // The Forum is part of the FOSTERLANG project (Horizon Europe).
  project: {
    name: "FOSTERLANG",
    url: "https://fosterlang.al.uw.edu.pl/",
    fullName_en: "Fostering Linguistic Capital: A Roadmap for Reversing the Diversity Crisis and Activating Societal Benefits in Europe",
    fullName_pl: "Fostering Linguistic Capital — projekt na rzecz różnorodności językowej w Europie",
    workPackage_en: "Work Package 7 · Multilingualism policies",
    workPackage_pl: "Pakiet zadań 7 · Polityki wielojęzyczności"
  },
  funding: {
    grant: "Grant Agreement No. 101178387",
    note_en: "Funded by the European Union (Horizon Europe). Views and opinions expressed are those of the organisers only and do not necessarily reflect those of the European Union or the granting authority.",
    note_pl: "Finansowane przez Unię Europejską (Horyzont Europa). Wyrażone poglądy i opinie są jedynie opiniami organizatorów i niekoniecznie odzwierciedlają stanowisko Unii Europejskiej ani instytucji finansującej."
  },

  /* --- Poster --------------------------------------------------------------*/
  // Currently an interim SVG recreation of the poster. To use the official
  // artwork, save it as assets/img/poster.jpg and change this to that path.
  posterImage: "assets/img/poster.svg",
  // Optional higher-res / PDF download; leave "" to offer the image itself.
  posterDownload: "",

  /* --- Registration link (external form; no backend) -----------------------*/
  // The "Register" buttons (header + hero) open this URL in a new tab.
  // Leave "" until you have a link — the buttons then fall back to Contact.
  registerUrl: "",                     // TODO paste registration form URL

  /* --- Downloads (drop PDFs in assets/docs/, then point to them here) -------*/
  // Leave as "" to hide the "Download programme" button.
  programmePdf: "",                    // e.g. "assets/docs/programme.pdf"

  /* --- Key deadlines (shown in the deadline strip on the home page) ---------*/
  // status: "open" | "closed" | "upcoming"  (controls the dot colour)
  // Edit, add, or remove rows freely.
  deadlines: [
    { date_en: "28 Feb 2027", date_pl: "28 lut 2027", label_en: "Registration deadline",  label_pl: "Termin rejestracji",   status: "upcoming" },
    { date_en: "7 Apr 2027",  date_pl: "7 kwi 2027",  label_en: "Conference begins",       label_pl: "Początek konferencji", status: "upcoming" }
  ]
};
