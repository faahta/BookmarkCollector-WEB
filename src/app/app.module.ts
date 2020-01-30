import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';
import { BookmarkUploadComponent } from './components/bookmark-upload/bookmark-upload.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {BookmarkService} from './services/bookmark.service';
import {FormsModule} from '@angular/forms';
import {LoginService} from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookmarkListComponent,
    BookmarkUploadComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ LoginService, BookmarkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
