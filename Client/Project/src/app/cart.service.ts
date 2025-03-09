import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cartItems';

  constructor() {}

  getCartItems(): any[] {
    return JSON.parse(localStorage.getItem(this.cartKey) || '[]');
  }

  addToCart(product: any): void {
    let cart = this.getCartItems();
    
    // Check if product already in cart
    let existingItem = cart.find((item: any) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1; // Increase quantity
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  removeFromCart(productId: number): void {
    let cart = this.getCartItems().filter(item => item.id !== productId);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }
}
