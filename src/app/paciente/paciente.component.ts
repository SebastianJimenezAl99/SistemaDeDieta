import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstruturaPasciente } from '../modelos/pasciente.moldelo'; 
import { RestService } from '../rest.service'; 

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
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

  public calcularDetalle(estarura: number, peso: number){
    const informacion = {altura : estarura, masa : peso}
    this.router.navigate(['/detalle'],{queryParams: informacion });
  }
}
