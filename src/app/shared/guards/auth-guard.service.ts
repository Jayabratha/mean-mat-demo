import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        let isAuthorized = this.authService.isAuthorized();
        if (isAuthorized) {
            if (state.url === '/login' || state.url === '/register') {
                this.router.navigate(['/trades']);
                return false;
            } else {
                return true;
            }            
        } else {
            if (state.url === '/login' || state.url === '/register') {
                return true;
            } else {
                this.router.navigate(['/login']);
                return false;
            }
        }
    }

}