import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUsuario} from '../iusuario';
import {UsuarioService} from '../usuario.service';
import {Route} from '@angular/router';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit, OnChanges {
  @Input() usuarioEdit: IUsuario;
  frmUpdate: FormGroup;
  private route: Route;
  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
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

  Delete() {
    if (this.usuarioEdit === undefined) {
        return;
    }

    this.usuarioService.deleteUsuario(this.usuarioEdit.id).subscribe();
    this.route.redirectTo('home');
  }

}
