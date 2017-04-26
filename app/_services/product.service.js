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
var mock_product_1 = require('../_helpers/mock-product');
var core_1 = require('@angular/core');
var mock_detail_1 = require('../_helpers/mock-detail');
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return Promise.resolve(mock_product_1.PRODUCTS);
    };
    ProductService.prototype.getDetails = function () {
        return Promise.resolve(mock_detail_1.DETAILS);
    };
    ProductService.prototype.getProduct = function (kode_barang) {
        return this.getProducts()
            .then(function (products) { return products.find(function (product) { return product.kode_barang === kode_barang; }); });
    };
    ProductService.prototype.getDetail = function (kode_barang) {
        return this.getDetails()
            .then(function (details) { return details.filter(function (detail) { return detail.kode_barang === kode_barang; }); });
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map