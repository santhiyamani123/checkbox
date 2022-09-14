import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  userDetails = {
    name: 'test',
    designation: "software developer",
    education: 'B.E',
    experience: "5 years",
    dob: "29-09-88",
    mobile: '313131313',
    email: "aaa@gmail.com",
    location: "bangalore",
    details: [{proofname:"aadhar",no:'234567'},
              {proofname:"pan",no:'34567'},
              {proofname:"voterid",no:'09876'}
              ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
