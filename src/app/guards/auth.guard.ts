import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

export function AuthGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  const router = inject(Router);
  const token = sessionStorage.getItem('token')!;
  if (!token) {
    return router.createUrlTree(['']);
  }
  return of(true);
}
