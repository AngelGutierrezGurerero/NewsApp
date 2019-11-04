import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { RootObject, Article } from '../models/list-news';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  listNew: Array<Article>= new Array();
  
  allNews: any[] =[];
  constructor(private newsService:NewsService,public actionSheetController: ActionSheetController,private iab: InAppBrowser) {}
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};
  
  async presentActionSheet() {
    
    const actionSheet = await this.actionSheetController.create({
      header: 'Noticia',
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      },  {
        text: 'Favorito',
        icon: 'star',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  
  openLink( url) {

    window.location.href = url;
  }
  ionViewDidEnter(){

    this.newsService.getNews().subscribe((data)=>{
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
