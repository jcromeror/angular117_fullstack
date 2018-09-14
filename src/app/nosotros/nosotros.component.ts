import { Component, OnInit } from '@angular/core';

//Se importa la clase del archivo equiposervice.ts 
//./ nos ubica en la carpeta de la pòsicion ../ salimos una carpeta 
import {EquipoService} from "./../services/equipo.service";


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

	equipo:Array<any>;

	//inyectamos una en una clase de esta manera para traer datos del servicio
	//private _equipoServicio:EquipoService
  constructor(private _equipoServicio:EquipoService) { 
  	//se agrega un ejemplo vacion de lo que se espera del 
  	//servicio para no tener en la vista errores
	  this.equipo = [{nombre:"", espedicalidad:"", biografia:""}];
  }

  ngOnInit() {
  	//cuando se quiere que se ejecute apenas se cargue la pagina se pone 
  	//en este metodo para que traiga los datos 
  	this.verEquipo();
  }

  verEquipo(){
  	//se llama el metodo y es el modo de consumo de servicio
  	//devuelve datos el servicio el equipo y lo mostramos en el array vacio
  	this.equipo=this._equipoServicio.verEquipo();
  }

}
