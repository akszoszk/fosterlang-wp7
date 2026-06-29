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
      "The FOSTERLANG Forum on Multilingualism is a major European event that brings together policymakers, researchers, and language communities to discuss strategies for effective and inclusive language policy. It is the flagship gathering of FOSTERLANG's work on multilingualism policies (Work Package 7), hosted at Adam Mickiewicz University in Poznań.",
      "The Forum is part of FOSTERLANG — “Fostering Linguistic Capital: A Roadmap for Reversing the Diversity Crisis and Activating Societal Benefits in Europe” — a €3 million Horizon Europe project launched in 2025, coordinated by the University of Warsaw (Faculty of Artes Liberales) together with the European Language Equality Network (ELEN). Uniting 14 partner institutions and 48 language communities, it works to ensure that the linguistic and human capital of minority-language speakers is recognised, valued, and strengthened, and to deliver a Linguistic Capital Road Map of concrete recommendations.",
      "Building on WP7's analysis of language policy across Europe — how educational, cultural, and political frameworks shape the vitality of minority and endangered languages, and how top-down (governmental) and bottom-up (community) approaches can be balanced — the Forum connects academic research with policy and grassroots practice. In April 2027, keynotes, panels, and paper sessions will bring these conversations together in Poznań."
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
    heroTagline: "Międzynarodowe forum poświęcone wielojęzyczności, polityce językowej i przyszłości różnorodności językowej w Europie.",

    aboutParas: [
      "Forum Wielojęzyczności FOSTERLANG to duże europejskie wydarzenie, które gromadzi decydentów, badaczy i społeczności językowe, by wspólnie omawiać strategie skutecznej i inkluzywnej polityki językowej. Jest to kluczowe przedsięwzięcie prac FOSTERLANG nad politykami wielojęzyczności (Pakiet zadań 7), organizowane na Uniwersytecie im. Adama Mickiewicza w Poznaniu.",
      "Forum jest częścią projektu FOSTERLANG — „Wspieranie kapitału językowego: plan odwrócenia kryzysu różnorodności i aktywowania korzyści społecznych w Europie” — finansowanego z programu Horyzont Europa projektu o wartości 3 mln euro, rozpoczętego w 2025 roku i koordynowanego przez Uniwersytet Warszawski (Wydział „Artes Liberales”) we współpracy z Europejską Siecią na rzecz Równości Językowej (ELEN). Łącząc 14 instytucji partnerskich i 48 społeczności językowych, projekt dąży do tego, by kapitał językowy i ludzki osób posługujących się językami mniejszościowymi był uznawany, doceniany i wzmacniany, a jego głównym rezultatem będzie Mapa drogowa kapitału językowego z konkretnymi rekomendacjami.",
      "Nawiązując do analiz WP7 dotyczących polityki językowej w Europie — wpływu ram edukacyjnych, kulturowych i politycznych na żywotność języków mniejszościowych i zagrożonych oraz równowagi między podejściem odgórnym (rządowym) a oddolnym (społeczności) — Forum łączy badania naukowe z polityką i praktyką oddolną. W kwietniu 2027 roku wykłady plenarne, panele i sesje referatowe spotkają się w Poznaniu."
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
