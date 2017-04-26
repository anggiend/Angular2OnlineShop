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
var router_1 = require('@angular/router');
var cart_service_1 = require('../_services/cart.service');
var CartComponent = (function () {
    function CartComponent(cartService, route, router) {
        this.cartService = cartService;
        this.route = route;
        this.router = router;
        this.items = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        this.items = this.getItem();
    };
    CartComponent.prototype.getItem = function () {
        return this.cartService.getCart();
    };
    CartComponent.prototype.gotoHome = function () {
        this.router.navigate(['/home/']);
    };
    CartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cart',
            templateUrl: 'cart.component.html'
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService, router_1.ActivatedRoute, router_1.Router])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map