import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './post/post.component';
import {PostDetailComponent} from './post-detail/post-detail.component';

const routes: Routes = [{
    path: 'post',
    component: PostComponent
}, {
    path: 'post/:id',
    component: PostDetailComponent
}
];

@NgModule({
    imports: [
        [RouterModule.forRoot(routes)],
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
}
