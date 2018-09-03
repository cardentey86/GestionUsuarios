import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../shared/notification/notification.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VariableService} from '../shared/visibilidad/variable.service';
import {Router} from '@angular/router';
import {VerificaUsuarioService} from '../usuario/verifica-usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  frmLogin: FormGroup;
  constructor(private notifService: NotificationService,
              private fb: FormBuilder,
              private varService: VariableService,
              private router: Router,
              private verifUsuarioService: VerificaUsuarioService) {
    this.frmLogin = this.fb.group({
        email: ['', Validators.email],
        clave: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  Login() {
    const frm = this.frmLogin.value;
    this.verifUsuarioService.VerificaUsuario(frm.email, frm.clave);
  }
  // MostrarInfo(){
  //   this.notifService.Show('info','Success');
  // }
  //
  // MostrarError(){
  //     this.notifService.Show('error','Error')
  // }

}
