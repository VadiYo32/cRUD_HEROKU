import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CrudComponent } from './pages/crud/crud.component';
import { ActualizarEmpresaComponent } from './pages/actualizar-empresa/actualizar-empresa.component';
import { RegistrarEmpresaComponent } from './pages/registrar-empresa/registrar-empresa.component';
import { FormComponent } from './component/form/form.component';



@NgModule({

  
  declarations: [
    AppComponent,
    CrudComponent,
    ActualizarEmpresaComponent,
    RegistrarEmpresaComponent,
    FormComponent
  
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }