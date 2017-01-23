import { Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { UserService } from '../_services/user.service';
export declare class RegisterComponent {
    private router;
    private userService;
    private alertService;
    model: any;
    loading: boolean;
    constructor(router: Router, userService: UserService, alertService: AlertService);
    register(): void;
}
