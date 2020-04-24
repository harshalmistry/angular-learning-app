import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class NewsService {
  key = 'f6f6ae4597d2446783871c11a190fc5a';
  constructor(private http: HttpClient) { }
  getTopHeadLines(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='+this.key);
  }
  getNewBySource(source){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.key);
  }
  getSources(){
    return this.http.get('https://newsapi.org/v2/sources?apiKey='+this.key);
  }
}