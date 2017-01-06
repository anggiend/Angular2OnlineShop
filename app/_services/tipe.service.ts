import { Tipe } from '../_models/tipe';
import { TIPES } from '../_helpers/mock-tipe'
import { Injectable } from '@angular/core';


@Injectable()
export class TipeService {

  getTipes(): Promise<Tipe[]> {
    return Promise.resolve(TIPES);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
