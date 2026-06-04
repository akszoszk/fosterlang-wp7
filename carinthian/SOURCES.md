# Carinthian Slovene (Koroški Slovenci / Kärntner Slowenen) — Source Catalogue

**Status:** Draft v0.1 — extracted from Glušič, P. *Presentation about the minority protective laws in Austria*. Pädagogische Hochschule Kärnten / Viktor Frankl Hochschule (December 2019 / updated December 2023). 48 slides.

**Proposed FTM language code:** `SLV-AT` (Slovene as spoken by the autochthonous Carinthian Slovene minority in the Republic of Austria; Glottolog `slov1268`, ISO 639-3 `slv`).

**Why add this case.** Carinthian Slovene is a long-established, bilingually-schooled minority within an EU member state, anchored by a binding post-WWII state treaty (Art. 7 of the 1955 *Staatsvertrag*). It provides a meaningful contrast to:
- **Silesian / Wilamowian** — recognition-seeking communities still negotiating MACRO status.
- **Ukrainian in Poland** — emergency-displacement situation without minority status.

Carinthian Slovene is the "mature regime" case in the comparison: how a TOP-DOWN guarantee, contested for decades (Ortstafelstreit, school opt-outs), eventually settled into a partial but stable bilingual-education infrastructure.

---

## 1. Document inventory

Each entry below is structured for direct ingestion into `ftm-data.js`. The `level` and `direction` fields follow the rules in `METHODOLOGY.md` §4.5.

### A. International / supranational instruments (MACRO, TOP-DOWN, binding)

#### A1. Treaty of Saint-Germain-en-Laye (1919)

| Field | Value |
|---|---|
| `id` | `slv_at_stgermain_1919` |
| `label` | Staatsvertrag von Saint-Germain-en-Laye |
| `labelEN` | Treaty of Saint-Germain-en-Laye |
| `level` | MACRO |
| `direction` | TOP_DOWN |
| `type` | Binding treaty |
| `status` | ongoing |
| `date` | 1919-09-10 |
| `description` | Post-WWI peace treaty between Austria and the Allied & Associated Powers. Articles 62–69 establish minority-protection obligations: equality before the law (Art. 66), guarantees for minorities by race/religion/language (Art. 67), and minority-language primary education where a significant non-German-speaking population resides (Art. 68). Art. 69 placed these obligations under League of Nations guarantee. Still cited as the foundational layer of Austrian minority law. |
| `urls` | RIS consolidated version: https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10000044 |
| `tags` | foundational, minority-rights, peace-treaty, education |

#### A2. Austrian State Treaty 1955 — Article 7

| Field | Value |
|---|---|
| `id` | `slv_at_staatsvertrag_1955_art7` |
| `label` | Österreichischer Staatsvertrag 1955, Art. 7 |
| `labelEN` | Austrian State Treaty 1955, Article 7 (Rights of the Slovene and Croat minorities) |
| `level` | MACRO |
| `direction` | TOP_DOWN |
| `type` | Binding treaty |
| `status` | ongoing |
| `date` | 1955-05-15 |
| `description` | Article 7 §1 grants equal rights to Slovene and Croat Austrian citizens, including own organisations, assemblies, and press in their own language. §2 guarantees elementary education in Slovene/Croat and a proportional number of secondary schools. §3 establishes Slovene/Croat as additional official languages (alongside German) in administrative and judicial districts with mixed populations, and requires bilingual topographic signage. Article 26 protects property/rights/interests of minority groups. Foundational anchor for all subsequent Austrian minority law. Signed 15 May 1955, ratified 8 June 1955, entered into force 27 July 1955. BGBl. Nr. 152/1955. |
| `urls` | BGBl. PDF: https://www.ris.bka.gv.at/Dokumente/BgblPdf/1955_152_0/1955_152_0.pdf |
| `tags` | foundational, minority-rights, state-treaty, education, official-language, signage |

#### A3. European Charter for Regional or Minority Languages (ECRML)

| Field | Value |
|---|---|
| `id` | `slv_at_ecrml_1992` |
| `label` | Europäische Charta der Regional- oder Minderheitensprachen |
| `labelEN` | European Charter for Regional or Minority Languages |
| `level` | MACRO |
| `direction` | TOP_DOWN |
| `type` | Binding treaty |
| `status` | binding_international |
| `date` | 1992-11-05 |
| `description` | Council of Europe treaty, opened for signature in Strasbourg 5 November 1992. Five parts. Defines "regional or minority languages" (excludes dialects of official languages and immigrant languages — significant for the Silesian comparison). Article 7 sets out principles (recognition, geographic respect, protection, ease of use, education provision). Article 8 covers education obligations from pre-school through tertiary and adult education. Austria signed 5 November 1992 and ratified 28 June 2001 (entered into force 1 October 2001), with specific Part III commitments for Slovene in Carinthia and Burgenland-Croat and Hungarian. |
| `urls` | Council of Europe: https://www.coe.int/en/web/european-charter-regional-or-minority-languages — Austrian ratification details: https://www.coe.int/en/web/conventions/full-list?module=signatures-by-treaty&treatynum=148 |
| `tags` | binding-international, ecrml, education |

### B. Austrian federal-level instruments (MACRO, TOP-DOWN, ongoing)

#### B1. Federal Constitutional Law (B-VG) — Article 8

| Field | Value |
|---|---|
| `id` | `slv_at_bvg_art8` |
| `label` | Bundes-Verfassungsgesetz (B-VG), Art. 8 |
| `labelEN` | Federal Constitutional Law, Article 8 |
| `level` | MACRO |
| `direction` | TOP_DOWN |
| `type` | Constitutional provision |
| `status` | ongoing |
| `date` | 2000-08-01 |
| `description` | Constitutional anchor of Austrian language policy. §1: German is the state language, "without prejudice to the rights granted to linguistic minorities by federal law". §2 (added 2000): the Republic professes its grown linguistic and cultural diversity, expressed in the autochthonous ethnic groups; the language and culture, existence and preservation of these ethnic groups are to be respected, secured and promoted. §3 (added 2005): Austrian Sign Language recognised as an independent language. Originally StF: BGBl. Nr. 1/1930 (consolidated re-enactment); current form BGBl. I Nr. 194/1999 with subsequent amendments. The 2000 addition of §2 is the key constitutional moment for minority recognition. |
| `urls` | RIS: https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10000138 |
| `tags` | constitutional, minority-rights, autochthonous-volksgruppen |

#### B2. Volksgruppengesetz (VoGrG) — Ethnic Groups Act

| Field | Value |
|---|---|
| `id` | `slv_at_vogrg_1976` |
| `label` | Volksgruppengesetz |
| `labelEN` | Federal Act on the Legal Status of Ethnic Groups in Austria |
| `level` | MACRO |
| `direction` | TOP_DOWN |
| `type` | Federal statute |
| `status` | ongoing |
| `date` | 1976-07-07 |
| `description` | Federal statute implementing constitutional and treaty obligations toward Austria's autochthonous ethnic groups. Defines `Volksgruppe` as groups of Austrian citizens with non-German mother tongue and own ethnic identity, resident and indigenous in parts of the federal territory. Recognises six autochthonous Volksgruppen: Croat, Slovene, Hungarian, Czech, Slovak, Roma. Annex 1 lists bilingual topographic place names (including Slovene-German names in Carinthia). Annex 2 lists authorities and offices in which Croat, Slovene or Hungarian may be used additionally as official language. StF: BGBl. Nr. 396/1976; amended BGBl. Nr. 575/1976 and BGBl. I Nr. 194/1999. |
| `urls` | RIS: https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10000602 |
| `tags` | volksgruppen, official-language, signage, six-minorities |

#### B3. Schulorganisationsgesetz (SchOG) — School Organisation Act

| Field | Value |
|---|---|
| `id` | `slv_at_schog_1962` |
| `label` | Schulorganisationsgesetz |
| `labelEN` | School Organisation Act |
| `level` | MACRO |
| `direction` | TOP_DOWN |
| `type` | Federal statute |
| `status` | ongoing |
| `date` | 1962-07-25 |
| `description` | General federal framework for the structure of Austrian schooling (primary, secondary general/vocational, higher). Provides the systemic backdrop against which the Minderheiten-Schulgesetz für Kärnten operates as lex specialis. StF: BGBl. Nr. 242/1962 idF BGBl. Nr. 267/1963 plus extensive subsequent amendments. |
| `urls` | RIS: https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009265 |
| `tags` | framework, school-organisation |

#### B4. Minderheiten-Schulgesetz für Kärnten — Carinthian Minority Schools Act

| Field | Value |
|---|---|
| `id` | `slv_at_minschulg_kt_1959` |
| `label` | Minderheiten-Schulgesetz für Kärnten |
| `labelEN` | Carinthian Minority Schools Act |
| `level` | MACRO |
| `direction` | TOP_DOWN |
| `type` | Federal statute (Land-specific) |
| `status` | ongoing |
| `date` | 1959-03-19 |
| `description` | Operational statute implementing Art. 7 §2 of the 1955 State Treaty for Carinthia. Seven articles. Establishes three school types in the bilingual zone: (a) Slovene-medium primary/lower-secondary with German as compulsory subject (6 hrs/week); (b) bilingual primary schools where instruction is delivered in approximately equal measure in German and Slovene through grade 4; (c) German-medium lower-secondary with Slovene as compulsory subject (4 hrs/week). Operates on the `Anmeldeprinzip` (registration principle — parents must actively register the child for bilingual instruction). Class size in bilingual primary classes: minimum 7, maximum 20 pupils. Major 1988 amendment introduced team-teaching (Zweilehrersystem) and physical separation by instruction language. 2009 amendment: BGBl. I Nr. 35/2009. The bilingual Handelsakademie was established by Art. II of BGBl. Nr. 420/1990. StF: BGBl. Nr. 101/1959 idF BGBl. Nr. 246/1959 und BGBl. I Nr. 35/2009. Canonical consolidated text (Fassung vom 22.05.2025) archived at `carinthian/Minderheiten-Schulgesetz für Kärnten, Fassung vom 22.05.2025.pdf`. |
| `urls` | RIS: https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009343 |
| `tags` | bilingual-education, carinthia, anmeldeprinzip, team-teaching |

#### B5. Slovene Volksschule Curriculum — Lehrplan Slowenisch (BGBl. II Nr. 1/2023)

| Field | Value |
|---|---|
| `id` | `slv_at_lehrplan_volksschule_2023` |
| `label` | Lehrplan Slowenisch (Volksschule) — BGBl. II Nr. 1/2023 |
| `labelEN` | Slovene Subject Curriculum for Primary School (Volksschule) |
| `level` | MACRO |
| `direction` | TOP_DOWN |
| `type` | Ministerial regulation (Verordnung) |
| `status` | ongoing |
| `date` | 2023-01-04 |
| `description` | BMBWF subject curriculum for Slovene as a `Volksgruppensprache` at primary level (grades 1–4) in Carinthia. Promulgated as part of the new `Lehrpläne NEU` Volksschule framework — Federal Ordinance BGBl. II Nr. 1/2023. The curriculum specifies (i) `Bildungs- und Lehraufgabe` (educational mission), (ii) didactic principles for the four competence areas — Listening/Speaking, Reading, Text Production, Orthography/Language Reflection — (iii) three central subject concepts (`Inhalt und Form`, `Norm und Wandel`, `Diversität und Identität`), and (iv) explicit per-grade competence descriptions for grades 1–4. Crucially, the curriculum explicitly acknowledges that Slovene may be the pupil's first language, second language, *or* `Umgebungssprache` (ambient/environmental language) and instructs teachers to adapt to these different starting points. References the Common European Framework of Reference for Languages (CEFR) and the regional `Kompetenzbeschreibungen für den Unterrichtsgegenstand Slowenisch` in Carinthia. This is the *operational pedagogical translation* of the Minderheiten-Schulgesetz für Kärnten — the curriculum without which the statutory right to Slovene-medium instruction would lack concrete content. Archived at `carinthian/Slowenisch-Volksgruppen_27.10.2025.pdf`. |
| `urls` | RIS (BGBl. II Nr. 1/2023): https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2023_II_1/BGBLA_2023_II_1.html — BMBWF Lehrpläne portal: https://www.bmbwf.gv.at/Themen/schule/schulpraxis/lp.html |
| `tags` | curriculum, lehrplan, volksschule, primary, lehrpläne-neu, cefr-aligned |

#### B6. Cross-minority Competency Framework — Kompetenzraster Volksgruppensprachen (Grades 3–4)

| Field | Value |
|---|---|
| `id` | `slv_at_kompetenzraster_3-4_2023` |
| `label` | Kompetenzraster "Volksgruppensprachen Kroatisch/Slowenisch/Ungarisch", 3. und 4. Schulstufe |
| `labelEN` | Competency Framework for Ethnic-Group Languages (Croatian/Slovene/Hungarian), Grades 3 and 4 |
| `level` | MESO |
| `direction` | TOP_DOWN |
| `type` | Pedagogical assessment instrument |
| `status` | ongoing |
| `date` | 2023-02-01 |
| `description` | BMBWF `Pädagogik-Paket` competency-assessment grid (Stand 02/2023) covering all three official Austrian `Volksgruppensprachen` taught at bilingual primary level: Croatian (Burgenland), Slovene (Carinthia/Styria), and Hungarian (Burgenland). For each sub-competency (Teilkompetenz) the grid specifies three attainment levels (Niveau 1–3), each cross-referenced to the relevant section of the underlying curriculum (Lehrplanbezug: BGBl. II Nr. 1/2023). Competence areas: Listening (Hören), Speaking (Sprechen), Reading (Lesen), Text Production (Verfassen von Texten), and Orthography/Language Reflection ((Recht-)Schreiben und Sprachbetrachtung). Six pages total, three per grade. Pedagogically significant for two reasons: (a) it is the operational teacher-facing instrument that makes the BGBl. II Nr. 1/2023 curriculum classroom-actionable; (b) it treats minority-language education as a **single shared policy domain across three languages** — the Austrian state consciously develops one assessment framework that scales across all three Volksgruppensprachen rather than three bespoke per-language programmes. Directly relevant comparative artifact for any future operationalisation of Polish minority-language education across Silesian, Wilamowian, and potential additional cases. Archived at `carinthian/Volksgruppensprachen_3-4-Schulstufe-Kompetenzraster_27.10.2025.pdf`. |
| `urls` | BMBWF Pädagogik-Paket: https://www.bmbwf.gv.at/Themen/schule/schulpraxis/lp/pp.html — Underlying Lehrplan (BGBl. II Nr. 1/2023): https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2023_II_1/BGBLA_2023_II_1.html |
| `tags` | kompetenzraster, assessment, primary, cross-minority, croatian, slovene, hungarian |

### C. Implementing institutions (MESO, TOP-DOWN, ongoing)

#### C1. BG/BRG für Slowenen — Slovene Federal Gymnasium, Klagenfurt

| Field | Value |
|---|---|
| `id` | `slv_at_bgbrg_slo_1957` |
| `label` | BG/BRG für Slowenen — Zvezna gimnazija in zvezna realna gimnazija za Slovence |
| `labelEN` | Federal Gymnasium and Realgymnasium for Slovenes, Klagenfurt |
| `level` | MESO |
| `direction` | TOP_DOWN |
| `type` | Institutional foundation |
| `status` | ongoing |
| `date` | 1957-09-01 |
| `description` | Federal secondary school established for Austrian citizens of the Slovene minority. Operates under both gymnasium and Realgymnasium curricula. Instruction in Slovene; German taught as compulsory subject and mandatory Matura examination. Class-by-class build-up after founding. Confers university-entrance qualification equivalent to German-medium Bundesmittelschule. Continues to operate today. |
| `urls` | School: https://www.slog.at/ |
| `tags` | secondary, slovene-medium, klagenfurt |

#### C2. Zweisprachige Bundeshandelsakademie (HAK-TAK) — Bilingual Federal Commercial Academy

| Field | Value |
|---|---|
| `id` | `slv_at_haktak_1990` |
| `label` | Zweisprachige Bundeshandelsakademie — Dvojezična zvezna trgovska akademija |
| `labelEN` | Bilingual Federal Commercial Academy, Klagenfurt |
| `level` | MESO |
| `direction` | TOP_DOWN |
| `type` | Institutional foundation |
| `status` | ongoing |
| `date` | 1990-09-01 |
| `description` | Berufsbildende höhere Schule (vocational upper-secondary school) established by BGBl. Nr. 420/1990 as Art. II amendment to the Minderheiten-Schulgesetz für Kärnten. Instruction delivered in approximately equal measure in Slovene and German across all five years. Compulsory languages: German, Slovene, English, plus one further modern language. Confers Reife- und Diplomprüfung (vocational matura) with university-entrance equivalence. Notable as a bilingual vocational route — distinguishes the Austrian model from pure gymnasium-based minority education. |
| `urls` | School: https://www.hak-tak.at/ |
| `tags` | vocational, bilingual, klagenfurt |

#### C3. Bilingual private HLW St. Peter — Private Bilingual School for Commercial Professions

| Field | Value |
|---|---|
| `id` | `slv_at_hlw_stpeter_1989` |
| `label` | Zweisprachige private Höhere Lehranstalt für wirtschaftliche Berufe, St. Peter bei St. Jakob im Rosental |
| `labelEN` | Bilingual Private Higher School for Commercial Professions, St. Peter / St. Jakob im Rosental |
| `level` | MESO |
| `direction` | BOTTOM_UP |
| `type` | Institutional foundation |
| `status` | ongoing |
| `date` | 1989-09-01 |
| `description` | Private bilingual upper-secondary school in the Carinthian bilingual zone. Established 1989 as a community-led extension of bilingual schooling beyond the federally-mandated framework. Significant as a BOTTOM-UP institutional response: founded with community initiative rather than purely state action. |
| `urls` | School: https://www.slovenskagimnazija.at/ (NB: verify — multiple bilingual institutions in the area) |
| `tags` | private, bilingual, community-initiative |

#### C4. Pädagogische Hochschule Kärnten — Viktor Frankl Hochschule

| Field | Value |
|---|---|
| `id` | `slv_at_phk_teacher_training` |
| `label` | Pädagogische Hochschule Kärnten — Viktor Frankl Hochschule |
| `labelEN` | University College of Teacher Education Carinthia |
| `level` | MESO |
| `direction` | TOP_DOWN |
| `type` | Institutional |
| `status` | ongoing |
| `date` | 2007-10-01 |
| `description` | The institution responsible under the Minderheiten-Schulgesetz für Kärnten for training bilingual teachers (Lehrpersonen) and team-teachers (Teamlehrer:innen) for the Carinthian bilingual school system. A pipeline-critical institution — the long-term sustainability of bilingual education depends entirely on its output. The author of the source presentation, Prof. Dr. Pamela Glušič, is affiliated here. |
| `urls` | https://www.ph-kaernten.ac.at/ |
| `tags` | teacher-training, sustainability |

### D. Historical / diachronic context (MACRO, historical)

#### D1. Allgemeine Schulordnung 1774 (utraquistische Schulen)

| Field | Value |
|---|---|
| `id` | `slv_at_schulordnung_1774` |
| `label` | Allgemeine Schulordnung Maria Theresias |
| `labelEN` | General School Ordinance of Maria Theresia |
| `level` | MACRO |
| `direction` | TOP_DOWN |
| `type` | Imperial decree |
| `status` | historical |
| `date` | 1774-12-06 |
| `description` | Origin of the so-called `utraquistische Schulen` — schools intended to transmit German to children entering school with little or no German but Slovene dialect competence. Marks the earliest formal state framing of Slovene-speaking children as a population to be linguistically incorporated rather than served in their own language. The foundational document of the German-dominant school model that Article 7 of the 1955 State Treaty eventually had to overturn. |
| `urls` | Reference: Engelbrecht, H. *Geschichte des österreichischen Bildungswesens*, Bd. 3. |
| `tags` | historical, imperial, utraquismus |

#### D2. NS-era suppression 1938–1945

| Field | Value |
|---|---|
| `id` | `slv_at_ns_suppression_1938` |
| `label` | Verbot des Slowenischen im NS-Regime |
| `labelEN` | National-Socialist prohibition of Slovene in schools and public life |
| `level` | MACRO |
| `direction` | TOP_DOWN |
| `type` | Historical regime measure |
| `status` | historical |
| `date` | 1938-03-13 |
| `description` | During the 1938–1945 annexation of Austria into the Third Reich, Slovene was banned in compulsory schools and public life in Carinthia. This is the negative reference point against which the post-1945 restoration of bilingual schooling and the 1955 State Treaty guarantees must be read. Mass deportation of Carinthian Slovene families in April 1942 also belongs to this period (deck does not detail this but it is the canonical entry in the historical context). |
| `urls` | Reference: Stuhlpfarrer, K. *Umsiedlung Südtirol 1939–1940* (for adjacent context); Carinthian Slovene historical archives. |
| `tags` | historical, ns-era, suppression |

#### D3. 1958 Verordnung — opt-out from bilingual instruction

| Field | Value |
|---|---|
| `id` | `slv_at_abmeldung_1958` |
| `label` | Verordnung des Kärntner Landeshauptmannes 1958 |
| `labelEN` | 1958 Decree of the Carinthian Governor — Opt-out from bilingual instruction |
| `level` | MESO |
| `direction` | TOP_DOWN |
| `type` | Ministerial regulation |
| `status` | historical |
| `date` | 1958-09-01 |
| `description` | Decree introducing the possibility for parents to opt children out of bilingual instruction (Abmeldung) in the formerly compulsory-bilingual zone. The decree is widely understood as a politically motivated retreat from the inclusive bilingual model and is the proximate cause of the 1959 reform that switched the system to the `Anmeldeprinzip` (positive registration required). Critical for understanding why current Carinthian bilingual education has the structure it does. |
| `urls` | Historical archives — Kärntner Landesarchiv. |
| `tags` | historical, abmeldung, policy-retreat |

### E. Community / civil-society sources (MESO–MICRO, BOTTOM-UP)

#### E1. Narodni svet koroških Slovencev (NSKS)

| Field | Value |
|---|---|
| `id` | `slv_at_nsks` |
| `label` | Narodni svet koroških Slovencev / Rat der Kärntner Slowenen |
| `labelEN` | National Council of Carinthian Slovenes |
| `level` | MESO |
| `direction` | BOTTOM_UP |
| `type` | Community organisation |
| `status` | ongoing |
| `date` | 1949-04-29 |
| `description` | Apex representative organisation of the Carinthian Slovene community, founded 1949. Publishes population figures, advocates for community interests, and is a primary BOTTOM-UP voice in Austrian minority-policy discourse. The deck cites NSKS's count of 13,109 Carinthian Slovenes at the 2001 census (contrasted with the 24,855 self-reporting Slovene as colloquial language). |
| `urls` | https://www.nsks.at/ |
| `tags` | community-organisation, advocacy |

#### E2. Census 2001 — last with mother-tongue data

| Field | Value |
|---|---|
| `id` | `slv_at_volkszaehlung_2001` |
| `label` | Volkszählung 2001 — Hauptergebnisse Kärnten |
| `labelEN` | Census 2001 — Carinthia main results |
| `level` | MACRO |
| `direction` | TOP_DOWN |
| `type` | Statistical publication |
| `status` | historical |
| `date` | 2001-05-15 |
| `description` | The last Austrian census to ask the `Umgangssprache` (colloquial language) question. 24,855 persons reported Slovene as their colloquial language. Subsequent censuses (register-based since 2011) do not capture mother tongue, so all subsequent estimates of the Carinthian Slovene community size are extrapolations. This methodological gap is itself a policy-relevant fact — it makes statutory thresholds keyed to demographic share (e.g., bilingual signage rules) increasingly difficult to apply consistently. |
| `urls` | Statistik Austria archive: https://www.statistik.at/ |
| `tags` | demographic, census, mother-tongue |

### F. Media / commentary (MESO–MICRO, mixed direction)

#### F1. derStandard.at — "Schrumpfende Volksgruppe"

| Field | Value |
|---|---|
| `id` | `slv_at_standard_shrinking_volksgruppe` |
| `label` | derStandard.at — "Kärntner Slowenen: Zu Besuch bei einer schrumpfenden Volksgruppe" |
| `labelEN` | derStandard.at — Visit to a shrinking minority |
| `level` | MESO |
| `direction` | TOP_DOWN |
| `type` | Mainstream media article |
| `status` | published |
| `date` | [verify from URL] |
| `description` | Long-form mainstream-media reporting on the demographic and policy situation of Carinthian Slovenes. Cited in the source deck as the contemporary framing of the community's situation in mainstream Austrian discourse. |
| `urls` | Search: site:derstandard.at "Kärntner Slowenen schrumpfende Volksgruppe" |
| `tags` | media, demographic, framing |

#### F2. krone.at — Vandalised bilingual signs

| Field | Value |
|---|---|
| `id` | `slv_at_krone_ortstafeln_beschmiert` |
| `label` | krone.at — "Ortstafeln beschmiert: 5000 Euro für Hinweise" |
| `labelEN` | Vandalism of bilingual place-name signs |
| `level` | MESO |
| `direction` | TOP_DOWN |
| `type` | Mainstream media article |
| `status` | published |
| `date` | [verify] |
| `description` | Reporting on the ongoing vandalism of bilingual German-Slovene place-name signs, with police search for perpetrators. The bilingual signage question (the *Ortstafelstreit*) is the most visible and contested element of Austrian minority policy in Carinthia and a recurring source of political incident. |
| `urls` | https://www.krone.at/ |
| `tags` | media, ortstafelstreit, vandalism |

#### F3. kurier.at — "10 Jahre Ortstafellösung"

| Field | Value |
|---|---|
| `id` | `slv_at_kurier_10yr_ortstafel` |
| `label` | kurier.at — "10 Jahre Ortstafellösung: Gestürmt, verrückt, beschmiert, normal" |
| `labelEN` | Ten years of the bilingual-signage compromise |
| `level` | MESO |
| `direction` | TOP_DOWN |
| `type` | Mainstream media article |
| `status` | published |
| `date` | 2021-04-26 |
| `description` | Retrospective coverage of the 2011 Ortstafel-Kompromiss (compromise on bilingual place-name signs) ten years on. The 2011 settlement followed decades of dispute, including the 1972 *Ortstafelsturm* (sign-storm) in which German-Austrian activists tore down newly-erected Slovene-language signs. Useful diachronic anchor. |
| `urls` | https://kurier.at/chronik/oesterreich/ |
| `tags` | media, ortstafelstreit, anniversary |

---

## 2. Cross-cutting themes for FTM analysis

When the Carinthian case is read alongside the three Polish cases, several themes emerge that the dataset can illuminate:

1. **Maturity of legal framework as predictor of stability.** Carinthia has a binding international treaty (1955) plus implementing statute (1959/1988) plus constitutional anchor (B-VG Art. 8 §2 since 2000) plus EU instrument (ECRML 1992/2001). The Polish cases mostly lack the binding-international layer for the specific languages at issue (Silesian/Wilamowian are not recognised under the 2005 Act; Ukrainian-of-Poland is an emergency arrangement, not a minority framework).

2. **Bottom-up resistance still operative after MACRO settlement.** The recurring vandalism of bilingual signs in Carinthia (see F2, F3) shows that TOP-DOWN MACRO settlement does not automatically resolve MICRO-level conflict. This is a useful precedent for predicting what may happen if Silesian or Wilamowian are eventually recognised.

3. **The Anmeldeprinzip / opt-in mechanism.** Carinthia's experience after 1958–1959 shows that *requiring positive registration* for bilingual instruction can suppress uptake dramatically. This is a policy-design lesson directly applicable to any future Polish minority-education reform.

4. **Vocational vs. gymnasium routes.** Austria established both a slovene-medium gymnasium (1957) and a bilingual commercial academy (1990). Poland's recognition debates have focused almost exclusively on the gymnasium / academic route. The Carinthian comparison surfaces vocational education as a missing dimension.

5. **Demographic measurement gap.** The post-2001 absence of mother-tongue census data in Austria parallels the under-counting issues in Poland (where speakers of Silesian and Wilamowian have to be counted via separate language-question modules). Both situations make policy targets difficult to verify.

---

## 3. Tag controlled vocabulary additions

Adding the Carinthian case requires extending the tag vocabulary with the following terms (proposed):

- `austria` — country tag
- `carinthia` / `kärnten` / `koroška`
- `slovene-minority`
- `state-treaty` (already useful for the 1955 treaty)
- `bilingual-signage` / `ortstafel`
- `ortstafelstreit`
- `anmeldeprinzip`
- `team-teaching`
- `vocational-bilingual`
- `autochthonous-volksgruppen`
- `utraquismus` (historical)
- `ecrml-part-iii` (for state-by-state Part III commitments)

---

## 4. Open data-quality questions

The following items need clarification before the Carinthian case is added to a v1.0 release:

1. ~~**Source PDFs not yet collected.** The deck cites consolidated RIS versions (e.g., `B-VG, Fassung vom 06.12.2023.pdf`). These should be downloaded to `carinthian/sources/` for offline citation stability.~~ **Partially resolved (Dec 2025):** consolidated RIS texts of `VoGrG` (Fassung 17.09.2023) and `Minderheiten-Schulgesetz für Kärnten` (Fassung 22.05.2025) are now archived in `carinthian/`. The Volksschule Slovene curriculum (BGBl. II Nr. 1/2023) and the cross-minority Kompetenzraster (Stand 02/2023) were also collected and catalogued as new entries B5 and B6. Still missing: canonical PDFs of `B-VG` Art. 8 and `Staatsvertrag 1955` Art. 7.
2. **Date verification for media articles** (F1, F2, F3) — exact publication dates need to be pulled from the actual URLs.
3. **HLW St. Peter institutional URL** — multiple bilingual institutions cluster in this geography; need to verify the correct school.
4. **2011 Ortstafel-Lösung** itself is not a single document but a political settlement implemented through amendments to the VoGrG and Land-level resolutions; needs a dedicated catalogue entry once the implementing instruments are identified.
5. **Survey data (deck §15ff)** — the 2023 HAK-TAK student survey by Glušič is referenced via a Microsoft Forms link in the deck. This is primary fieldwork data; would need permission to cite in any published version.
6. **Verify exact promulgation date of BGBl. II Nr. 1/2023.** Entry B5 currently uses 2023-01-04 as a best-guess based on the BGBl. citation order; the actual publication date in the Bundesgesetzblatt should be confirmed and corrected.

---

## 5. Proposed timeline for adding this case to the live web app

| Step | Action | Owner | Estimated effort |
|---|---|---|---|
| 1 | Verify URLs in this catalogue (1–2 hours of link-clicking) | AMU team | 2h |
| 2 | Download canonical PDFs of B-VG Art. 8, VoGrG, MinSchulG Kt, ECRML (Austrian ratification) into `carinthian/sources/` | AMU team | 1h |
| 3 | Translate entries to the `ftm-data.js` schema and add to the JS data file | Developer | 2h |
| 4 | Add tag vocabulary entries (see §3) to the legend / filter UI | Developer | 1h |
| 5 | Add `Slovene-AT` as a fourth language card on the homepage with its own accent colour | Developer | 1h |
| 6 | Write a short comparative essay (1–2 pp) explaining why this case is included — for the methodology document and as a homepage banner | AMU team | 4h |
| 7 | Inter-coder check of the level/direction assignments above | AMU team + 1 colleague | 2h |
| 8 | Release as v0.10-pre-carinthia | All | — |

**Total estimated effort:** ~13 hours of mixed work, spread over 1–2 weeks if not full-time.

---

*End of v0.1 catalogue.*
