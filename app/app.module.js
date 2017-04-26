"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var product_service_1 = require('./_services/product.service');
var home_component_1 = require('./home/home.component');
var tipe_service_1 = require('./_services/tipe.service');
var detail_component_1 = require('./detail/detail.component');
var cart_component_1 = require('./cart/cart.component');
var cart_service_1 = require('./_services/cart.service');
//fakebackend 
var fake_backend_1 = require('./_helpers/fake-backend');
var testing_1 = require('@angular/http/testing');
var http_2 = require('@angular/http');
//authentication
var alert_component_1 = require('./_directive/alert.component');
var auth_guard_1 = require('./_guards/auth.guard');
var alert_service_1 = require('./_services/alert.service');
var authentication_service_1 = require('./_services/authentication.service');
var user_service_1 = require('./_services/user.service');
var home_component_login_1 = require('./home-login/home.component-login');
var login_component_1 = require('./login/login.component');
var register_component_1 = require('./register/register.component');
var payment_component_1 = require('./payment/payment.component');
var paymentconfirm_component_1 = require('./paymentconfirm/paymentconfirm.component');
var paymentmethod_component_1 = require('./paymentmethod/paymentmethod.component');
var payment_service_1 = require('./_services/payment.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                detail_component_1.DetailComponent,
                cart_component_1.CartComponent,
                app_component_1.AppComponent,
                alert_component_1.AlertComponent,
                home_component_login_1.HomeComponentLogin,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                payment_component_1.PaymentComponent,
                paymentconfirm_component_1.PaymentComponentConfirm,
                paymentmethod_component_1.PaymentComponentMethod,
            ],
            providers: [
                product_service_1.ProductService,
                tipe_service_1.TipeService,
                fake_backend_1.fakeBackendProvider,
                testing_1.MockBackend,
                http_2.BaseRequestOptions,
                auth_guard_1.AuthGuard,
                alert_service_1.AlertService,
                authentication_service_1.AuthenticationService,
                user_service_1.UserService,
                payment_service_1.PaymentService,
                cart_service_1.CartService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map