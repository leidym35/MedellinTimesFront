import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//componentes
import { PublicidadComponent } from './components/publicidad.component';
import { NoticiasComponent } from './components/noticias.component';
import { EventosComponent } from './components/eventos.component';
import { HomeComponent } from './components/home.component';
import { PublicidadAddComponent } from './components/publicidad-Add.component';
import { EventosAddComponent } from './components/eventos-Add.component';
import { NoticiasAddComponent } from './components/noticias-Add.component';

const appRoutes:Routes=[
    {path:'',component: HomeComponent},
    {path:'home',component: HomeComponent},
    {path:'publicidad',component: PublicidadComponent},
    {path:'noticias',component: NoticiasComponent},
    {path:'eventos',component: EventosComponent},
    {path:'publicidadAdd',component: PublicidadAddComponent},
    {path:'addEventos',component: EventosAddComponent},
    {path:'addNoticias',component: NoticiasAddComponent},
    {path:'addNoticias',component: NoticiasAddComponent},
    /* {path:'**',component: ErrorComponent} */

];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
