// ─── State ───────────────────────────────────────────────────────────────────

const state = {
  view: 'matrix',         // 'matrix' | 'list' | 'timeline'
  filters: {
    language: 'all',      // 'all' | 'szl' | 'wym' | 'shared'
    level: 'all',         // 'all' | 'MACRO' | 'MESO' | 'MICRO'
    direction: 'all',     // 'all' | 'TOP_DOWN' | 'BOTTOM_UP'
    status: 'all',        // 'all' | any status key
  },
  search: '',
  activeCard: null,
};

// ─── Data helpers ─────────────────────────────────────────────────────────────

function getAllItems() {
  const items = [];

  // Shared instruments
  FTM_DATA.shared.forEach(item => {
    items.push({ ...item, _lang: 'shared', _langLabel: 'Shared' });
  });

  // Silesian items
  FTM_DATA.silesian.items.forEach(item => {
    items.push({ ...item, _lang: 'szl', _langLabel: 'Silesian' });
  });

  // Wilamowian items
  FTM_DATA.wilamowian.items.forEach(item => {
    items.push({ ...item, _lang: 'wym', _langLabel: 'Wilamowian' });
  });

  return items;
}

function applyFilters(items) {
  return items.filter(item => {
    // Language filter
    if (state.filters.language !== 'all') {
      if (state.filters.language === 'shared') {
        if (item._lang !== 'shared') return false;
      } else {
        // For szl/wym, include shared items that mention that language
        if (item._lang === 'shared') {
          if (!item.languages || !item.languages.includes(state.filters.language)) return false;
        } else {
          if (item._lang !== state.filters.language) return false;
        }
      }
    }

    if (state.filters.level !== 'all' && item.level !== state.filters.level) return false;
    if (state.filters.direction !== 'all' && item.direction !== state.filters.direction) return false;
    if (state.filters.status !== 'all' && item.status !== state.filters.status) return false;

    if (state.search) {
      const q = state.search.toLowerCase();
      const searchable = [item.label, item.labelEN, item.type, item.description, item._langLabel]
        .filter(Boolean).join(' ').toLowerCase();
      if (!searchable.includes(q)) return false;
    }

    return true;
  });
}

function getStatusStyle(status) {
  const s = FTM_DATA.meta.statusLabels[status];
  if (!s) return { label: status, color: '#6b7280' };
  return s;
}

// ─── Render: Matrix ───────────────────────────────────────────────────────────

function renderMatrix() {
  const container = document.getElementById('matrix-container');
  container.innerHTML = '';

  const allItems = getAllItems();
  const filtered = applyFilters(allItems);

  const levels = ['MACRO', 'MESO', 'MICRO'];
  const directions = ['TOP_DOWN', 'BOTTOM_UP'];

  // Column headers
  container.appendChild(makeEl('div', { className: 'axis-label' }));

  directions.forEach(dir => {
    const el = makeEl('div', { className: `col-header ${dir === 'TOP_DOWN' ? 'top-down' : 'bottom-up'}` });
    const arrow = dir === 'TOP_DOWN' ? '↓' : '↑';
    el.innerHTML = `<span>${arrow}</span><span>${dir === 'TOP_DOWN' ? 'Top-Down' : 'Bottom-Up'}</span>`;
    container.appendChild(el);
  });

  // Rows
  levels.forEach(level => {
    const rowHeader = makeEl('div', { className: 'row-header' });
    rowHeader.textContent = level;
    container.appendChild(rowHeader);

    directions.forEach(dir => {
      const cell = makeEl('div', {
        className: `matrix-cell col-${dir === 'TOP_DOWN' ? 'top-down' : 'bottom-up'}`
      });

      const cellItems = filtered.filter(i => i.level === level && i.direction === dir);

      if (cellItems.length === 0) {
        const empty = makeEl('div', { className: 'cell-empty' });
        empty.textContent = 'No items match filters';
        cell.appendChild(empty);
      } else {
        cellItems.forEach(item => {
          cell.appendChild(makeDocCard(item));
        });
      }

      container.appendChild(cell);
    });
  });
}

function makeDocCard(item) {
  const card = makeEl('div', { className: `doc-card lang-${item._lang}` });

  // Significance flag
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
  badge.textContent = item._lang === 'shared' ? 'BOTH' : item._lang.toUpperCase();
  header.appendChild(badge);

  card.appendChild(header);

  const type = makeEl('div', { className: 'card-type' });
  type.textContent = item.type;
  card.appendChild(type);

  const footer = makeEl('div', { className: 'card-footer' });

  const st = getStatusStyle(item.status);
  const statusEl = makeEl('span', {
    className: 'status-badge',
    style: `background:${st.color}22; color:${st.color};`
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

// ─── Render: List ────────────────────────────────────────────────────────────

function renderList() {
  const container = document.getElementById('list-container');
  const allItems = getAllItems();
  const filtered = applyFilters(allItems);

  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty-state">No items match the current filters.</div>';
    return;
  }

  const table = makeEl('table', { className: 'list-table' });
  const thead = makeEl('thead');
  thead.innerHTML = `
    <tr>
      <th>Label</th>
      <th>Language</th>
      <th>Level</th>
      <th>Direction</th>
      <th>Type</th>
      <th>Status</th>
      <th>Date</th>
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
      <td><span class="lang-badge ${item._lang}">${item._lang === 'shared' ? 'BOTH' : item._lang.toUpperCase()}</span></td>
      <td>${item.level}</td>
      <td style="color:${item.direction === 'TOP_DOWN' ? '#fca5a5' : '#86efac'};font-size:.75rem;">${item.direction.replace('_', '-')}</td>
      <td style="color:var(--text-muted);">${item.type}</td>
      <td><span class="status-badge" style="background:${st.color}22;color:${st.color};">${st.label}</span></td>
      <td style="font-family:monospace;color:var(--text-muted);">${item.date || '—'}</td>
    `;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  container.innerHTML = '';
  container.appendChild(table);
}

// ─── Render: Timeline ────────────────────────────────────────────────────────

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  container.innerHTML = '';

  const langs = [
    { key: 'szl', label: 'Silesian (Język Śląski)', color: 'var(--szl)', data: FTM_DATA.silesian.timeline },
    { key: 'wym', label: 'Wilamowian (Język Wilamowski)', color: 'var(--wym)', data: FTM_DATA.wilamowian.timeline }
  ];

  // Add shared timeline items (RPO interventions)
  const sharedTimeline = [
    { date: "2021-01-29", event: "RPO: list do Premiera (Ślązacy i Wilamowianie)", status: "historical" },
    { date: "2021-03-08", event: "MSWiA: odpowiedź na RPO",                        status: "institutional_response" },
    { date: "2023-01-01", event: "RPO: Raport dot. mniejszości 2020–2022",         status: "published" }
  ];

  // Shared events
  const sharedSection = makeEl('div', { className: 'timeline-section' });
  const sharedTitle = makeEl('div', { className: 'timeline-section-title' });
  sharedTitle.innerHTML = `<span style="color:var(--shared)">●</span> Shared events (Silesian + Wilamowian)`;
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
    item.style.setProperty('--dot-color', color);

    const dot = item.querySelector('::before');
    item.style.cssText += `--dot-bg:${color};`;
    item.setAttribute('data-color', color);

    const dateEl = makeEl('div', { className: 'timeline-date' });
    dateEl.textContent = ev.date;

    const eventEl = makeEl('div', { className: 'timeline-event' });
    eventEl.textContent = ev.event;

    const st = getStatusStyle(ev.status);
    const badge = makeEl('span', { className: 'status-badge', style: `background:${st.color}22;color:${st.color};margin-top:3px;display:inline-flex;` });
    badge.textContent = st.label;

    item.appendChild(dateEl);
    item.appendChild(eventEl);
    item.appendChild(badge);
    tl.appendChild(item);
  });
  return tl;
}

// Apply dot color via JS (CSS custom properties don't work on ::before easily)
function applyTimelineDots() {
  document.querySelectorAll('.timeline-item').forEach(el => {
    const color = el.getAttribute('data-color') || 'var(--border)';
    el.style.setProperty('--dot-color', color);
  });
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function openModal(item) {
  const modal = document.getElementById('modal');
  const backdrop = document.getElementById('modal-backdrop');

  document.getElementById('modal-title').textContent = item.label;

  const metaEl = document.getElementById('modal-meta');
  const st = getStatusStyle(item.status);

  const chips = [
    { label: item._langLabel || item._lang, extra: `lang-badge ${item._lang}` },
    { label: item.level, extra: '' },
    { label: item.direction.replace('_', '-'), extra: '' },
    { label: item.type, extra: '' },
    { label: st.label, extra: '', style: `background:${st.color}22;color:${st.color};border-color:${st.color}44;` },
    item.date ? { label: item.date, extra: '', mono: true } : null,
  ].filter(Boolean);

  metaEl.innerHTML = chips.map(c =>
    c.extra?.startsWith('lang-badge')
      ? `<span class="${c.extra}">${c.label}</span>`
      : `<span class="meta-chip" style="${c.style || ''}${c.mono ? 'font-family:monospace;' : ''}">${c.label}</span>`
  ).join('');

  const descEl = document.getElementById('modal-description');
  const labelEnEl = document.getElementById('modal-label-en');
  const noteEl = document.getElementById('modal-note');
  const linksEl = document.getElementById('modal-links');

  labelEnEl.textContent = item.labelEN || '';
  labelEnEl.style.display = item.labelEN ? '' : 'none';

  descEl.textContent = item.description || '';
  descEl.style.display = item.description ? '' : 'none';

  if (item.note) {
    noteEl.textContent = item.note;
    noteEl.style.display = '';
  } else if (item.microImplementation) {
    noteEl.textContent = 'Note: This instrument also operates at the MICRO level, where its provisions are implemented directly in schools and classrooms.';
    noteEl.style.display = '';
  } else {
    noteEl.style.display = 'none';
  }

  // Build links
  const allUrls = [];
  if (item.urls && Array.isArray(item.urls)) {
    allUrls.push(...item.urls);
  } else if (item.urls && typeof item.urls === 'object') {
    Object.entries(item.urls).forEach(([k, v]) => allUrls.push({ label: k, href: v }));
  } else if (item.url) {
    allUrls.push({ label: 'Link', href: item.url });
  }

  // Also handle rounds/cycles
  if (item.rounds) item.rounds.forEach(r => allUrls.push({ label: `Runda ${r.round} (${r.year})`, href: r.url }));
  if (item.cycles) item.cycles.forEach(c => allUrls.push({ label: `Cykl ${c.cycle} – ACFC Opinion (${c.year})`, href: c.opinionUrl }));
  if (item.amendments) item.amendments.forEach(a => allUrls.push({ label: `Zmiana ${a.date}`, href: a.url }));

  if (allUrls.length > 0) {
    linksEl.innerHTML = `<div class="modal-links-label">Source documents</div>
      <div class="modal-links">
        ${allUrls.map(u => `<a class="modal-link" href="${u.href}" target="_blank" rel="noopener">${u.label}</a>`).join('')}
      </div>`;
    linksEl.style.display = '';
  } else {
    linksEl.style.display = 'none';
  }

  backdrop.classList.add('open');
}

function closeModal() {
  document.getElementById('modal-backdrop').classList.remove('open');
}

// ─── Stats update ─────────────────────────────────────────────────────────────

function updateStats() {
  const all = getAllItems();
  const filtered = applyFilters(all);

  document.getElementById('stat-total').textContent = filtered.length;
  document.getElementById('stat-szl').textContent = filtered.filter(i => i._lang === 'szl').length;
  document.getElementById('stat-wym').textContent = filtered.filter(i => i._lang === 'wym').length;
  document.getElementById('stat-shared').textContent = filtered.filter(i => i._lang === 'shared').length;
}

// ─── Render dispatch ──────────────────────────────────────────────────────────

function render() {
  updateStats();

  document.getElementById('matrix-view').style.display = state.view === 'matrix' ? '' : 'none';
  document.getElementById('list-view').style.display    = state.view === 'list'   ? '' : 'none';
  document.getElementById('timeline-view').style.display = state.view === 'timeline' ? '' : 'none';

  if (state.view === 'matrix')   renderMatrix();
  if (state.view === 'list')     renderList();
  if (state.view === 'timeline') { renderTimeline(); setTimeout(applyTimelineDots, 0); }

  // Update active filter pills
  document.querySelectorAll('.filter-pill').forEach(pill => {
    const f = pill.dataset.filter;
    const v = pill.dataset.value;
    pill.classList.toggle('active', state.filters[f] === v);
  });

  // Update view buttons
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === state.view);
  });
}

// ─── Event handlers ───────────────────────────────────────────────────────────

function initEventHandlers() {
  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.view = btn.dataset.view;
      render();
    });
  });

  // Filter pills
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const f = pill.dataset.filter;
      const v = pill.dataset.value;
      state.filters[f] = state.filters[f] === v ? 'all' : v;
      render();
    });
  });

  // Search
  document.getElementById('search-input').addEventListener('input', e => {
    state.search = e.target.value.trim();
    render();
  });

  // Modal close
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-backdrop')) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function makeEl(tag, props = {}) {
  const el = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === 'className') el.className = v;
    else if (k === 'style') el.style.cssText = v;
    else el[k] = v;
  });
  return el;
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initEventHandlers();
  render();
});
