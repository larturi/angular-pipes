import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre = 'Capitan America';
  nombre2 = 'lEandrO nAHueL artuRI';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje = 0.235;
  salario = 1234.5;
  fecha = new Date();
  activar = true;
  idioma = 'es';
  videoUrl = 'https://www.youtube.com/embed/pKoH9GkEKxQ';

  valorPromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      numero: 234
    }
  };

}
