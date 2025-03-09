import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-best-selling',
  imports:[FormsModule,CommonModule,NgFor,NgIf,RouterLink],
  templateUrl: './best-selling.component.html',
  styleUrls: ['./best-selling.component.css']
})
export class BestSellingComponent implements OnInit {
  bestSellingProducts: any[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getBestSellingProducts().subscribe((products) => {
      this.bestSellingProducts = products.filter(product => product.rating > 4);
    });
  }
  
  viewAll() {
    this.router.navigate(['/products']); 
  }

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }

  getStars(rating: number): boolean[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    return Array(fullStars).fill(true).concat(Array(halfStar).fill(false));
  }
}

