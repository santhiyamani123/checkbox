import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'checkbox';
  randomNumber:number =0;
  

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

  
  subjectParent:object=[
    {id:1,name:'Tamil'},
    {id:2,name:'English'},
    {id:3,name:'Maths'},
    {id:4,name:'Science'},
    {id:5,name:'Social'}
  ]; 

  public onNumberGenerate(randomNumber:number)
  {
    this.randomNumber=randomNumber;
  }


  images = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'person2',
    },
  ]






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
