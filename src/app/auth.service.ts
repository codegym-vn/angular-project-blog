import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(name: string, email: string, password: string, phone: number) {
   return this.http.post('http://127.0.0.1:8000/api/user',
      { name: name, email: email, password: password, phone: phone })
  }
}
