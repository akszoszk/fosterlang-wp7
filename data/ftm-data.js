// Ferguson-Tollefson Matrix — Language Policy Data
// FOSTERLANG WP7 | AMU Team | Silesian & Wilamowian & Ukrainian
// Generated from: wilamowski i śląski - LANGUAGE POLICY @ FOSTERLANG.docx
//                 Language Policy documents - POLAND _ Fosterlang.docx

const FTM_DATA = {
  meta: {
    title: "Language Policy Repository",
    subtitle: "Ferguson-Tollefson Matrix Analysis",
    project: "FOSTERLANG WP7",
    team: "AMU (Poznań)",
    taskLeader: "AMU",
    references: [
      "Kan, W. (2011). Language policy in Hong Kong. Working Papers in Educational Linguistics, 26(2).",
      "Kan, W., & Adamson, B. (2016). Language education policies in schools. In Language Education Policy, Springer."
    ],
    levels: ["MACRO", "MESO", "MICRO"],
    directions: ["TOP_DOWN", "BOTTOM_UP"],
    statusLabels: {
      passed:                  { label: "Passed",               color: "#15803d" },
      vetoed:                  { label: "Vetoed",               color: "#dc2626" },
      pending:                 { label: "Pending",              color: "#d97706" },
      processing:              { label: "Processing",           color: "#b45309" },
      ongoing:                 { label: "Ongoing",              color: "#1c5599" },
      published:               { label: "Published",            color: "#6d28d9" },
      procedural:              { label: "Procedural",           color: "#64748b" },
      institutional_response:  { label: "Institutional resp.",  color: "#475569" },
      passed_committee:        { label: "Passed committee",     color: "#166534" },
      active:                  { label: "Active",               color: "#0369a1" },
      historical:              { label: "Historical",           color: "#94a3b8" },
      soft_law:                { label: "Soft law",             color: "#7c3aed" },
      binding_international:   { label: "Binding (intl.)",      color: "#0f766e" }
    }
  },

  // ─── SHARED INSTRUMENTS (apply to both SZL and WYM) ────────────────────────

  shared: [
    {
      id: "shared_const_art35",
      label: "Konstytucja RP, Art. 35 (1997)",
      labelEN: "Constitution of Poland, Art. 35",
      level: "MACRO", direction: "TOP_DOWN",
      type: "Constitutional provision",
      languages: ["szl", "wym"],
      status: "binding_international",
      date: "1997-04-02",
      description: "Guarantees national and ethnic minorities the right to preserve and develop their language, customs, and culture.",
      urls: [
        { label: "ISAP (PDF)", href: "https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU19970780483/U/D19970483Lj.pdf" },
        { label: "🇬🇧 Constitution (EN) – Sejm", href: "https://www.sejm.gov.pl/prawo/konst/angielski/kon1.htm" }
      ],
      tags: ["constitutional", "domestic_hard_law"]
    },
    {
      id: "shared_ustawa_2005",
      label: "Ustawa z 6 stycznia 2005 r. o mniejszościach",
      labelEN: "Law of 6 Jan 2005 on National/Ethnic Minorities and Regional Language",
      level: "MACRO", direction: "TOP_DOWN",
      type: "National statute",
      languages: ["szl", "wym"],
      status: "passed",
      date: "2005-01-06",
      description: "Primary domestic legislation governing minority language recognition, rights, and use in public life and education.",
      urls: [
        { label: "ISAP", href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20050170141" },
        { label: "Dziennik Ustaw", href: "https://dziennikustaw.gov.pl/du/2005/s/17/141" },
        { label: "PDF", href: "https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20050170141/O/D20050141.pdf" },
        { label: "🇬🇧 English translation (gov.pl)", href: "https://www.gov.pl/attachment/cc664f23-0f5c-4e38-b6cd-31a4d68242fc" }
      ],
      tags: ["national_statute", "domestic_hard_law", "primary_instrument"]
    },
    {
      id: "shared_men_reg_2017",
      label: "Rozporządzenie MEN 2017 (zm. 2024, 2025)",
      labelEN: "MEN Regulation on Minority Language Education (2017, amended 2024 & 2025)",
      level: "MACRO", direction: "TOP_DOWN",
      type: "Ministerial regulation",
      languages: ["szl", "wym", "ukr"],
      status: "ongoing",
      date: "2017-08-18",
      description: "Regulates conditions for maintaining national, ethnic and linguistic identity in schools. Amended in 2024 and 2025. Also operationalised at MICRO level in classrooms.",
      urls: [
        { label: "Akt podstawowy", href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20170001655" },
        { label: "PDF 2017", href: "https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20170001655/O/D20171655.pdf" },
        { label: "Tekst jednolity 2023", href: "https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20230002301/O/D20232301.pdf" },
        { label: "Zmiana 2024", href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20240000144" },
        { label: "Zmiana 2025", href: "https://eli.gov.pl/eli/DU/2025/485" }
      ],
      microImplementation: true,
      tags: ["education_regulation", "domestic_hard_law"]
    },
    {
      id: "shared_ecrml",
      label: "ECRML — 4 rundy monitoringu (2010–2023)",
      labelEN: "European Charter for Regional or Minority Languages (4 monitoring rounds)",
      level: "MACRO", direction: "TOP_DOWN",
      type: "International treaty",
      languages: ["szl", "wym"],
      status: "binding_international",
      date: "2009",
      description: "Council of Europe treaty ratified by Poland. Expert Committee has conducted four monitoring rounds, producing detailed recommendations on Polish minority language policy.",
      urls: [
        { label: "CoE hub (all rounds)", href: "https://www.coe.int/en/web/european-charter-regional-or-minority-languages/reports-and-recommendations" },
        { label: "Runda 1 – 2010 (eval.)", href: "https://www.coe.int/t/dg4/education/minlang/Report/E_Reports/PolandECRML2_en.pdf" },
        { label: "Runda 2 – 2015 (eval.)", href: "https://rm.coe.int/16806d87b5" },
        { label: "Runda 3 – 2019 (eval.)", href: "https://rm.coe.int/third-evaluation-report-on-poland-the-european-charter-for-regional-or/1680a4e7ee" },
        { label: "Runda 4 – 2023 (eval.)", href: "https://rm.coe.int/polandecrml4-en/1680ac6470" }
      ],
      tags: ["international_treaty", "council_of_europe"]
    },
    {
      id: "shared_fcnm",
      label: "FCNM — 5 cykli monitoringu",
      labelEN: "Framework Convention for Protection of National Minorities (5 monitoring cycles)",
      level: "MACRO", direction: "TOP_DOWN",
      type: "International treaty",
      languages: ["szl", "wym"],
      status: "binding_international",
      date: "2001",
      description: "Council of Europe Framework Convention ratified by Poland. Five monitoring cycles with ACFC advisory opinions covering minority language policy, including specific observations on Silesian and Wilamowian.",
      urls: [
        { label: "CoE Poland hub", href: "https://www.coe.int/en/web/minorities/poland" },
        { label: "I cykl – ACFC Opinion", href: "https://rm.coe.int/1st-opinion-on-poland/16805e1cfb" },
        { label: "II cykl – ACFC Opinion", href: "https://rm.coe.int/2nd-opinion-on-poland/16805ce536" },
        { label: "III cykl – ACFC Opinion", href: "https://rm.coe.int/3rd-opinion-on-poland/16806ccf6d" },
        { label: "IV cykl – ACFC Opinion", href: "https://rm.coe.int/4th-op-poland-en/1680993391" },
        { label: "V cykl – State Report", href: "https://rm.coe.int/polandpr3-en-docx/1680981491" },
        { label: "🇬🇧 Pro Loquela Silesiana – report to ACFC (EN)", href: "https://wachtyrz.eu/4th-visit-of-the-advisory-committee-on-the-fcnm-to-poland-pls-report/" }
      ],
      tags: ["international_treaty", "council_of_europe"]
    },
    {
      id: "shared_eu_charter",
      label: "Karta Praw Podstawowych UE",
      labelEN: "EU Charter of Fundamental Rights",
      level: "MACRO", direction: "TOP_DOWN",
      type: "Supranational instrument",
      languages: ["szl", "wym", "ukr"],
      status: "binding_international",
      date: "2009",
      description: "Binding EU instrument prohibiting discrimination based on language (Art. 21) and enshrining respect for cultural, religious and linguistic diversity (Art. 22).",
      urls: [
        { label: "EUR-Lex (PL)", href: "https://eur-lex.europa.eu/legal-content/PL/TXT/PDF/?uri=CELEX:12012P/TXT" },
        { label: "🇬🇧 EUR-Lex (EN)", href: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:12012P/TXT" }
      ],
      tags: ["eu_law", "supranational"]
    },
    {
      id: "shared_osce_hague",
      label: "OBWE – Hague Recommendations (1996)",
      labelEN: "OSCE Hague Recommendations on Education Rights of National Minorities",
      level: "MACRO", direction: "TOP_DOWN",
      type: "Soft law",
      languages: ["szl", "wym", "ukr"],
      status: "soft_law",
      date: "1996",
      description: "Non-binding OSCE recommendations referenced in Polish minority language advocacy and parliamentary debates.",
      urls: [
        { label: "OSCE PDF", href: "https://www.osce.org/files/f/documents/e/2/32180.pdf" }
      ],
      tags: ["osce", "soft_law"]
    },
    {
      id: "shared_osce_oslo",
      label: "OBWE – Oslo Recommendations (1998)",
      labelEN: "OSCE Oslo Recommendations on Linguistic Rights of National Minorities",
      level: "MACRO", direction: "TOP_DOWN",
      type: "Soft law",
      languages: ["szl", "wym", "ukr"],
      status: "soft_law",
      date: "1998",
      description: "Non-binding OSCE recommendations on linguistic rights, frequently cited in advocacy for minority language recognition.",
      urls: [
        { label: "OSCE", href: "https://www.osce.org/hcnm/oslo-recommendations" }
      ],
      tags: ["osce", "soft_law"]
    },
    {
      id: "shared_un_declaration",
      label: "ONZ – Deklaracja Praw Mniejszości (1992)",
      labelEN: "UN Declaration on Rights of Persons Belonging to National or Ethnic Minorities",
      level: "MACRO", direction: "TOP_DOWN",
      type: "Soft law",
      languages: ["szl", "wym", "ukr"],
      status: "soft_law",
      date: "1992",
      urls: [
        { label: "OHCHR", href: "https://www.ohchr.org/en/instruments-mechanisms/instruments/declaration-rights-persons-belonging-national-or-ethnic" }
      ],
      tags: ["un", "soft_law"]
    },
    {
      id: "shared_rpo_letter_2021",
      label: "RPO – list do Premiera (Ślązacy i Wilamowianie, 29.01.2021)",
      labelEN: "Commissioner for Human Rights – letter to PM on Silesian and Wilamowian issues",
      level: "MESO", direction: "BOTTOM_UP",
      type: "Ombudsman intervention",
      languages: ["szl", "wym"],
      status: "historical",
      date: "2021-01-29",
      description: "Ombudsman formally reminded the Prime Minister of unresolved minority rights issues affecting both Silesian and Wilamowian communities. Followed by MSWiA response (8 March 2021).",
      urls: [
        { label: "BIP RPO (web)", href: "https://bip.brpo.gov.pl/pl/content/rpo-przypomina-premierowi-o-problemach-slazakow-i-wilamowian" },
        { label: "Wystąpienie (PDF)", href: "https://bip.brpo.gov.pl/sites/default/files/Wyst%C4%85pienie%20do%20PRM%20%C5%9Al%C4%85zacy%20i%20Wilamowianie%2C%2029.01.2021.pdf" },
        { label: "Odpowiedź MSWiA (PDF)", href: "https://bip.brpo.gov.pl/sites/default/files/Odpowiedz_MSWiA_8.03.2021.pdf" }
      ],
      bidirectional: true,
      note: "RPO is a MESO institutional actor exerting upward (BOTTOM_UP) pressure on the executive.",
      tags: ["ombudsman", "advocacy", "joint_instrument"]
    },
    {
      id: "shared_rpo_report_2023",
      label: "RPO – Raport dot. mniejszości 2020–2022 (pub. 2023)",
      labelEN: "RPO Minority Rights Report 2020–2022",
      level: "MESO", direction: "BOTTOM_UP",
      type: "Ombudsman report",
      languages: ["szl", "wym"],
      status: "published",
      date: "2023-01-01",
      description: "Comprehensive ombudsman report documenting unresolved minority rights issues in Poland 2020–2022, covering both Silesian and Wilamowian cases.",
      urls: [
        { label: "PDF", href: "https://bip.brpo.gov.pl/sites/default/files/2023-01/Raport_RPO_mniejszosci_narodowe_etniczne_2020-2022_styczen2023.pdf" }
      ],
      bidirectional: true,
      tags: ["ombudsman", "systematic_advocacy", "joint_instrument"]
    }
  ],

  // ─── SILESIAN (SZL) ─────────────────────────────────────────────────────────

  silesian: {
    code: "szl",
    name: "Silesian",
    namePL: "Język Śląski",
    color: "#2563eb",
    items: [
      // MACRO / TOP-DOWN — Legislative
      {
        id: "szl_sejm_233",
        label: "Sejm – druk nr 233",
        labelEN: "Sejm Bill Print 233 (original Silesian bill)",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Legislative print",
        status: "passed_committee",
        date: "2023",
        description: "Original Sejm bill seeking to recognise Silesian as a regional language under the 2005 Minorities Act.",
        urls: [
          { label: "PDF", href: "https://orka.sejm.gov.pl/Druki10ka.nsf/0/9EA33728D8043716C1258AD80034B898/$File/233.pdf" },
          { label: "Przebieg", href: "https://www.sejm.gov.pl/sejm10.nsf/PrzebiegProc.xsp?nr=233" }
        ],
        tags: ["legislative", "sejm", "szl_primary"]
      },
      {
        id: "szl_sejm_289",
        label: "Sejm – druk nr 289",
        labelEN: "Sejm Bill Print 289",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Legislative print",
        status: "passed",
        date: "2024",
        urls: [
          { label: "PDF", href: "https://orka.sejm.gov.pl/Druki10ka.nsf/0/289E1202A5EB53E3C1258B01003AF819/%24File/289.pdf" }
        ],
        tags: ["legislative", "sejm"]
      },
      {
        id: "szl_sejm_committee_apr2024",
        label: "Biuletyn komisji sejmowej (9.04.2024)",
        labelEN: "Sejm Committee Bulletin, 9 April 2024",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Committee record",
        status: "procedural",
        date: "2024-04-09",
        urls: [
          { label: "Biuletyn", href: "https://sejm.gov.pl/Sejm10.nsf/biuletyn.xsp?documentId=F7D0A27A50944AE7C1258B070048C585" }
        ],
        tags: ["committee", "sejm", "procedural"]
      },
      {
        id: "szl_senat_druk81",
        label: "Senat – druki 81 / 81A / 81Z + uchwała",
        labelEN: "Senate Prints 81, 81A, 81Z + Resolution",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Senate print + resolution",
        status: "passed",
        date: "2024",
        description: "Senate passed the Silesian recognition bill. Print 81A contains the committee report; 81Z the legislative summary; separate resolution confirms Senate support.",
        urls: [
          { label: "Druk 81", href: "https://www.senat.gov.pl/download/gfx/senat/pl/senatdruki/13202/druk/081.pdf" },
          { label: "Druk 81A", href: "https://www.senat.gov.pl/download/gfx/senat/pl/senatdruki/13210/druk/081a.pdf" },
          { label: "Druk 81Z", href: "https://www.senat.gov.pl/download/gfx/senat/pl/senatdruki/13213/druk/081z.pdf" },
          { label: "Opinia BL", href: "https://www.senat.gov.pl/download/gfx/senat/pl/senatekspertyzy/7046/plik/081o.pdf" },
          { label: "Mat. porównawczy", href: "https://www.senat.gov.pl/download/gfx/senat/pl/senatekspertyzy/7049/plik/081m.pdf" },
          { label: "Uchwała", href: "https://www.senat.gov.pl/download/gfx/senat/pl/senatuchwaly/5220/plik/081uch.pdf" },
          { label: "Posiedzenie", href: "https://www.senat.gov.pl/prace/posiedzenia/przebieg%2C612%2C1.html" },
          { label: "Wypowiedzi", href: "https://www.senat.gov.pl/prace/posiedzenia/przebieg%2C612%2C1%2Cprzemowienia.html" }
        ],
        tags: ["senate", "legislative"]
      },
      {
        id: "szl_veto_duda_2024",
        label: "Weto Prezydenta Dudy (29.05.2024)",
        labelEN: "Presidential Veto – President Duda (29 May 2024)",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Executive veto",
        status: "vetoed",
        date: "2024-05-29",
        description: "President Andrzej Duda vetoed the law recognising Silesian as a regional language. Expert commentary described the justification as 'offensive'. This triggered the post-veto re-processing in the Sejm.",
        urls: [
          { label: "Prezydent.pl (archiwum Dudy)", href: "https://www.prezydent.pl/kancelaria/archiwum/andrzej-duda/prawo/zawetowane/weto-do-nowelizacji-ustawy-o-mniejszosciach-narodowych-i-etnicznych-oraz-jezyku-regionalnym%2C86756" },
          { label: "Uzasadnienie (PDF)", href: "https://www.prezydent.pl/storage/file/core_files/2024/5/29/7f599ba96c47c37b94407946601c1089/Weto%20nowelizacji%20ustawy%20o%20mniejszo%C5%9Bci%20narodowych%20i%20etnicznych%20oraz%20o%20j%C4%99zyku%20regionalnym.pdf" },
          { label: "🇬🇧 Notes from Poland (EN)", href: "https://notesfrompoland.com/2024/05/29/president-vetoes-law-recognising-silesian-as-regional-language-in-poland/" }
        ],
        significance: "KEY EVENT",
        tags: ["veto", "executive", "blocked"]
      },
      {
        id: "szl_sejm_1346",
        label: "Sejm – druk nr 1346 (ponowne rozpatrzenie, 9.01.2026)",
        labelEN: "Sejm Bill Print 1346 – post-veto re-processing (9 Jan 2026)",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Legislative print",
        status: "passed",
        date: "2026-01-09",
        description: "Sejm re-passed the Silesian language recognition bill following Duda's veto. Referred to Senate.",
        urls: [
          { label: "PDF", href: "https://orka.sejm.gov.pl/Druki10ka.nsf/0/B2EC676185FF770FC1258CA5003B61D5/%24File/1346.pdf" },
          { label: "Przebieg", href: "https://www.sejm.gov.pl/Sejm10.nsf/PrzebiegProc.xsp?nr=1346" },
          { label: "Druk 1346-003", href: "https://orka.sejm.gov.pl/Druki10ka.nsf/0/066B6CC86F47BB3AC1258CBB00411D57/%24File/1346-003.pdf" },
          { label: "🇬🇧 Notes from Poland (EN)", href: "https://notesfrompoland.com/2026/01/10/law-recognising-silesian-as-regional-language-in-poland-approved-by-parliament/" }
        ],
        tags: ["legislative", "sejm", "post_veto"]
      },
      {
        id: "szl_senat_598",
        label: "Senat – druk 598 (ponowne rozpatrzenie, 21.01.2026)",
        labelEN: "Senate Print 598 – post-veto processing (21 Jan 2026)",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Senate print",
        status: "passed",
        date: "2026-01-21",
        description: "Senate approved the re-submitted Silesian language bill on 21 January 2026. Now awaits presidential signature from President Nawrocki.",
        urls: [
          { label: "Tematy posiedzenia", href: "https://www.senat.gov.pl/prace/posiedzenia/tematy%2C650%2C1.html" },
          { label: "Opinia BL", href: "https://www.senat.gov.pl/gfx/senat/pl/senatekspertyzy/7759/plik/598o.pdf" },
          { label: "Mat. porównawczy", href: "https://www.senat.gov.pl/download/gfx/senat/pl/senatekspertyzy/7763/plik/598m.pdf" },
          { label: "Stenogram komisji", href: "https://www.senat.gov.pl/download/gfx/senat/pl/senatkomisjeposiedzenia/11006/stenogram/028ew_4egz.pdf" }
        ],
        tags: ["senate", "post_veto"]
      },
      {
        id: "szl_veto_threat_nawrocki_2026",
        label: "Sygnał weta – Prezydent Nawrocki (luty 2026)",
        labelEN: "Veto threat – President Nawrocki (February 2026)",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Executive decision (pending)",
        status: "pending",
        date: "2026-02",
        description: "President Nawrocki has signalled potential veto of the re-passed bill, mirroring his earlier veto of the Wilamowian recognition bill (Oct 2025). Decision awaited as of March 2026.",
        urls: [
          { label: "Dziennik Zachodni (5.02.2026)", href: "https://dziennikzachodni.pl/weto-prezydenta-w-sprawie-ustawy-o-jezyku-slaskim-jasne-jak-slonce-radni-z-katowic-probuja-jednak-przekonac-karola-nawrockiego/ar/c1p2-28680827" },
          { label: "🇬🇧 Notes from Poland – veto (EN)", href: "https://notesfrompoland.com/2026/02/13/polish-president-vetoes-law-recognising-silesian-as-regional-language-in-poland/" }
        ],
        significance: "KEY EVENT",
        tags: ["veto", "executive", "pending"]
      },
      // MESO / TOP-DOWN — Regional media (public broadcasters)
      {
        id: "szl_tvp_katowice_senate_jan2026",
        label: "TVP Katowice – Senat uznał język śląski (21.01.2026)",
        labelEN: "TVP Katowice – Senate recognised Silesian (21 Jan 2026)",
        level: "MESO", direction: "TOP_DOWN",
        type: "Regional public broadcast",
        status: "published",
        date: "2026-01-21",
        urls: [
          { label: "TVP Katowice", href: "https://katowice.tvp.pl/91169517/senat-uznal-jezyk-slaski-za-regionalny" },
          { label: "TVP Katowice – komisje (21.01)", href: "https://katowice.tvp.pl/91157266/senackie-komisje-poparly-ustawe-uznajaca-jezyk-slaski-za-regionalny" },
          { label: "TVP Info (21.01)", href: "https://www.tvp.info/91168604/senat-poparl-ustawe-uznajaca-slaski-za-jezyk-regionalny-jezyk-slaski-zostal-oficjalnie-jezykiem-regionalnym" }
        ],
        tags: ["media", "regional", "public_broadcaster"]
      },
      {
        id: "szl_dziennik_zachodni_2026",
        label: "Dziennik Zachodni – seria (01–02.2026)",
        labelEN: "Western Daily (Dziennik Zachodni) – series Jan-Feb 2026",
        level: "MESO", direction: "TOP_DOWN",
        type: "Regional newspaper",
        status: "published",
        date: "2026-01",
        urls: [
          { label: "DZ (29.01.2026)", href: "https://dziennikzachodni.pl/weto-w-sprawie-jezyka-slaskiego-polityk-pis-karol-nawrocki-zrobi-to-samo-co-z-wilamowskim-ale-mam-swoj-projekt/ar/c1p2-28699421" },
          { label: "DZ (5.02.2026)", href: "https://dziennikzachodni.pl/weto-prezydenta-w-sprawie-ustawy-o-jezyku-slaskim-jasne-jak-slonce-radni-z-katowic-probuja-jednak-przekonac-karola-nawrockiego/ar/c1p2-28680827" },
          { label: "DZ – apel (6.02.2026)", href: "https://dziennikzachodni.pl/prezydencie-nawrocki-pora-podpisac-ustawe-o-jezyku-slaskim-i-przerwac-ten-ciagnacy-sie-20-lat-spor/ar/c1p2-28701025" }
        ],
        tags: ["media", "regional_press"]
      },
      {
        id: "szl_slazag",
        label: "Ślązag – relacje (2024–2026)",
        labelEN: "Slazag (Silesian media portal) – coverage 2024-2026",
        level: "MESO", direction: "BOTTOM_UP",
        type: "Silesian-identity media (PL/SZL)",
        status: "ongoing",
        date: "2024",
        urls: [
          { label: "Przegłosowanie w Sejmie (9.01.2026)", href: "https://www.slazag.pl/jezyk-slaski-ponownie-przeglosowany-w-sejmie" },
          { label: "Weto i co dalej z WYM", href: "https://www.slazag.pl/prezydent-zawetowal-ustawe-o-jezyku-wilamowskim-dlaczego-i-co-dalej-z-jezykiem-slaskim" },
          { label: "List do prezydenta (30.01.2026)", href: "https://www.slazag.pl/nie-lynkej-sie-slonski-godki-eurodeputowany-lukasz-kohut-napisal-do-prezydenta-karola-nawrockiego" }
        ],
        tags: ["media", "silesian_identity", "advocacy_media"]
      },
      {
        id: "szl_pap_media",
        label: "PAP – relacje (maj 2024)",
        labelEN: "Polish Press Agency (PAP) – reports (May 2024)",
        level: "MESO", direction: "TOP_DOWN",
        type: "National news agency",
        status: "published",
        date: "2024-05",
        urls: [
          { label: "PAP – weto (29.05.2024)", href: "https://www.pap.pl/aktualnosci/slaski-nie-bedzie-jezykiem-regionalnym-prezydent-wetuje-ustawe" },
          { label: "PAP Samorząd (30.05.2024)", href: "https://samorzad.pap.pl/kategoria/aktualnosci/prezydent-zawetowal-ustawe-uznajaca-jezyk-slaski-za-regionalny" },
          { label: "PAP – konferencja (31.05.2024)", href: "https://www.pap.pl/aktualnosci/prezydenckie-weto-w-sprawie-jezyka-slaskiego-rzad-odpowie-finansowym-wsparciem" },
          { label: "PAP – ekspercka krytyka (29.05.2024)", href: "https://www.pap.pl/aktualnosci/ekspertka-uzasadnienie-prezydenckiego-weta-jest-ublizajace" }
        ],
        tags: ["media", "national_agency"]
      },
      {
        id: "szl_media_national_2024",
        label: "Media ogólnopolskie – weto 2024",
        labelEN: "National media – veto coverage May 2024",
        level: "MESO", direction: "TOP_DOWN",
        type: "National media",
        status: "published",
        date: "2024-05",
        urls: [
          { label: "Prawo.pl – Senat + weto", href: "https://www.prawo.pl/samorzad/jezyk-slaski-jezykiem-regionalnym%2C536688.html" },
          { label: "Legalis – weto proceduralne (25.06.2024)", href: "https://legalis.pl/nowelizacja-ustawy-o-mniejszosciach-narodowych-i-etnicznych-oraz-jezyku-regionalnym/" },
          { label: "Prawo.pl – status 2026 (12.01.2026)", href: "https://www.prawo.pl/samorzad/jezyk-slaski-jezykiem-regionalnym%2C536688.html" },
          { label: "wKatowicach.eu (22.01.2026)", href: "https://www.wkatowicach.eu/informacje/w-katowicach/Slaski-jezykiem-regionalnym-Decyzja-nalezy-do-prezydenta-Karola-Nawrockiego/idn%3A11282" },
          { label: "Nauka w Polsce – 30.01.2026", href: "https://naukawpolsce.pl/aktualnosci/news%2C111447%2Cjezykoznawczyni-na-swiecie-istnieje-ok-7-tys-jezykow-tak-trudno-nam-uznac" }
        ],
        tags: ["media", "national_press", "legal_analysis"]
      },
      // MESO / BOTTOM-UP — Expert advocacy, think tanks
      {
        id: "szl_ep_resolution_2022",
        label: "Parlament Europejski – rezolucja ws. uznania śląskiego (2022)",
        labelEN: "European Parliament – motion on Silesian language recognition (2022)",
        level: "MESO", direction: "BOTTOM_UP",
        type: "International parliamentary advocacy",
        status: "published",
        date: "2022",
        description: "Motion for a resolution in the European Parliament on the recognition of Silesian as a language, highlighting the situation of Silesian speakers in Poland.",
        urls: [
          { label: "🇬🇧 EP Motion (EN)", href: "https://www.europarl.europa.eu/doceo/document/B-9-2022-0086_EN.html" }
        ],
        tags: ["european_parliament", "advocacy", "international"]
      },
      {
        id: "szl_klub_jagiellonski",
        label: "Klub Jagielloński – komentarz (14.05.2024)",
        labelEN: "Jagiellonian Club – commentary before veto (14 May 2024)",
        level: "MESO", direction: "BOTTOM_UP",
        type: "Think-tank advocacy",
        status: "published",
        date: "2024-05-14",
        urls: [
          { label: "Artykuł", href: "https://klubjagiellonski.pl/2024/05/14/slaski-jezyk-regionalny-polsce-nie-zaszkodzi-a-slaskowi-moze-pomoze/" }
        ],
        tags: ["think_tank", "advocacy", "expert"]
      },
      {
        id: "szl_polityka_blog",
        label: "Polityka (blog) – komentarz po wecie (30.05.2024)",
        labelEN: "Polityka (weekly magazine) blog – commentary post-veto",
        level: "MESO", direction: "BOTTOM_UP",
        type: "Opinion media",
        status: "published",
        date: "2024-05-30",
        urls: [
          { label: "Polityka blog", href: "https://blog.polityka.pl/dziadul/2024/05/30/weto-ganba-soron-a-niy-prezydent/" },
          { label: "Polityka – spory wokół śląskości", href: "https://www.polityka.pl/tygodnikpolityka/spoleczenstwo/2108537%2C1%2Cdyzurny-wrog-jak-wladza-odgrzewa-spor-o-slaskosc-i-slask.read" }
        ],
        tags: ["opinion_media", "advocacy"]
      },
      // MICRO / BOTTOM-UP — Civil society, activists
      {
        id: "szl_kohut_letter",
        label: "Łukasz Kohut (MEP) – list do Prezydenta Nawrockiego (30.01.2026)",
        labelEN: "MEP Łukasz Kohut – letter to President Nawrocki (30 Jan 2026)",
        level: "MICRO", direction: "BOTTOM_UP",
        type: "Individual advocacy (elected representative as community voice)",
        status: "active",
        date: "2026-01-30",
        description: "Silesian MEP Łukasz Kohut wrote an open letter to President Nawrocki urging him to sign the Silesian language bill. Written in Silesian ('Nie lynkej się ślońskij godki').",
        urls: [
          { label: "Ślązag (PL/SZL)", href: "https://www.slazag.pl/nie-lynkej-sie-slonski-godki-eurodeputowany-lukasz-kohut-napisal-do-prezydenta-karola-nawrockiego" },
          { label: "🗣️ szl.wikipedia – Ślůnsko godka (SZL)", href: "https://szl.wikipedia.org/wiki/%C5%9Al%C5%AFnsko_godka" },
          { label: "🇬🇧 Silesian Language Corpus (EN)", href: "https://silling.org/information-about-the-silesian-language-corpus-in-english/" },
          { label: "🇬🇧 RAS – Silesian Autonomy Movement (EN)", href: "https://autonomia.pl/en/home/" }
        ],
        tags: ["civil_society", "advocacy", "grassroots"]
      },
      {
        id: "szl_katowice_council",
        label: "Radni z Katowic – presja na prezydenta (luty 2026)",
        labelEN: "Katowice city councillors – pressure campaign on president (Feb 2026)",
        level: "MICRO", direction: "BOTTOM_UP",
        type: "Local government advocacy",
        status: "active",
        date: "2026-02",
        urls: [
          { label: "Dziennik Zachodni (5.02.2026)", href: "https://dziennikzachodni.pl/weto-prezydenta-w-sprawie-ustawy-o-jezyku-slaskim-jasne-jak-slonce-radni-z-katowic-probuja-jednak-przekonac-karola-nawrockiego/ar/c1p2-28680827" }
        ],
        tags: ["local_government", "advocacy", "grassroots"]
      }
    ],

    // Key events timeline for SZL
    timeline: [
      { date: "2023",       event: "Druk 233 złożony w Sejmie",              eventEN: "Bill Print 233 submitted to Sejm",                status: "passed_committee" },
      { date: "2024-04-09", event: "Posiedzenie komisji sejmowej",            eventEN: "Sejm committee session",                          status: "procedural"       },
      { date: "2024-05-14", event: "Klub Jagielloński: komentarz ekspercki",  eventEN: "Jagiellonian Club: expert commentary",             status: "published"        },
      { date: "2024-05-29", event: "WETO – Prezydent Duda",                   eventEN: "VETO \u2013 President Duda",                             status: "vetoed"           },
      { date: "2024-05-30", event: "Media: krytyka uzasadnienia weta",        eventEN: "Media: criticism of veto justification",           status: "published"        },
      { date: "2026-01-09", event: "Sejm re-uchwala ustawę (druk 1346)",     eventEN: "Sejm re-passes the bill (Print 1346)",            status: "passed"           },
      { date: "2026-01-21", event: "Senat zatwierdza (druk 598)",             eventEN: "Senate approves (Print 598)",                      status: "passed"           },
      { date: "2026-01-30", event: "Kohut pisze do Nawrockiego",              eventEN: "Kohut writes to Nawrocki",                         status: "active"           },
      { date: "2026-02",    event: "Sygnał weta – Nawrocki",                  eventEN: "Veto signal \u2013 Nawrocki",                            status: "pending"          }
    ]
  },

  // ─── WILAMOWIAN (WYM) ────────────────────────────────────────────────────────

  wilamowian: {
    code: "wym",
    name: "Wilamowian",
    namePL: "Język Wilamowski",
    color: "#7c3aed",
    items: [
      // MACRO / TOP-DOWN — Legislative
      {
        id: "wym_sejm_321",
        label: "Sejm – druk nr 321 (ustawa + uzasadnienie)",
        labelEN: "Sejm Bill Print 321 – Wilamowian recognition bill",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Legislative print",
        status: "passed",
        date: "2024",
        description: "Sejm bill proposing recognition of Wilamowian (Wymysiöeryś) as a regional language under the 2005 Minorities Act.",
        urls: [
          { label: "Druk 321", href: "https://www.sejm.gov.pl/Sejm10.nsf/druk.xsp?nr=321" },
          { label: "PDF (ustawa + uzasadnienie)", href: "https://orka.sejm.gov.pl/Druki10ka.nsf/0/18FE1AC965A2C788C1258B0900339C0F/$File/321-ustawa%20i%20uzasadnienie.docx" },
          { label: "Przebieg legislacyjny", href: "https://orka.sejm.gov.pl/proc10.nsf/ustawy/321_u.htm" },
          { label: "Przebieg (Sejm)", href: "https://www.sejm.gov.pl/Sejm10.nsf/PrzebiegProc.xsp?nr=321" }
        ],
        tags: ["legislative", "sejm", "wym_primary"]
      },
      {
        id: "wym_sejm_posiedzenie40",
        label: "Sejm – Posiedzenie 40, stenogram (wypowiedzi 103–112)",
        labelEN: "Sejm Session 40 – stenogram and speeches",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Parliamentary debate record",
        status: "procedural",
        date: "2024",
        description: "Parliamentary speeches and full stenogram from Session 40 where the Wilamowian bill was debated.",
        urls: [
          { label: "Stenogram (PDF)", href: "https://orka2.sejm.gov.pl/StenoInter10.nsf/0/B8AF8AF874B385F6C1258D0200800E9B/$File/40_c_ksiazka_bis.pdf" },
          { label: "Wypowiedź 103", href: "https://www.sejm.gov.pl/sejm10.nsf/wypowiedz.xsp?dzien=3&posiedzenie=40&view=1&wyp=103" },
          { label: "Wypowiedź 104", href: "https://www.sejm.gov.pl/Sejm10.nsf/wypowiedz.xsp?dzien=3&posiedzenie=40&view=1&wyp=104" },
          { label: "Wypowiedź 105", href: "https://www.sejm.gov.pl/Sejm10.nsf/wypowiedz.xsp?dzien=3&posiedzenie=40&view=1&wyp=105" },
          { label: "Wypowiedź 109", href: "https://www.sejm.gov.pl/sejm10.nsf/wypowiedz.xsp?dzien=3&posiedzenie=40&view=1&wyp=109" },
          { label: "Wypowiedź 112", href: "https://www.sejm.gov.pl/sejm10.nsf/wypowiedz.xsp?dzien=3&posiedzenie=40&view=1&wyp=112" }
        ],
        tags: ["parliamentary_debate", "sejm"]
      },
      {
        id: "wym_sejm_committee_ix",
        label: "Sejm IX – biuletyn komisji (2021)",
        labelEN: "Sejm IX – Committee Bulletin (2021)",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Committee record",
        status: "procedural",
        date: "2021-05-17",
        urls: [
          { label: "Biuletyn IX kadencja", href: "https://www.sejm.gov.pl/sejm9.nsf/biuletyn.xsp?documentId=61B118F2CD9D971BC12586E6003FED11" },
          { label: "Prace komisji 2021", href: "https://www.sejm.gov.pl/sejm9.nsf/prace_komisji_info.xsp?data=2021-05-17" }
        ],
        tags: ["committee", "sejm", "historical"]
      },
      {
        id: "wym_senat_druk081",
        label: "Senat – druki 081 / opinia / materiał porównawczy",
        labelEN: "Senate Prints 081 + legislative opinion + comparative material",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Senate print",
        status: "passed",
        date: "2024",
        urls: [
          { label: "Przebieg komisji", href: "https://www.senat.gov.pl/prace/komisje-senackie/przebieg%2C11006%2C1.html" },
          { label: "Opinia BL (081)", href: "https://www.senat.gov.pl/download/gfx/senat/pl/senatekspertyzy/7046/plik/081o.pdf" },
          { label: "Mat. porównawczy (081)", href: "https://www.senat.gov.pl/download/gfx/senat/pl/senatekspertyzy/7049/plik/081m.pdf" },
          { label: "Stenogram komisji", href: "https://www.senat.gov.pl/download/gfx/senat/pl/senatkomisjeposiedzenia/11006/stenogram/028ew_4egz.pdf" },
          { label: "Opinia (451)", href: "https://www.senat.gov.pl/gfx/senat/pl/senatekspertyzy/7556/plik/451o.pdf" },
          { label: "Mat. porównawczy (451)", href: "https://www.senat.gov.pl/gfx/senat/pl/senatekspertyzy/7547/plik/451m.pdf" },
          { label: "Tematy posiedzenia", href: "https://www.senat.gov.pl/prace/posiedzenia/tematy%2C612%2C1.html" }
        ],
        tags: ["senate", "legislative"]
      },
      {
        id: "wym_veto_nawrocki_oct2025",
        label: "WETO – Prezydent Nawrocki (październik 2025)",
        labelEN: "Presidential Veto – President Nawrocki (October 2025)",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Executive veto",
        status: "vetoed",
        date: "2025-10",
        description: "President Nawrocki vetoed the Wilamowian language recognition bill in October 2025. This triggered post-veto legislative processing (druk 1553, 1848) and created an immediate parallel with the Silesian bill's fate.",
        urls: [
          { label: "Prezydent.pl – weto", href: "https://www.prezydent.pl/prawo/ustawy-zawetowane/weto-do-nowelizacji-ustawy-o-mniejszosciach-narodowych-i-etnicznych-oraz-o-jezyku-regionalnym%2C108735" },
          { label: "Uzasadnienie (PDF)", href: "https://www.prezydent.pl/storage/file/core_files/2025/10/16/0f69a96101c794fbe1e8845fefc59ab6/Wniosek%20Prezydenta%20RP.pdf" },
          { label: "Pismo do Marszałka Sejmu (PDF)", href: "https://www.prezydent.pl/storage/file/core_files/2025/10/16/2e6886e270d15f936d2267336060b20b/Pismo%20do%20Marsza%C5%82ka%20Sejmu.pdf" },
          { label: "🇬🇧 Notes from Poland – veto (EN)", href: "https://notesfrompoland.com/2025/10/17/president-vetoes-bill-recognising-language-spoken-in-small-polish-town/" }
        ],
        significance: "KEY EVENT",
        tags: ["veto", "executive", "blocked"]
      },
      {
        id: "wym_sejm_postveto",
        label: "Sejm – druki 1553 / 1553-A / 1848 (po wecie)",
        labelEN: "Sejm Prints 1553 / 1553-A / 1848 – post-veto processing",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Legislative print",
        status: "processing",
        date: "2025-10",
        urls: [
          { label: "Druk 1553", href: "https://www.sejm.gov.pl/sejm10.nsf/druk.xsp?nr=1553" },
          { label: "Druk 1553-A", href: "https://www.sejm.gov.pl/sejm10.nsf/druk.xsp?nr=1553-A" },
          { label: "Druk 1553 (PDF)", href: "https://orka.sejm.gov.pl/Druki10ka.nsf/0/873AE5DBFCE20445C1258CD50028B897/$File/1553.pdf" },
          { label: "Druk 1848 (PDF)", href: "https://orka.sejm.gov.pl/Druki10ka.nsf/0/F076D872DABA0523C1258D26002FB1FF/$File/1848.pdf" }
        ],
        tags: ["legislative", "sejm", "post_veto"]
      },
      {
        id: "wym_mswia_response",
        label: "MSWiA – odpowiedź na wystąpienie RPO (8.03.2021)",
        labelEN: "Ministry of Interior – response to RPO intervention (8 Mar 2021)",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Government response",
        status: "institutional_response",
        date: "2021-03-08",
        urls: [
          { label: "PDF", href: "https://bip.brpo.gov.pl/sites/default/files/Odpowiedz_MSWiA_8.03.2021.pdf" }
        ],
        tags: ["government_response", "institutional"]
      },
      // MESO / TOP-DOWN — Media coverage
      {
        id: "wym_media_national_veto",
        label: "Media ogólnopolskie – weto Nawrockiego (październik 2025)",
        labelEN: "National media – Nawrocki veto coverage (Oct 2025)",
        level: "MESO", direction: "TOP_DOWN",
        type: "National media",
        status: "published",
        date: "2025-10",
        urls: [
          { label: "PAP – weto Nawrockiego", href: "https://www.pap.pl/aktualnosci/weto-prezydenta-nawrocki-zdecydowal-w-sprawie-ustawy-o-mniejszosciach-narodowych-i" },
          { label: "TVN24 – weto", href: "https://tvn24.pl/polska/prezydent-karol-nawrocki-zawetowal-nowelizacje-ustawy-o-mniejszosciach-narodowych-st8703745" },
          { label: "TVN24 – kontekst językowy", href: "https://tvn24.pl/polska/weto-prezydenta-jezyk-wilamowski-czym-jest-ile-osob-go-uzywa-st8704176" },
          { label: "Bankier.pl", href: "https://www.bankier.pl/wiadomosc/Nowela-ustawy-o-mniejszosciach-narodowych-i-etnicznych-do-kosza-Jest-prezydenckie-weto-9025988.html" },
          { label: "Onet", href: "https://wiadomosci.onet.pl/kraj/weto-karol-nawrockiego-kancelaria-prezydenta-zamiescila-komunikat/s1lemtt" },
          { label: "WP Wiadomości", href: "https://wiadomosci.wp.pl/weto-prezydent-zdecydowal-ws-ustawy-o-mniejszosciach-7211552887499744a" },
          { label: "Business Insider PL", href: "https://businessinsider.com.pl/wiadomosci/karol-nawrocki-blokuje-nowelizacje-potrzebna-obiektywna-weryfikacja/85pczsy" },
          { label: "Wyborcza", href: "https://wyborcza.pl/7%2C75968%2C32333145%2Cweto-prezydenta-nawrockiego-w-sprawie-jezyka-wilamowskiego.html" }
        ],
        tags: ["media", "national_press", "national_broadcaster"]
      },
      {
        id: "wym_tvp3_katowice",
        label: "TVP3 Katowice – materiał regionalny (2025)",
        labelEN: "TVP3 Katowice – regional coverage of Wilamowian veto",
        level: "MESO", direction: "TOP_DOWN",
        type: "Regional public broadcast",
        status: "published",
        date: "2025-10",
        urls: [
          { label: "TVP3 Katowice", href: "https://katowice.tvp.pl/89520270/jezyk-wilamowski-nie-bedzie-jezykiem-regionalnym-jest-weto-prezydenta" }
        ],
        tags: ["media", "regional", "public_broadcaster"]
      },
      {
        id: "wym_expert_media",
        label: "Media eksperckie – Prof. Olko, O-jezyku.pl",
        labelEN: "Expert media – Prof. Olko (Science in Poland), O-jezyku.pl",
        level: "MESO", direction: "BOTTOM_UP",
        type: "Expert commentary",
        status: "published",
        date: "2025",
        description: "Expert linguists provide commentary on the Wilamowian case, linking recognition to broader language endangerment discourse.",
        urls: [
          { label: "Nauka w Polsce – Prof. Olko", href: "https://naukawpolsce.pl/aktualnosci/news%2C109699%2Cprof-olko-uznanie-jezyka-wilamowskiego-za-regionalny-byloby-przelomem.html" },
          { label: "O-jezyku.pl – spór o uznanie", href: "https://www.o-jezyku.pl/2025/10/21/jezyk-wilamowski-czyli-spor-o-uznanie/" },
          { label: "🇬🇧 UW Revitalization Project (EN)", href: "http://www.revitalization.al.uw.edu.pl/eng/Wymysorys/63/71/language-revitalization-in-wilamowice--a-new" },
          { label: "🇬🇧 Grammar of Wymysorys (EN PDF – Duke Univ.)", href: "https://slaviccenters.duke.edu/sites/slaviccenters.duke.edu/files/media_items_files/wymysorys-grammar.original.pdf" },
          { label: "🇬🇧 Awakening Wymysiöeryś (Cambridge, EN)", href: "https://www.cambridge.org/core/journals/european-review/article/awakening-the-language-and-speakers-community-of-wymysioerys/344D725FB56D4E46AF76E2A7DB66CAD9" },
          { label: "🇬🇧 UNESCO Atlas – Wymysorys (EN)", href: "https://en.wal.unesco.org/countries/poland/languages/wymysorys" },
          { label: "🇬🇧 Linguapax – Wymysorys overview (EN PDF)", href: "https://linguapax.org/wp-content/uploads/2015/03/Wymysorys-language.pdf" }
        ],
        tags: ["expert_commentary", "linguistic_advocacy"]
      },
      {
        id: "wym_polskie_radio",
        label: "Polskie Radio 24 – prace w Sejmie (2024)",
        labelEN: "Polish Radio 24 – Sejm work on new regional language",
        level: "MESO", direction: "TOP_DOWN",
        type: "National public radio",
        status: "published",
        date: "2024",
        urls: [
          { label: "Polskie Radio 24", href: "https://polskieradio24.pl/artykul/3555717%2Cbedzie-nowy-jezyk-regionalny-w-sejmie-trwaja-prace" }
        ],
        tags: ["media", "public_radio"]
      },
      {
        id: "wym_dgp_senate",
        label: "Dziennik Gazeta Prawna – Senat za językiem wilamowskim",
        labelEN: "Daily Legal Newspaper (DGP) – Senate supports Wilamowian",
        level: "MESO", direction: "TOP_DOWN",
        type: "National newspaper",
        status: "published",
        date: "2024",
        urls: [
          { label: "DGP", href: "https://www.gazetaprawna.pl/wiadomosci/kraj/artykuly/9895678%2Cjezyk-wilamowski-bedzie-nowym-jezykiem-regionalnym-senat-poparl-zmian.html" }
        ],
        tags: ["media", "national_press"]
      },
      // MICRO / BOTTOM-UP — Community
      {
        id: "wym_community_petition",
        label: "Mieszkańcy Wilamowic – petycja o uznanie języka",
        labelEN: "Residents of Wilamowice – petition for language recognition",
        level: "MICRO", direction: "BOTTOM_UP",
        type: "Community petition",
        status: "active",
        date: "2024",
        description: "The Wilamowian-speaking community in Wilamowice (approx. 50–100 fluent speakers) has actively campaigned for official recognition of their language.",
        urls: [
          { label: "Portal Samorządowy – petycja", href: "https://www.portalsamorzadowy.pl/komunikacja-spoleczna/mieszkancy-wilamowic-chca-by-ich-jezyk-uznano-za-regionalny%2C84985.html" },
          { label: "Portal Samorządowy – RPO i mniejszości", href: "https://www.portalsamorzadowy.pl/komunikacja-spoleczna/rpo-te-mniejszosci-etniczne-wciaz-nie-doczekaly-sie-swoich-praw%2C251079.html" },
          { label: "🇬🇧 Wikitongues – Tymoteusz Król (EN)", href: "https://wikitongues.org/fellows/tioma-fum-dokter/" },
          { label: "🇬🇧 EEA Grants – Museum of Wilamovian Culture (EN)", href: "https://eeagrants.org/archive/2014-2021/projects/PL-CULTURE-0053" },
          { label: "🇬🇧 Safeguarding Language – Wilamowice (EN, eog.gov.pl)", href: "https://www.eog.gov.pl/en/site/news/safeguarding-language-and-heritage-the-wilamowice-story/" },
          { label: "🇬🇧 Wikitongues – Celebrating Wymysorys (EN)", href: "https://medium.com/wikitongues/celebrating-wymysorys-revitalizing-a-language-and-identity-in-southern-poland-48d565ee7a3e" }
        ],
        tags: ["community", "petition", "grassroots"]
      }
    ],

    timeline: [
      { date: "2021-01-29", event: "RPO: list do Premiera (SZL + WYM)",      eventEN: "RPO: Letter to the Prime Minister (SZL + WYM)",   status: "historical"   },
      { date: "2021-03-08", event: "MSWiA: odpowiedź na RPO",                eventEN: "MSWiA: Response to the Ombudsman (RPO)",           status: "institutional_response" },
      { date: "2021-05-17", event: "Komisja sejmowa (IX kadencja)",           eventEN: "Sejm committee (9th term)",                       status: "procedural"   },
      { date: "2024",       event: "Druk 321 złożony w Sejmie",              eventEN: "Bill Print 321 submitted to Sejm",                status: "passed"       },
      { date: "2024",       event: "Senat zatwierdza (druk 081)",             eventEN: "Senate approves (Print 081)",                      status: "passed"       },
      { date: "2025-10",    event: "WETO – Prezydent Nawrocki",               eventEN: "VETO \u2013 President Nawrocki",                         status: "vetoed"       },
      { date: "2025-10",    event: "Druki 1553/1848 – ponowne procedowanie", eventEN: "Prints 1553/1848 \u2013 re-processing",                  status: "processing"   }
    ]
  },

  // ─── UKRAINIAN (UKR) ─────────────────────────────────────────────────────────

  ukrainian: {
    code: "ukr",
    name: "Ukrainian",
    namePL: "Język Ukraiński (ochrona tymczasowa)",
    color: "#dc2626",
    items: [
      // MACRO / TOP-DOWN — National legislation
      {
        id: "ukr_ustawa_2022",
        label: "Ustawa z 12 marca 2022 r. o pomocy obywatelom Ukrainy (Dz.U. 2022 poz. 583)",
        labelEN: "Act of 12 March 2022 on Assistance to Citizens of Ukraine",
        level: "MACRO", direction: "TOP_DOWN",
        type: "National statute (special law)",
        status: "ongoing",
        date: "2022-03-12",
        description: "Special law providing temporary protection for Ukrainian refugees. Key provisions: legal stay extended to 4 March 2026, free public education regardless of Polish language proficiency, additional Polish language classes, tuition-free university studies, recognition of prior education.",
        urls: [
          { label: "ISAP", href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20220000583" },
          { label: "ELI (Dz.U. 2022 poz. 583)", href: "https://eli.gov.pl/eli/DU/2022/583/ogl" },
          { label: "🇬🇧 English translation (gov.pl PDF)", href: "https://www.gov.pl/attachment/fd791ffb-c02b-4e99-b710-e8ed3a9a821b" },
          { label: "🇬🇧 Refworld (EN)", href: "https://www.refworld.org/legal/legislation/natlegbod/2022/en/147320" },
          { label: "🇬🇧 Interwencja Prawna (EN)", href: "https://ukraina.interwencjaprawna.pl/the-act-on-assistance-for-ukrainian-citizens/" },
          { label: "🇺🇦 Interwencja Prawna (UKR)", href: "https://ukraina.interwencjaprawna.pl/%d0%b7%d0%b0%d0%ba%d0%be%d0%bd-%d0%bf%d1%80%d0%be-%d0%b4%d0%be%d0%bf%d0%be%d0%bc%d0%be%d0%b3%d1%83-%d0%b3%d1%80%d0%be%d0%bc%d0%b0%d0%b4%d1%8f%d0%bd%d0%b0%d0%bc-%d1%83%d0%ba%d1%80%d0%b0%d1%97%d0%bd/" },
          { label: "🇺🇦 Gov.pl portal (UKR)", href: "https://www.gov.pl/web/ua" },
          { label: "🇬🇧 Gov.pl (EN) – MSWiA", href: "https://www.gov.pl/web/mswia-en/the-act-on-assistance-to-citizens-of-ukraine-in-connection-with-armed-conflict-on-the-territory-of-that-country-signed-by-the-president" }
        ],
        significance: "KEY EVENT",
        tags: ["national_statute", "domestic_hard_law", "ukraine_special_law", "refugee_protection"]
      },
      {
        id: "ukr_men_reg_2017_foreigners",
        label: "Rozporządzenie MEN z 23 sierpnia 2017 r. (kształcenie cudzoziemców)",
        labelEN: "MEN Regulation on Education of Non-Polish Citizens (2017)",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Ministerial regulation",
        status: "ongoing",
        date: "2017-08-23",
        description: "Regulates conditions for educating persons who are not Polish citizens, including access to public schools, additional Polish language classes, and adapted curricula.",
        urls: [
          { label: "ISAP (akt podstawowy)", href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20170001627" },
          { label: "Tekst jednolity 2023 (PDF)", href: "https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20230002737/O/D20232737.pdf" }
        ],
        tags: ["education_regulation", "domestic_hard_law", "foreigners"]
      },
      {
        id: "ukr_ustawa_ochrona_2003",
        label: "Ustawa z 13 czerwca 2003 r. o udzielaniu cudzoziemcom ochrony na terytorium RP",
        labelEN: "Act on Granting Protection to Foreigners in Poland (2003)",
        level: "MACRO", direction: "TOP_DOWN",
        type: "National statute",
        status: "ongoing",
        date: "2003-06-13",
        description: "Framework legislation governing the granting of refugee status, subsidiary protection, and temporary protection to foreigners on Polish territory.",
        urls: [
          { label: "ISAP", href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20031281176" },
          { label: "🇬🇧 Refworld (EN)", href: "https://www.refworld.org/legal/legislation/natlegbod/2003/en/123490" }
        ],
        tags: ["national_statute", "domestic_hard_law", "international_protection"]
      },
      {
        id: "ukr_ustawa_cudzoziemcy_2013",
        label: "Ustawa z 12 grudnia 2013 r. o cudzoziemcach",
        labelEN: "Act on Foreigners (2013)",
        level: "MACRO", direction: "TOP_DOWN",
        type: "National statute",
        status: "ongoing",
        date: "2013-12-12",
        description: "General legislation on the entry, stay, and departure of foreigners in Poland. Provides the legal basis for residence permits and other migration-related procedures.",
        urls: [
          { label: "ISAP", href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20131650" },
          { label: "🇬🇧 Full text (EN PDF)", href: "https://cudzoziemiecwpolsce.pl/wp-content/uploads/2014/10/ACT-of-12-December-2013-on-foreigners-in-English.pdf" },
          { label: "🇬🇧 Refworld (EN)", href: "https://www.refworld.org/docid/54c0b9384.html" }
        ],
        tags: ["national_statute", "domestic_hard_law", "migration"]
      },
      // MACRO / TOP-DOWN — EU directives
      {
        id: "ukr_eu_decision_2022_382",
        label: "Decyzja wykonawcza Rady (UE) 2022/382 (ochrona tymczasowa – Ukraina)",
        labelEN: "Council Implementing Decision (EU) 2022/382 – Temporary Protection for Ukraine",
        level: "MACRO", direction: "TOP_DOWN",
        type: "EU implementing decision",
        status: "binding_international",
        date: "2022-03-04",
        description: "EU Council decision activating the Temporary Protection Directive (2001/55/EC) for persons fleeing Ukraine following the Russian invasion of 24 February 2022.",
        urls: [
          { label: "EUR-Lex (PL)", href: "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32022D0382" },
          { label: "🇬🇧 EUR-Lex (EN)", href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D0382" }
        ],
        significance: "KEY EVENT",
        tags: ["eu_law", "binding_international", "temporary_protection"]
      },
      {
        id: "ukr_eu_directive_2001_55",
        label: "Dyrektywa 2001/55/WE (ochrona tymczasowa)",
        labelEN: "Directive 2001/55/EC – Temporary Protection",
        level: "MACRO", direction: "TOP_DOWN",
        type: "EU directive",
        status: "binding_international",
        date: "2001-07-20",
        description: "EU directive establishing minimum standards for giving temporary protection in the event of a mass influx of displaced persons. First activated in March 2022 for Ukraine.",
        urls: [
          { label: "EUR-Lex (PL)", href: "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32001L0055" },
          { label: "🇬🇧 EUR-Lex (EN)", href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32001L0055" }
        ],
        tags: ["eu_law", "binding_international", "temporary_protection"]
      },
      {
        id: "ukr_eu_directive_2011_95",
        label: "Dyrektywa 2011/95/UE (kwalifikacyjna)",
        labelEN: "Directive 2011/95/EU – Qualification Directive",
        level: "MACRO", direction: "TOP_DOWN",
        type: "EU directive",
        status: "binding_international",
        date: "2011-12-13",
        description: "Standards for the qualification of third-country nationals or stateless persons as beneficiaries of international protection, and the content of protection granted.",
        urls: [
          { label: "EUR-Lex (PL)", href: "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32011L0095" },
          { label: "🇬🇧 EUR-Lex (EN)", href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0095" }
        ],
        tags: ["eu_law", "binding_international", "asylum"]
      },
      {
        id: "ukr_eu_directive_2013_32",
        label: "Dyrektywa 2013/32/UE (procedury azylowe)",
        labelEN: "Directive 2013/32/EU – Asylum Procedures",
        level: "MACRO", direction: "TOP_DOWN",
        type: "EU directive",
        status: "binding_international",
        date: "2013-06-26",
        description: "Common procedures for granting and withdrawing international protection in the EU.",
        urls: [
          { label: "EUR-Lex (PL)", href: "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32013L0032" },
          { label: "🇬🇧 EUR-Lex (EN)", href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013L0032" }
        ],
        tags: ["eu_law", "binding_international", "asylum"]
      },
      {
        id: "ukr_eu_directive_2013_33",
        label: "Dyrektywa 2013/33/UE (warunki przyjmowania)",
        labelEN: "Directive 2013/33/EU – Reception Conditions",
        level: "MACRO", direction: "TOP_DOWN",
        type: "EU directive",
        status: "binding_international",
        date: "2013-06-26",
        description: "Standards for the reception of applicants for international protection in EU Member States.",
        urls: [
          { label: "EUR-Lex (PL)", href: "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32013L0033" },
          { label: "🇬🇧 EUR-Lex (EN)", href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013L0033" }
        ],
        tags: ["eu_law", "binding_international", "reception_conditions"]
      },
      // MESO / TOP-DOWN — Government implementation
      {
        id: "ukr_gov_higher_ed",
        label: "Gov.pl – rozwiązania dot. szkolnictwa wyższego i nauki (Ukraina)",
        labelEN: "Gov.pl – Higher Education Solutions for Ukrainian Citizens",
        level: "MESO", direction: "TOP_DOWN",
        type: "Government information",
        status: "published",
        date: "2022",
        description: "Official government information on higher education and research solutions for Ukrainian citizens under the special law.",
        urls: [
          { label: "Gov.pl (UW Warmińsko-Mazurski)", href: "https://www.gov.pl/web/uw-warminsko-mazurski/rozwiazania-w-zakresie-szkolnictwa-wyzszego-i-nauki-zawarte-w-ustawie-o-pomocy-obywatelom-ukrainy" },
          { label: "🇬🇧 Gov.pl – Help for Ukrainian citizens (EN)", href: "https://www.gov.pl/web/eu/help-for-ukrainian-citizens" },
          { label: "🇺🇦 Gov.pl – портал для громадян України (UKR)", href: "https://www.gov.pl/web/ua" }
        ],
        tags: ["government_info", "higher_education", "implementation"]
      },
      {
        id: "ukr_uw_extension",
        label: "UW Warmińsko-Mazurski – przedłużenie przepisów ustawy",
        labelEN: "Voivodeship Office – Extension of Ukraine Act Provisions",
        level: "MESO", direction: "TOP_DOWN",
        type: "Regional government information",
        status: "published",
        date: "2025",
        description: "Information from the Warmian-Masurian Voivodeship Office on the extension of provisions of the Act on Assistance to Citizens of Ukraine.",
        urls: [
          { label: "Migrant Poznań (EN)", href: "https://migrant.poznan.uw.gov.pl/en/komunikaty/extension-provisions-act-assistance-citizens-ukraine-connection-armed-conflict-countrywe" },
          { label: "🇬🇧 UNHCR Poland – Temporary protection (EN)", href: "https://help.unhcr.org/poland/information-for-new-arrivals-from-ukraine/" },
          { label: "🇺🇦 UNHCR Poland – Тимчасовий захист (UKR)", href: "https://help.unhcr.org/poland/uk/" }
        ],
        tags: ["regional_government", "implementation", "extension"]
      },
      {
        id: "ukr_local_info",
        label: "Informacja o ustawie – samorząd lokalny (Jeżowe OPS)",
        labelEN: "Local Government Information on Ukraine Act",
        level: "MESO", direction: "TOP_DOWN",
        type: "Local government information",
        status: "published",
        date: "2022",
        description: "Local social assistance center information about the Special Law on Assistance to Citizens of Ukraine.",
        urls: [
          { label: "Jeżowe OPS", href: "https://jezowe.naszops.pl/n%2Cinformacja-o-ustawie-z-dnia-12-marca-2022-r-o-pomocy-obywatelom-ukrainy-w-zwiazku-z-konfliktem-zbrojnym-na-terytorium-tego-kraju" }
        ],
        tags: ["local_government", "information", "implementation"]
      },
      // MESO / BOTTOM-UP — Legal analysis
      {
        id: "ukr_lexplorers_education",
        label: "Lexplorers – dostępność obywateli Ukrainy do edukacji",
        labelEN: "Lexplorers – Access of Ukrainian Citizens to Education",
        level: "MESO", direction: "BOTTOM_UP",
        type: "Legal analysis",
        status: "published",
        date: "2022",
        description: "Legal analysis of Ukrainian citizens' access to the healthcare system and children's education under Polish law, including the special law provisions.",
        urls: [
          { label: "Lexplorers.pl", href: "https://lexplorers.pl/dostepnosc-obywateli-ukrainy-do-systemu-ochrony-zdrowia-oraz-edukacji-dzieci/" }
        ],
        tags: ["legal_analysis", "education", "healthcare", "advocacy"]
      }
    ],

    timeline: [
      { date: "2001-07-20", event: "Dyrektywa 2001/55/WE – ochrona tymczasowa (UE)",          eventEN: "EU Directive 2001/55/EC \u2013 Temporary Protection",                   status: "binding_international" },
      { date: "2003-06-13", event: "Ustawa o udzielaniu ochrony na terytorium RP",             eventEN: "Act on Granting Protection to Foreigners in Poland",              status: "ongoing"               },
      { date: "2013-12-12", event: "Ustawa o cudzoziemcach",                                    eventEN: "Act on Foreigners",                                               status: "ongoing"               },
      { date: "2017-08-23", event: "Rozporządzenie MEN o kształceniu cudzoziemców",             eventEN: "MEN Regulation on Education of Foreigners",                       status: "ongoing"               },
      { date: "2022-03-04", event: "Decyzja UE 2022/382 – aktywacja ochrony tymczasowej",      eventEN: "EU Decision 2022/382 \u2013 Activation of Temporary Protection",         status: "binding_international" },
      { date: "2022-03-12", event: "Ustawa specjalna o pomocy obywatelom Ukrainy",              eventEN: "Special Act on Assistance to Citizens of Ukraine",                status: "ongoing"               },
      { date: "2025",       event: "Nowelizacja – przedłużenie do 4 marca 2026",                eventEN: "Amendment \u2013 extension until 4 March 2026",                          status: "ongoing"               },
      { date: "2026-03-04", event: "Wygaśnięcie obecnego przedłużenia",                         eventEN: "Current extension expires",                                       status: "pending"               }
    ]
  },

  // ─── CARINTHIAN SLOVENE (Koroški Slovenci) — Austrian autochthonous minority ─

  carinthian: {
    code: "slv",
    name: "Carinthian Slovene",
    namePL: "Słoweński w Karyntii (mniejszość autochtoniczna w Austrii)",
    color: "#ea580c",
    description: "Autochthonous Slovene-speaking minority in the Austrian Land of Carinthia, protected by Article 7 of the 1955 State Treaty (Staatsvertrag). Settled but contested mature-regime case for FTM comparison alongside the recognition-seeking (Silesian, Wilamowian) and emergency-displacement (Ukrainian) Polish cases.",
    items: [
      // ─── A. International / supranational instruments (MACRO, TOP-DOWN) ────

      {
        id: "slv_at_stgermain_1919",
        label: "Staatsvertrag von Saint-Germain-en-Laye (1919)",
        labelEN: "Treaty of Saint-Germain-en-Laye",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Binding treaty",
        status: "ongoing",
        date: "1919-09-10",
        description: "Post-WWI peace treaty between Austria and the Allied & Associated Powers. Articles 62–69 establish minority-protection obligations: equality before the law (Art. 66), guarantees for minorities by race/religion/language (Art. 67), and minority-language primary education where a significant non-German-speaking population resides (Art. 68). Art. 69 placed these obligations under League of Nations guarantee. Still cited as the foundational layer of Austrian minority law.",
        urls: [
          { label: "RIS (consolidated)", href: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10000044" }
        ],
        tags: ["foundational", "minority_rights", "peace_treaty", "education"]
      },
      {
        id: "slv_at_staatsvertrag_1955_art7",
        label: "Österreichischer Staatsvertrag 1955, Art. 7",
        labelEN: "Austrian State Treaty 1955, Article 7 (Rights of Slovene and Croat minorities)",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Binding treaty",
        status: "binding_international",
        date: "1955-05-15",
        description: "Foundational anchor of Carinthian Slovene minority rights. §1 grants equal rights including own organisations, assemblies, press in their own language. §2 guarantees elementary education in Slovene and a proportional number of secondary schools. §3 establishes Slovene as an additional official language (alongside German) in mixed-population districts, with bilingual topographic signage. Article 26 protects property/rights/interests of minority groups. Signed 15 May 1955, ratified 8 June 1955, in force 27 July 1955. BGBl. Nr. 152/1955.",
        urls: [
          { label: "BGBl. PDF", href: "https://www.ris.bka.gv.at/Dokumente/BgblPdf/1955_152_0/1955_152_0.pdf" },
          { label: "RIS (consolidated)", href: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10000265" }
        ],
        significance: "KEY EVENT",
        tags: ["foundational", "minority_rights", "state_treaty", "education", "official_language", "signage"]
      },
      {
        id: "slv_at_ecrml_1992",
        label: "Europäische Charta der Regional- oder Minderheitensprachen (ECRML)",
        labelEN: "European Charter for Regional or Minority Languages",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Binding treaty",
        status: "binding_international",
        date: "1992-11-05",
        description: "Council of Europe treaty (Strasbourg, 5 Nov 1992). Defines 'regional or minority languages' (excludes dialects of official languages and immigrant languages — significant contrast with the Silesian case). Article 7 sets principles (recognition, protection, education provision). Article 8 covers education obligations from pre-school through tertiary. Austria signed 5 Nov 1992 and ratified 28 June 2001 (in force 1 Oct 2001), with Part III commitments for Slovene in Carinthia, Burgenland-Croat, and Hungarian.",
        urls: [
          { label: "Council of Europe", href: "https://www.coe.int/en/web/european-charter-regional-or-minority-languages" },
          { label: "Austrian ratification details", href: "https://www.coe.int/en/web/conventions/full-list?module=signatures-by-treaty&treatynum=148" }
        ],
        tags: ["binding_international", "ecrml", "education"]
      },

      // ─── B. Austrian federal-level instruments (MACRO, TOP-DOWN) ───────────

      {
        id: "slv_at_bvg_art8",
        label: "Bundes-Verfassungsgesetz (B-VG), Art. 8",
        labelEN: "Federal Constitutional Law, Article 8",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Constitutional provision",
        status: "ongoing",
        date: "2000-08-01",
        description: "Constitutional anchor of Austrian language policy. §1: German is the state language 'without prejudice to the rights granted to linguistic minorities by federal law'. §2 (added 2000): the Republic professes its grown linguistic and cultural diversity, expressed in the autochthonous ethnic groups; their language, culture, existence and preservation are to be respected, secured and promoted. §3 (added 2005): Austrian Sign Language recognised. The 2000 addition is the key constitutional moment for minority recognition.",
        urls: [
          { label: "RIS (consolidated)", href: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10000138" }
        ],
        tags: ["constitutional", "minority_rights", "autochthonous_volksgruppen"]
      },
      {
        id: "slv_at_vogrg_1976",
        label: "Volksgruppengesetz (VoGrG)",
        labelEN: "Federal Act on the Legal Status of Ethnic Groups in Austria",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Federal statute",
        status: "ongoing",
        date: "1976-07-07",
        description: "Federal statute implementing constitutional and treaty obligations toward Austria's autochthonous ethnic groups. Recognises six autochthonous Volksgruppen: Croat, Slovene, Hungarian, Czech, Slovak, Roma. Defines a Volksgruppe as Austrian citizens with non-German mother tongue and own ethnic identity, indigenous to part of the federal territory. Annex 1 lists bilingual topographic place names (including Slovene-German names in Carinthia). Annex 2 lists offices in which Slovene may be used additionally as official language. StF: BGBl. Nr. 396/1976; idF BGBl. I Nr. 194/1999. Consolidated text (Fassung 17.09.2023) archived in carinthian/ folder.",
        urls: [
          { label: "RIS (consolidated)", href: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10000602" },
          { label: "PDF in repo", href: "https://github.com/akszoszk/fosterlang-wp7/blob/main/carinthian/VoGrG%2C%20Fassung%20vom%2017.09.2023.pdf" }
        ],
        tags: ["volksgruppen", "official_language", "signage", "six_minorities"]
      },
      {
        id: "slv_at_schog_1962",
        label: "Schulorganisationsgesetz (SchOG)",
        labelEN: "School Organisation Act",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Federal statute",
        status: "ongoing",
        date: "1962-07-25",
        description: "General federal framework for the structure of Austrian schooling (primary, secondary general/vocational, higher). Provides the systemic backdrop against which the Minderheiten-Schulgesetz für Kärnten operates as lex specialis. StF: BGBl. Nr. 242/1962 idF BGBl. Nr. 267/1963.",
        urls: [
          { label: "RIS (consolidated)", href: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009265" }
        ],
        tags: ["framework", "school_organisation"]
      },
      {
        id: "slv_at_minschulg_kt_1959",
        label: "Minderheiten-Schulgesetz für Kärnten",
        labelEN: "Carinthian Minority Schools Act",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Federal statute (Land-specific)",
        status: "ongoing",
        date: "1959-03-19",
        description: "Operational statute implementing Art. 7 §2 of the 1955 State Treaty for Carinthia. Seven articles. Three school types: (a) Slovene-medium primary/lower-secondary; (b) bilingual primary schools with German and Slovene in approximately equal measure through grade 4; (c) German-medium lower-secondary with Slovene as compulsory subject. Operates on the Anmeldeprinzip (parents must actively register children for bilingual instruction). 1988 reform introduced team-teaching (Zweilehrersystem). 1990 amendment (BGBl. Nr. 420/1990) established the bilingual Handelsakademie. Consolidated text (Fassung 22.05.2025) archived in carinthian/ folder.",
        urls: [
          { label: "RIS (consolidated)", href: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009343" },
          { label: "PDF in repo", href: "https://github.com/akszoszk/fosterlang-wp7/blob/main/carinthian/Minderheiten-Schulgesetz%20f%C3%BCr%20K%C3%A4rnten%2C%20Fassung%20vom%2022.05.2025.pdf" }
        ],
        significance: "KEY EVENT",
        tags: ["bilingual_education", "carinthia", "anmeldeprinzip", "team_teaching"]
      },
      {
        id: "slv_at_lehrplan_volksschule_2023",
        label: "Lehrplan Slowenisch (Volksschule) — BGBl. II Nr. 1/2023",
        labelEN: "Slovene Subject Curriculum for Primary School (Volksschule)",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Ministerial regulation (Verordnung)",
        status: "ongoing",
        date: "2023-01-04",
        description: "BMBWF subject curriculum for Slovene as a Volksgruppensprache at primary level (grades 1–4), part of the new 'Lehrpläne NEU' Volksschule framework — Federal Ordinance BGBl. II Nr. 1/2023. Specifies educational mission, didactic principles for four competence areas (Listening/Speaking, Reading, Text Production, Orthography/Language Reflection), three central concepts (Content & Form, Norm & Change, Diversity & Identity), and per-grade competences. Explicitly recognises that Slovene may be the pupil's first language, second language, OR Umgebungssprache (ambient language) — a triple framing relevant for L2-learner minority situations.",
        urls: [
          { label: "RIS (BGBl. II Nr. 1/2023)", href: "https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2023_II_1/BGBLA_2023_II_1.html" },
          { label: "BMBWF Lehrpläne portal", href: "https://www.bmbwf.gv.at/Themen/schule/schulpraxis/lp.html" },
          { label: "PDF in repo", href: "https://github.com/akszoszk/fosterlang-wp7/blob/main/carinthian/Slowenisch-Volksgruppen_27.10.2025.pdf" }
        ],
        tags: ["curriculum", "lehrplan", "volksschule", "primary", "cefr_aligned"]
      },
      {
        id: "slv_at_kompetenzraster_3_4_2023",
        label: "Kompetenzraster Volksgruppensprachen (3. & 4. Schulstufe)",
        labelEN: "Competency Framework for Ethnic-Group Languages (Croatian/Slovene/Hungarian), Grades 3 and 4",
        level: "MESO", direction: "TOP_DOWN",
        type: "Pedagogical assessment instrument",
        status: "ongoing",
        date: "2023-02-01",
        description: "BMBWF 'Pädagogik-Paket' competency-assessment grid (Stand 02/2023) covering all three official Austrian Volksgruppensprachen taught at bilingual primary level: Croatian (Burgenland), Slovene (Carinthia/Styria), and Hungarian (Burgenland). For each sub-competency three attainment levels (Niveau 1–3) are specified, keyed to BGBl. II Nr. 1/2023. Pedagogically significant as a SHARED framework across three minority languages — Austria treats minority-language education as one shared policy domain rather than three bespoke programmes.",
        urls: [
          { label: "BMBWF Pädagogik-Paket", href: "https://www.bmbwf.gv.at/Themen/schule/schulpraxis/lp/pp.html" },
          { label: "Underlying Lehrplan (BGBl. II Nr. 1/2023)", href: "https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2023_II_1/BGBLA_2023_II_1.html" },
          { label: "PDF in repo", href: "https://github.com/akszoszk/fosterlang-wp7/blob/main/carinthian/Volksgruppensprachen_3-4-Schulstufe-Kompetenzraster_27.10.2025.pdf" }
        ],
        tags: ["kompetenzraster", "assessment", "primary", "cross_minority"]
      },

      // ─── C. Implementing institutions (MESO) ───────────────────────────────

      {
        id: "slv_at_bgbrg_slo_1957",
        label: "BG/BRG für Slowenen — Zvezna gimnazija za Slovence (Klagenfurt)",
        labelEN: "Federal Gymnasium and Realgymnasium for Slovenes, Klagenfurt",
        level: "MESO", direction: "TOP_DOWN",
        type: "Institutional foundation",
        status: "ongoing",
        date: "1957-09-01",
        description: "Federal secondary school established for Austrian citizens of the Slovene minority. Operates under both gymnasium and Realgymnasium curricula. Instruction in Slovene; German taught as compulsory subject and mandatory Matura examination. Confers university-entrance qualification equivalent to German-medium Bundesmittelschule. Class-by-class build-up after founding; operating continuously.",
        urls: [
          { label: "School website", href: "https://www.slog.at/" }
        ],
        tags: ["secondary", "slovene_medium", "klagenfurt"]
      },
      {
        id: "slv_at_haktak_1990",
        label: "Zweisprachige Bundeshandelsakademie (HAK-TAK) — Dvojezična trgovska akademija",
        labelEN: "Bilingual Federal Commercial Academy, Klagenfurt",
        level: "MESO", direction: "TOP_DOWN",
        type: "Institutional foundation",
        status: "ongoing",
        date: "1990-09-01",
        description: "Vocational upper-secondary school established by BGBl. Nr. 420/1990 as Art. II amendment to the Minderheiten-Schulgesetz für Kärnten. Instruction in approximately equal measure in Slovene and German across all five years. Compulsory languages: German, Slovene, English plus one further modern language. Confers vocational matura with university-entrance equivalence. Distinguishes the Austrian model from pure gymnasium-based minority education.",
        urls: [
          { label: "School website", href: "https://www.hak-tak.at/" }
        ],
        tags: ["vocational", "bilingual", "klagenfurt"]
      },
      {
        id: "slv_at_hlw_stpeter_1989",
        label: "Zweisprachige private HLW St. Peter (St. Jakob im Rosental)",
        labelEN: "Bilingual Private Higher School for Commercial Professions, St. Peter / St. Jakob im Rosental",
        level: "MESO", direction: "BOTTOM_UP",
        type: "Institutional foundation",
        status: "ongoing",
        date: "1989-09-01",
        description: "Private bilingual upper-secondary school in the Carinthian bilingual zone. Established 1989 as a community-led extension of bilingual schooling beyond the federally-mandated framework. Significant as a BOTTOM-UP institutional response — community initiative rather than purely state action.",
        urls: [
          { label: "Slovenska gimnazija", href: "https://www.slovenskagimnazija.at/" }
        ],
        tags: ["private", "bilingual", "community_initiative"]
      },
      {
        id: "slv_at_phk_teacher_training",
        label: "Pädagogische Hochschule Kärnten — Viktor Frankl Hochschule",
        labelEN: "University College of Teacher Education Carinthia",
        level: "MESO", direction: "TOP_DOWN",
        type: "Institutional",
        status: "ongoing",
        date: "2007-10-01",
        description: "Trains bilingual teachers (Lehrpersonen) and team-teachers (Teamlehrer:innen) for the Carinthian bilingual school system, under the Minderheiten-Schulgesetz für Kärnten. The long-term sustainability of bilingual education depends entirely on this institution's output. The author of the foundational source presentation (Prof. Dr. Pamela Glušič) is affiliated here.",
        urls: [
          { label: "PH Kärnten", href: "https://www.ph-kaernten.ac.at/" }
        ],
        tags: ["teacher_training", "sustainability"]
      },

      // ─── D. Historical / diachronic context ────────────────────────────────

      {
        id: "slv_at_schulordnung_1774",
        label: "Allgemeine Schulordnung Maria Theresias (1774)",
        labelEN: "General School Ordinance of Maria Theresia",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Imperial decree",
        status: "historical",
        date: "1774-12-06",
        description: "Origin of the so-called utraquistische Schulen — schools transmitting German to children entering with only Slovene dialect competence. The earliest formal state framing of Slovene-speaking children as a population to be linguistically incorporated rather than served in their own language. Foundational document of the German-dominant school model that Article 7 of the 1955 State Treaty had to overturn.",
        urls: [],
        tags: ["historical", "imperial", "utraquismus"]
      },
      {
        id: "slv_at_ns_suppression_1938",
        label: "Verbot des Slowenischen im NS-Regime (1938–1945)",
        labelEN: "NS-era prohibition of Slovene in schools and public life",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Historical regime measure",
        status: "historical",
        date: "1938-03-13",
        description: "During the 1938–1945 annexation into the Third Reich, Slovene was banned in compulsory schools and public life in Carinthia. Mass deportation of Carinthian Slovene families took place in April 1942. This is the negative reference point against which the post-1945 restoration of bilingual schooling and the 1955 State Treaty guarantees must be read.",
        urls: [],
        tags: ["historical", "ns_era", "suppression"]
      },
      {
        id: "slv_at_abmeldung_1958",
        label: "Verordnung des Kärntner Landeshauptmannes 1958",
        labelEN: "1958 Decree of the Carinthian Governor — Opt-out from bilingual instruction",
        level: "MESO", direction: "TOP_DOWN",
        type: "Ministerial regulation",
        status: "historical",
        date: "1958-09-01",
        description: "Decree introducing parental opt-out (Abmeldung) from bilingual instruction in the formerly compulsory-bilingual zone. A politically motivated retreat from the inclusive bilingual model and the proximate cause of the 1959 reform that switched the system to the Anmeldeprinzip (positive registration required). Critical for understanding the current structure of Carinthian bilingual education.",
        urls: [],
        tags: ["historical", "abmeldung", "policy_retreat"]
      },

      // ─── E. Community / civil-society sources (BOTTOM-UP) ──────────────────

      {
        id: "slv_at_nsks",
        label: "Narodni svet koroških Slovencev (NSKS)",
        labelEN: "National Council of Carinthian Slovenes",
        level: "MESO", direction: "BOTTOM_UP",
        type: "Community organisation",
        status: "active",
        date: "1949-04-29",
        description: "Apex representative organisation of the Carinthian Slovene community, founded 1949. Publishes population figures, advocates for community interests, and is a primary BOTTOM-UP voice in Austrian minority-policy discourse. Counts 13,109 Carinthian Slovenes at the 2001 census (versus the 24,855 self-reporting Slovene as colloquial language).",
        urls: [
          { label: "NSKS", href: "https://www.nsks.at/" }
        ],
        tags: ["community_organisation", "advocacy"]
      },
      {
        id: "slv_at_volkszaehlung_2001",
        label: "Volkszählung 2001 — Hauptergebnisse Kärnten",
        labelEN: "Census 2001 — Carinthia main results",
        level: "MACRO", direction: "TOP_DOWN",
        type: "Statistical publication",
        status: "historical",
        date: "2001-05-15",
        description: "Last Austrian census to ask the Umgangssprache (colloquial language) question. 24,855 persons reported Slovene as their colloquial language. Subsequent register-based censuses do not capture mother tongue, so all subsequent estimates of community size are extrapolations. This methodological gap is itself policy-relevant: statutory thresholds keyed to demographic share become difficult to apply consistently.",
        urls: [
          { label: "Statistik Austria", href: "https://www.statistik.at/" }
        ],
        tags: ["demographic", "census", "mother_tongue"]
      },

      // ─── F. Media / commentary ─────────────────────────────────────────────

      {
        id: "slv_at_standard_shrinking_volksgruppe",
        label: "derStandard.at — Kärntner Slowenen: schrumpfende Volksgruppe",
        labelEN: "derStandard: Visit to a shrinking minority",
        level: "MESO", direction: "TOP_DOWN",
        type: "Mainstream media article",
        status: "published",
        date: "2022-01-01",
        description: "Long-form mainstream-media reporting on the demographic and policy situation of Carinthian Slovenes. Cited in the source deck as the contemporary framing of the community's situation in mainstream Austrian discourse.",
        urls: [
          { label: "derStandard.at", href: "https://www.derstandard.at/" }
        ],
        tags: ["media", "demographic", "framing"]
      },
      {
        id: "slv_at_krone_ortstafeln_beschmiert",
        label: "krone.at — Ortstafeln beschmiert: 5000 Euro für Hinweise",
        labelEN: "Vandalism of bilingual place-name signs (police appeal)",
        level: "MESO", direction: "TOP_DOWN",
        type: "Mainstream media article",
        status: "published",
        date: "2023-01-01",
        description: "Reporting on ongoing vandalism of bilingual German-Slovene place-name signs, with police search for perpetrators. The Ortstafelstreit (bilingual signage dispute) is the most visible contested element of Austrian minority policy in Carinthia and a recurring source of political incident — illustrating that TOP-DOWN MACRO settlement (1955 Treaty) does not automatically resolve MICRO-level conflict.",
        urls: [
          { label: "krone.at", href: "https://www.krone.at/" }
        ],
        tags: ["media", "ortstafelstreit", "vandalism"]
      },
      {
        id: "slv_at_kurier_10yr_ortstafel",
        label: "kurier.at — 10 Jahre Ortstafellösung: Gestürmt, verrückt, beschmiert, normal",
        labelEN: "Ten years of the bilingual-signage compromise",
        level: "MESO", direction: "TOP_DOWN",
        type: "Mainstream media article",
        status: "published",
        date: "2021-04-26",
        description: "Retrospective coverage of the 2011 Ortstafel-Kompromiss (compromise on bilingual place-name signs) ten years on. The 2011 settlement followed decades of dispute including the 1972 Ortstafelsturm (sign-storm) in which German-Austrian activists tore down newly-erected Slovene-language signs. Useful diachronic anchor and direct precedent for predicting Polish minority-signage trajectories.",
        urls: [
          { label: "kurier.at", href: "https://kurier.at/" }
        ],
        tags: ["media", "ortstafelstreit", "anniversary"]
      }
    ]
  },

  // ─── FOSTERLANG WP7 PROJECT ACTIVITIES ──────────────────────────────────────

  projectTimeline: [
    {
      date: "2025-09-25",
      dateEnd: "2025-09-27",
      event: "FOSTERLANG inaugural project opening and conference in Wilamowice — home of the endangered Wymysiöeryś language. Researchers, activists, and community members working on revitalisation of Europe's endangered and minoritised languages.",
      eventWYM: "FOSTERLANG konferencyja yn öfnung ym Wilamowicach — haojm d gefördyta Wymysiöeryś śpröch. Forśer, aktywista yn gmyjnda-lajt.",
      type: "conference"
    },
    {
      date: "2025-10-23",
      event: "Online meeting between researchers from Adam Mickiewicz University and University of Oslo. Discussion focused on evaluation methods for multilingual policies and their assessment in minority-language contexts.",
      eventWYM: "Online-treffa cwiśa forśer fum Adam Mickiewicz Uniwersytet yn Uniwersytet Oslo. Dyskusja iwa evaluacjons-metoda fia fiłśpröchige politika.",
      type: "meeting"
    },
    {
      date: "2026-03-12",
      event: "Tomasz Wicherkiewicz participated in an event in Kartuzy: workshop and discussion of educational materials for Kashubian-language and regional teaching. Educators and activists involved in developing resources for the Kashubian language.",
      eventWYM: "Tomasz Wicherkiewicz hot tajłganuma ym Kartuzy: werksztot yn dyskusja iwa edukacjons-materiała fia Kashubiś śpröch yn regionala lernung.",
      type: "workshop"
    },
    {
      date: "2026-03",
      dateEnd: "2026-04",
      event: "Online interviews with Kashubian language policy makers and activists, focusing on language policy, revitalisation strategies, and educational initiatives.",
      eventWYM: "Online-yntyrwjus myt Kashubiśe śpröchpolitik-maher yn aktywista — śpröchpolitik, revitalizacjons-strategja yn edukacjons-inicjatywa.",
      type: "interviews"
    },
    {
      date: "2026-04-15",
      dateEnd: "2026-04-19",
      event: "Fieldwork in Lemkovyna: interviews and consultations with members of the Lemko community on language practices, revitalisation initiatives, and community perspectives regarding the Lemko language.",
      eventWYM: "Feldforśung ym Lemkowyna: yntyrwjus yn konsultacja myt Lemko-gmyjnda iwa śpröchpraktika, revitalizacjons-inicjatywa yn gmyjnda-perspektywa.",
      type: "fieldwork"
    }
  ]
};
