// import { Routes } from '@angular/router';
// import { ProducttComponent } from './productt/productt.component';
// import { HomeComponent } from './home/home.component';
// import { SignupComponent } from './signup/signup.component';
// import { LoginComponent } from './login/login.component';

// export const routes: Routes = [
//     {path:'',component:HomeComponent},
//     { path: 'products', component: ProducttComponent },
//    { path: 'products/:categoryId', component: ProducttComponent, runGuardsAndResolvers: 'always' },
//    {path:'signup',component:SignupComponent},
//    {path:'login',component:LoginComponent}
//  ];
import { Routes } from '@angular/router';
import { ProducttComponent } from './productt/productt.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cart', component: CartComponent },
    { path: 'products', component: ProducttComponent },
    { path: 'products/:categoryId', component: ProducttComponent, runGuardsAndResolvers: 'always' },
];


