import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { EstruturaPasciente } from './modelos/pasciente.moldelo';
import { ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'curso_angular';
  pascientes: EstruturaPasciente[] =[];
  
  constructor(private servicio:RestService, private router:Router){
    
  }

  ngOnInit(): void {
      this.cargarDatapascientes();
  }

  public cargarDatapascientes(){
    this.servicio.get(' http://localhost:3000/Pacientes')
    .subscribe((res: any) =>{
      this.pascientes = res;
    });
  }

  public mostrarPascientes(){
    this.router.navigate(['/pasciente']);
  }
  
  

}
