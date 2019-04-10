import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {Quote} from '../models/quote.model';

@Injectable({
  providedIn: 'root',
})
export class MichaelScottService {
  public constructor(private http: HttpClient) {}

  public getQuote(): Observable<Quote> {
    return this.http.get<Quote>(`${environment.apiBaseUrl}quote`);
  }
  public sendQuote(): Observable<Quote> {
    return this.http.post<Quote>(`${environment.apiBaseUrl}quote`, null);
  }
}
