import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-validate-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './form-validate-login.component.html',
  styleUrl: './form-validate-login.component.scss',
})
export class FormValidateLoginComponent {
  title: string = 'Materi Form Validate Login'

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  get username(){
    return this.loginForm.get('username')
  }

  get password(){
    return this.loginForm.get('password')
  }

  onSubmit(){
    if(this.loginForm.valid){
      Swal.fire('Success', 'Anda berhasil Login', 'success')
    } else{
      Swal.fire('Error', 'Gagal Login, Periksa username dan password anda', 'error')
    }
  }
}
