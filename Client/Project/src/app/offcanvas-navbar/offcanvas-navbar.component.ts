import { Component, inject, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { CartService } from '../cart.service'; // ✅ Import CartService
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-offcanvas-navbar',
  imports: [NgFor, NgIf,RouterLink],
  templateUrl: './offcanvas-navbar.component.html',
  styleUrls: ['./offcanvas-navbar.component.css']
})
export class OffcanvasNavbarComponent implements OnInit {
  private _api = inject(FetchService);
  private _router = inject(Router);
  private _cartService = inject(CartService); // ✅ Inject CartService

  categories: any[] = [];
  cartItems: any[] = []; // ✅ Declare cartItems

  ngOnInit() {
    this._api.getAllCategories().subscribe({
      next: (res) => {
        console.log('Categories received:', res);
        this.categories = res;
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });

    this.loadCart(); // ✅ Load cart items
  }

  loadCart() {
    this.cartItems = this._cartService.getCartItems(); // ✅ Fetch cart items
  }

  viewCategory(categoryId: string) {
    this._router.navigate(['/products', categoryId]);
  }
}
