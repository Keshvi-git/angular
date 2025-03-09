import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [NgFor, NgIf, CurrencyPipe], // ✅ Add CurrencyPipe
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private _cartService = inject(CartService);
  cartItems: any[] = [];

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this._cartService.getCartItems();
  }

  removeFromCart(productId: number) {
    this._cartService.removeFromCart(productId);
    this.loadCart();
  }

  clearCart() {
    this._cartService.clearCart();
    this.loadCart();
  }
}
