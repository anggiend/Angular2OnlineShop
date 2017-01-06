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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var reservation_service_1 = require('../_services/reservation.service');
var BookingComponent = (function () {
    function BookingComponent(reservationService, route, location) {
        this.reservationService = reservationService;
        this.route = route;
        this.location = location;
    }
    BookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.train = { id: 18, name: 'Argo Parahyangan', date_id: 1, departure_on: new Date('2016-11-09T11:50:00'), arrive_on: new Date('2016-11-09T14:57:00'), departure_in: 1, arrive_in: 2, duration: 187, price: 120000, slot: 120 };
        this.route.params.subscribe(function (param) {
            _this.id = param['id'];
            _this.slot = param['slot'];
        });
        this.route.params
            .switchMap(function (params) { return _this.reservationService.SelectTrain(+params['id']); })
            .subscribe(function (train) { return _this.train = train; });
    };
    BookingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'booking',
            templateUrl: 'booking.component.html',
            styleUrls: ['booking.component.css']
        }), 
        __metadata('design:paramtypes', [reservation_service_1.ReservationService, router_1.ActivatedRoute, common_1.Location])
    ], BookingComponent);
    return BookingComponent;
}());
exports.BookingComponent = BookingComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=booking.component.js.map