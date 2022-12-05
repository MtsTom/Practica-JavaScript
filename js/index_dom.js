import hamburgerMenu from './dom/menu_hamburguesa.js';
import { digitalClock, alarm } from './dom/reloj.js';
import { moveBall, shortcuts } from './dom/teclado.js';
import countdown from './dom/cuenta_regresiva.js';
import scrollTopButton from './dom/button_scroll.js';
import darkTheme from './dom/dark-theme.js';
import responsiveMedia from './dom/objeto_responsive.js';
import responsiveTester from './dom/prueba_responsive.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
  alarm('assets/alarma.mp3', '#activar-alarma', '#desactivar-alarma');
  countdown('countdown', 'Nov 25, 2023 03:23:19', 'Feliz cumpleaños 🤓');
  scrollTopButton('.scroll-top-btn');
  responsiveMedia(
    'youtube',
    '(min-width: 1024px)',
    `<a href= "https://www.youtube.com/watch?v=6IwUl-4pAzc&t=841s" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    'gmaps',
    '(min-width: 1024px)',
    `<a href= "https://goo.gl/maps/CsFRbJ1qbvHgngYC8" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d53601.7540475131!2d-68.87468144973467!3d-32.89526964973558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x967e0916da1067ef%3A0x6e6abe44146c1801!2sCl%C3%ADnica%20de%20Cuyo%20S.A.%2C%20Avenida%20Jos%C3%A9%20Vicente%20Zapata%2C%20Mendoza%2C%20Mendoza!3m2!1d-32.895346599999996!2d-68.8396621!4m5!1s0x967e0916da1067ef%3A0x6e6abe44146c1801!2scl%C3%ADnica%20de%20cuyo%20avenida%20jos%C3%A9%20vicente%20zapata%20mendoza!3m2!1d-32.895346599999996!2d-68.8396621!5e0!3m2!1ses-419!2sar!4v1670246158168!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  responsiveTester('responsive-tester');
});

d.addEventListener('keydown', (e) => {
  shortcuts(e);
  moveBall(e, '.ball', '.stage');
});

darkTheme('.dark-theme-btn', 'dark-mode');
