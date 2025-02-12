export class  RootObject {
  status: string;
  totalResults: number;
  articles: Article[];
  constructor(status: string,totalResults: number,articles: Article[]){
    this.status=status;
    this.totalResults=totalResults;
  }
}

export class  Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  constructor(author: string,title: string,description: string,url: string, urlToImage: string,publishedAt: string,content: string){
    this.author=author;
    this.title=title;
    this.description=description;
    this.url=url;
    this.urlToImage=urlToImage;
    this.publishedAt=publishedAt;
    this.content=content;
  }
}

export class  Source {
  id?: any;
  name: string;
}