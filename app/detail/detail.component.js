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
var product_1 = require("../_models/product");
var cart_service_1 = require("../_services/cart.service");
var cart_1 = require("../_models/cart");
var DetailComponent = (function () {
    function DetailComponent(productService, cartService, route, router) {
        this.productService = productService;
        this.cartService = cartService;
        this.route = route;
        this.router = router;
        this.product = new product_1.Product();
        this.detail = [];
        this.item = new cart_1.Item();
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.kode_barang = param['kode_barang'];
        });
        this.getProduct(this.kode_barang);
        this.getDetail(this.kode_barang);
        this.item.quantitas = 2;
    };
    DetailComponent.prototype.getProduct = function (kode_barang) {
        var _this = this;
        this.productService
            .getProduct(kode_barang)
            .then(function (products) { return _this.product = products; });
    };
    DetailComponent.prototype.getDetail = function (kode_barang) {
        var _this = this;
        this.productService
            .getDetail(kode_barang)
            .then(function (details) { return _this.detail = details; });
    };
    DetailComponent.prototype.gotoCart = function () {
        this.router.navigate(['/cart/']);
    };
    DetailComponent.prototype.addtoCart = function (product) {
        this.item.kode_barang = product.kode_barang;
        this.item.kode_tipe = product.kode_tipe;
        this.item.nama_barang = product.nama_barang;
        this.item.harga_barang = product.harga_barang;
        this.item.ukuran = product.ukuran;
        this.item.image = product.image;
        this.cartService.addItem(this.item);
        window.alert(this.item.nama_barang + " has been added to Cart");
    };
    DetailComponent.prototype.gotoHome = function () {
        this.router.navigate(['/home/']);
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'detail',
        templateUrl: 'detail.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        cart_service_1.CartService,
        router_1.ActivatedRoute,
        router_1.Router])
], DetailComponent);
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map