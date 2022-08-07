import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpresaModel } from 'src/app/models/Empresa.model';
import Swal from 'sweetalert2';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.css']
})
export class RegistrarEmpresaComponent implements OnInit {
  empresa: EmpresaModel = new EmpresaModel();
  constructor(private readonly EmpresaService: EmpresaService) { }

  ngOnInit(): void {
  }
  registrarUsuario(forma: NgForm)
  {
    this.EmpresaService.postUsuario(this.empresa)
    .then((response: any) => {
      Swal.fire
      ({
        icon: "success",
        text: "Se registró la emrpesa exitosamente"
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

  limpiarForma(forma: NgForm)
  {
    forma.reset();
  }


}
