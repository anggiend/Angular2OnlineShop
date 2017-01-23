import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component'
import { PaymentComponentConfirm } from './paymentconfirm/paymentconfirm.component'
import { PaymentComponentMethod } from './paymentmethod/paymentmethod.component'

import { HomeComponentLogin } from './home-login/home.component-login';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'detail/:kode_barang', component: DetailComponent },
  { path: 'cart', component: CartComponent },
  { path: '', component: HomeComponentLogin, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'paymentconfirm', component: PaymentComponentConfirm },
  { path: 'paymentmethod', component: PaymentComponentMethod },	

    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
