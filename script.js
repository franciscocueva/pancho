document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-nav .menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  // Opcional: cerrar menú al hacer clic en un enlace (móvil)
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
      }
    });
  });
});
