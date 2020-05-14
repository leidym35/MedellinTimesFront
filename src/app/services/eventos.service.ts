import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
/* import {PublicidadModel} from '../models/publicidadModel'; */
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
    }