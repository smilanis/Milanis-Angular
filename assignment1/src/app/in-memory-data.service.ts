import { Injectable } from '@angular/core';
import {Content} from "./helper-files/content-interface";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const content: Content[] = [{
      id: 1,
      author: 'J.K Rowling',
      imgUrl: "https://image.bokus.com/images/9789129723939_200x_harry-potter-och-dodsrelikerna",
      title: 'Harry Potter',
      type: 'Fantasy Fiction',
      body: 'This book is about harry potter.',
      tags: ['fun', 'cool', 'action'],
    },
      {
        id: 2,
        author: 'Mary Roach',
        imgUrl: "https://storage.googleapis.com/du-prd/books/images/9781324001935.jpg",
        title: 'Fuzz',
        type: 'Thriller',
        body: 'This book is about Fuzz.',
        tags: ['boring', 'fuzzy'],
      },
      {
        id: 3,
        author: 'Liane Moriarty',
        imgUrl: "https://storage.googleapis.com/du-prd/books/images/9781250220257.jpg",
        title: 'Apples Never Fall',
        type: 'Thriller',
        body: 'This is about apples never falling.',
        tags: ['apples', 'smart'],
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
        tags: ['interesting', 'funny'],
        type: 'Fantasy Fiction',
        body: 'This is about it ending with us.',
      },
      {
        id: 6,
        author: 'Charles Duhigg',
        title: 'The Power of Habit',
        type: 'Thriller',
        body: 'Why We Do What We Do in Life & Business'
      }];

      return {content};
  }

  getId(content: Content[]) : number {
    return content.length > 0 ? Math.max(...content.map(c =>
      c.id)) + 1 : 2000;
  }

}
