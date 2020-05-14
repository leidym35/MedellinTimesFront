import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventosService } from '../services/eventos.service'
@Component({
    selector: 'publicidad',
    templateUrl: '../views/eventos.html',
    providers: [EventosService]
  })
  export class EventosComponent {
    public title: string;
  public eventos:object
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _eventosService: EventosService
  ){
    this.title = 'Eventos Medellin';
  }
  ngOnInit() {
    this.getEvento()
  }
  getEvento(){
    this._eventosService.getEventos().subscribe(
      result => {

        this.eventos=result
         
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  onDelete(id){
    this._eventosService.deleteEventos(id).subscribe(
      response=>{
        this.getEvento()
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
}