import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports:[FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(private http: HttpClient, private router: Router ,private _authService:AuthService) {}

  onLogin() {
    this._authService.login(this.loginData.email, this.loginData.password).subscribe({
      next: (response) => {
        alert('Login Successful!');
        localStorage.setItem('userToken', response.token); // Store token
  
        // Retrieve stored redirect path
        const redirectData = localStorage.getItem('redirectAfterLogin');
        if (redirectData) {
          const { path, queryParams } = JSON.parse(redirectData);
          localStorage.removeItem('redirectAfterLogin'); // Clear storage
          this.router.navigate([path], { queryParams }); // Redirect to intended page
        } else {
          this.router.navigate(['/dashboard']); // Default page after login
        }
      },
      error: (err) => {
        console.error('Login error:', err);
        alert(`Login error: ${err.error.message || 'Server error'}`);
      }
    });
  }
  
  
  login() {
    this._authService.login(this.loginData.email, this.loginData.password).subscribe({
      next: (response) => {
        alert('Login Successful!');
        localStorage.setItem('userToken', response.token); // Store token
        this.router.navigate(['/cart']); // Redirect to cart after login
      },
      error: (err) => {
        console.error('Login error:', err);
        alert(`Login error: ${err.error.message || 'Server error'}`);
      }
    });
  
}}
