import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariableService {
  public bLoggIn = new BehaviorSubject(false);
  constructor() { }
}
