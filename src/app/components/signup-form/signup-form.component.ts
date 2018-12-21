import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Validators} from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { RutValidator } from 'ng2-rut';
import {NaoFormGroup} from '@naologic/forms';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.sass']
})
export class SignupFormComponent implements OnInit {
  signup: NaoFormGroup = this.fb.group({
    nombre: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)]) ],
    correo: ['', Validators.compose([Validators.required, Validators.email])],
    rut: ['', [Validators.required, this.rutValidator]],
    password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[a-z]*[A-Z]+[a-z]*')])],
    acceptTerms: ['', Validators.required]

  }) as NaoFormGroup;
  constructor(private fb: FormBuilder, private rutValidator: RutValidator) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.signup.valid);
    console.log(this.signup.errors);
if(this.signup.valid)
{


const keys = Object.keys(this.signup.controls);
keys.forEach(key => {
  console.log(key);
let control = this.signup.get(key);
console.log(control.value);

});


  return true;
}

const keys = Object.keys(this.signup.controls);
keys.forEach(key => {
  console.log(key);
let control = this.signup.get(key);
console.log(control.errors);

});





  }

}
