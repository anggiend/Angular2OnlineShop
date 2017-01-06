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
var product_service_1 = require('../_services/product.service');
var DetailComponent = (function () {
    function DetailComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.cart = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product = { kode_barang: 'Bj1',
            kode_tipe: 'woman',
            nama_barang: 'Abaya Dress',
            deskripsi_barang: 'Outer dengan bahan kain lembut , cocok untuk digunakan ketika bersantai ',
            harga_barang: 350000,
            tanggal_datang: new Date('2016-11-12T00:00:00'),
            ukuran: 'M',
            image: '../../image/1.jpg' };
        this.detail = { kode_barang: 'Bj1',
            warna: 'Hitam',
            bahan: 'Katun',
            stock: 12 };
        this.route.params.subscribe(function (param) {
            _this.kode_barang = param['kode_barang'];
        });
        this.getProduct(this.kode_barang);
        this.getDetail(this.kode_barang);
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
    DetailComponent.prototype.gotoHome = function () {
        this.router.navigate(['/home/']);
    };
    DetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detail',
            templateUrl: 'detail.component.html'
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.ActivatedRoute, router_1.Router])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map