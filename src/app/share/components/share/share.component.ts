import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MathsService } from 'src/app/services/maths.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  
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
