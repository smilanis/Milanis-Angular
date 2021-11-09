import { Component } from '@angular/core';
import {Content} from "./helper-files/content-interface";
import {ContentService} from "./services/content.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Book List';

  bookList: Content[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentObs().subscribe(bookList => this.bookList = bookList);
  }

  // check if book exists
  checkIfExists(title: string): void {
    if (this.bookList.some(c => c.title === title)) {
      alert("This book exists!");
    } else {
      alert("This book does not exist!");
    }

  }

}
