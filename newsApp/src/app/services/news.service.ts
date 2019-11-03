import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  API_KEY = 'e40d07f00b094602953cc3bf8537477e';
  
  constructor(private httpClient: HttpClient) { 
    console.log("api load")
  }

  getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
  
   
}
