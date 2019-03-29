import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey = 'b0f6d1eb0f034870ae2fcc2236d74355';
  private sourcesUrl = 'https://newsapi.org/v1/sources';
  private articlesUrl = 'https://newsapi.org/v1/articles';

  constructor(private http: HttpClient) {}

  getSources() {
      return this.http.get(this.sourcesUrl);
  }

  getArticles(sourceId: string) {
      return this.http.get(`${this.articlesUrl}?source=${sourceId}&apiKey=${this.apiKey}`);
  }
}
