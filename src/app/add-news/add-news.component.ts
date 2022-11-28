import { Component } from '@angular/core';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {
  title=""
  author=""
  description=""
  image=""
  publishingDate=""
  content=""

  readValues=()=>
  {
    let data:any={"title":this.title,"author":this.author,"description":this.description,"image":this.image,"publishingDate":this.publishingDate,"content":this.content}
  console.log(data)
  }



}
