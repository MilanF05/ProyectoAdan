import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { MenuComponent } from './menu/menu.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ContactoContenedorComponent } from './contacto-contenedor/contacto-contenedor.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
  
    MenuComponent,
    ContenidoComponent,
    ContactoContenedorComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
