import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  
  @Input() subjectChild: any;
  @Output() private numberGenerated1 = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  generatenumber()
  {
    const randomNumber = Math.random();
    this.numberGenerated1.emit(randomNumber);
  }

}
