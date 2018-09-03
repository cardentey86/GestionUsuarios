import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../shared/notification/notification.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VariableService} from '../shared/visibilidad/variable.service';
import {RootData} from '@angular/core/src/view';
import {Router, RouterLink, RouterState} from '@angular/router';
import {RouterConfigLoader} from '@angular/router/src/router_config_loader';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  frmLogin: FormGroup;
  constructor(private notifService: NotificationService, private fb: FormBuilder, private varService: VariableService) {
    this.frmLogin = this.fb.group({
        email: ['', Validators.email],
        clave: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  Login() {
    const r = this.frmLogin.value;
    this.varService.bLoggIn.next(true);
  }
  // MostrarInfo(){
  //   this.notifService.Show('info','Success');
  // }
  //
  // MostrarError(){
  //     this.notifService.Show('error','Error')
  // }

}
