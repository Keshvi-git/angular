import { Component } from '@angular/core';
import { FetchService } from '../fetch.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    password: '',
    address: ''
  };

  constructor(private fetchService: FetchService, private router: Router) {}

  onSignup() {
    this.fetchService.signup(this.user).subscribe({
      next: (res) => {
        console.log('Signup successful:', res);
        alert("Signup successful!");
        this.router.navigate(['/login']);  // Redirect after signup
      },
      error: (err) => {
        console.error('Signup failed:', err);
        alert("Signup failed. Please try again.");
      }
    });
  }
}
