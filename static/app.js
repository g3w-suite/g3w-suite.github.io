'use strict';

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

function loadYoutubeVideo(container) {
  const iframe = container.querySelector('iframe[data-youtube-src]');
  iframe.src = iframe.dataset.youtubeSrc;
  container.classList.add('is-loaded');
  container.querySelector('.youtube-consent__dialog').remove();
}

const youtubeVideos = document.querySelectorAll('.youtube-consent');
if (youtubeVideos.length) {
  if (localStorage.getItem('youtube-cookie-consent') === 'accepted') {
    youtubeVideos.forEach(loadYoutubeVideo);
  } else {
    document.querySelectorAll('[data-youtube-consent]').forEach(button => {
      button.addEventListener('click', () => {
        if (button.dataset.youtubeConsent === 'remember') {
          localStorage.setItem('youtube-cookie-consent', 'accepted');
          youtubeVideos.forEach(loadYoutubeVideo);
        } else {
          loadYoutubeVideo(button.closest('.youtube-consent'));
        }
      });
    });
  }
}

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

// ── Ricerca documentazione ──────────────────────────────────────────────────
const docsSearch = document.querySelector('.docs-search');

if (docsSearch) {
  const searchInput = docsSearch.querySelector('input[type="search"]');
  const searchResults = document.querySelector('#docs-search-results');
  let searchIndex;

  const normalize = text => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const clearResults = () => {
    searchResults.hidden = true;
    searchResults.replaceChildren();
  };

  docsSearch.addEventListener('submit', event => event.preventDefault());
  searchInput.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      searchInput.value = '';
      clearResults();
    }
  });
  searchInput.addEventListener('input', async () => {
    const query = normalize(searchInput.value.trim());
    if (!query) {
      clearResults();
      return;
    }

    searchResults.hidden = false;
    searchResults.textContent = 'Searching...';
    try {
      if (!searchIndex) {
        const response = await fetch(docsSearch.dataset.indexUrl);
        if (!response.ok) throw new Error(`Search index request failed: ${response.status}`);
        searchIndex = await response.json();
      }
      if (query !== normalize(searchInput.value.trim())) return;

      const terms = query.split(/\s+/);
      const matches = searchIndex.map(page => {
        const title = normalize(page.title);
        const text = normalize(page.text);
        if (!terms.every(term => title.includes(term) || text.includes(term))) return null;
        const score = terms.reduce((total, term) => total + (title.includes(term) ? 2 : 0), 0);
        return { page, text, score };
      }).filter(Boolean).sort((a, b) => b.score - a.score);

      if (!matches.length) {
        searchResults.textContent = 'No results found.';
        return;
      }

      const list = document.createElement('ul');
      matches.slice(0, 8).forEach(({ page, text }) => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = page.url;
        link.textContent = page.title;
        const excerpt = document.createElement('p');
        const position = terms.map(term => text.indexOf(term)).filter(index => index >= 0).sort((a, b) => a - b)[0] || 0;
        const start = Math.max(0, position - 50);
        excerpt.textContent = `${start ? '...' : ''}${page.text.slice(start, start + 140)}${start + 140 < page.text.length ? '...' : ''}`;
        item.append(link, excerpt);
        list.append(item);
      });

      const summary = document.createElement('span');
      summary.className = 'sr-only';
      summary.textContent = `${matches.length} search results`;
      searchResults.replaceChildren(summary, list);
    } catch (error) {
      searchIndex = null;
      console.error('Documentation search failed:', error);
      searchResults.textContent = 'Search is unavailable. Please try again.';
    }
  });
}
