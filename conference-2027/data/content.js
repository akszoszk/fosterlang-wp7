/* =============================================================================
 * content.js — The PROSE of each section, in English (en) and Polish (pl).
 *
 * This is where you edit the actual paragraphs of text on the page.
 * Each language block mirrors the other — keep them in sync.
 * "paras" fields are arrays: each item becomes its own paragraph.
 * Interface labels (buttons, nav, headings) live in js/i18n.js instead.
 * ===========================================================================*/

const CONF_CONTENT = {
  en: {
    heroTagline: "An international forum on multilingualism, language policy, and the future of Europe's linguistic diversity.",

    aboutParas: [
      "The FOSTERLANG Forum on Multilingual Policies brings together policymakers, researchers, and language communities to discuss strategies for effective and inclusive language policy. It examines how educational, cultural, and political frameworks shape the vitality of minority and endangered languages, and how top-down (governmental) and bottom-up (community) approaches can be balanced.",
      "Hosted at Adam Mickiewicz University in Poznań, the Forum follows the FOSTERLANG Linguistic Diversity Forum held in Barcelona in June 2026, which gathered some 150 participants and 70 speakers from language communities across the world. It builds on the shared agenda set there — that protecting languages is a public responsibility, and that revitalisation must be community-driven and holistic.",
      "The Forum is organised within FOSTERLANG, which works to recognise, value, and strengthen the linguistic and human capital of speakers of minority and endangered languages across Europe. In Poznań, from 6–10 April 2027, keynotes, panels, and paper sessions will connect academic research with policy and grassroots practice."
    ],

    themesIntro: "The Forum's sessions span the policies, practices, and research shaping multilingualism in Europe. Recurring themes include:",
    themes: [
      { title: "Language policy & planning", desc: "Assessing the tools that govern minority, regional, and endangered languages." },
      { title: "Top-down & bottom-up", desc: "Balancing governmental frameworks with community-led action." },
      { title: "Multilingual education", desc: "Comparing models of multilingual and heritage-language schooling across Europe." },
      { title: "Language vitality", desc: "Supporting the vitality of minority and endangered languages." },
      { title: "Linguistic capital", desc: "Recognising, valuing, and strengthening speakers' linguistic and human capital." },
      { title: "Rights & inclusion", desc: "Towards effective and inclusive language policy for Europe's communities." }
    ],

    programmeIntro: "The full programme — keynotes, panels, and paper sessions — will be published here as a downloadable PDF closer to the event.",

    // Committees — add or remove people freely.
    committeeScientific: [
      "TODO Prof. Name Surname — Adam Mickiewicz University",
      "TODO Prof. Name Surname — Partner University"
    ],
    committeeOrganising: [
      "TODO Dr Name Surname — Chair",
      "TODO Name Surname — Secretariat"
    ],

    venueIntro: "The conference will be held at the venue below. Use the map for directions; suggested accommodation follows.", // TODO
    travelParas: [
      "By air: the nearest airport is Poznań–Ławica (POZ), ~7 km from the city centre.",
      "By rail: Poznań Główny is a major hub with direct connections to Warsaw, Berlin, and Wrocław."
    ], // TODO
    accommodationParas: [
      "TODO: List 2–4 recommended hotels or student residences near the venue, with an approximate price range and walking time."
    ]
  },

  pl: {
    heroTagline: "Międzynarodowe forum poświęcone wielojęzyczności, polityce językowej i przyszłości różnorodności językowej w Europie.",

    aboutParas: [
      "Forum Wielojęzyczności FOSTERLANG to duże europejskie wydarzenie, które gromadzi decydentów, badaczy i społeczności językowe, by wspólnie omawiać strategie skutecznej i inkluzywnej polityki językowej. Jest to kluczowe przedsięwzięcie prac FOSTERLANG nad politykami wielojęzyczności (Pakiet zadań 7), organizowane na Uniwersytecie im. Adama Mickiewicza w Poznaniu.",
      "Forum jest częścią projektu FOSTERLANG — „Wspieranie kapitału językowego: plan odwrócenia kryzysu różnorodności i aktywowania korzyści społecznych w Europie” — finansowanego z programu Horyzont Europa projektu o wartości 3 mln euro, rozpoczętego w 2025 roku i koordynowanego przez Uniwersytet Warszawski (Wydział „Artes Liberales”) we współpracy z Europejską Siecią na rzecz Równości Językowej (ELEN). Łącząc 14 instytucji partnerskich i 48 społeczności językowych, projekt dąży do tego, by kapitał językowy i ludzki osób posługujących się językami mniejszościowymi był uznawany, doceniany i wzmacniany, a jego głównym rezultatem będzie Mapa drogowa kapitału językowego z konkretnymi rekomendacjami.",
      "Nawiązując do analiz WP7 dotyczących polityki językowej w Europie — wpływu ram edukacyjnych, kulturowych i politycznych na żywotność języków mniejszościowych i zagrożonych oraz równowagi między podejściem odgórnym (rządowym) a oddolnym (społeczności) — Forum łączy badania naukowe z polityką i praktyką oddolną. W kwietniu 2027 roku wykłady plenarne, panele i sesje referatowe spotkają się w Poznaniu."
    ],

    themesIntro: "Sesje Forum obejmują polityki, praktyki i badania kształtujące wielojęzyczność w Europie. Powracające tematy to m.in.:",
    themes: [
      { title: "Polityka i planowanie językowe", desc: "Ocena narzędzi regulujących języki mniejszościowe, regionalne i zagrożone." },
      { title: "Podejście odgórne i oddolne", desc: "Równowaga między ramami rządowymi a działaniami społeczności." },
      { title: "Edukacja wielojęzyczna", desc: "Porównanie modeli edukacji wielojęzycznej i w językach odziedziczonych w Europie." },
      { title: "Żywotność języków", desc: "Wspieranie żywotności języków mniejszościowych i zagrożonych." },
      { title: "Kapitał językowy", desc: "Uznanie, docenienie i wzmacnianie kapitału językowego i ludzkiego użytkowników." },
      { title: "Prawa i inkluzja", desc: "Ku skutecznej i inkluzywnej polityce językowej dla społeczności Europy." }
    ],

    programmeIntro: "Pełny program — wykłady plenarne, panele i sesje referatowe — zostanie opublikowany tutaj jako plik PDF do pobrania bliżej wydarzenia.",

    committeeScientific: [
      "TODO prof. Imię Nazwisko — Uniwersytet im. Adama Mickiewicza",
      "TODO prof. Imię Nazwisko — Uniwersytet partnerski"
    ],
    committeeOrganising: [
      "TODO dr Imię Nazwisko — Przewodniczący/a",
      "TODO Imię Nazwisko — Sekretariat"
    ],

    venueIntro: "Konferencja odbędzie się w miejscu wskazanym poniżej. Skorzystaj z mapy, aby znaleźć dojazd; dalej podajemy sugerowane noclegi.", // TODO
    travelParas: [
      "Samolotem: najbliższe lotnisko to Poznań–Ławica (POZ), ok. 7 km od centrum.",
      "Pociągiem: Poznań Główny to ważny węzeł z bezpośrednimi połączeniami do Warszawy, Berlina i Wrocławia."
    ],
    accommodationParas: [
      "TODO: Wymień 2–4 polecane hotele lub akademiki w pobliżu, z orientacyjnym przedziałem cenowym i czasem dojścia."
    ]
  }
};
