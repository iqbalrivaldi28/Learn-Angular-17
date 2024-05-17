import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-validator.component.html',
  styleUrl: './form-validator.component.scss'
})
export class FormValidatorComponent {
  title: string = 'Materi Reactivr Form: '

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', null)
  })

  login(){
    if(!this.loginForm.valid){
      alert('Email atau password anda salah!')
      return
    }

    alert(JSON.stringify(this.loginForm.value))
  }
}


