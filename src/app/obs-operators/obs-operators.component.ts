import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, fromEvent, interval, map, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-obs-operators',
  templateUrl: './obs-operators.component.html',
  styleUrls: ['./obs-operators.component.scss']
})
export class ObsOperatorsComponent implements OnInit, OnDestroy {

  myDestroy: Subscription | any;

  constructor() { }

  ngOnInit(): void {
    // const numbers$ = interval(1000).pipe(take(5));

    // numbers$.subscribe(sub => {
    //   console.log(sub);
    // });

    // const of$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(filter(f => f % 2 == 0),map(m => m*100));

    // of$.subscribe(sub => {
    //   console.log(sub);
    // });



    const el = document.getElementById('my-element')!;

// Create an Observable that will publish mouse movements
const mouseMoves = fromEvent<MouseEvent>(el, 'click');

// Subscribe to start listening for mouse-move events
const subscription = mouseMoves.subscribe(evt => {
  // Log coords of mouse movements
  console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

  // When the mouse is over the upper-left of the screen,
  // unsubscribe to stop listening for mouse movements
  if (evt.clientX < 40 && evt.clientY < 40) {
    subscription.unsubscribe();
  }
});
  }

  ngOnDestroy() {
    this.myDestroy.unsubscribe();
    
  }

}
