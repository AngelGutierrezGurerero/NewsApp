import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/list-news';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-science',
  templateUrl: './science.page.html',
  styleUrls: ['./science.page.scss'],
})
export class SciencePage implements OnInit {

  listNew: Array<Article>= new Array();
  
  allNews: any[] =[];
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
  ionViewDidEnter(){

    this.newsService.getScienceNews().subscribe((data)=>{
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


  ngOnInit() {
  }

}
