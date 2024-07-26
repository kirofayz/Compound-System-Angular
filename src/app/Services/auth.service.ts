import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInStatus = false; 

  private apiUrl = 'https://localhost:44329/api/Login/ValidateLogin';

  constructor(private http:HttpClient) { }

  validateLogin(emailAddress: string, password: string): Observable<any> {
    const loginDto = { EmailAddress: emailAddress, Password: password };

   return this.http.post(`${this.apiUrl}` , loginDto , {headers : new HttpHeaders ({
    'Content-Type': 'application/json'
   })});
  }

  isLoggedIn(): boolean {
   
    return this.isLoggedInStatus;
  }
  
  login() {
    this.isLoggedInStatus = true;
  }

  logout() {
    this.isLoggedInStatus = false;
  }

}


