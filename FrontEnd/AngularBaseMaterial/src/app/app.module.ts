import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './app.material';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { UsuarioComponent } from './usuario/usuario.component';
import {RouterModule} from '@angular/router';
import {RouterConfig} from './router.config';
import { NotificationComponent } from './shared/notification/notification.component';
import {NotificationService} from './shared/notification/notification.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {VariableService} from './shared/visibilidad/variable.service';
import {UsuarioService} from './usuario/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    UsuarioComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
      FlexLayoutModule,
      RouterModule.forRoot(RouterConfig),
      HttpClientModule,
      ReactiveFormsModule
  ],
  providers: [NotificationService, VariableService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
