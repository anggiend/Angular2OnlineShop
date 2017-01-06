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
var ListTrainComponent = (function () {
    function ListTrainComponent(reservationService, route, location, router) {
        this.reservationService = reservationService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    ListTrainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.reservationService.getTrains(+params['date'], +params['departure'], +params['arrive'], +params['slot']); })
            .subscribe(function (trains) { return _this.trains = trains; });
        this.route.params.subscribe(function (param) {
            _this.slot = param['slot'];
        });
    };
    ListTrainComponent.prototype.gotoBooking = function (id) {
        this.router.navigate(['/booking', id, this.slot]);
    };
    ListTrainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list-train',
            templateUrl: 'list-train.component.html',
            styleUrls: ['list-train.component.css']
        }), 
        __metadata('design:paramtypes', [reservation_service_1.ReservationService, router_1.ActivatedRoute, common_1.Location, router_1.Router])
    ], ListTrainComponent);
    return ListTrainComponent;
}());
exports.ListTrainComponent = ListTrainComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=list-train.component.js.map