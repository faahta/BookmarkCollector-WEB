export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { asc: 'desc', desc: '', '': 'asc' };
export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'th[sortable]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
// tslint:disable-next-line:directive-class-suffix
export class NgbdSortableHeader {

  @Input() sortable: string;
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}





import {Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {BookmarkService} from '../../services/bookmark.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {
  constructor(private bookmarkService: BookmarkService) {
    this.getBookmarkList();
  }

  // tslint:disable-next-line:ban-types
  bookmarks: Object;
  // tslint:disable-next-line:ban-types
  bookmarksSorted: Object;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  getBookmarkList() {
    this.bookmarkService.getBookMarks().subscribe(res => {
      this.bookmarks = res;
      this.bookmarksSorted = this.bookmarks;
    }, error => console.log(error));
  }

  exportJsonAsBookmarkFile() {
    console.log('Writing to file');
    const blob = new Blob([JSON.stringify(this.bookmarks)], {type: 'application/json'});
    saveAs(blob, 'bookmark_exports.json');
  }

  ngOnInit() {
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting bookmarks
    if (direction === '') {
      this.bookmarks = this.bookmarks;
    } else {
      // @ts-ignore
      this.bookmarksSorted = [...this.bookmarks].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }

  }
}
