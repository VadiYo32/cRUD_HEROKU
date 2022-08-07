import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from 'src/app/models/Empresa.model';
import Swal from 'sweetalert2';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  mostrarActualizar: boolean = false;
  empresas: EmpresaModel[] = [];
  idEmpresa: string = '';

  constructor(private readonly EmpresaService: EmpresaService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
 
   }
 /*
   counter(i: number){
     return new Array(i);
   }
 */
 
   obtenerUsuarios(){
     this.EmpresaService.getUsuarios()
     .then((res: any) => {
       this.empresas = res.cont.empresas;
 
     })
     .catch((err: any) => {
       this.empresas = [];
     })
   }
 
   actualizar(idEmpresa: any){
     this.idEmpresa = idEmpresa;
     this.mostrarActualizar = true;
   }
 
   restablecerRegistro(){
     this.mostrarActualizar = false;
     this.obtenerUsuarios();
   }
 
   eliminar(empresa: EmpresaModel){
     Swal.fire({
       icon:'question',
       //imprimirá el mensaje de error que retorne la API
       title: `Seguro que quiere eliminar ${empresa.strNombre} ${empresa.strRazonSocial}?`,
 
       showCancelButton: true,
       confirmButtonText: "Si, quiero eliminar",
       cancelButtonText: "cancelar"
     })
     .then((res) => {
       if (res.isConfirmed) {
         this.EmpresaService.deleteUsuarios(empresa._id)
         .then((result:any) => {
           Swal.fire({
             icon: "info",
             text: "La empresa se eliminó correctamente"
           });
           this.obtenerUsuarios();
         })
       }
     })
     .catch((err: any) => {
       Swal.fire({
         icon: "error",
         text: "Error al eliminar empresa"
       })
     });
   }
 
   showUpdate(idEmpresa: any){
     this.idEmpresa = idEmpresa;
 
     //this.mostrarAct = !this.mostrarAct;
     this.mostrarActualizar = true;
   }

}
