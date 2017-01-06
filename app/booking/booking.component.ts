import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Train }        from '../_models/train';
import { ReservationService } from '../_services/reservation.service';

@Component({
  moduleId: module.id,
  selector: 'booking',
  templateUrl: 'booking.component.html',
  styleUrls: [ 'booking.component.css' ]
})

export class BookingComponent implements OnInit {
  train: Train;
  id: number;
  slot: number;

  constructor(
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.train = {id: 18, name: 'Argo Parahyangan', date_id: 1, departure_on: new Date('2016-11-09T11:50:00'), arrive_on: new Date('2016-11-09T14:57:00'), departure_in : 1,  arrive_in : 2, duration: 187, price: 120000, slot: 120};
    this.route.params.subscribe(
      (param: Params) => {
        this.id = param['id'];
        this.slot = param['slot'];
      });
    this.route.params
      .switchMap((params: Params) => this.reservationService.SelectTrain(+params['id']))
      .subscribe(train => this.train = train);
    }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
