import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUsuario} from '../iusuario';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit, OnChanges {
  @Input() usuarioEdit: IUsuario;
  frmUpdate: FormGroup;
  constructor(private fb: FormBuilder) {
    this.frmUpdate = this.fb.group({
        nombre : ['', Validators.required],
        email : ['', Validators.email],
        clave : ['', Validators.required],
    });
  }

  ngOnChanges() {
    if (this.usuarioEdit === undefined) {
      return;
    }

    this.frmUpdate.setValue({
        nombre: this.usuarioEdit.nombre,
        email: this.usuarioEdit.email,
        clave: this.usuarioEdit.clave
    });
  }

  ngOnInit() {
  }

  Update() {

  }

}
