import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MathsService } from 'src/app/services/maths.service';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {

  @Input() subjectChild: any;
  @Output() private numberGenerated1 = new EventEmitter<number>();

  constructor(public _maths:MathsService) { }

  ngOnInit(): void {
  }

  generatenumber()
  {
    const randomNumber = Math.random();
    this.numberGenerated1.emit(randomNumber);
  }

  Increase(){
    this._maths.addOne();
  }


  

}
