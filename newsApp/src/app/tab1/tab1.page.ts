import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  Article;
  constructor(private newsService:NewsService) {


  }
  ionViewDidEnter(){

    this.newsService.getNews().subscribe((data)=>{
      console.log(data);
      this.Article = data['articles'];
    });
  }

}
