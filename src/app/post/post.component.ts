import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {IPost} from '../post';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    postList: IPost[] = [];
    postForm: FormGroup;
    constructor(private postService: PostService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.postForm = this.fb.group({
            title: ['', [Validators.required, Validators.minLength(10)]],
            content: ['', [Validators.required, Validators.minLength(10)]],
            decs: ['', [Validators.required, Validators.minLength(10)]],
        });
        this.postService
            .getPosts()
            .subscribe(next => (this.postList = next), error => (this.postList = []));
    }

}
