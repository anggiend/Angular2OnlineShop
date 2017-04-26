import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { ProductService} from './_services/product.service';
import { HomeComponent }    from './home/home.component';
import { TipeService } from './_services/tipe.service';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './_services/cart.service';

//fakebackend 
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

//authentication
import { AlertComponent } from './_directive/alert.component';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { HomeComponentLogin } from './home-login/home.component-login';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentComponentConfirm } from './paymentconfirm/paymentconfirm.component';
import { PaymentComponentMethod } from './paymentmethod/paymentmethod.component';

import { PaymentService } from './_services/payment.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    CartComponent,
    AppComponent,
    AlertComponent,
    HomeComponentLogin,
    LoginComponent,
    RegisterComponent,
    PaymentComponent,
    PaymentComponentConfirm,
    PaymentComponentMethod,
  ],
   providers: [
    ProductService , 
    TipeService, 
    fakeBackendProvider, 
    MockBackend, 
    BaseRequestOptions,   
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    PaymentService,
    CartService,
  ],
  bootstrap: [ AppComponent ]
})



export class AppModule { }
