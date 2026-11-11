'use strict';

const clean = location.pathname.replace(/(\/index)?\.html$/, '$1' ? '/' : '');
if (clean !== location.pathname) {
  history.replaceState(null, '', clean + location.search + location.hash);
}

// ── Menu hamburger mobile ───────────────────────────────────────────────────
const toggleBtn = document.querySelector('.menu-toggle-btn');
const nav       = document.querySelector('.main-nav');

if (toggleBtn && nav) {
  toggleBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', String(open));
    if (!open) {
      document.querySelectorAll('.nav-item--has-dropdown.is-open')
        .forEach(el => {
          el.classList.remove('is-open');
          const btn = el.querySelector('.drop-trigger');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    }
  });

  nav.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    })
  );
}

// ── Dropdown accessibile (click + tastiera) ─────────────────────────────────
document.querySelectorAll('.drop-trigger').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = btn.closest('.nav-item--has-dropdown');
    const open = item.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
    document.querySelectorAll('.nav-item--has-dropdown.is-open')
      .forEach(other => {
        if (other !== item) {
          other.classList.remove('is-open');
          const ob = other.querySelector('.drop-trigger');
          if (ob) ob.setAttribute('aria-expanded', 'false');
        }
      });
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.nav-item--has-dropdown.is-open')
    .forEach(el => {
      el.classList.remove('is-open');
      const btn = el.querySelector('.drop-trigger');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.nav-item--has-dropdown.is-open')
      .forEach(el => {
        el.classList.remove('is-open');
        const btn = el.querySelector('.drop-trigger');
        if (btn) { btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
      });
    if (nav && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      if (toggleBtn) { toggleBtn.setAttribute('aria-expanded', 'false'); toggleBtn.focus(); }
    }
  }
});

// ── Filtro demo cards (sostituisce Isotope) ─────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
const demoCards  = document.querySelectorAll('.demo-card[data-category]');

if (filterBtns.length && demoCards.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      demoCards.forEach(card => {
        const match = filter === '*' || card.dataset.category === filter;
        card.hidden = !match;
      });
    });
  });
}
