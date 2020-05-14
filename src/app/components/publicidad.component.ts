import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PublicidadService } from '../services/publicidad.service';

@Component({
  selector: 'publicidad',
  templateUrl: '../views/publicidad.html',
  providers: [PublicidadService]
})
export class PublicidadComponent {
  public title: string;
  public publicidad:object

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _publicidadService: PublicidadService
  ) {
    this.title = 'Publicidad'
  }

  ngOnInit() {

  this.getPublicidades()
  }

  getPublicidades(){
    this._publicidadService.getPublicidad().subscribe(
      result => {

        this.publicidad=result
         
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  
  onDelete(id){
    this._publicidadService.deletePublicidad(id).subscribe(
      response=>{
        this.getPublicidades()
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
 
