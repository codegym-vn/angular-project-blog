import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {IPost} from '../post';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

    post: IPost;
    constructor(private postService: PostService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.postService.getPostById(id).subscribe(
            next => (this.post = next),
            error => {
                console.log(error);
                this.post = null;
            }
        );
    }

}
