const NavInitiator = {
  init({
    openNav, closeNav, nav, link,
  }) {
    link.addEventListener('click', (event) => {
      this.closeNav(event, nav);
    });

    openNav.addEventListener('click', (event) => {
      this.toggleNav(event, nav);
    });

    closeNav.addEventListener('click', (event) => {
      this.closeNav(event, nav);
    });
  },
  toggleNav(event, nav) {
    nav.classList.remove('close');
    nav.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeNav(event, nav) {
    nav.classList.remove('open');
    nav.classList.add('close');
    document.body.style = null;
  },
};

export default NavInitiator;
