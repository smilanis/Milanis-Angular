import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../services/content.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contentArray: Content[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentObs().subscribe(content => this.contentArray = content);
  }

  // check if book exists
  checkIfExists(title: string): void {
    if (this.contentArray.some(c => c.title === title)) {
      alert("This book exists!");
    } else {
      alert("This book does not exist!");
    }

  }

}
