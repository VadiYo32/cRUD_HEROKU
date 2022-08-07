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
  registrarUsuario(forma: NgForm)
  {
    this.EmpresaService.postUsuario(this.empresa)
    .then((response: any) => {
      Swal.fire
      ({
        icon: "success",
        text: "Se registró la empresa exitosamente"
      });
      forma.reset();
    })
    .catch((error: any) => {
      Swal.fire
      ({
        icon: "error",
        text: "Ha habido un error al registrar la empresa"
      });
    });
  }
  isShown: boolean = true;
  actualizarUsuario(idEmpresa: any){
    this.idEmpresa = idEmpresa;
  this.isShown = true;
}
limpiarForma(forma: NgForm)
{
  forma.reset();
}

}
