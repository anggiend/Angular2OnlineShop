import { OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
export declare class HomeComponentLogin implements OnInit {
    private userService;
    currentUser: User;
    users: User[];
    constructor(userService: UserService);
    ngOnInit(): void;
    deleteUser(id: number): void;
    private loadAllUsers();
}
