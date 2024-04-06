import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AppComponent } from "../../../app.component";



@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, AppComponent]
})

export class LoginComponent{
    loginForm!: FormGroup;
    errorMensage: string = '';

    constructor(private fb: FormBuilder, private router: Router) {}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit(): void {
        if(this.loginForm.invalid){
            this.errorMensage = 'Por favor, digite um usuário e senha válidos.';
            this.markFormGroupAsTouched(this.loginForm);
        }else{
            this.router.navigate(['/home']);
        }
    }

    markFormGroupAsTouched(loginForm: FormGroup<any>) {
        throw new Error('Method not implemented.');
    }



}

 /* loginForm!: FormGroup;
  errorMensage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  onSubmit(): void {
    if(this.loginForm.invalid){
      this.errorMensage = 'Por favor, digite um usuário e senha válidos.';
      this.markFormGroupAsTouched(this.loginForm);
  }else{
    this.router.navigate(['/home']);
  }

  constructor(private markFormGroupTouched(FormGroup: FormGroup) {
    Object.values(FormGroup.controls).forEach(control => {
      control.markAsTouched();
    })})
}
  markFormGroupAsTouched(loginForm: FormGroup<any>) {
    throw new Error('Method not implemented.');
  }

}*/