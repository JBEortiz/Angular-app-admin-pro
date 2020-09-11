import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../services/settings.service'
declare function customInitFunctions();  //para declarar una funcion global esta funcion deja la pagina con los plugins cada vez que se recarga la pagina


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private settingService: SettingsService) { }

  ngOnInit(): void {
   // href="./assets/css/colors/default-dark.css"
   customInitFunctions();


  }

}
