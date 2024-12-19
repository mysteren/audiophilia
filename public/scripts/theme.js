try {
  const theme = localStorage.getItem("theme");
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  document.documentElement.setAttribute("data-theme", theme ? theme: mq.matches ? 'dark' : 'light');
} catch (_) { }