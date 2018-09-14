import { Component, OnInit } from '@angular/core';
//importa la clase
import { EquipoService } from './../services/equipo.service';

//permite acceder a la url del navegador y sacar en este caso el id
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
	miembroEquipo:any;

	//inyecta la clase
	//se importa el servicio _ruta:ActivatedRoute que se importa arriba private 
  constructor(private _equipoServicio:EquipoService, private _ruta:ActivatedRoute) { 
  	this.miembroEquipo = {nombre:"", especialidad:"", biografia:""};
  }

  ngOnInit() {
  	//Se suscribe a un servicio asincrono algo que se sale del control
  	//en javascript se llama promesa  
  	// se espera un parametro pero no se sabe si viene
  	/*algo que se supone que va llegar pero puede que llegue o no llegue*/
  	/*como parametros se definen las dos posibles respuestas 
  	objeto error objeto de error siempre debe de ir la respues como 
  	primer parametro y despues el error
  	this._equipoServicio.verMiembroEquipo(respuesta['id']) llama al servicio para sacar data
  	this.miembroEquipo = se llena la variable definida iniciando el metodo*/
  	this._ruta.params.subscribe( 
  		respuesta=>{ 
  			this.miembroEquipo = this._equipoServicio.verMiembroEquipo(respuesta['id'])
  		}, 
  		error=>{console.log(error)}
  		);
  }

}
