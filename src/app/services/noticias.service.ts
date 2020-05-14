import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {NoticiasModel} from '../models/noticiasModel'; 
import {GLOBAL} from '../services/global' 


@Injectable()
    export class NoticiasService{
        public url:string;
        constructor(
            public _http:HttpClient
        ){
            this.url=GLOBAL.url
        }
        getNoticias(){
            return this._http.get(this.url+'noticias').map(res=>(res))
        }
        CreateNoticia(noticias:NoticiasModel){
            return this._http.post(this.url+'noticiasSave',noticias)
            .map(res=>(res))           
        }
        deleteNoticia(id){
            return this._http.get(this.url+'noticiasDelete/'+id).map(res=>(res))
        }
    }