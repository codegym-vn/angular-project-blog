
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {
    }

    singin(email: string, password: string) {
        return this.http.post('http://127.0.0.1:8000/api/signin',
            {email: email, password: password},
        );
    }

    signup(name: string, email: string, password: string, phone: number) {
        return this.http.post('http://127.0.0.1:8000/api/user',
            {name: name, email: email, password: password, phone: phone});

    }
}