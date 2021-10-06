import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contentArray = [{
    id: 1,
    author: 'J.K Rowling',
    imgUrl: "https://image.bokus.com/images/9789129723939_200x_harry-potter-och-dodsrelikerna",
    title: 'Harry Potter',
    type: 'Fantasy Fiction',
    body: 'This book is about harry potter.',
  },
    {
      id: 2,
      author: 'Mary Roach',
      imgUrl: "https://storage.googleapis.com/du-prd/books/images/9781324001935.jpg",
      title: 'Fuzz',
      type: 'Thriller',
      body: 'This book is about Fuzz.',
    },
    {
      id: 3,
      author: 'Liane Moriarty',
      imgUrl: "https://storage.googleapis.com/du-prd/books/images/9781250220257.jpg",
      title: 'Apples Never Fall',
      type: 'Thriller',
      body: 'This is about apples never falling.',
    },
    {
      id: 4,
      author: 'Sally Rooney',
      imgUrl: "https://storage.googleapis.com/du-prd/books/images/9780374602604.jpg",
      title: 'BEAUTIFUL WORLD, WHERE ARE YOU',
      body: 'This is about the BEAUTIFUL world.',
    },
    {
      id: 5,
      author: 'Colleen Hoover',
      imgUrl: "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",
      title: 'It Ends With Us',
      type: 'Fantasy Fiction',
      body: 'This is about it ending with us.',
    }];

  constructor() {

  }

  // check if book exists
  checkIfExists(title: string): void {
    if (this.contentArray.some(c => c.title === title)) {
      alert("This book exists!");
    } else {
      alert("This book does not exist!");
    }

  }
  ngOnInit(): void {

  }

}
