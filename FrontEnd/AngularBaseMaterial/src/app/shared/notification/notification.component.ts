import { Component, OnInit } from '@angular/core';
import {NotificationService} from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  message : string = '';
  tipo: string = '';
  constructor(private notifServices: NotificationService) { }

  ngOnInit() {
    this.notifServices.emiter.subscribe((d:any)=> {
      this.message = d.message;
      this.tipo = d.tipo;
      this.HideMessage();
    })
  }

  HideMessage(){
    setTimeout(() =>{
      this.message = '';
      this.tipo = '';
    },2000)
  }

}
