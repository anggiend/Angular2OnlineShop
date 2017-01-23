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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("../_services/product.service");
var tipe_service_1 = require("../_services/tipe.service");
var HomeComponent = (function () {
    function HomeComponent(productService, tipeService, router) {
        this.productService = productService;
        this.tipeService = tipeService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.getTipes();
    };
    HomeComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService
            .getProducts()
            .then(function (products) { return _this.products = products; });
    };
    HomeComponent.prototype.getTipes = function () {
        var _this = this;
        this.tipeService
            .getTipes()
            .then(function (tipes) { return _this.tipes = tipes; });
    };
    HomeComponent.prototype.gotoDetail = function (kode_barang) {
        this.router.navigate(['/detail/', kode_barang]);
    };
    HomeComponent.prototype.gotoCart = function () {
        this.router.navigate(['/cart/']);
    };
    HomeComponent.prototype.gotoHome = function () {
        this.router.navigate(['/home/']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'product',
        templateUrl: 'home.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        tipe_service_1.TipeService,
        router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map