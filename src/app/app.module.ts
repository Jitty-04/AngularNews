import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { FormsModule } from '@angular/forms';
import { ViewNewsComponent } from './view-news/view-news.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchNewsComponent } from './search-news/search-news.component';
import { DeleteNewsComponent } from './delete-news/delete-news.component';

const myRoter:Routes=[
  {
    path:"",
    component:AddNewsComponent
  },
  {
    path:"view",
    component:ViewNewsComponent
  },
  {
    path:"search",
    component:SearchNewsComponent
  },
  {
    path:"delete",
    component:DeleteNewsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddNewsComponent,
    ViewNewsComponent,
    NavigationComponent,
    SearchNewsComponent,
    DeleteNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoter),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
