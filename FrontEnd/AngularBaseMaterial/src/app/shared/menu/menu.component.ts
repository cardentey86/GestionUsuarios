import { Component, OnInit } from '@angular/core';
import {AppModule} from '../../app.module';
import {falseIfMissing} from 'protractor/built/util';
import {VariableService} from '../visibilidad/variable.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(private varService : VariableService) { }

  ngOnInit() {
    this.varService.bLoggIn.subscribe(
        v=>{this.loggedIn = v}
    )
  }

  Logout(){
    this.varService.bLoggIn.next(false);
  }

}
