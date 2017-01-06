import { Product } from '../_models/product';
import { PRODUCTS } from '../_helpers/mock-product'
import { Injectable } from '@angular/core';
import { Detail } from '../_models/detail';
import { DETAILS } from '../_helpers/mock-detail'


@Injectable()
export class ProductService {

  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getDetails(): Promise<Detail[]> {
    return Promise.resolve(DETAILS);
  }

  getProduct(kode_barang : string): Promise<Product> {
    return this.getProducts()
            .then(products => products.find(product => product.kode_barang === kode_barang));
  }
  getDetail(kode_barang : string): Promise<Detail> {
    return this.getDetails()
            .then(details => details.find(detail => detail.kode_barang === kode_barang));
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
