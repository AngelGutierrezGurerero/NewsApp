import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NewsService } from '../services/news.service';
import { Article } from '../models/list-news';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  listNew: Array<Article> = new Array();

  allNews: any[] = [];

  constructor(public newsService: NewsService, public storage: Storage) {

    this.allFavorites()
  }
  allFavorites() {
    for (var i = 0; i < this.newsService.loadStorage().length; i++) {
      this.listNew.push(this.newsService.loadStorage()[i])
    }
    return this.listNew;
  }

}
