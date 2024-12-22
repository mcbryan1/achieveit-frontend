import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { GoalsResponse } from '../../interfaces/goals.interface';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  _http = inject(HttpClient)
  

  fetchGoals():Observable<GoalsResponse>{
    const url = environment.baseUrl + '/goals/fetch-goals';
    return this._http.get<GoalsResponse>(url);
  }
}
