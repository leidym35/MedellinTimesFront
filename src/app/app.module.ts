import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
/* rutas */
import {routing, appRoutingProviders} from './app.routing'
/* componentes */

import { AppComponent } from './app.component';
import { PublicidadComponent } from './components/publicidad.component';
import { EventosComponent } from './components/eventos.component';
import { NoticiasComponent } from './components/noticias.component';
import { HomeComponent } from './components/home.component';
import { PublicidadAddComponent } from './components/publicidad-Add.component';
@NgModule({
  declarations: [
   AppComponent,
   HomeComponent,
   PublicidadComponent,
   EventosComponent,
   PublicidadAddComponent,
   NoticiasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
