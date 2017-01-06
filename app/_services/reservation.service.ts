import { Station } from '../_models/station';
import { STATIONS } from '../_helpers/mock-station';
import { Day } from '../_models/day';
import { DAYS } from '../_helpers/mock-day'
import { TRAINS } from '../_helpers/mock-train'
import { Train } from '../_models/train'
import { Injectable } from '@angular/core';

@Injectable()
export class ReservationService {

  getStations(): Promise<Station[]> {
    return Promise.resolve(STATIONS);
  }

  getDays(): Promise<Day[]> {
    return Promise.resolve(DAYS);
  }

  getAllTrain(): Promise<Train[]> {
    return Promise.resolve(TRAINS);
  }

  getTrains(date:number,departure: number,arrive: number,slot: number): Promise<Train[]> {
    return this.getAllTrain()
              .then(trains => trains.filter(trains => trains.departure_in === departure && trains.date_id === date && trains.arrive_in === arrive && trains.slot >= slot));
  }

  SelectTrain(id: number): Promise<Train> {
    return this.getAllTrain()
                .then(trains => trains.find(train => train.id === id));
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
