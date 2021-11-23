import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { PipePipe } from './pipe.pipe';
import { DirectiveDirective } from './directive.directive';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFilteredPipe } from './content-filtered.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { MessagesComponent } from './messages/messages.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    PipePipe,
    DirectiveDirective,
    ContentCardComponent,
    ContentListComponent,
    ContentFilteredPipe,
    HoverStyleDirective,
    MessagesComponent,
    CreateComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false,
        delay: 1000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
