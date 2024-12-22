import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  AuthRequestI,
  LoginResponse,
  UserCreationResponse,
} from '../../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _http = inject(HttpClient);

  login(payload: AuthRequestI): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(
      `${environment.baseUrl}/auth/login`,
      payload
    );
  }

  signup(payload: AuthRequestI): Observable<UserCreationResponse> {
    return this._http.post<UserCreationResponse>(
      `${environment.baseUrl}/auth/signup`,
      payload
    );
  }

  logout() {
    localStorage.clear(), sessionStorage.clear();
    window.location.reload();
  }
}
