import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmpresaModel } from '../../models/Empresa.model';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-actualizar-empresa',
  templateUrl: './actualizar-empresa.component.html',
  styleUrls: ['./actualizar-empresa.component.css']
})
export class ActualizarEmpresaComponent implements OnInit {

  @Input() idEmpresa: string = "";
  empresa: EmpresaModel = new EmpresaModel();
  @Output() emiterActualizacion: EventEmitter<any> = new EventEmitter();

  constructor(private readonly EmpresaService: EmpresaService) { }

  ngOnInit(): void {
    console.log(this.idEmpresa);
    this.EmpresaService.getUsuario(this.idEmpresa)
    .then((response: any) => {
      this.empresa = response.cont.empresa;
    })
    .catch(() => {});
  }
 
  
  actualizarEmpresa(forma: NgForm){
    this.EmpresaService.putUsuarios(this.empresa, this.idEmpresa)
    .then((res: any) => {
      Swal.fire({
        icon: "success",
        text: "Se actualizó los datos correctamente"
      });
      forma.reset();

      // Trigger para accionar reloadTable() de crud.component.ts
      this.emiterActualizacion.emit();
    }).catch((err) => {
      Swal.fire({
        icon: "error",
        text: "Error al actualizar datos"
      });
    });
  }
limpiarForma(forma: NgForm)
{
  forma.reset();
}

}
