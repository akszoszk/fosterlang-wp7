# Methodology: FOSTERLANG WP7 Language Policy Repository (FTM Mapping)

**Version:** 0.1 — DRAFT
**Date:** [YYYY-MM-DD]
**Authors:** [LEAD AUTHOR], [CO-AUTHORS] — Adam Mickiewicz University in Poznań (AMU)
**Project:** FOSTERLANG (Horizon Europe), Work Package 7
**Companion artifact:** Interactive FTM repository (web application)
**Repository version covered:** v0.9-pre-release (commit `af9cbf1`, March 2026 snapshot)

---

> **Status note for collaborators.** This is a working draft. Sections marked `[FILL IN]` need contributions from the AMU WP7 team. Sections marked `[VERIFY]` contain claims I have inferred from the source materials that should be confirmed against the FOSTERLANG Description of Action (DoA) before any external release.

---

## Abstract

This document describes the methodology behind the FOSTERLANG WP7 Language Policy Repository, a structured corpus of 41 legislative, monitoring, media and civil-society documents pertaining to three minority and emergency language situations in Poland (2020–2026): Silesian, Wilamowian, and Ukrainian. The corpus is mapped onto the Ferguson–Tollefson Matrix (FTM) framework introduced by Kan (2011) and refined in Kan & Adamson (2016), with documents classified along two axes: (i) sociolinguistic level (MACRO / MESO / MICRO) and (ii) directionality (TOP-DOWN / BOTTOM-UP). The repository is intended both as a citable scholarly dataset and as an analytical instrument for comparative minority-language policy research.

---

## 1. Scope and purpose

### 1.1 What is in scope

- **Geographic scope:** Republic of Poland, including national-level instruments and locally focused records (e.g., Wilamowice, Upper Silesia, Ukrainian-receiving municipalities).
- **Temporal scope:** Primary focus on legislative cycles 2020–2026, with binding international instruments (UN Declaration 1992, OSCE Hague 1996, OSCE Oslo 1998, ECRML, FCNM, EU Charter of Fundamental Rights) included as foundational context.
- **Linguistic scope:**
  - **Silesian (szl)** — Glottolog `sile1253`, ISO 639-3 `szl`
  - **Wilamowian / Wymysorys (wym)** — Glottolog `wymy1235`, ISO 639-3 `wym`
  - **Ukrainian (uk) in Poland** — Glottolog `ukra1253`, ISO 639-3 `ukr` (here treated specifically as the language of post-2022 displaced persons, not as a recognised national/ethnic minority of Poland under the 2005 Act).
- **Document types:** legislative prints (Sejm/Senate), parliamentary committee bulletins, vetoes and presidential signals, ministerial regulations, ombudsman (RPO) correspondence and reports, ECRML/FCNM monitoring outputs, mainstream and regional media coverage, expert commentary, and community petitions.

### 1.2 What is out of scope

- Languages with comparable status in Poland but outside this iteration (e.g., **Kashubian, Lemko, Belarusian, Lithuanian, German, Romani, Hebrew, Karaim, Tatar**). These are flagged as priority candidates for v2.0 expansion (see §6).
- Pre-2020 instruments are included only when they remain the active legal anchor (e.g., the 2005 Act on National and Ethnic Minorities and on the Regional Language; Article 35 of the 1997 Constitution).
- Academic literature about the languages (this is a **policy** repository, not a sociolinguistics bibliography). Selected scholarly sources (e.g., Wąsikiewicz-Firlej 2021) are referenced as evidentiary documents only when they enter the policy discourse.

### 1.3 Why these three languages together

The pairing of two **recognition-seeking** cases (Silesian, Wilamowian) with one **emergency-displacement** case (Ukrainian) is deliberate. It enables a comparison between:
- Languages whose speakers are seeking *upward* movement from MICRO/MESO toward MACRO (statutory recognition), and
- A language whose speakers received rapid TOP-DOWN MACRO accommodation that has subsequently degraded through serial extensions.

This juxtaposition is the analytical anchor of the dataset and is what distinguishes it from a generic minority-language bibliography.

---

## 2. Theoretical framework

### 2.1 The Ferguson–Tollefson Matrix (FTM)

The repository operationalises the FTM as developed by Kan (2011) and Kan & Adamson (2016). The FTM combines:
- **Ferguson's (2006) five questions** — pedagogically oriented, addressing MOI, mother-tongue role, L2 choice, language model, and timing of L2 introduction.
- **Tollefson's (2002) six questions** — politically oriented, addressing forces shaping policy, state management of language rights, governance use of language policy, ethno-linguistic conflict, globalisation, and minority capacity.

Kan's contribution was to demonstrate that this 5×6 grid resolves into three diagnostic zones:
- **Educational (Green) zone** — policy statements with potentially impactful pedagogical effect.
- **Political (Red) zone** — policy statements that are potentially controversial.
- **Mixed (Yellow) zone** — policy statements that are potentially ineffective because they pull in opposing directions.

### 2.2 How we adapt the FTM for this repository

Kan's original FTM was designed to **plot policy statements** within a single jurisdiction (Hong Kong's MOI policy). This repository extends the framework in two directions:

1. **Document-level rather than statement-level mapping.** Each item in the corpus is a *document* (a Sejm print, a regulation, a media article), not a discrete policy statement. We map documents according to their primary function in the policy ecosystem.

2. **Two simplified axes for practical visualisation.** Rather than the full 30-cell grid, we use:
   - **Level:** MACRO (national/state-level), MESO (regional/institutional), MICRO (community/individual).
   - **Direction:** TOP-DOWN (state, ministry, parliament originating) vs. BOTTOM-UP (community, NGO, individual originating).

   This produces a 3×2 = 6-cell grid that is more tractable for cross-language comparison while preserving the FTM's core diagnostic question — *where does pressure originate, and at what level does it act?*

### 2.3 Justification for the adaptation

[FILL IN — short paragraph from the AMU team explaining why the simplified 3×2 grid is appropriate for cross-language comparative work and how it aligns with WP7's analytical goals. Reference Kan & Adamson (2016) for the original framework and any subsequent literature that has used similar adaptations.]

---

## 3. Source selection criteria

### 3.1 Inclusion criteria

A document was included if it satisfied **all** of the following:
1. **Topical relevance:** the document concerns the legal status, educational provision, public administration, or community visibility of one of the three target languages.
2. **Verifiable provenance:** the document has a stable institutional source (Sejm/Senate archive, official journal, regulated media outlet, NGO website, or peer-reviewed publication).
3. **Accessibility:** a public URL, library reference, or archive identifier exists at the time of indexing.
4. **Date range:** issued between 2020-01-01 and 2026-03-31, **OR** issued earlier but constituting the active legal/normative anchor for an in-scope situation (e.g., 2005 Minorities Act, ECRML monitoring rounds).

### 3.2 Exclusion criteria

Documents were excluded if:
- They duplicate an already-indexed source (e.g., reprints, syndicated wire copies).
- Their provenance could not be verified to a stable source.
- They were retracted or withdrawn by the originating institution.
- They are scholarly works *about* the language situation but do not themselves constitute or directly cite a policy event. [VERIFY — confirm with team whether Wąsikiewicz-Firlej (2021) and similar items should be reclassified or remain.]

### 3.3 Search strategy

[FILL IN — describe in 1–2 paragraphs:
- What databases / archives were searched (Sejm.gov.pl, Senat.gov.pl, ISAP, Council of Europe ECRML/FCNM portal, RPO archive, regional press archives, etc.).
- What search terms were used in Polish, English, and the target languages.
- How snowball sampling was applied (e.g., references in Sejm prints leading to ministry responses).
- Cut-off date for inclusion in v0.9 (suggested: **2026-03-15**).]

### 3.4 Limitations of the sample

- **Polish-language bias.** All three situations are mediated primarily through Polish-language sources. Silesian-internal and Wilamowian-internal community discourse is under-represented relative to its actual volume because much of it occurs in oral, social-media, or community-internal settings outside the indexing strategy.
- **Recency bias.** Coverage from 2024–2026 is more dense than 2020–2023 because the legislative activity (Silesian and Wilamowian recognition bills) clusters in the later period.
- **Single-coder limitation.** [VERIFY — see §5 on inter-coder reliability.]

---

## 4. Coding scheme

### 4.1 Field definitions

Each document is recorded with the following structured fields (see `data/ftm-data.js` for the canonical schema):

| Field | Type | Definition | Allowed values |
|---|---|---|---|
| `id` | string | Unique stable identifier within the dataset. | `[a-z0-9_]+`, never reused. |
| `label` | string | Display name in Polish (or original language). | Free text. |
| `labelEN` | string | Display name in English. | Free text. |
| `level` | enum | Sociolinguistic level (FTM axis 1). | `MACRO`, `MESO`, `MICRO` |
| `direction` | enum | Origination direction (FTM axis 2). | `TOP_DOWN`, `BOTTOM_UP` |
| `type` | string | Document genre. | See §4.2. |
| `status` | enum | Legal/procedural state. | See §4.3. |
| `date` | ISO 8601 date | Date of issue, passage, or first publication. | `YYYY-MM-DD` |
| `description` | string | Optional plain-language summary (1–3 sentences). | Free text. |
| `urls` | array | Links to source. | `[{label, href}]` |
| `tags` | array of strings | Cross-cutting topical tags. | Controlled vocabulary, see §4.4. |

### 4.2 Document `type` controlled list

`Legislative print` · `Committee bulletin` · `Senate print` · `Presidential veto` · `Ministerial regulation` · `Ombudsman correspondence` · `Ombudsman report` · `International monitoring (ECRML)` · `International monitoring (FCNM)` · `Binding treaty` · `Soft-law instrument` · `Mainstream media article` · `Regional media article` · `Expert commentary` · `Community petition` · `Local resolution` · `Open letter`.

### 4.3 Document `status` operational definitions

| Status | Operational definition |
|---|---|
| `passed` | Adopted into binding law and in force. |
| `vetoed` | Adopted by parliament but blocked by presidential veto; not in force. |
| `pending` | Awaiting decision at any stage of the legislative or administrative process. |
| `processing` | Specifically: post-veto legislative reconsideration. |
| `ongoing` | Continuously applicable instrument with no endpoint (e.g., constitutional article). |
| `published` | Media or expert content with no legal force; included for evidentiary purposes. |
| `procedural` | Administrative or housekeeping records (committee schedules, voting tallies). |
| `passed_committee` | Cleared committee stage but not yet a chamber vote. |
| `active` | Currently running campaign, petition, or open letter. |
| `historical` | Past event included for diachronic context. |
| `soft_law` | Non-binding international standard. |
| `binding_international` | Binding treaty or convention. |

### 4.4 Tag controlled vocabulary

[FILL IN — extract the actual tag list used in `data/ftm-data.js` and classify into thematic groups (e.g., *recognition*, *education*, *media*, *displacement*, *judicial*). Without a controlled vocabulary, cross-language search will be unreliable.]

### 4.5 FTM-axis assignment rules

The two FTM-derived fields (`level`, `direction`) are the analytically load-bearing classifications. The following decision rules were applied:

**`level` assignment:**
- `MACRO` if the issuing body is a national-level state organ (Sejm, Senate, President, central ministry, Constitutional Tribunal) **or** if the document is a binding international instrument applicable to Poland.
- `MESO` if the issuing body is regional/voivodeship-level government, a national-level NGO or institution acting on a sectoral mandate (e.g., Ombudsman office, public broadcaster), or a Council of Europe monitoring body acting at the level of state evaluation.
- `MICRO` if the issuing body is a local government (gmina, municipal council), a community organisation, an individual community member acting in a representative capacity, or a hyper-local media outlet.

**`direction` assignment:**
- `TOP_DOWN` if the document originates from an institution holding statutory or executive authority over the language community (state, ministry, parliament, supranational body).
- `BOTTOM_UP` if the document originates from the language community itself or its allied advocates without statutory authority (community petitions, NGO open letters, expert advocacy, regional press giving voice to community demands).

**Edge cases:** A media article *about* a top-down event is classified by who originated the underlying action, not by the journalist. A parliamentary print introduced by an MP from the language community's own ranks is `TOP_DOWN` by virtue of the venue, but tagged with `community-MP` to preserve this nuance.

---

## 5. Inter-coder reliability

[FILL IN — this section is critical for the dataset's defensibility. Possible structures:

**Option A (if a second coder is available):**
> A 10% random sample (4 of 41 documents) was independently coded by [SECOND CODER NAME] using the rules in §4.5. Agreement on the `level` field reached [X]% (Cohen's κ = [Y]); on the `direction` field, [X']% (κ = [Y']). Disagreements were resolved through discussion and resulted in [N] revisions to the rules in §4.5 prior to v0.9 release.

**Option B (single-coder, transparent):**
> Coding was performed by a single researcher ([NAME]). To partially mitigate the resulting subjectivity, the rules in §4.5 were drafted *before* coding and were not modified during coding. The full coded dataset is openly available; users wishing to verify or recode are invited to do so. An inter-coder reliability exercise is planned for v1.0 (target: 2026-Q3).

**Recommend Option A wherever possible.** Even informal agreement reporting strengthens the dataset substantially.]

---

## 6. Versioning, sustainability, and reuse

### 6.1 Versioning policy

- **v0.x** — pre-release, methodology under active development.
- **v1.0** — first stable release; will be deposited on Zenodo with a DOI. Schema frozen.
- **v1.x** — additive changes only (new documents, new languages, corrected metadata). No breaking schema changes.
- **v2.0** — schema revision (e.g., addition of a third FTM axis). Will be released only after community consultation.

A `CHANGELOG.md` records every version-to-version change.

### 6.2 Sustainability

- **Active hosting:** GitHub repository at [URL TO BE ASSIGNED].
- **Frozen archival:** Zenodo deposit at version-tagged release; DOI minted per release.
- **Maintainer succession:** [PRIMARY MAINTAINER] and [SECONDARY MAINTAINER] are named in the repository README. In the event both are unavailable, the AMU WP7 contact point ([CONTACT ADDRESS]) takes responsibility.
- **Update commitment:** the dataset will be reviewed and updated at least once annually through 2030, contingent on FOSTERLANG follow-on funding and AMU institutional support.

### 6.3 Licensing

- **Data and methodology document:** CC BY 4.0.
- **Code (web application):** MIT License.
- **Source documents themselves:** remain under their original licences. The repository indexes and links to them but does not redistribute their full text without permission.

### 6.4 Reuse potential

The dataset is designed to support:
1. **Comparative minority-language policy research** — direct cross-language comparison via the consistent FTM coding.
2. **Diachronic studies of recognition cycles** — particularly for the Silesian and Wilamowian cases.
3. **Methodological reuse** — the FTM coding scheme can be applied by other research teams to other language situations; we welcome forks and extensions.
4. **Teaching** — the interactive web application supports classroom use in courses on language policy, minority rights, and East-Central European studies.

### 6.5 Planned v2.0 expansions

Priority candidate languages for v2.0 inclusion, in approximate order of feasibility:
1. Kashubian (statutory regional language since 2005 — well-documented, expanding the recognition-cycle comparison).
2. Lemko, Belarusian, Lithuanian, German (recognised national/ethnic minorities — comparative frame for Silesian's recognition aspiration).
3. Belarusian-of-Poland post-2020 displacement (parallel to Ukrainian case).

---

## 7. Limitations and caveats

The dataset has the following known limitations, which users should consider before drawing conclusions:

1. **Three-language scope.** Generalisations to other Polish minority situations should be made cautiously.
2. **Single jurisdiction.** Findings may not transfer to other European minority-language contexts without controlling for legal-system differences.
3. **Polish-language sourcing bias.** See §3.4.
4. **Single-coder limitation** (pending inter-coder exercise — see §5).
5. **The FTM is one framework among several.** Users seeking integration with other frameworks (Spolsky's three components, Hornberger's continua of biliteracy, language-ecology approaches) should expect to do additional coding work.
6. **Status snapshots are time-stamped, not live.** A document marked `pending` in v0.9 may have been resolved by the time of consultation; users should check the source links.

---

## 8. How to cite

[FILL IN once Zenodo DOI is minted. Suggested template:]

> [Authors] (2026). *FOSTERLANG WP7 Language Policy Repository: Silesian, Wilamowian, and Ukrainian language situations in Poland (2020–2026)*, version 1.0. Adam Mickiewicz University in Poznań / FOSTERLANG. Zenodo. https://doi.org/[DOI]

A `CITATION.cff` file is included in the repository for automated citation handling.

---

## 9. Acknowledgements

[FILL IN — funder acknowledgement (FOSTERLANG / Horizon Europe grant ID), institutional acknowledgements (AMU Faculty of [X]), individual acknowledgements, and partner institution acknowledgement (UiO collaboration if relevant per the October 2025 workshop).]

---

## 10. References

Ferguson, G. (2006). *Language Planning and Education*. Edinburgh University Press.

Kan, V. (2011). *Can language policy outcome be predicted? A matrix approach to language policy analysis using Hong Kong from 1997 to 2010 as a test case*. EdD thesis, The Hong Kong Institute of Education.

Kan, V., & Adamson, B. (2016). [FILL IN — full reference for the 2016 Kan & Adamson paper that the project's framework cites; this is the foundational citation for the matrix and must be exact.]

Tollefson, J. W. (Ed.) (2002). *Language Policies in Education: Critical Issues*. Lawrence Erlbaum Associates.

Wąsikiewicz-Firlej, E. (2021). [FILL IN — full reference for the paper in the Ukrainian/ folder].

[ADDITIONAL REFERENCES — list every secondary source actually cited in this methodology document, including the 2005 Polish Minorities Act, the ECRML, the FCNM, and any Polish-language scholarly works supporting §3 and §4.]

---

## Appendices (to be added in subsequent drafts)

- **Appendix A.** Full document inventory (v0.9), 41 items, with id / label / level / direction / status / date / source.
- **Appendix B.** Glossary of Polish legal terms (Sejm, Senat, druk, weto, rozporządzenie, etc.) for non-Polish-reading users.
- **Appendix C.** Inter-coder reliability protocol and results (pending — see §5).
- **Appendix D.** Decision log: notable edge cases and how they were resolved.

---

*End of v0.1 draft. Comments to: [EMAIL].*
