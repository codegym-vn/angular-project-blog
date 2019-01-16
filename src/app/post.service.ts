import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from './post';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    private readonly API_URL = 'http://127.0.0.1:8000/api/admin/post';

    constructor(public http: HttpClient) {
    }

    getPosts(count = 5): Observable<IPost[]> {
        return this.http.get<IPost[]>(this.API_URL).pipe(
            map(response => response.filter((post, i) => i < count))
        );
    }

    getPostById(id: number): Observable<IPost> {
        return this.http.get<IPost>(`${this.API_URL}/${id}`);
    }


}
