// import { Component, inject } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { FetchService } from '../fetch.service';
// import { NgFor, NgIf } from '@angular/common';

// @Component({
//   selector: 'app-productt',
//   standalone: true,
//   imports: [NgFor, NgIf],
//   templateUrl: './productt.component.html',
//   styleUrl: './productt.component.css'
// })
// export class ProducttComponent {
//   private _api = inject(FetchService);
//   private _route = inject(ActivatedRoute);
//   private _router = inject(Router)

//   products: any = [];
//   id:any=""

//   ngOnInit() {
//     if(this.id){
//       this.id = this._route.snapshot.params['categoryId']
//     console.log(this.id)
//     this._api.getProductsByCategory(this.id).subscribe((res) => {
//       this.products=res
//       console.log(res)
//     });
//     }
//     else{
//       this._api.AllPro().subscribe(res=>{
//         this.products=res
//       })
//     }
//   }
//   }

import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FetchService } from '../fetch.service';
import { AuthService } from '../auth.service'; // Import AuthService
import { NgFor, NgIf } from '@angular/common';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-productt',
  standalone: true,
  imports: [NgFor, NgIf,RouterLink,CartComponent],
  templateUrl: './productt.component.html',
  styleUrl: './productt.component.css'
})
export class ProducttComponent {
  private _api = inject(FetchService);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _authService = inject(AuthService); 
  products: any[] = [];
  categories: any[] = [];
  id: string = '';

  ngOnInit() {
    this.loadCategories();
    
    this._route.params.subscribe(params => {
      this.id = params['categoryId'];
      if (this.id) {
        this.getProductsByCategory(this.id);
      } else {
        this.getAllProducts();
      }
    });
  }

  loadCategories() {
    this._api.getAllCategories().subscribe(res => {
      this.categories = res;
    });
  }

  getAllProducts() {
    this._api.getAllProducts().subscribe(res => {
      this.products = res;
    });
  }

  getProductsByCategory(categoryId: string) {
    this._api.getProductsByCategory(categoryId).subscribe(res => {
      this.products = res;
    });
  }

  viewAll() {
    this._router.navigate(['/products']);
  }

  filterByCategory(categoryId: string) {
    this._router.navigate(['/products', categoryId]);
  }

  addToCart(product: any) {
    if (this._authService.isLoggedIn()) {
      this._router.navigate(['/cart'], { queryParams: { productId: product._id } });
    } else {
      // Store the intended route before redirecting to login
      localStorage.setItem('redirectAfterLogin', JSON.stringify({
        path: '/cart',
        queryParams: { productId: product._id }
      }));
  
      // Redirect to login page
      this._router.navigate(['/login']);
    }
  }  
}
