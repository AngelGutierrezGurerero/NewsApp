export class  RootObject {
  status: string;
  totalResults: number;
  articles: Article[];
}

export class  Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export class  Source {
  id?: any;
  name: string;
}