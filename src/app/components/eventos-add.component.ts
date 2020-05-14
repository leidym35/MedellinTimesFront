import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventosService } from '../services/eventos.service';
import { EventosModel } from '../models/eventosModel' 
@Component({
    selector: 'eventos-add',
    templateUrl: '../views/eventos-add.html',
    providers: [EventosService]
})
export class EventosAddComponent implements OnInit{
    public title: string;
    model: EventosModel={id:0, titulo:'',descripcion:''}


    constructor(
        private _eventosService:EventosService,
        private _route:ActivatedRoute,
        private _router: Router

    ) {
        this.title = 'Crear Evento';
    }
    ngOnInit(){
        console.log("addpublicidad")
    }
    onSubmit(){
        this._eventosService.CreateEvento(this.model).subscribe(
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