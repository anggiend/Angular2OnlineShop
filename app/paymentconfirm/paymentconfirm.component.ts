import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../_services/alert.service';
import { PaymentService } from '../_services/payment.service';

@Component({
    moduleId: module.id,
    templateUrl: 'paymentconfirm.component.html'
})

export class PaymentComponentConfirm {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private paymentService: PaymentService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.paymentService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Payment success', true);
                    this.router.navigate(['/payment']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
