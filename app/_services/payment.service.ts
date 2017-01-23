import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Payment } from '../_models/payment';

@Injectable()
export class PaymentService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/payments', this.jwt()).map((response: Response) => response.json());
    }

    getById(id_payment: Payment) {
        return this.http.get('/api/payments/' + id_payment, this.jwt()).map((response: Response) => response.json());
    }

    create(payment: Payment) {
        return this.http.post('/api/payments', payment, this.jwt()).map((response: Response) => response.json());
    }

    update(id_payment: Payment, payment: Payment) {
        return this.http.put('/api/payments/' + id_payment, payment, this.jwt()).map((response: Response) => response.json());
    }

    

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentPayment = JSON.parse(localStorage.getItem('currentPayment'));
        if (currentPayment && currentPayment.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentPayment.token });
            return new RequestOptions({ headers: headers });
        }
    }
}