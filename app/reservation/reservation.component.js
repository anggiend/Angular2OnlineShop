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
var reservation_service_1 = require('../_services/reservation.service');
var ReservationComponent = (function () {
    function ReservationComponent(reservationService, router) {
        this.reservationService = reservationService;
        this.router = router;
    }
    ReservationComponent.prototype.ngOnInit = function () {
        this.getDays();
        this.getStations();
    };
    ReservationComponent.prototype.getDays = function () {
        var _this = this;
        this.reservationService
            .getDays()
            .then(function (days) { return _this.days = days; });
    };
    ReservationComponent.prototype.getStations = function () {
        var _this = this;
        this.reservationService
            .getStations()
            .then(function (stations) { return _this.stations = stations; });
    };
    ReservationComponent.prototype.gotoTrain = function (date, departure, arrive, slot) {
        this.router.navigate(['/train', date, departure, arrive, slot]);
    };
    ReservationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'reserve',
            templateUrl: 'reservation.component.html',
            styleUrls: ['reservation.component.css']
        }), 
        __metadata('design:paramtypes', [reservation_service_1.ReservationService, router_1.Router])
    ], ReservationComponent);
    return ReservationComponent;
}());
exports.ReservationComponent = ReservationComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=reservation.component.js.map