import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  mostrar:boolean;
	temas:Array<string>;
	/*la otra manera de crear un array es esta temas:string[];*/
	claseCss:string;

	constructor(){
		this.claseCss="rojo";
		this.mostrar=true;
		this.temas=[
			"HTML",
			"CSS",
			"JavaScript",
			"Git",
			"Postgresql",
			"Ruby"
		]
	}

	//esta funcion lo que hace es que si la variable esta en false la cambia a true y viseversa
	muestra(){
		this.mostrar=!this.mostrar;
	}

	cambiarColor(color){
		this.claseCss=color;
	}

  ngOnInit() {
  }

}
