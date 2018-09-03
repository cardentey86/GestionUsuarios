import {Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegistroComponent} from './registro/registro.component';
import {UsuarioComponent} from './usuario/usuario.component';
import {LoginComponent} from './login/login.component';
import {UsuarioEditComponent} from './usuario/usuario-edit/usuario-edit.component';

export const RouterConfig: Route[] = [
    { path: 'home', component: HomeComponent },
    { path: 'usuarios', component: UsuarioComponent },
    { path: 'usuarios/usuarioEdit', component: UsuarioEditComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];
