import { Component, OnInit } from "@angular/core";
import { NewsService } from '../services/news.service';
@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
  providers:[NewsService]
})
export class PostsComponent implements OnInit {
  news= {articles:[]};
  newsSources= {sources:[]};
  filterSource='google-news';
  constructor(private newsService: NewsService){}
  ngOnInit() {
    this.newsService.getTopHeadLines()
  		.subscribe(
        (response:any) => this.news = response
    );
    this.getnewsSources();
  }

  filterNews(source) {
    this.news={articles:[]};
    this.newsService.getNewBySource(source)
    .subscribe(
      (response:any) => this.news = response
    );
  }

  getnewsSources() {
    this.newsService.getSources()
      .subscribe(
        (response:any) => this.newsSources = response
      );
  } 
}