import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const AUTH_API = 'http://localhost:3000/user/';
const TOKEN_KEY = 'auth-token';

interface AuthResponse {
  token: string;
  
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<AuthResponse>(
      AUTH_API + 'login',
      {
        username,
        password,
      }
    ).pipe(
      tap(response => this.storeToken(response.token)),
      catchError(error => {
        throw error; 
      })
    );
  }

  register(username: string,email:string, password: string): Observable<any> {
    return this.http.post<AuthResponse>(
      AUTH_API + 'register',
      {
        username,
        email,
        password,
      }
    ).pipe(
      tap(response => this.storeToken(response.token)),
      catchError(error => {
        throw error; // Handle error appropriately in your component
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {}).pipe(
      tap(() => this.removeToken()),
      catchError(error => {
        throw error; // Handle error appropriately in your component
      })
    );
  }

  getAuthToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  private storeToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  private removeToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }
}