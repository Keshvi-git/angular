// import { Component, inject } from '@angular/core';
// import { Route, Router, RouterLink, Routes } from '@angular/router';
// import { FetchService } from '../fetch.service';
// import { NgFor, NgIf } from '@angular/common';

// @Component({
//   selector: 'app-category',
//   imports: [RouterLink,NgFor,NgIf],
//   templateUrl: './category.component.html',
//   styleUrl: './category.component.css'
// })

// export class CategoryComponent {
//       selectedCategory: any = null
//       private _api = inject(FetchService)
//       private _router = inject(Router)
       
//       category:any = [
//         {
//           name:'',
//           images:''
//         }
//       ]

//       ngOnInit(){
//         this._api.getAll().subscribe((res)=>{
//           this.category=res
//         })
//       }
     
//   viewCategory(categoryId: string) {
//     console.log("Navigating to category:", categoryId);
//     this._router.navigate(['/products', categoryId]); 
//   }

//   alldata() {
//     console.log("Navigating to View All");
//     this._router.navigate(['/products']);
//   }

//   all(){
//     this._api.AllPro().subscribe(res=>{
//       this._router.navigate(['/products']);
//     })
//   }
// }
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FetchService } from '../fetch.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink,NgFor,NgIf],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  private _api = inject(FetchService);
  private _router = inject(Router);

  categories: any[] = [];

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this._api.getAllCategories().subscribe(res => {
      this.categories = res;
    });
  }

  viewAll() {
    this._router.navigate(['/products']);
  }

  viewCategory(categoryId: string) {
    this._router.navigate(['/products', categoryId]);
  }
}
