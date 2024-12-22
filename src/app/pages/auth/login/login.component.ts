import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ImagesService } from '../../../services/general/images.service';
import { ButtonComponent } from '../../../components/button/button.component';
import { AuthService } from '../../../services/auth/auth.service';
import { ToastService } from '../../../services/general/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isPasswordVissible: boolean = false;
  isLoading: boolean = false;
  loginForm!: FormGroup;
  _fb = inject(FormBuilder);
  _images = inject(ImagesService);
  _authService = inject(AuthService);
  _toast = inject(ToastService);
  _router = inject(Router);

  constructor() {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  toggleVissibility() {
    this.isPasswordVissible = !this.isPasswordVissible;
  }

  gotoForgotPassword() {}

  onSubmit() {
    if (this.loginForm.invalid) {
      this._toast.error('Please fill in all fields');
      return;
    }

    this.isLoading = true;
    this._authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        if (response.resp_code === '000') {
          sessionStorage.setItem('token', response.data.token);
          this._router.navigate(['/home']);
        } else {
          this._toast.error(response.resp_desc);
        }
      },
      error: (error) => {
        this.isLoading = false;
        // this._toast.error('An error occurred');
      },
    });
  }
}
