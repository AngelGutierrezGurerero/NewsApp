import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/list-news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  API_KEY = 'e40d07f00b094602953cc3bf8537477e';
  allNews: any[] =[];
  constructor(private httpClient: HttpClient) { 
    console.log("api load")
  }

  getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=${this.API_KEY}`);
  }
  getGeneralNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=co&sortBy=popularity&apiKey=${this.API_KEY}`);
  }
  getSportsNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=co&category=sports&apiKey=${this.API_KEY}`);
  }
  getHealthNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=co&category=health&apiKey=${this.API_KEY}`);
  }
  getScienceNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=co&category=science&apiKey=${this.API_KEY}`);
  }
  saveStorage(newFavorite: any){
    
    this.allNews.push(JSON.parse( localStorage.getItem('news')))
    this.allNews.push(newFavorite)
    localStorage.setItem('news', JSON.stringify(this.allNews))
    
  }
  loadStorage(){

    if (localStorage.getItem('news')){
      return this.allNews=JSON.parse( localStorage.getItem('news'));
    } else{
      this.allNews=[]
    }
  }
  
   
}
