import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';
import { Article } from '../models/list-news';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public newsService:NewsService,private router:Router ) {
    
  }
  viewGeneral(){
    this.router.navigateByUrl("/tabs/tab2/general")
  }
  viewHealth(){
    this.router.navigateByUrl("/tabs/tab2/health")
  }
  viewSports(){
    this.router.navigateByUrl("/tabs/tab2/sports")
  }
  viewScience(){
    this.router.navigateByUrl("/tabs/tab2/science")
  }
  listNew: Array<Article>= new Array();
  
  allNews: any[] =[];
  ionViewDidEnter(){

    this.newsService.getGeneralNews().subscribe((data)=>{
      for (let clave in data['articles']){
        

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
