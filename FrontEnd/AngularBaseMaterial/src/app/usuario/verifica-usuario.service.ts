import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {VerificaUsuario} from './verifica-usuario';
import {VariableService} from '../shared/visibilidad/variable.service';
import {Router} from '@angular/router';
import {NotificationService} from '../shared/notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class VerificaUsuarioService {

  constructor(private http: HttpClient,
              private varService: VariableService,
              private router: Router,
              private notifService: NotificationService) { }

  VerificaUsuario(email: string, clave: string) {
    this.http.get<VerificaUsuario>(`${environment.api.url}api/VerificaUsuarios/${email}/${clave}`)
        .subscribe((d) => {
          if (d.existe) {
              this.varService.bLoggIn.next(true);
              this.router.navigate(['usuarios']);
          } else {
            this.notifService.Show('error', 'El usuario no existe');
          }
    });
  }
}
