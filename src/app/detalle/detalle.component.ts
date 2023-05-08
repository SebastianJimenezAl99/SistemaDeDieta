import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EstructuraCategoria} from '../modelos/categoria.modelo';
import { EstruturaDieta } from '../modelos/dieta.modelo';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent{

  categorias: EstructuraCategoria[] =[];
  dietas : any ;
  c: number =-2 ;
  PlanDieta: EstruturaDieta[]  = [];
  selectCategoria: any  ;
  AlturaEnviada : any ;
  PesoEnviado: any ;
  imcResult: number=-1;
  imc: number = 0.0;

  constructor(private http : HttpClient, private route: ActivatedRoute, private router: Router, servicio:RestService){};

  ngOnInit(): void {
    this.AlturaEnviada = this.route.snapshot.queryParams['altura'];
    this.PesoEnviado = this.route.snapshot.queryParams['masa'];
    this.imc=this.PesoEnviado/(this.AlturaEnviada*this.AlturaEnviada);
    this.calculateImc();
    this.cargarDataCategoria();
    
  }

  public mostrarPascientes(){
    this.router.navigate(['/pasciente']);
  }

  public cargarDataCategoria(){
    this.http.get<[EstructuraCategoria]>('http://localhost:4000/Categorias')
    .subscribe((res: any) =>{
      this.categorias = res;

      for (let index = 0; index < this.categorias.length; index++) { 
       
        if(this.categorias[index].codigo == this.imcResult){ 
          this.c=index; 
          break;
        }
      }

      this.cargaDataDieta();
    });
    
    
    
    
  }

 

  public cargaDataDieta(){
    this.http.get<[EstruturaDieta]>('http://localhost:5000/Dieta')
    .subscribe((res: EstruturaDieta[]) =>{
      this.dietas = res;
      for (let index = 0; index < this.dietas.length; index++) {
        
        if (this.dietas[index].categoria == this.imcResult) {
          this.PlanDieta?.push(this.dietas[index]);  
        }
        
      }
    });
  }

    public calculateImc(){
      
      
      if(this.imc < 18.5){
        this.imcResult = 1;
      
      }else if(this.imc > 18.5 && this.imc <= 24.9){
        this.imcResult = 2;
      
      }else if(this.imc > 25.0 && this.imc <= 29.9){
        this.imcResult = 3;
        
      }else if(this.imc > 29.9 && this.imc <= 34.9){
        this.imcResult = 4;
        
      }else if(this.imc > 35 && this.imc <= 39.9){
        this.imcResult = 5;
        
      }else{
        this.imcResult= 6;
      }
      
      
    }

}
 

