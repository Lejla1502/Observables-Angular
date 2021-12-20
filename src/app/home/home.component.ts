import { Component, OnDestroy, OnInit } from '@angular/core';
import{interval, Observable, Subscription} from 'rxjs';
import{map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription:Subscription;  //for storing our subscription

  constructor() { }
  

  ngOnInit() {
    /*this.firstObsSubscription= interval(1000).subscribe( //every second new event will be fired
      count=>{console.log(count);}  //count is the value that is emitted
    );*/


    //custom made observable

    const customIntervalObservable=new Observable(observer=>{  //here observer is a listener,here we get that listening part as argument
      let count=0;  
      setInterval(()=>{
          observer.next(count);  //we can use next to emit new value
          count++;
        }, 1000);
    });

    


    this.firstObsSubscription=customIntervalObservable.pipe(map((data:number)=>{return 'Round: '+ (data+1);})).
    subscribe(data=>console.log(data));
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();  //whenever we leave this component, we clear subscription and therefore we prevent memory leaks
  }


}
