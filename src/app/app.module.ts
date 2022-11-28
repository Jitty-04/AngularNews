import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { FormsModule } from '@angular/forms';
import { ViewNewsComponent } from './view-news/view-news.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewsComponent,
    ViewNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
