const UI_LANG_STORAGE_KEY = 'ftm-ui-lang';

const UI_TEXT = {
  en: {
    docTitle: 'Language Policy Repository — FOSTERLANG WP7',
    siteTitle: 'Language Policy Repository',
    headerTeam: 'AMU · Task Leader',
    headerLanguages: 'Silesian & Wilamowian & Ukrainian',
    headerMatrix: 'Ferguson-Tollefson Matrix',
    uiLangAria: 'Interface language',
    viewLabel: 'View',
    viewMatrix: 'Matrix',
    viewList: 'List',
    viewTimeline: 'Timeline',
    searchLabel: 'Search',
    searchPlaceholder: 'Search documents...',
    statsLabel: 'Visible items',
    statTotal: 'Total',
    statSilesian: 'Silesian',
    statWilamowian: 'Wilamowian',
    statUkrainian: 'Ukrainian',
    statShared: 'Shared',
    languageLabel: 'Language',
    languageSilesian: 'Silesian (SZL)',
    languageWilamowian: 'Wilamowian (WYM)',
    languageUkrainian: 'Ukrainian (UKR)',
    languageShared: 'Shared instruments',
    levelLabel: 'FTM Level',
    levelMacro: 'MACRO (EU/state)',
    levelMeso: 'MESO (regional/institutional)',
    levelMicro: 'MICRO (community/individual)',
    directionLabel: 'Direction',
    directionTopDown: 'Top-Down ↓',
    directionBottomUp: 'Bottom-Up ↑',
    statusLabel: 'Status',
    frameworkLabel: 'Framework',
    frameworkBody:
      `<strong style="color:var(--accent)">Ferguson-Tollefson Matrix</strong><br>
       Kan (2011); Kan &amp; Adamson (2016)<br><br>
       Evaluates language policy at <strong>3 levels</strong> × <strong>2 directions</strong>:<br>
       MACRO · MESO · MICRO<br>
       Top-Down · Bottom-Up<br><br>
       <span style="color:var(--text-muted);font-style:italic;">Part of FOSTERLANG WP7 — Effective Multilingualism Policies</span>`,
    bannerBody:
      `<strong>Ferguson-Tollefson Matrix Analysis</strong> — Silesian, Wilamowian &amp; Ukrainian Language Policies, Poland<br>
       Data sources: Sejm, Senat, KPRP, RPO, CoE (FCNM · ECRML), EU law, OSCE soft law, Polish national press 2021–2026.<br>
       <span style="font-size:.72rem;">Click any document card to view full details and access source links. Use sidebar filters to explore the matrix by language, level, direction, or status.</span>`,
    legendSilesian: 'Silesian (SZL)',
    legendWilamowian: 'Wilamowian (WYM)',
    legendUkrainian: 'Ukrainian (UKR)',
    legendShared: 'Shared',
    legendKeyEvent: '★ KEY EVENT',
    noItems: 'No items match filters',
    noItemsCurrent: 'No items match the current filters.',
    tableLabel: 'Label',
    tableLanguage: 'Language',
    tableLevel: 'Level',
    tableDirection: 'Direction',
    tableType: 'Type',
    tableStatus: 'Status',
    tableDate: 'Date',
    timelineShared: 'Shared events (Silesian + Wilamowian)',
    timelineProject: 'FOSTERLANG WP7 — Project Activities',
    modalSources: 'Source documents',
    modalClose: 'Close',
    modalMicroNote:
      'Note: This instrument also operates at the MICRO level, where its provisions are implemented directly in schools and classrooms.',
    langShared: 'Shared',
    langSilesian: 'Silesian',
    langWilamowian: 'Wilamowian',
    langUkrainian: 'Ukrainian',
    badgeShared: 'SHARED',
    statusLabels: {},
  },
  wym: {
    docTitle: 'Archiv d Śpröchpolitik — FOSTERLANG WP7',
    siteTitle: 'Archiv d Śpröchpolitik',
    headerTeam: 'AMU · Task Leader',
    headerLanguages: 'Ślůnski, Wymysiöeryś yn Ukraiński',
    headerMatrix: 'Ferguson-Tollefson Matrix',
    uiLangAria: 'Śpröch d yntyrfejs',
    viewLabel: 'Aojssicht',
    viewMatrix: 'Matrix',
    viewList: 'Lista',
    viewTimeline: 'Timeline',
    searchLabel: 'Zihia',
    searchPlaceholder: 'Zihia dokumenta...',
    statsLabel: 'Sichtboare itema',
    statTotal: 'Total',
    statSilesian: 'Ślůnski',
    statWilamowian: 'Wymysiöeryś',
    statUkrainian: 'Ukraiński',
    statShared: 'Gywynłich',
    languageLabel: 'Śpröch',
    languageSilesian: 'Ślůnski (SZL)',
    languageWilamowian: 'Wymysiöeryś (WYM)',
    languageUkrainian: 'Ukraiński (UKR)',
    languageShared: 'Gywynłiche instrumenta',
    levelLabel: 'Niveau FTM',
    levelMacro: 'MACRO (EU/końtry)',
    levelMeso: 'MESO (regional/institucjonal)',
    levelMicro: 'MICRO (gymyjn/yndywidual)',
    directionLabel: 'Richtung',
    directionTopDown: 'Top-Down ↓',
    directionBottomUp: 'Bottom-Up ↑',
    statusLabel: 'Status',
    frameworkLabel: 'Framework',
    frameworkBody:
      `<strong style="color:var(--accent)">Ferguson-Tollefson Matrix</strong><br>
       Kan (2011); Kan &amp; Adamson (2016)<br><br>
       Analizyrt śpröchpolitik uf <strong>3 niwōa</strong> × <strong>2 richtunga</strong>:<br>
       MACRO · MESO · MICRO<br>
       Top-Down · Bottom-Up<br><br>
       <span style="color:var(--text-muted);font-style:italic;">To je część FOSTERLANG WP7 — Effective Multilingualism Policies</span>`,
    bannerBody:
      `<strong>Analiza d Ferguson-Tollefson Matrix</strong> — śpröchpolitika fu Ślůnski, Wymysiöeryś yn Ukraiński, Polska<br>
       Kwaoła: Sejm, Senat, KPRP, RPO, CoE (FCNM · ECRML), EU law, OSCE soft law, polnische press 2021–2026.<br>
       <span style="font-size:.72rem;">Klik uf dokument-karta, u zyjn detale yn kwaoła. Nüz filtrow, u obejrzyć matrix bez śpröch, niveau, richtung abo status.</span>`,
    legendSilesian: 'Ślůnski (SZL)',
    legendWilamowian: 'Wymysiöeryś (WYM)',
    legendUkrainian: 'Ukraiński (UKR)',
    legendShared: 'Gywynłich',
    legendKeyEvent: '★ KEY GYŠICHT',
    noItems: 'No itema pasyn do filtrów',
    noItemsCurrent: 'No itema pasyn do aktyw filtrów.',
    tableLabel: 'Label',
    tableLanguage: 'Śpröch',
    tableLevel: 'Niveau',
    tableDirection: 'Richtung',
    tableType: 'Typ',
    tableStatus: 'Status',
    tableDate: 'Dato',
    timelineShared: 'Gywynłiche gyšichta (Ślůnski + Wymysiöeryś)',
    timelineProject: 'FOSTERLANG WP7 — Projekt-aktywiteta',
    modalSources: 'Kwaoł dokumenta',
    modalClose: 'Zamknij',
    modalMicroNote:
      'Nołt: Yś instrument działt tyż na MICRO-niwō, kaj śyn przepisa realizieryn bezpośrednio w szkołach yn klasach.',
    langShared: 'Gywynłich',
    langSilesian: 'Ślůnski',
    langWilamowian: 'Wymysiöeryś',
    langUkrainian: 'Ukraiński',
    badgeShared: 'GYW.',
    statusLabels: {
      soft_law: 'Łynt racht',
      active: 'Aktiv',
      historical: 'Historyś',
    },
  },
};

const state = {
  view: 'matrix',
  uiLang: localStorage.getItem(UI_LANG_STORAGE_KEY) === 'wym' ? 'wym' : 'en',
  filters: {
    language: 'all',
    level: 'all',
    direction: 'all',
    status: 'all',
  },
  search: '',
  activeCard: null,
};

function t(key) {
  return UI_TEXT[state.uiLang]?.[key] ?? UI_TEXT.en[key] ?? key;
}

function getStatusStyle(status) {
  const base = FTM_DATA.meta.statusLabels[status];
  if (!base) return { label: status, color: '#6b7280' };
  return {
    ...base,
    label: UI_TEXT[state.uiLang].statusLabels?.[status] || base.label,
  };
}

function getLanguageLabel(lang) {
  if (lang === 'shared') return t('langShared');
  if (lang === 'szl') return t('langSilesian');
  if (lang === 'wym') return t('langWilamowian');
  if (lang === 'ukr') return t('langUkrainian');
  return lang;
}

function getBadgeLabel(lang) {
  return lang === 'shared' ? t('badgeShared') : lang.toUpperCase();
}

function getDirectionLabel(direction) {
  return direction === 'TOP_DOWN' ? t('directionTopDown') : t('directionBottomUp');
}

function getAllItems() {
  const items = [];
  FTM_DATA.shared.forEach(item => items.push({ ...item, _lang: 'shared' }));
  FTM_DATA.silesian.items.forEach(item => items.push({ ...item, _lang: 'szl' }));
  FTM_DATA.wilamowian.items.forEach(item => items.push({ ...item, _lang: 'wym' }));
  FTM_DATA.ukrainian.items.forEach(item => items.push({ ...item, _lang: 'ukr' }));
  return items;
}

function applyFilters(items) {
  return items.filter(item => {
    if (state.filters.language !== 'all') {
      if (state.filters.language === 'shared') {
        if (item._lang !== 'shared') return false;
      } else if (item._lang === 'shared') {
        if (!item.languages || !item.languages.includes(state.filters.language)) return false;
      } else if (item._lang !== state.filters.language) {
        return false;
      }
    }

    if (state.filters.level !== 'all' && item.level !== state.filters.level) return false;
    if (state.filters.direction !== 'all' && item.direction !== state.filters.direction) return false;
    if (state.filters.status !== 'all' && item.status !== state.filters.status) return false;

    if (state.search) {
      const q = state.search.toLowerCase();
      const searchable = [
        item.label,
        item.labelEN,
        item.type,
        item.description,
        getLanguageLabel(item._lang),
      ].filter(Boolean).join(' ').toLowerCase();

      if (!searchable.includes(q)) return false;
    }

    return true;
  });
}

function setPillLabel(filter, value, text, color) {
  const pill = document.querySelector(`.filter-pill[data-filter="${filter}"][data-value="${value}"]`);
  if (!pill) return;
  pill.innerHTML = `<span class="dot" style="background:${color}"></span>${text}`;
}

function ensureLanguageToggle() {
  if (document.getElementById('ui-lang-toggle')) return;

  const header = document.querySelector('.site-header');
  const firstMeta = header.querySelector('.meta-tag');
  const toggle = makeEl('div', { className: 'ui-lang-toggle', id: 'ui-lang-toggle' });
  toggle.setAttribute('role', 'group');

  [
    { code: 'en', label: 'EN' },
    { code: 'wym', label: 'WYM' },
  ].forEach(({ code, label }) => {
    const btn = makeEl('button', { className: 'ui-lang-btn', type: 'button' });
    btn.dataset.uiLang = code;
    btn.textContent = label;
    btn.addEventListener('click', () => {
      state.uiLang = code;
      localStorage.setItem(UI_LANG_STORAGE_KEY, code);
      updateStaticText();
      render();
      renderProjectTimeline();
    });
    toggle.appendChild(btn);
  });

  header.insertBefore(toggle, firstMeta || null);
}

function updateLanguageToggle() {
  const toggle = document.getElementById('ui-lang-toggle');
  if (!toggle) return;
  toggle.setAttribute('aria-label', t('uiLangAria'));
  toggle.querySelectorAll('.ui-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.uiLang === state.uiLang);
  });
}

function updateStaticText() {
  document.documentElement.lang = state.uiLang === 'wym' ? 'wym' : 'en';
  document.title = t('docTitle');

  const title = document.querySelector('.site-header h1');
  if (title) title.textContent = t('siteTitle');

  const metaTags = document.querySelectorAll('.site-header .meta-tag');
  if (metaTags[0]) metaTags[0].textContent = t('headerTeam');
  if (metaTags[1]) metaTags[1].textContent = t('headerLanguages');
  if (metaTags[2]) metaTags[2].textContent = t('headerMatrix');

  const sidebarLabels = document.querySelectorAll('.sidebar .sidebar-label');
  if (sidebarLabels[0]) sidebarLabels[0].textContent = t('viewLabel');
  if (sidebarLabels[1]) sidebarLabels[1].textContent = t('searchLabel');
  if (sidebarLabels[2]) sidebarLabels[2].textContent = t('statsLabel');
  if (sidebarLabels[3]) sidebarLabels[3].textContent = t('languageLabel');
  if (sidebarLabels[4]) sidebarLabels[4].textContent = t('levelLabel');
  if (sidebarLabels[5]) sidebarLabels[5].textContent = t('directionLabel');
  if (sidebarLabels[6]) sidebarLabels[6].textContent = t('statusLabel');
  if (sidebarLabels[7]) sidebarLabels[7].textContent = t('frameworkLabel');

  document.querySelector('[data-view="matrix"]').textContent = t('viewMatrix');
  document.querySelector('[data-view="list"]').textContent = t('viewList');
  document.querySelector('[data-view="timeline"]').textContent = t('viewTimeline');

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.placeholder = t('searchPlaceholder');

  document.querySelector('#stat-total + .lbl').textContent = t('statTotal');
  document.querySelector('#stat-szl + .lbl').textContent = t('statSilesian');
  document.querySelector('#stat-wym + .lbl').textContent = t('statWilamowian');
  document.querySelector('#stat-ukr + .lbl').textContent = t('statUkrainian');
  document.querySelector('#stat-shared + .lbl').textContent = t('statShared');

  setPillLabel('language', 'szl', t('languageSilesian'), 'var(--szl)');
  setPillLabel('language', 'wym', t('languageWilamowian'), 'var(--wym)');
  setPillLabel('language', 'ukr', t('languageUkrainian'), 'var(--ukr)');
  setPillLabel('language', 'shared', t('languageShared'), 'var(--shared)');

  setPillLabel('level', 'MACRO', t('levelMacro'), '#f59e0b');
  setPillLabel('level', 'MESO', t('levelMeso'), '#06b6d4');
  setPillLabel('level', 'MICRO', t('levelMicro'), '#ec4899');

  setPillLabel('direction', 'TOP_DOWN', t('directionTopDown'), '#ef4444');
  setPillLabel('direction', 'BOTTOM_UP', t('directionBottomUp'), '#22c55e');

  setPillLabel('status', 'vetoed', getStatusStyle('vetoed').label, '#ef4444');
  setPillLabel('status', 'pending', getStatusStyle('pending').label, '#f97316');
  setPillLabel('status', 'passed', getStatusStyle('passed').label, '#22c55e');
  setPillLabel('status', 'binding_international', getStatusStyle('binding_international').label, '#10b981');
  setPillLabel('status', 'soft_law', getStatusStyle('soft_law').label, '#a78bfa');
  setPillLabel('status', 'processing', getStatusStyle('processing').label, '#eab308');
  setPillLabel('status', 'ongoing', getStatusStyle('ongoing').label, '#3b82f6');
  setPillLabel('status', 'published', getStatusStyle('published').label, '#8b5cf6');

  const frameworkBox = document.querySelector('.sidebar section:last-child > div');
  if (frameworkBox) frameworkBox.innerHTML = t('frameworkBody');

  const banner = document.querySelector('.framework-banner > div');
  if (banner) banner.innerHTML = t('bannerBody');

  const legend = document.querySelector('.legend');
  if (legend) {
    legend.innerHTML = `
      <span class="legend-item"><span class="legend-dot" style="background:var(--szl)"></span>${t('legendSilesian')}</span>
      <span class="legend-item"><span class="legend-dot" style="background:var(--wym)"></span>${t('legendWilamowian')}</span>
      <span class="legend-item"><span class="legend-dot" style="background:var(--ukr)"></span>${t('legendUkrainian')}</span>
      <span class="legend-item"><span class="legend-dot" style="background:var(--shared)"></span>${t('legendShared')}</span>
      <span class="legend-divider">|</span>
      <span class="legend-item"><span class="legend-dot" style="background:#dc2626"></span>${getStatusStyle('vetoed').label}</span>
      <span class="legend-item"><span class="legend-dot" style="background:#15803d"></span>${getStatusStyle('passed').label}</span>
      <span class="legend-item"><span class="legend-dot" style="background:#d97706"></span>${getStatusStyle('pending').label}</span>
      <span class="legend-item"><span class="legend-dot" style="background:#0f766e"></span>${getStatusStyle('binding_international').label}</span>
      <span class="legend-item"><span class="legend-dot" style="background:#7c3aed"></span>${getStatusStyle('soft_law').label}</span>
      <span class="legend-divider">|</span>
      <span class="legend-item" style="font-weight:600;color:#d97706;background:#fef3c7;padding:2px 7px;border-radius:4px;border:1px solid #fcd34d;font-size:.65rem;">${t('legendKeyEvent')}</span>`;
  }

  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalCloseBtn) modalCloseBtn.setAttribute('aria-label', t('modalClose'));

  updateLanguageToggle();
}

function renderMatrix() {
  const container = document.getElementById('matrix-container');
  container.innerHTML = '';

  const filtered = applyFilters(getAllItems());
  const levels = ['MACRO', 'MESO', 'MICRO'];
  const directions = ['TOP_DOWN', 'BOTTOM_UP'];

  container.appendChild(makeEl('div', { className: 'axis-label' }));

  directions.forEach(dir => {
    const el = makeEl('div', {
      className: `col-header ${dir === 'TOP_DOWN' ? 'top-down' : 'bottom-up'}`,
    });
    const arrow = dir === 'TOP_DOWN' ? '↓' : '↑';
    const text = dir === 'TOP_DOWN'
      ? t('directionTopDown').replace(' ↓', '')
      : t('directionBottomUp').replace(' ↑', '');
    el.innerHTML = `<span>${arrow}</span><span>${text}</span>`;
    container.appendChild(el);
  });

  levels.forEach(level => {
    const rowHeader = makeEl('div', { className: 'row-header' });
    rowHeader.textContent = level;
    container.appendChild(rowHeader);

    directions.forEach(dir => {
      const cell = makeEl('div', {
        className: `matrix-cell col-${dir === 'TOP_DOWN' ? 'top-down' : 'bottom-up'}`,
      });

      const cellItems = filtered.filter(item => item.level === level && item.direction === dir);

      if (cellItems.length === 0) {
        const empty = makeEl('div', { className: 'cell-empty' });
        empty.textContent = t('noItems');
        cell.appendChild(empty);
      } else {
        cellItems.forEach(item => cell.appendChild(makeDocCard(item)));
      }

      container.appendChild(cell);
    });
  });
}

function makeDocCard(item) {
  const card = makeEl('div', { className: `doc-card lang-${item._lang}` });

  if (item.significance) {
    const flag = makeEl('div', { className: 'significance-flag' });
    flag.textContent = item.significance;
    card.appendChild(flag);
  }

  const header = makeEl('div', { className: 'card-header' });
  const label = makeEl('div', { className: 'card-label' });
  label.textContent = item.label;
  header.appendChild(label);

  const badge = makeEl('span', { className: `lang-badge ${item._lang}` });
  badge.textContent = getBadgeLabel(item._lang);
  header.appendChild(badge);
  card.appendChild(header);

  const type = makeEl('div', { className: 'card-type' });
  type.textContent = item.type;
  card.appendChild(type);

  const footer = makeEl('div', { className: 'card-footer' });
  const st = getStatusStyle(item.status);
  const statusEl = makeEl('span', {
    className: 'status-badge',
    style: `background:${st.color}22; color:${st.color};`,
  });
  statusEl.textContent = st.label;
  footer.appendChild(statusEl);

  if (item.date) {
    const dateEl = makeEl('span', { className: 'card-date' });
    dateEl.textContent = item.date;
    footer.appendChild(dateEl);
  }

  if (item.bidirectional) {
    const biFlag = makeEl('span', { className: 'bidirectional-flag' });
    biFlag.textContent = '⇅ bidirectional';
    footer.appendChild(biFlag);
  }

  card.appendChild(footer);
  card.addEventListener('click', () => openModal(item));
  return card;
}

function renderList() {
  const container = document.getElementById('list-container');
  const filtered = applyFilters(getAllItems());

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state">${t('noItemsCurrent')}</div>`;
    return;
  }

  const table = makeEl('table', { className: 'list-table' });
  const thead = makeEl('thead');
  thead.innerHTML = `
    <tr>
      <th>${t('tableLabel')}</th>
      <th>${t('tableLanguage')}</th>
      <th>${t('tableLevel')}</th>
      <th>${t('tableDirection')}</th>
      <th>${t('tableType')}</th>
      <th>${t('tableStatus')}</th>
      <th>${t('tableDate')}</th>
    </tr>`;
  table.appendChild(thead);

  const tbody = makeEl('tbody');
  filtered.forEach(item => {
    const tr = makeEl('tr');
    tr.style.cursor = 'pointer';
    tr.addEventListener('click', () => openModal(item));

    const st = getStatusStyle(item.status);
    tr.innerHTML = `
      <td style="font-weight:600;">${item.label}</td>
      <td><span class="lang-badge ${item._lang}">${getBadgeLabel(item._lang)}</span></td>
      <td>${item.level}</td>
      <td style="color:${item.direction === 'TOP_DOWN' ? '#fca5a5' : '#86efac'};font-size:.75rem;">${getDirectionLabel(item.direction).replace(' ↓', '').replace(' ↑', '')}</td>
      <td style="color:var(--text-muted);">${item.type}</td>
      <td><span class="status-badge" style="background:${st.color}22;color:${st.color};">${st.label}</span></td>
      <td style="font-family:monospace;color:var(--text-muted);">${item.date || '—'}</td>`;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  container.innerHTML = '';
  container.appendChild(table);
}

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  container.innerHTML = '';

  const langs = [
    { key: 'szl', label: `${t('langSilesian')} (SZL)`, color: 'var(--szl)', data: FTM_DATA.silesian.timeline },
    { key: 'wym', label: `${t('langWilamowian')} (WYM)`, color: 'var(--wym)', data: FTM_DATA.wilamowian.timeline },
    { key: 'ukr', label: `${t('langUkrainian')} (UKR)`, color: 'var(--ukr)', data: FTM_DATA.ukrainian.timeline },
  ];

  const sharedTimeline = [
    { date: '2021-01-29', event: 'RPO: list do Premiera (Ślązacy i Wilamowianie)', status: 'historical' },
    { date: '2021-03-08', event: 'MSWiA: odpowiedź na RPO', status: 'institutional_response' },
    { date: '2023-01-01', event: 'RPO: Raport dot. mniejszości 2020–2022', status: 'published' },
  ];

  const sharedSection = makeEl('div', { className: 'timeline-section' });
  const sharedTitle = makeEl('div', { className: 'timeline-section-title' });
  sharedTitle.innerHTML = `<span style="color:var(--shared)">●</span> ${t('timelineShared')}`;
  sharedSection.appendChild(sharedTitle);
  sharedSection.appendChild(buildTimeline(sharedTimeline, 'var(--shared)'));
  container.appendChild(sharedSection);

  langs.forEach(lang => {
    if (state.filters.language !== 'all' && state.filters.language !== lang.key) return;

    const section = makeEl('div', { className: 'timeline-section' });
    const title = makeEl('div', { className: 'timeline-section-title' });
    title.innerHTML = `<span style="color:${lang.color}">●</span> ${lang.label}`;
    section.appendChild(title);
    section.appendChild(buildTimeline(lang.data, lang.color));
    container.appendChild(section);
  });
}

function buildTimeline(events, color) {
  const tl = makeEl('div', { className: 'timeline' });

  events.forEach(ev => {
    const item = makeEl('div', { className: 'timeline-item' });
    item.style.cssText += `--dot-bg:${color};`;
    item.setAttribute('data-color', color);

    const dateEl = makeEl('div', { className: 'timeline-date' });
    dateEl.textContent = ev.date;

    const eventEl = makeEl('div', { className: 'timeline-event' });
    eventEl.textContent = ev.event;

    const st = getStatusStyle(ev.status);
    const badge = makeEl('span', {
      className: 'status-badge',
      style: `background:${st.color}22;color:${st.color};margin-top:3px;display:inline-flex;`,
    });
    badge.textContent = st.label;

    item.appendChild(dateEl);
    item.appendChild(eventEl);
    item.appendChild(badge);
    tl.appendChild(item);
  });

  return tl;
}

function applyTimelineDots() {
  document.querySelectorAll('.timeline-item').forEach(el => {
    const color = el.getAttribute('data-color') || 'var(--border)';
    el.style.setProperty('--dot-color', color);
  });
}

function openModal(item) {
  state.activeCard = item;
  document.getElementById('modal-title').textContent = item.label;

  const metaEl = document.getElementById('modal-meta');
  const st = getStatusStyle(item.status);
  const chips = [
    { label: getLanguageLabel(item._lang), extra: `lang-badge ${item._lang}` },
    { label: item.level, extra: '' },
    { label: item.direction.replace('_', '-'), extra: '' },
    { label: item.type, extra: '' },
    { label: st.label, extra: '', style: `background:${st.color}22;color:${st.color};border-color:${st.color}44;` },
    item.date ? { label: item.date, extra: '', mono: true } : null,
  ].filter(Boolean);

  metaEl.innerHTML = chips.map(chip =>
    chip.extra?.startsWith('lang-badge')
      ? `<span class="${chip.extra}">${chip.label}</span>`
      : `<span class="meta-chip" style="${chip.style || ''}${chip.mono ? 'font-family:monospace;' : ''}">${chip.label}</span>`
  ).join('');

  const labelEnEl = document.getElementById('modal-label-en');
  labelEnEl.textContent = item.labelEN || '';
  labelEnEl.style.display = item.labelEN ? '' : 'none';

  const descEl = document.getElementById('modal-description');
  descEl.textContent = item.description || '';
  descEl.style.display = item.description ? '' : 'none';

  const noteEl = document.getElementById('modal-note');
  if (item.note) {
    noteEl.textContent = item.note;
    noteEl.style.display = '';
  } else if (item.microImplementation) {
    noteEl.textContent = t('modalMicroNote');
    noteEl.style.display = '';
  } else {
    noteEl.style.display = 'none';
  }

  const allUrls = [];
  if (Array.isArray(item.urls)) {
    allUrls.push(...item.urls);
  } else if (item.urls && typeof item.urls === 'object') {
    Object.entries(item.urls).forEach(([label, href]) => allUrls.push({ label, href }));
  } else if (item.url) {
    allUrls.push({ label: 'Link', href: item.url });
  }

  if (item.rounds) item.rounds.forEach(r => allUrls.push({ label: `Runda ${r.round} (${r.year})`, href: r.url }));
  if (item.cycles) item.cycles.forEach(c => allUrls.push({ label: `Cykl ${c.cycle} – ACFC Opinion (${c.year})`, href: c.opinionUrl }));
  if (item.amendments) item.amendments.forEach(a => allUrls.push({ label: `Zmiana ${a.date}`, href: a.url }));

  const linksEl = document.getElementById('modal-links');
  if (allUrls.length > 0) {
    linksEl.innerHTML = `<div class="modal-links-label">${t('modalSources')}</div>
      <div class="modal-links">
        ${allUrls.map(url => `<a class="modal-link" href="${url.href}" target="_blank" rel="noopener">${url.label}</a>`).join('')}
      </div>`;
    linksEl.style.display = '';
  } else {
    linksEl.style.display = 'none';
  }

  document.getElementById('modal-backdrop').classList.add('open');
}

function closeModal() {
  state.activeCard = null;
  document.getElementById('modal-backdrop').classList.remove('open');
}

function updateStats() {
  const filtered = applyFilters(getAllItems());
  document.getElementById('stat-total').textContent = filtered.length;
  document.getElementById('stat-szl').textContent = filtered.filter(item => item._lang === 'szl').length;
  document.getElementById('stat-wym').textContent = filtered.filter(item => item._lang === 'wym').length;
  document.getElementById('stat-ukr').textContent = filtered.filter(item => item._lang === 'ukr').length;
  document.getElementById('stat-shared').textContent = filtered.filter(item => item._lang === 'shared').length;
}

function render() {
  updateStats();

  document.getElementById('matrix-view').style.display = state.view === 'matrix' ? 'block' : 'none';
  document.getElementById('list-view').style.display = state.view === 'list' ? 'block' : 'none';
  document.getElementById('timeline-view').style.display = state.view === 'timeline' ? 'block' : 'none';

  if (state.view === 'matrix') renderMatrix();
  if (state.view === 'list') renderList();
  if (state.view === 'timeline') {
    renderTimeline();
    setTimeout(applyTimelineDots, 0);
  }

  document.querySelectorAll('.filter-pill').forEach(pill => {
    const filter = pill.dataset.filter;
    const value = pill.dataset.value;
    pill.classList.toggle('active', state.filters[filter] === value);
  });

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === state.view);
  });

  if (state.activeCard) {
    openModal(state.activeCard);
  }
}

function initEventHandlers() {
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.view = btn.dataset.view;
      render();
    });
  });

  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.dataset.filter;
      const value = pill.dataset.value;
      state.filters[filter] = state.filters[filter] === value ? 'all' : value;
      render();
    });
  });

  document.getElementById('search-input').addEventListener('input', event => {
    state.search = event.target.value.trim();
    render();
  });

  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', event => {
    if (event.target === document.getElementById('modal-backdrop')) closeModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });
}

function makeEl(tag, props = {}) {
  const el = document.createElement(tag);
  Object.entries(props).forEach(([key, value]) => {
    if (key === 'className') el.className = value;
    else if (key === 'style') el.style.cssText = value;
    else el[key] = value;
  });
  return el;
}

function renderProjectTimeline() {
  const container = document.getElementById('project-timeline-container');
  if (!container || !FTM_DATA.projectTimeline) return;
  container.innerHTML = '';

  const typeLabels = {
    conference: 'Conference',
    meeting: 'Meeting',
    workshop: 'Workshop',
    interviews: 'Interviews',
    fieldwork: 'Fieldwork',
  };

  FTM_DATA.projectTimeline.forEach(ev => {
    const item = makeEl('div', { className: 'pt-item' });

    const dateEl = makeEl('div', { className: 'pt-item-date' });
    let dateStr = ev.date;
    if (ev.dateEnd) dateStr += ' — ' + ev.dateEnd;
    dateStr = dateStr.replace(/-/g, '.');

    const dateText = document.createTextNode(dateStr + ' ');
    dateEl.appendChild(dateText);

    if (ev.type && typeLabels[ev.type]) {
      const typeBadge = makeEl('span', { className: 'pt-item-type' });
      typeBadge.setAttribute('data-type', ev.type);
      typeBadge.textContent = typeLabels[ev.type];
      dateEl.appendChild(typeBadge);
    }
    item.appendChild(dateEl);

    const textEl = makeEl('div', { className: 'pt-item-text' });
    const eventText = state.uiLang === 'wym' && ev.eventWYM ? ev.eventWYM : ev.event;
    textEl.textContent = eventText;
    item.appendChild(textEl);

    container.appendChild(item);
  });

  // Update header text for WYM toggle
  const title = document.getElementById('project-timeline-title');
  const subtitle = document.getElementById('project-timeline-subtitle');
  if (title) title.textContent = t('timelineProject');
  if (subtitle) subtitle.textContent = state.uiLang === 'wym'
    ? 'Aojsgewöłte aktywiteta fu Arbajts-paket 7: Effective Multilingualism Policies'
    : 'Selected activities timeline for Work Package 7: Effective Multilingualism Policies';
}

document.addEventListener('DOMContentLoaded', () => {
  ensureLanguageToggle();
  updateStaticText();
  initEventHandlers();
  render();
  renderProjectTimeline();
});
