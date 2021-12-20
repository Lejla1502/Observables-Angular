import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
userActivated=false;
ourSubscription:Subscription;

  constructor(private userService:UserService) {}
  

  ngOnInit() {
    
    //this.userService.activatedEmitter.subscribe(didActivate=>{this.userActivated=didActivate});
    
  }

  ngAfterViewInit()
  {
    this.ourSubscription= this.userService.activatedEmitter.subscribe(didActivate=>{this.userActivated=didActivate});

  }
  
  ngOnDestroy(): void {
    this.ourSubscription.unsubscribe();
  }
}
