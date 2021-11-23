import { EventEmitter } from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../services/content.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  @Output() addContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<Content>();
  tempId!: string;
  tempTags!: string;
  newContent: any;

  constructor(private contentService: ContentService, private messageService: MessageService) {
    this.newContent = {
      author: '',
      title: '',
      body: ''
    };
  }

  ngOnInit(): void {
  }

  // Add book
  addBook(): void {
    this.newContent.tags = this.tempTags.split(",");
    this.contentService.addContent(this.newContent).subscribe(newBook => {
      this.messageService.add("Added book with ID: " + newBook.id);
      this.newContent = {
        author: '',
        title: '',
        body: ''
      };
      this.tempTags = "";
      this.addContentEvent.emit(newBook);
    });
  }

  // Update Book
  updateBook(): void {
    this.newContent.id = parseInt(this.tempId);
    this.contentService.addContent(this.newContent).subscribe(() => {
      this.messageService.add("Updated book with ID: " + this.newContent.id);
      this.tempTags = "";
      this.tempId = "";
      this.updateContentEvent.emit(this.newContent);
      this.newContent = {
        author: '',
        title: '',
        body: ''
      };
    });
  }

}
