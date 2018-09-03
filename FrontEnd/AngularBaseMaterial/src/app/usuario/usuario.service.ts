import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Usuario} from './iusuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  header = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http: HttpClient) {
  }

  getUsuarios(): Observable <Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.api.url}api/usuarios`);
  }

  addUsuario(usuario: Usuario){
    return this.http.post<Usuario>(`${environment.api.url}api/usuarios`,JSON.stringify(usuario), {headers: this.header});
  }
}
