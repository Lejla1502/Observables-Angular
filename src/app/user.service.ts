import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  activatedEmitter= new Subject<boolean>();

  constructor() {
   // console.log(this.activatedEmitter);
   }
}
