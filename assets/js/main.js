'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = 'Menu';
}
menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
  menuButton.textContent = expanded ? 'Menu' : 'Close';
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation?.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 681px)').addEventListener('change', closeMenu);
document.querySelectorAll('[data-year]').forEach(node => node.textContent = new Date().getFullYear());
const copyButton = document.querySelector('[data-copy-email]');
copyButton?.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('seratul.ambia@gmail.com');
    status.textContent = 'Email address copied.';
  } catch {
    status.textContent = 'Select the email address above to copy it, or use the email link.';
  }
});
