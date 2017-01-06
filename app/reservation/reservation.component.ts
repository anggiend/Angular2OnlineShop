import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Day } from '../_models/day';
import { Station } from '../_models/station';
import { ReservationService } from '../_services/reservation.service';

@Component({
  moduleId: module.id,
  selector: 'reserve',
  templateUrl: 'reservation.component.html',
  styleUrls: [ 'reservation.component.css' ]
})

export class ReservationComponent implements OnInit{
  days: Day[];
  stations: Station[];

  constructor(
    private reservationService: ReservationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDays();
    this.getStations();
  }

  getDays(): void {
    this.reservationService
        .getDays()
        .then(days => this.days = days);
  }

  getStations(): void {
    this.reservationService
        .getStations()
        .then(stations => this.stations = stations);
  }

  gotoTrain(date: number,departure: number,arrive: number,slot: number): void {
    this.router.navigate(['/train',date,departure,arrive,slot]);
  }

}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
