import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    auth: boolean = false;
    userName: Subject<string> = new Subject<string>();

    isAuthorized(): boolean {
        let username = sessionStorage.getItem('user');
        if (username) {
            this.auth = true;
            this.userName.next(username);
        } else {
            this.auth = false;
        }
        return this.auth;
    }

    getAuthUser(): Observable<string> {
        return this.userName.asObservable();
    }

    setAuthorized(username, password): Observable<boolean> {
        if (username && password) {         
            sessionStorage.setItem('user', username);
            return of(true);
        } else {
            return of(false);            
        }
    }

    logout(): void {
        this.auth = false;
        sessionStorage.removeItem('user');
        this.userName.next("");
    }
}