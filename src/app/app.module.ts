import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './detalle/detalle.component';
import { PacienteComponent } from './paciente/paciente.component';



const routes: Routes = [

  {
    path:'detalle', component: DetalleComponent 
  },
  {
    path:'pasciente', component: PacienteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    PacienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
