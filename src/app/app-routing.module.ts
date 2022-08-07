import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActualizarEmpresaComponent } from './pages/actualizar-empresa/actualizar-empresa.component';
import { CrudComponent } from './pages/crud/crud.component';
import { RegistrarEmpresaComponent } from './pages/registrar-empresa/registrar-empresa.component';


const routes: Routes = [
{path: 'home', component:HomeComponent},
{path: 'crud', component:CrudComponent},
{path: 'actualizar', component:ActualizarEmpresaComponent},
{path: 'registrar', component:RegistrarEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }