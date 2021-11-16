import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {CONTENT} from "../helper-files/ContentDB";
import {Observable, of} from "rxjs";
import {MessageService} from "../message.service";


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getContentObs() : Observable<Content[]>{
    return this.http.get<Content[]>("api/content");
  }

  addContent(content: Content): Observable<Content>{
    return this.http.post<Content>("api/content", content, this.httpOptions);
  }

  updateContent(content: Content): Observable<any>{
    return this.http.put("api/content", content, this.httpOptions);
  }

}
