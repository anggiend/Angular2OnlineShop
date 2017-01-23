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
var alert_service_1 = require("../_services/alert.service");
var payment_service_1 = require("../_services/payment.service");
var PaymentComponentMethod = (function () {
    function PaymentComponentMethod(router, paymentService, alertService) {
        this.router = router;
        this.paymentService = paymentService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    PaymentComponentMethod.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.paymentService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Payment success', true);
            _this.router.navigate(['/payment']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return PaymentComponentMethod;
}());
PaymentComponentMethod = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'paymentmethod.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        payment_service_1.PaymentService,
        alert_service_1.AlertService])
], PaymentComponentMethod);
exports.PaymentComponentMethod = PaymentComponentMethod;
//# sourceMappingURL=paymentmethod.component.js.map