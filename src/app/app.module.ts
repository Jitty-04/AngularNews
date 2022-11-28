import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { FormsModule } from '@angular/forms';
import { ViewNewsComponent } from './view-news/view-news.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';

const myRoter:Routes=[
  {
    path:"",
    component:AddNewsComponent
  },
  {
    path:"view",
    component:ViewNewsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddNewsComponent,
    ViewNewsComponent,
    NavigationComponent
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
