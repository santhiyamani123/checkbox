import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  color = '';
  priceTo = 0;
  priceFrom = 0;
  size = 'M';
  name = 'abc';
  editName = 'xyz';

  //check if the form  is dirty fields

  isDirty = true;



  constructor() { }

  ngOnInit(): void {
  }

}
