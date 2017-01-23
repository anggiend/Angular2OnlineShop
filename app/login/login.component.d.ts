import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';
export declare class LoginComponent implements OnInit {
    private route;
    private router;
    private authenticationService;
    private alertService;
    model: any;
    loading: boolean;
    returnUrl: string;
    constructor(route: ActivatedRoute, router: Router, authenticationService: AuthenticationService, alertService: AlertService);
    ngOnInit(): void;
    login(): void;
}
