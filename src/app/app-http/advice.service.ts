import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Advice } from './advice.model';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {
  private apiUrl = 'https://api.adviceslip.com/advice';

  constructor(private http: HttpClient) { }

  getAdvice(): Observable<Advice>{
    return this.http.get<Advice>(this.apiUrl);
  }
}
