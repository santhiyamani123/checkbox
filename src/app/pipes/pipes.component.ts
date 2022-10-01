import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  title = 'AngularPipes';
  name = "David Greek";
  amount = 36.52345678;
  item = ['Books','Pen','Chair','Table'];
  user = {name : 'John' , age : 20};
  

  constructor() { }

  ngOnInit(): void {
  }

}
