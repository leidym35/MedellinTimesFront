import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NoticiasService } from '../services/noticias.service'
@Component({
    selector: 'publicidad',
    templateUrl: '../views/noticias.html',
    providers: [NoticiasService]
  })
  export class NoticiasComponent {
    public title: string;
    public noticias:object
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _noticiasService: NoticiasService
    ) {
    this.title = 'Noticias Medellin';
  }
  ngOnInit() {
    this.getNoticia()
    
  }
  getNoticia(){
    this._noticiasService.getNoticias().subscribe(
      result => {

        this.noticias=result
         
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  onDelete(id){
    this._noticiasService.deleteNoticia(id).subscribe(
      response=>{
        this.getNoticia()
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
}
 
