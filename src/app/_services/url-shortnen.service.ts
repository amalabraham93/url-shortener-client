import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UrlShortnenService {

  private apiUrl = 'http://localhost:3000/url-shortener';

  constructor(private http: HttpClient) { }

  shortenUrl(originalUrl: string): Observable<string> {
    return this.http.post<string>(this.apiUrl, { originalUrl });
  }
}
