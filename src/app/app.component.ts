import { Component } from '@angular/core';
import {  FormGroup , FormControl, } from '@angular/forms';
import { Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reacForms';

  form= new FormGroup({

    name :  new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(8)]),
    phone : new FormControl("",[Validators.required , Validators.pattern("[7-9]{1}[0-9]{9 }")]),
    email :new FormControl("",[Validators.required , Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}")])
  })
  signup(){
    console.log(this.form.value.name)
  }
}
