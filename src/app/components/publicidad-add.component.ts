import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PublicidadService } from '../services/publicidad.service';
/* import { PublicidadModel } from '../models/PublicidadModel' */
@Component({
    selector: 'publicidad-add',
    templateUrl: '../views/publicidad-add.html',
    providers: [PublicidadService]
})
export class PublicidadAddComponent {
    public title: string;
 /*    public publicidad:PublicidadModel; */
    constructor() {
        this.title = 'Crear Publicidad'
    /*     this.publicidad= new PublicidadModel(0,'',''); */

    }
    ngOnInit(){
        console.log("addpublicidad")
    }
    onSubmit(){
       /*  console.log(this.publicidad) */
    }
}