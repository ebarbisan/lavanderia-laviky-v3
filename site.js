const filters = document.querySelector('.filters');
const cards = [...document.querySelectorAll('[data-category]')];
const status = document.querySelector('#filter-status');

filters.addEventListener('click', (event) => {
  const selected = event.target.closest('button[data-filter]');
  if (!selected) return;

  for (const button of filters.querySelectorAll('button')) {
    button.setAttribute('aria-pressed', String(button === selected));
  }

  let visible = 0;
  for (const card of cards) {
    card.hidden = selected.dataset.filter !== 'all' && card.dataset.category !== selected.dataset.filter;
    if (!card.hidden) visible += 1;
  }

  status.textContent = visible === 1 ? '1 serviço exibido.' : `${visible} serviços exibidos.`;
});
