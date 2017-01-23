import { Tipe } from '../_models/tipe';
import { TIPES } from '../_helpers/mock-tipe'
import { Injectable } from '@angular/core';


@Injectable()
export class TipeService {

  getTipes(): Promise<Tipe[]> {
    return Promise.resolve(TIPES);
  }
}
