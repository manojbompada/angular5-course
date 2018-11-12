import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';
import 'rxjs/add/observable/interval';
import {Observer, Subscription, interval} from 'rxjs';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberObservableSubscription: Subscription;
  customObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000). pipe(
      map(
        (data: number) => {
          return data*2;
        }
      )
      )


    this.numberObservableSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout( () => {
          observer.next('first package');
        },2000);
        setTimeout(() => {
          observer.next('second package');
         },4000);
        setTimeout(() => {
          observer.complete();
        },5000);
        setTimeout(() => {
          observer.next('last package');
        },7000);
      }
    );

    this.customObservableSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy() {
    this.numberObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }

}
