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
    heroTagline: "A four-day international forum on multilingualism, language policy, and the future of Europe's linguistic diversity.",

    aboutParas: [
      "The FOSTERLANG Forum on Multilingualism brings together researchers, educators, policymakers, and language-community activists to share work on multilingual education, minority and regional languages, and effective language policy.",
      "The Forum is part of FOSTERLANG — “Fostering Linguistic Capital” — a Horizon Europe project building a roadmap to reverse Europe's diversity crisis and activate the societal benefits of multilingualism. It is convened under the project's work on multilingualism policies (WP7), led at Adam Mickiewicz University in Poznań.",
      "Over four days in April 2027, keynotes, panels, and paper sessions will connect academic research with policy and grassroots practice across Europe."
    ],

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
    heroTagline: "Czterodniowe międzynarodowe forum poświęcone wielojęzyczności, polityce językowej i przyszłości różnorodności językowej w Europie.",

    aboutParas: [
      "Forum Wielojęzyczności FOSTERLANG gromadzi badaczy, nauczycieli, decydentów oraz działaczy społeczności językowych, aby wymieniać się doświadczeniami z zakresu edukacji wielojęzycznej, języków mniejszościowych i regionalnych oraz skutecznej polityki językowej.",
      "Forum jest częścią projektu FOSTERLANG — „Fostering Linguistic Capital” — finansowanego w ramach programu Horyzont Europa, którego celem jest opracowanie mapy drogowej przeciwdziałającej kryzysowi różnorodności w Europie i uwalniającej społeczne korzyści wielojęzyczności. Forum organizowane jest w ramach prac nad politykami wielojęzyczności (WP7), kierowanych na Uniwersytecie im. Adama Mickiewicza w Poznaniu.",
      "Przez cztery dni w kwietniu 2027 roku wykłady plenarne, panele i sesje referatowe połączą badania naukowe z polityką i praktyką oddolną w całej Europie."
    ],

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
