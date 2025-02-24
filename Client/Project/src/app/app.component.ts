import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PreloaderComponent } from './preloader/preloader.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturedComponent } from './featured/featured.component';
import { BestSellingComponent } from './best-selling/best-selling.component';
import { CategoryComponent } from './category/category.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { OffcanvasCartComponent } from './offcanvas-cart/offcanvas-cart.component';
import { OffcanvasNavbarComponent } from './offcanvas-navbar/offcanvas-navbar.component';
import { FreeDelComponent } from './free-del/free-del.component';
import { LookingForComponent } from './looking-for/looking-for.component';
import { DownloadComponent } from './download/download.component';
import { JustArrievedComponent } from './just-arrieved/just-arrieved.component';
import { PopularComponent } from './popular/popular.component';
import { DiscountComponent } from './discount/discount.component';
import { SaleComponent } from './sale/sale.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PreloaderComponent,HeaderComponent,FooterComponent,FeaturedComponent,BestSellingComponent
    ,CategoryComponent,HeroSectionComponent,OffcanvasCartComponent,OffcanvasNavbarComponent,FreeDelComponent,
  LookingForComponent,DownloadComponent,JustArrievedComponent,PopularComponent,DiscountComponent,SaleComponent,
RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
}
