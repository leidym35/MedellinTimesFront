import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NoticiasService } from '../services/noticias.service';
import { NoticiasModel } from '../models/noticiasModel' 
@Component({
    selector: 'noticias-add',
    templateUrl: '../views/noticias-add.html',
    providers: [NoticiasService]
})
export class NoticiasAddComponent implements OnInit{
    public title: string;
    model: NoticiasModel={id:0, titulo:'',body:'',imagen:''}


    constructor(
        private _noticiasService:NoticiasService,
        private _route:ActivatedRoute,
        private _router: Router

    ) {
        this.title = 'Crear Noticia';
    }
    ngOnInit(){ }
    onSubmit(){
        this._noticiasService.CreateNoticia(this.model).subscribe(
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