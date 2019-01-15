
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
        PostDetailComponent,
        RegisterComponent,
        LoginComponent,
        
        
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
          
       
        
    ],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
}
