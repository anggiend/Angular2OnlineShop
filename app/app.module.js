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
var reservation_service_1 = require('./_services/reservation.service');
var app_component_1 = require('./app.component');
var reservation_component_1 = require('./reservation/reservation.component');
var app_routing_module_1 = require('./app-routing.module');
var list_train_component_1 = require('./list-train/list-train.component');
var booking_component_1 = require('./booking/booking.component');
var product_service_1 = require('./_services/product.service');
var home_component_1 = require('./home/home.component');
var tipe_service_1 = require('./_services/tipe.service');
var detail_component_1 = require('./detail/detail.component');
var cart_component_1 = require('./cart/cart.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                reservation_component_1.ReservationComponent,
                list_train_component_1.ListTrainComponent,
                booking_component_1.BookingComponent,
                home_component_1.HomeComponent,
                detail_component_1.DetailComponent,
                cart_component_1.CartComponent,
            ],
            providers: [reservation_service_1.ReservationService, product_service_1.ProductService, tipe_service_1.TipeService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app.module.js.map