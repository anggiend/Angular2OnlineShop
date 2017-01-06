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
var mock_station_1 = require('../_helpers/mock-station');
var mock_day_1 = require('../_helpers/mock-day');
var mock_train_1 = require('../_helpers/mock-train');
var core_1 = require('@angular/core');
var ReservationService = (function () {
    function ReservationService() {
    }
    ReservationService.prototype.getStations = function () {
        return Promise.resolve(mock_station_1.STATIONS);
    };
    ReservationService.prototype.getDays = function () {
        return Promise.resolve(mock_day_1.DAYS);
    };
    ReservationService.prototype.getAllTrain = function () {
        return Promise.resolve(mock_train_1.TRAINS);
    };
    ReservationService.prototype.getTrains = function (date, departure, arrive, slot) {
        return this.getAllTrain()
            .then(function (trains) { return trains.filter(function (trains) { return trains.departure_in === departure && trains.date_id === date && trains.arrive_in === arrive && trains.slot >= slot; }); });
    };
    ReservationService.prototype.SelectTrain = function (id) {
        return this.getAllTrain()
            .then(function (trains) { return trains.find(function (train) { return train.id === id; }); });
    };
    ReservationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ReservationService);
    return ReservationService;
}());
exports.ReservationService = ReservationService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=reservation.service.js.map