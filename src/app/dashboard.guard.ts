
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router,NavigationExtras} from "@angular/router";
import {Observable, EMPTY} from "rxjs";

export class DashboardGuard implements CanActivate{
    constructor( private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{

        this.router.navigate(['login']);
        return EMPTY;
    }
}
