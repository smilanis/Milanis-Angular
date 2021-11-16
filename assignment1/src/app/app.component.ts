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
  newContentItem: Content = {
    id: 1,
    author: 'Mary Roach',
    imgUrl: "https://storage.googleapis.com/du-prd/books/images/9781324001935.jpg",
    title: 'Fuzz',
    type: 'Thriller',
    body: 'This book is about Fuzz.',
    tags: ['boring', 'fuzzy'],
  };

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentObs().subscribe(bookList => this.bookList = bookList);
  }

  // SAVE
  save(): void {
    console.log("add initiated", this.newContentItem);
    this.contentService.addContent(this.newContentItem).subscribe(content => {
      console.log(content);
      this.bookList.push(content);
      this.bookList = [...this.bookList];
    });
  }

  // UPDATE
  update(): void {
    this.bookList[this.newContentItem.id || 0] = this.newContentItem;
    this.contentService.updateContent(this.newContentItem).subscribe(() => {
      console.log("Content updated: ");
    });
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
