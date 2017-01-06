import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { ReservationComponent }   from './reservation/reservation.component';
import { BookingComponent }   from './booking/booking.component';
import { ListTrainComponent }   from './list-train/list-train.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'reservation',  component: ReservationComponent },
  { path: 'train/:date/:departure/:arrive/:slot', component: ListTrainComponent},
  { path: 'booking/:id/:slot', component: BookingComponent},
  { path: 'home',  component: HomeComponent },
  { path: 'detail/:kode_barang', component: DetailComponent },
  { path: 'cart', component: CartComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
