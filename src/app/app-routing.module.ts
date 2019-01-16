import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './post/post.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [{
    path: 'post',
    component: PostComponent
}, {
    path: 'post/:id',
    component: PostDetailComponent
}, {
    path: 'register',
    component: RegisterComponent
}, {
    path: 'login',
    component: LoginComponent
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
