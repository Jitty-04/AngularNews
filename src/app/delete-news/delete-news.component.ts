import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-news',
  templateUrl: './delete-news.component.html',
  styleUrls: ['./delete-news.component.css']
})
export class DeleteNewsComponent {
  title=""
  readValues=()=>
  {
    let data:any={"title":this.title}
    console.log(data)
  }


}
