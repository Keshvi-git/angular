import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { CategoryComponent } from '../category/category.component';
import { BestSellingComponent } from '../best-selling/best-selling.component';
import { SaleComponent } from '../sale/sale.component';
import { FeaturedComponent } from '../featured/featured.component';
import { DiscountComponent } from '../discount/discount.component';
import { PopularComponent } from '../popular/popular.component';
import { JustArrievedComponent } from '../just-arrieved/just-arrieved.component';
import { DownloadComponent } from '../download/download.component';
import { LookingForComponent } from '../looking-for/looking-for.component';
import { FreeDelComponent } from '../free-del/free-del.component';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent,CategoryComponent,BestSellingComponent,SaleComponent,FeaturedComponent,
    DiscountComponent,PopularComponent,JustArrievedComponent,DownloadComponent,LookingForComponent,FreeDelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
