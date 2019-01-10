import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {IPost} from '../post';
@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    postList: IPost[] = [];

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.postService.getPosts().subscribe(next => {
            this.postList = next;
        });
    }

    togglePost(i) {
        const post = this.postList[i];
        const postData = {
            ...post,
        };
        this.postService.updatePost(postData).subscribe(next => {
            this.postList[i] = next;
        });
    }

    deletePost(i) {
        const post = this.postList[i];
        this.postService.deletePost(post.id).subscribe(() => {
            this.postList = this.postList.filter(t => t.id !== post.id);
        });
    }
}
