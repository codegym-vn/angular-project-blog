import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
        PostDetailComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule.forRoot([])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
