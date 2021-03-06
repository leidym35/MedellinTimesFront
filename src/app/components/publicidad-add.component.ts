import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PublicidadService } from '../services/publicidad.service';
import { PublicidadModel } from '../models/PublicidadModel' 
@Component({
    selector: 'publicidad-add',
    templateUrl: '../views/publicidad-add.html',
    providers: [PublicidadService]
})
export class PublicidadAddComponent implements OnInit{
    public title: string;
    model: PublicidadModel={id:0, titulo:'',imagen:''}


    constructor(
        private _publicidadService:PublicidadService,
        private _route:ActivatedRoute,
        private _router: Router

    ) {
        this.title = 'Crear Publicidad';
    }
    ngOnInit(){ }
    onSubmit(){
        this._publicidadService.CreatePublicidad(this.model).subscribe(
            response => {
                if(response=="insertado"){
                    alert("se ha insertado correctamente")
                    this._router.navigate(["/home"])   
                }
                else{
                    console.log(response)
                }
                             
              },
              error => {
                console.log(<any>error);
              }
        )
    }
}