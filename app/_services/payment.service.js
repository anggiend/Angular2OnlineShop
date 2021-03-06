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
var http_1 = require('@angular/http');
var PaymentService = (function () {
    function PaymentService(http) {
        this.http = http;
    }
    PaymentService.prototype.getAll = function () {
        return this.http.get('/api/payments', this.jwt()).map(function (response) { return response.json(); });
    };
    PaymentService.prototype.getById = function (id_payment) {
        return this.http.get('/api/payments/' + id_payment, this.jwt()).map(function (response) { return response.json(); });
    };
    PaymentService.prototype.create = function (payment) {
        return this.http.post('/api/payments', payment, this.jwt()).map(function (response) { return response.json(); });
    };
    PaymentService.prototype.update = function (id_payment, payment) {
        return this.http.put('/api/payments/' + id_payment, payment, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    PaymentService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentPayment = JSON.parse(localStorage.getItem('currentPayment'));
        if (currentPayment && currentPayment.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentPayment.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    PaymentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PaymentService);
    return PaymentService;
}());
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map