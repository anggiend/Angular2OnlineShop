import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';

import { Train }        from '../_models/train';
import { ReservationService } from '../_services/reservation.service';

@Component({
  moduleId: module.id,
  selector: 'list-train',
  templateUrl: 'list-train.component.html',
  styleUrls: [ 'list-train.component.css' ]
})
export class ListTrainComponent implements OnInit {
  trains: Train[];
  slot: number;

  constructor(
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.reservationService.getTrains(+params['date'],+params['departure'],+params['arrive'],+params['slot']))
      .subscribe(trains => this.trains = trains);
    this.route.params.subscribe(
      (param: Params) => {
        this.slot = param['slot'];
      });
  }

  gotoBooking(id: number): void {
    this.router.navigate(['/booking',id,this.slot]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
