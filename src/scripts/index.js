import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.getElementById('content'),
  openNav: document.getElementById('openNav'),
  closeNav: document.getElementById('closeNav'),
  nav: document.getElementById('myNav'),
  link: document.getElementById('link'),
  burger: document.getElementById,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
