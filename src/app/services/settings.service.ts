import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');
  constructor() {
    const url = localStorage.getItem('theme')|| './assets/css/colors/default-dark.css';
    this.linkTheme.setAttribute('href', url); //cambiamos el atributo seleccionado para sustituirlo por la constante que tiene la url
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url); //cambiamos el atributo seleccionado para sustituirlo por la constante que tiene la url
    localStorage.setItem('theme', url); //para almacenar en el localStorage para que se guarde para siempre
  }

}
