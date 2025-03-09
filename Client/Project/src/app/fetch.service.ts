// import { HttpClient } from '@angular/common/http';
// import { inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// // import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class FetchService {
//   private apiUrl = "http://localhost:4000/category";
//   private baseurl = "http://localhost:4000/product";
//   private url="http://localhost:4000/users"

//   constructor() {}
//   private _http = inject(HttpClient)

//   getAll(){
//     return this._http.get(this.apiUrl)
// }

//   getProductsByCategory(categoryId: string): Observable<any[]> {
//     return this._http.get<any[]>(`${this.baseurl}/category/${categoryId}`);
//   }
  
//   signup(user: any) {
//     return this._http.post(`${this.url}/signup`, user);
//   }

//   AllPro(){
//     return this._http.get(this.baseurl)
//   }
// }
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private apiUrl = "http://localhost:4000/category";
  private baseurl = "http://localhost:4000/product";
  private url = "http://localhost:4000/users";

  private _http = inject(HttpClient);

  getAllCategories(): Observable<any[]> {
    return this._http.get<any[]>(this.apiUrl);
  }

  getProductsByCategory(categoryId: string): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseurl}/category/${categoryId}`);
  }

  signup(user: any) {
    return this._http.post(`${this.url}/signup`, user);
  }

  login(user: any) {
    return this._http.post(`${this.url}/login`, user);
  }

  getAllProducts(): Observable<any[]> {
    return this._http.get<any[]>(this.baseurl);
  }
}
