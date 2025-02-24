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
  id:any=""
  ngOnInit() {
    this.id = this._route.snapshot.params['categoryId']
    console.log(this.id)
    this._api.getProductsByCategory(this.id).subscribe((res) => {
      this.products=res
      console.log(res)
    });
  }

  // loadProducts() {
  //   this._api.getProductsByCategory(this.categoryName).subscribe((res) => {
  //     this.products = res;
  //   });
  }

