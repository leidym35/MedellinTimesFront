import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {PublicidadModel} from '../models/publicidadModel';
import {GLOBAL} from '../services/global' 


@Injectable()
    export class PublicidadService{
        public url:string;
        constructor(
            public _http:HttpClient
        ){
            this.url=GLOBAL.url
        }
        getPublicidad(){
            return this._http.get(this.url+'publicidad').map(res=>(res))
        }
 
        CreatePublicidad(publicidades:PublicidadModel){
            return this._http.post(this.url+'publicidadSave',publicidades)
            .map(res=>(res))
        }
  
        deletePublicidad(id){
            return this._http.get(this.url+'publicidadDelete/'+id).map(res=>(res))
        }

    }
