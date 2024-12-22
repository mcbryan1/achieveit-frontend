import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  _router = inject(Router)
  _toast = inject(ToastService)

  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = JSON.parse(sessionStorage.getItem('token')!);

    let authReq = req;
    if (userToken) {
      const token = userToken;
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`).set('Source', 'web-application')
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {        
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `An error occurred: ${error.error.message}`;
        } else {
 
          errorMsg = `${error.error.resp_desc}`;          
          if (error.status === 401 && errorMsg === 'Invalid request token') {
            this._router.navigate(['/']);
          }
          if (error.status === 500) {
            this._toast.error("Internal Server Error. Contact Administrator")
          }
        }
        this._toast.error(errorMsg);
        return throwError(errorMsg);
      })
    );
  }
}


