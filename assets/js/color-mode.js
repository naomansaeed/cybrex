// Toggle light/dark mode
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('color-mode-toggle');
  if (!toggle) return;

  // Check user preference
  const isDark = localStorage.getItem('color-mode') === 'dark' || 
                 (!localStorage.getItem('color-mode') && window.matchMedia('(prefers-color-scheme: dark)').matches);

  document.documentElement.classList.toggle('is-light', !isDark);
  toggle.textContent = isDark ? '☀️' : '🌙';

  toggle.addEventListener('click', () => {
    const isNowLight = document.documentElement.classList.toggle('is-light');
    localStorage.setItem('color-mode', isNowLight ? 'light' : 'dark');
    toggle.textContent = isNowLight ? '🌙' : '☀️';
  });
});