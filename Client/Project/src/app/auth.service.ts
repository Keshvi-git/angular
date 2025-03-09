import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  private _http = inject(HttpClient)
  private apiUrl="http://localhost:4000/users/login"
  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken');
  }

  login(email: string, password: string) {
    return this._http.post<any>(this.apiUrl, { email, password });
    }
}
