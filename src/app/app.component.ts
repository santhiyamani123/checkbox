import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'checkbox';

  form: FormGroup;
  selectedCheckBoxList = [];
  techStackList: any = [
    { id: 1, name: 'Interviewer By', code : 'INT' },
    { id: 2, name: 'Markerted  By', code : 'MAR' },
    { id: 3, name: 'Recuited', code : 'REC' }
  ];
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      technology: this.formBuilder.array([], [Validators.required])
    })
  }
    
  controlOnChange(event:Event) {
    const technologies: FormArray = this.form.get('technology') as FormArray;
    const target = event.target as HTMLInputElement;
  
    if (target.checked) {
      technologies.push(new FormControl(target.value));
      // this.selectedCheckBoxList.push(target.value);
    } else {
      technologies.push(new FormControl(target.value));
       const index = technologies.controls.findIndex(technology => technology.value === target.value);
       technologies.removeAt(index);
    }
  }
    
  submit(){
    console.log(this.form.value);
  }




  // form: FormGroup;

  // websiteList: any = [

  //   { id: 1, name: 'HDTuto.com' },

  //   { id: 2, name: 'HDTuto.com' },

  //   { id: 3, name: 'NiceSnippets.com' }

  // ];

  

  // constructor(private formBuilder: FormBuilder) {

  //   this.form = this.formBuilder.group({

  //     website: this.formBuilder.array([], [Validators.required])

  //   })

  // }

    

  // onCheckboxChange(event:Event) {

  //   const website: FormArray = this.form.get('website') as FormArray;
  //   const target = event.target as HTMLInputElement;
  

  //   if (target.checked) {

  //     website.push(new FormControl(target.value));

  //   } else {

  //      const index = website.controls.findIndex(x => x.value === target.value);

  //      website.removeAt(index);

  //   }

  // }

    

  // submit(){

  //   console.log(this.form.value);

  // }
}
