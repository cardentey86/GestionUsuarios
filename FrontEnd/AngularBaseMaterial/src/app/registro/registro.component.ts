import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUsuario} from '../usuario/iusuario';
import {UsuarioService} from '../usuario/usuario.service';
import {NotificationService} from '../shared/notification/notification.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  frmRegistro: FormGroup;
  usuario = new IUsuario();
  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private notifService: NotificationService) {
    this.frmRegistro = this.fb.group({
        nombre : ['', Validators.required],
        email : ['', Validators.email],
        clave : ['', Validators.required],
        confirmar : ['', Validators.required],
    });

  }

  ngOnInit() {
  }

    ValidaClave(): boolean {
      const frm = this.frmRegistro.value;
      return frm.confirmar === frm.clave;
    }

  Registro() {
      const frm = this.frmRegistro.value;

      this.usuario.email = frm.email;
      this.usuario.nombre = frm.nombre;
      this.usuario.clave = frm.clave;

      if (this.usuarioService.addUsuario(this.usuario).subscribe()) {
        this.notifService.Show('info', 'Usuario Creado');
      }
  }

}
