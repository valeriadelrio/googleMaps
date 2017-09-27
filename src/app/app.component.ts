import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from "./interfaces/marcador.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = -37.328618;
  lng: number = -59.135322;
  zoom: number = 17;

  constructor (public _ms:MapasService){

  }
  clickMapa(evento){
    let nuevoMarcador:Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: "Sin titulo",
      draggable: true
    }

    this._ms.insertarMarcador(nuevoMarcador);
    console.log(evento);

  }
}
