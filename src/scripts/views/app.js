import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import NavInitiator from '../utils/nav-initiator';

class App {
  constructor({
    content, openNav, closeNav, nav, link,
  }) {
    this.content = content;
    this.openNav = openNav;
    this.closeNav = closeNav;
    this.nav = nav;
    this.link = link;

    this.initialAppShell();
  }

  initialAppShell() {
    NavInitiator.init({
      openNav: this.openNav,
      closeNav: this.closeNav,
      nav: this.nav,
      link: this.link,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('content').focus();
    });
  }
}

export default App;
