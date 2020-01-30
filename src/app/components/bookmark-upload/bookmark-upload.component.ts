import { Component, OnInit } from '@angular/core';
import {BookmarkService} from '../../services/bookmark.service';
import {Bookmark} from '../../models/bookmark';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bookmark-upload',
  templateUrl: './bookmark-upload.component.html',
  styleUrls: ['./bookmark-upload.component.css']
})
export class BookmarkUploadComponent implements OnInit {
  title: string;
  url: string;
  description: string;
  dateAdded: any;
  dateModified: any;
  bookmark: Bookmark;
  constructor(private bookmarkService: BookmarkService, private router: Router) {
  }

  ngOnInit() {
  }
  onSubmit() {
    this.bookmark.id = Math.random();
    this.bookmark.title = this.title;
    this.bookmark.url = this.url;
    this.bookmark.description = this.description;
    this.bookmark.dateAdded = this.dateAdded;
    this.bookmark.dateModified = this.dateModified;
    console.log('uploading bookmark: ' + this.bookmark);
    this.bookmarkService.uploadBookmark(this.bookmark).subscribe(response => {
      this.router.navigate(['/home']).then();
    });
  }

}
