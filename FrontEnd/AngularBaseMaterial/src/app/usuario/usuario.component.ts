import { Component, OnInit } from '@angular/core';
import {UsuarioService} from './usuario.service';
import {IUsuario} from './iusuario';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public dataSource: MatTableDataSource<IUsuario>;
   public usuarios: IUsuario[];
   public usuarioEdit: IUsuario;
   public valueSearch: string = '';
  constructor(private usuarioService: UsuarioService) {
  }

    public displayedColumns = ['Id', 'Nombre', 'Email', 'Clave', 'Acción'];

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(u => {
      this.usuarios = u;
      this.dataSource = new MatTableDataSource<IUsuario>(u);
    });
  }

  Buscar(value: string) {

  }

  Seleccionar(usuario) {
      this.usuarioEdit = usuario;
  }

  applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
       this.dataSource.filter = filterValue;
      // this.usuarios.filter(value => {
      //   filterValue = value.nombre;
      // });
  }
}


