import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from '../fetch.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-productt',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './productt.component.html',
  styleUrl: './productt.component.css'
})
export class ProducttComponent {
  private _api = inject(FetchService);
  private _route = inject(ActivatedRoute);

  products: any = [];
  categoryName: string = '';

  // ngOnInit() {
  //   this._route.params.subscribe((params) => {
  //     this.categoryName = params['category'];
  //     this.loadProducts();
  //   });
  // }

  // loadProducts() {
  //   this._api.getProductsByCategory(this.categoryName).subscribe((res) => {
  //     this.products = res;
  //   });
  }

