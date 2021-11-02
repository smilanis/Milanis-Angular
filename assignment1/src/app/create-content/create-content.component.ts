import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newBookEvent = new EventEmitter<Content>();
  newBookItem: Content | undefined;


  addBook(): void {
    this.newBookEvent.emit(this.newBookItem);

    let myPromise = new Promise((success, fail) => {
      let didPass = false;
      if (didPass) {
        success("Success! The book has been added.");
      }
      else {
        fail("Sorry! The book failed to add.");
      }
    });

    myPromise.then(successResult => console.log(successResult)).catch(failResult => console.log(failResult));

    let getBooks = async function () {
      return "books";
    }
    let getSameBooks = function () {
      return Promise.resolve("books");
    }

  }

}
