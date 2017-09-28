import { Injectable } from '@angular/core';
import { Marcador } from "../interfaces/marcador.interface";

@Injectable()
export class MapasService {

  marcadores: Marcador[] = [];

  constructor() {
    let nuevoMarcador: Marcador = {
      lat:-37.328618,
      lng:-59.135322,
      titulo: "Plaza central",
      draggable: true
    }
    this.marcadores.push(nuevoMarcador);
  }

  insertarMarcador(marcador:Marcador){
    this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  guardarMarcadores(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores))
  }

  cargarMarcadores(){
    if (localStorage.getItem('marcadores')){
      this.marcadores=JSON.parse(localStorage.getItem('marcadores'));
    }else{
      this.marcadores=[];
    }
  }



}
