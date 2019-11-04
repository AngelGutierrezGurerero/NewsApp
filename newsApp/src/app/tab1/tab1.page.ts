import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { RootObject, Article } from '../models/list-news';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  listNew: Array<Article>= new Array();
  
  allNews: any[] =[];
  constructor(private newsService:NewsService) {


  }
  ionViewDidEnter(){

    this.newsService.getNews().subscribe((data)=>{
      for (let clave in data['articles']){
        // console.log(data['articles'][clave]);
        // console.log(data['articles'][clave]['author']);

        this.listNew.push(new Article(
        data['articles'][clave]['author'],
        data['articles'][clave]['title'],
        data['articles'][clave]['description'],
        data['articles'][clave]['url'],
        data['articles'][clave]['urlToImage'],
        data['articles'][clave]['publishedAt'],
        data['articles'][clave]['content']));
        console.log((this.listNew.length))
        
      }
      
      for(var i = 0; i < this.listNew.length; i++){ 
      console.log(this.listNew[i]); // output: Apple Orange Banana
    }
    return this.listNew ;
    });
 
    
    
  }
  

}
