import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }
    singin(email: string, password: string) {
        return this.http.post('http://127.0.0.1:8000/api/user',
            {email: email, password: password },
            );
    }
}
