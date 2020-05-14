import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {EventosModel} from '../models/eventosModel';
import {GLOBAL} from '../services/global' 


@Injectable()
    export class EventosService{
        public url:string;
        constructor(
            public _http:HttpClient
        ){
            this.url=GLOBAL.url
        }
        getEventos(){
            return this._http.get(this.url+'eventos').map(res=>(res))
        }
        CreateEvento(eventos:EventosModel){
            return this._http.post(this.url+'eventosSave',eventos)
            .map(res=>(res))
        }
        deleteEventos(id){
            return this._http.get(this.url+'eventosDelete/'+id).map(res=>(res))
        }
    }