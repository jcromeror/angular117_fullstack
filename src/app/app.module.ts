import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//la siguiente linea se agrega la libreria de bootstrap y en la linea 17 se importa
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//agregamos dos clases nuevas que sirven para las rutas de paginas o links 
//diferentes  Routes clase q permite crear un tipo de dato
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';

//define una variable o constante de tipo rutas path es el nombre de la ruta 
//y component es el nombre del componente
//RouterModule.forRoot(rutas) se agrega en la linea 36 para configurar las rutas
//{path:"**", redirectTo: "/", pathMatch: "full"} importa el la posicion siempre va al 
//final y si se coloca un enlace que no exista siempre lo lleva al incio
//orden pathMatch: "full"es para que coja todas las coincidencias
const rutas:Routes=[
  {path:"", component: InicioComponent},
  {path:"nosotros", component: NosotrosComponent},
  {path:"contacto", component: ContactoComponent},
  {path:"inicio", component: InicioComponent},
  {path:"**", redirectTo: "/", pathMatch: "full"}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiePaginaComponent,
    ContactoComponent,
    NosotrosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
