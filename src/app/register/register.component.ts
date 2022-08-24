import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  registerForm : any;

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      "firstName" : new FormControl(null,[
        Validators.required,
        Validators.pattern('[a-zA-Z]*')
      ]),
      "lastName" : new FormControl(null,[
        Validators.required,
        Validators.pattern('[a-zA-Z]*')
      ]),
      "emailId" : new FormControl(null,[
        Validators.required,
        Validators.email
      ]),
      "mobileNumber" : new FormControl(null,[
        Validators.required,
        Validators.pattern('[0-9]*')
      ])
    })
  }

  //sumbit function

  submitData()
  {
    console.log(this.registerForm.value);

    if(this.registerForm.valid)
    {
      alert(`Thank You ${this.registerForm.valid.firstName}`);
      this.registerForm.reset();
    }
  }

  get firstname()
  {
    return this.registerForm.get('firstName');
  }

  get lastname()
  {
    return this.registerForm.get('lastName');
  }

  get emailid()
  {
    return this.registerForm.get('emailId');
  }

  get mobilenumber()
  {
    return this.registerForm.get('mobileNumber');
  }

}
