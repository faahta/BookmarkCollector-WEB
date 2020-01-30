import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Bookmark} from '../models/bookmark';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private http: HttpClient) {}

  getBookMarks() {
    const url = 'http://localhost:8080/api/bookmarks';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Basic ' + btoa('user1:pass1')
      })
    };
    return this.http.get(url, httpOptions);
  }
  uploadBookmark(bookmark: Bookmark) {
    const url = 'http://localhost:8080/api/bookmarks';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Basic ' + btoa('admin:pass1')
      })
    };
    return this.http.post(url, bookmark, httpOptions);
  }
}
