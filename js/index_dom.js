import hamburgerMenu from './dom/menu_hamburguesa.js';
import { digitalClock, alarm } from './dom/reloj.js';
import { moveBall, shortcuts } from './dom/teclado.js';
import countdown from './dom/cuenta_regresiva.js';
import scrollTopButton from './dom/button_scroll.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
  alarm('assets/alarma.mp3', '#activar-alarma', '#desactivar-alarma');
  countdown('countdown', 'Nov 25, 2023 03:23:19', 'Feliz cumpleaños 🤓');
  scrollTopButton;
});

d.addEventListener('keydown', (e) => {
  shortcuts(e);
  moveBall(e, '.ball', '.stage');
});
