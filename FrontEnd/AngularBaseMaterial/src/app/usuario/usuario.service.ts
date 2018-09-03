import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {IUsuario} from './iusuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  header = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {
  }

  getUsuarios(): Observable <IUsuario[]> {
    return this.http.get<IUsuario[]>(`${environment.api.url}api/usuarios`);
  }

  addUsuario(usuario: IUsuario) {
    return this.http.post<IUsuario>(`${environment.api.url}api/usuarios`, JSON.stringify(usuario), {headers: this.header});
  }

  deleteUsuario(id: number) {
    return this.http.delete(`${environment.api.url}api/usuarios/${id}`,
        {headers: this.header});
  }
}
