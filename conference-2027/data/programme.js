/* =============================================================================
 * programme.js — The 4-day schedule.
 *
 * One object per day; each has a "sessions" array.
 * Session fields (all optional except time + title):
 *   time        "09:00 – 10:30"
 *   title_en/pl session title in each language
 *   speaker     name(s) — leave "" for breaks
 *   room        room / hall — leave "" if not assigned yet
 *   type        "keynote" | "session" | "break" | "social"  (controls colour)
 *   abstract_en/pl  optional longer text; if present, the row expands on click
 *
 * To add a talk: copy a { ... } line, paste it, and edit the fields.
 * Everything here is placeholder content — replace with the real programme.
 * ===========================================================================*/

const CONF_PROGRAMME = [
  {
    dateISO: "2027-04-07",
    label_en: "Day 1 · Wed 7 Apr",
    label_pl: "Dzień 1 · śr. 7 kwi",
    sessions: [
      { time: "09:00 – 10:00", title_en: "Registration & coffee", title_pl: "Rejestracja i kawa", speaker: "", room: "Main hall foyer", type: "break" },
      { time: "10:00 – 10:30", title_en: "Opening ceremony", title_pl: "Uroczyste otwarcie", speaker: "Organising Committee", room: "Aula", type: "session" },
      { time: "10:30 – 11:30", title_en: "Keynote: TODO keynote title", title_pl: "Wykład plenarny: TODO tytuł", speaker: "TODO Keynote Speaker", room: "Aula", type: "keynote",
        abstract_en: "TODO: Abstract of the opening keynote. This text appears when the session is expanded.",
        abstract_pl: "TODO: Abstrakt wykładu otwierającego. Ten tekst pojawia się po rozwinięciu sesji." },
      { time: "11:30 – 12:00", title_en: "Coffee break", title_pl: "Przerwa kawowa", speaker: "", room: "", type: "break" },
      { time: "12:00 – 13:30", title_en: "Parallel sessions A1 · B1", title_pl: "Sesje równoległe A1 · B1", speaker: "", room: "Rooms 1.1 / 1.2", type: "session" },
      { time: "13:30 – 15:00", title_en: "Lunch", title_pl: "Obiad", speaker: "", room: "", type: "break" },
      { time: "15:00 – 16:30", title_en: "Parallel sessions A2 · B2", title_pl: "Sesje równoległe A2 · B2", speaker: "", room: "Rooms 1.1 / 1.2", type: "session" },
      { time: "18:00 – 20:00", title_en: "Welcome reception", title_pl: "Powitalny poczęstunek", speaker: "", room: "TODO", type: "social" }
    ]
  },
  {
    dateISO: "2027-04-08",
    label_en: "Day 2 · Thu 8 Apr",
    label_pl: "Dzień 2 · czw. 8 kwi",
    sessions: [
      { time: "09:30 – 10:30", title_en: "Keynote: TODO", title_pl: "Wykład plenarny: TODO", speaker: "TODO Keynote Speaker", room: "Aula", type: "keynote" },
      { time: "10:30 – 11:00", title_en: "Coffee break", title_pl: "Przerwa kawowa", speaker: "", room: "", type: "break" },
      { time: "11:00 – 13:00", title_en: "Parallel sessions", title_pl: "Sesje równoległe", speaker: "", room: "Rooms 1.1 / 1.2", type: "session" },
      { time: "13:00 – 14:30", title_en: "Lunch", title_pl: "Obiad", speaker: "", room: "", type: "break" },
      { time: "14:30 – 16:00", title_en: "Panel discussion: TODO", title_pl: "Dyskusja panelowa: TODO", speaker: "TODO panellists", room: "Aula", type: "session" },
      { time: "16:30 – 18:00", title_en: "Poster session", title_pl: "Sesja plakatowa", speaker: "", room: "Foyer", type: "session" }
    ]
  },
  {
    dateISO: "2027-04-09",
    label_en: "Day 3 · Fri 9 Apr",
    label_pl: "Dzień 3 · pt. 9 kwi",
    sessions: [
      { time: "09:30 – 10:30", title_en: "Keynote: TODO", title_pl: "Wykład plenarny: TODO", speaker: "TODO Keynote Speaker", room: "Aula", type: "keynote" },
      { time: "10:30 – 11:00", title_en: "Coffee break", title_pl: "Przerwa kawowa", speaker: "", room: "", type: "break" },
      { time: "11:00 – 13:00", title_en: "Parallel sessions", title_pl: "Sesje równoległe", speaker: "", room: "Rooms 1.1 / 1.2", type: "session" },
      { time: "13:00 – 14:30", title_en: "Lunch", title_pl: "Obiad", speaker: "", room: "", type: "break" },
      { time: "14:30 – 16:00", title_en: "Parallel sessions", title_pl: "Sesje równoległe", speaker: "", room: "Rooms 1.1 / 1.2", type: "session" },
      { time: "19:30 – 23:00", title_en: "Conference dinner", title_pl: "Uroczysta kolacja", speaker: "", room: "TODO restaurant", type: "social" }
    ]
  },
  {
    dateISO: "2027-04-10",
    label_en: "Day 4 · Sat 10 Apr",
    label_pl: "Dzień 4 · sob. 10 kwi",
    sessions: [
      { time: "10:00 – 11:30", title_en: "Closing keynote: TODO", title_pl: "Wykład zamykający: TODO", speaker: "TODO Keynote Speaker", room: "Aula", type: "keynote" },
      { time: "11:30 – 12:00", title_en: "Coffee break", title_pl: "Przerwa kawowa", speaker: "", room: "", type: "break" },
      { time: "12:00 – 13:00", title_en: "Closing remarks & awards", title_pl: "Zakończenie i nagrody", speaker: "Organising Committee", room: "Aula", type: "session" },
      { time: "14:00 – 17:00", title_en: "Optional excursion", title_pl: "Wycieczka fakultatywna", speaker: "", room: "Meet at venue", type: "social" }
    ]
  }
];
