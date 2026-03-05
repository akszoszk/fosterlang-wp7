# FOSTERLANG WP7 — Language Policy Repository
## Instructions & Project Notes

**Project:** Interactive FTM (Ferguson-Tollefson Matrix) repository for Silesian & Wilamowian language policies
**Team:** AMU (Poznań) — Task Leader
**Framework:** Kan (2011); Kan & Adamson (2016)

---

## Project Location

All site files are in:
```
C:\Users\lszos\Desktop\Claude_co_work\.claude\worktrees\priceless-hoover\
```

Source data files (markdown bibliographies) are in:
```
C:\Users\lszos\Desktop\Claude_co_work\.claude\worktrees\priceless-hoover\data\
```

Original source documents (DOCX/PDF) remain in:
```
C:\Users\lszos\Desktop\Claude_co_work\
```

---

## File Structure

```
priceless-hoover/
├── index.html                          ← main site (open this in browser)
├── css/
│   └── styles.css                      ← FOSTERLANG light theme (#1c5599 blue)
├── js/
│   └── app.js                          ← matrix / list / timeline logic
├── data/
│   ├── ftm-data.js                     ← all 41 documents mapped to FTM cells
│   ├── silesian-wilamowian-sources.md  ← Silesian & Wilamowian bibliography
│   └── legal-framework-poland.md       ← legal framework (domestic + international)
└── .claude/
    └── launch.json                     ← local server config (port 3131)
```

---

## How to Run Locally

1. Open a terminal (Command Prompt or PowerShell)
2. Navigate to the project folder:
   ```
   cd C:\Users\lszos\Desktop\Claude_co_work\.claude\worktrees\priceless-hoover
   ```
3. Start the server:
   ```
   python -m http.server 3131
   ```
4. Open your browser and go to:
   ```
   http://localhost:3131
   ```
5. To stop the server: press `Ctrl+C` in the terminal

> **Tip:** You can also just open `index.html` directly in Chrome by double-clicking it — no server needed for basic viewing.

---

## How to Continue Working with Claude Code

1. Open Claude Code (`claude` command in terminal, or via IDE)
2. Set working directory to the worktree:
   ```
   C:\Users\lszos\Desktop\Claude_co_work\.claude\worktrees\priceless-hoover
   ```
3. The server can be started automatically via the launch config — Claude Code will recognise `.claude/launch.json`

---

## How to Publish to GitHub Pages

### Step 1 — Create a GitHub repository
- Go to https://github.com/new
- Create a new **public** repository (e.g. `fosterlang-wp7`)

### Step 2 — Push the project
Open a terminal in the project folder and run:
```bash
git remote add origin https://github.com/YOUR-USERNAME/fosterlang-wp7.git
git push -u origin claude/priceless-hoover
```

### Step 3 — Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - Branch: `claude/priceless-hoover`
   - Folder: `/ (root)`
4. Click **Save**

### Step 4 — Access the live site
After ~2 minutes your site will be live at:
```
https://YOUR-USERNAME.github.io/fosterlang-wp7/
```

---

## How to Add More Documents

All data is in `data/ftm-data.js`. Each document follows this structure:

```javascript
{
  id: "unique_id",
  label: "Display name (Polish)",
  labelEN: "Display name (English)",
  level: "MACRO",          // MACRO | MESO | MICRO
  direction: "TOP_DOWN",   // TOP_DOWN | BOTTOM_UP
  type: "Legislative print",
  status: "passed",        // see status list below
  date: "2024-05-29",
  description: "Optional longer description.",
  urls: [
    { label: "Link text", href: "https://..." }
  ],
  tags: ["tag1", "tag2"]
}
```

**Available status values:**
| Status | Meaning |
|--------|---------|
| `passed` | Passed into law |
| `vetoed` | Blocked by presidential veto |
| `pending` | Awaiting decision |
| `processing` | Post-veto legislative processing |
| `ongoing` | Continuously applicable |
| `published` | Media article / report published |
| `procedural` | Procedural/administrative record |
| `passed_committee` | Passed at committee stage |
| `active` | Currently active campaign/letter |
| `historical` | Past event for reference |
| `soft_law` | Non-binding international standard |
| `binding_international` | Binding treaty/convention |

---

## What's Already in the Repository (41 items)

### Shared instruments (apply to both languages)
- Konstytucja RP Art. 35 (1997)
- Ustawa z 6 stycznia 2005 r. o mniejszościach
- Rozporządzenie MEN 2017 (zm. 2024, 2025)
- ECRML — 4 rundy monitoringu (2010–2023)
- FCNM — 5 cykli monitoringu
- Karta Praw Podstawowych UE
- OBWE Hague Recommendations (1996)
- OBWE Oslo Recommendations (1998)
- ONZ Deklaracja Praw Mniejszości (1992)
- RPO — list do Premiera (29.01.2021)
- RPO — Raport dot. mniejszości 2020–2022

### Silesian (SZL) — 17 items
Sejm druki 233, 289, 1346 · Committee bulletins · Senate druki 81/81A/81Z/598 · Weto Dudy (29.05.2024) · Weto Nawrockiego (sygnał, luty 2026) · TVP Katowice · Dziennik Zachodni · Ślązag · PAP · National media · Klub Jagielloński · Polityka · Kohut MEP letter · Katowice councillors

### Wilamowian (WYM) — 13 items
Sejm druk 321 · Posiedzenie 40 stenogram · Committee IX · Senate druk 081 · Weto Nawrockiego (październik 2025) · Sejm druki 1553/1848 · MSWiA response · National media (TVN24, Bankier, Onet, WP, Wyborcza) · TVP3 Katowice · Expert media (Prof. Olko, O-jezyku.pl) · Polskie Radio 24 · DGP · Community petition (Wilamowice)

---

## Git Information

- **Branch:** `claude/priceless-hoover`
- **Main repo:** `C:\Users\lszos\Desktop\Claude_co_work`
- **Initial commit:** `af9cbf1`

To check status:
```bash
cd C:\Users\lszos\Desktop\Claude_co_work\.claude\worktrees\priceless-hoover
git log --oneline
git status
```

---

## Colors (FOSTERLANG Brand)

| Variable | Hex | Usage |
|----------|-----|-------|
| `--blue-dark` | `#1c5599` | Header, buttons, row headers — FOSTERLANG top-bar blue |
| `--blue-mid` | `#0693e3` | Hover states, borders — FOSTERLANG vivid blue |
| `--blue-navy` | `#01012f` | Deep navy accent |
| `--szl` | `#1c5599` | Silesian card accent |
| `--wym` | `#7c3aed` | Wilamowian card accent |
| `--shared` | `#0f766e` | Shared instruments accent |

---

*Last updated: March 2026 | FOSTERLANG WP7 | AMU Poznań*
