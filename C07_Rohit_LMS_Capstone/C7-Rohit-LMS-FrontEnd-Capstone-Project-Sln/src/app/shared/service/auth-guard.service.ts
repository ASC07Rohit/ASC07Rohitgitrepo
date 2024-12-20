import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";


@Injectable({
    providedIn:'root',
})

export class AuthGuardService implements CanActivate{

    constructor(private router: Router){}

    canActivate(): boolean {
        const isAuthenticated = sessionStorage.getItem('authStatus') === 'true';
        if(isAuthenticated){
            return true;
        }
        else{
            this.router.navigate(['/user-login']);
            return false;
        }
    }
}