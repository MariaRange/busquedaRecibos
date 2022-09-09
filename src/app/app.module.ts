import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FechaComponent } from './fecha/fecha.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelecServicioComponent } from './selec-servicio/selec-servicio.component';
import { BotonComponent } from './boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaComponent,
    SelecServicioComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
