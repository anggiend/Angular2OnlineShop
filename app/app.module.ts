import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ReservationService } from './_services/reservation.service'
import { AppComponent }         from './app.component';
import { ReservationComponent }   from './reservation/reservation.component';
import { AppRoutingModule }     from './app-routing.module';
import { ListTrainComponent }   from './list-train/list-train.component';
import { BookingComponent }   from './booking/booking.component';
import { ProductService} from './_services/product.service';
import { HomeComponent }    from './home/home.component';
import { TipeService } from './_services/tipe.service';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ReservationComponent,
    ListTrainComponent,
    BookingComponent ,
    HomeComponent,
    DetailComponent,
	CartComponent,
  ],
  providers: [ReservationService,ProductService , TipeService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
