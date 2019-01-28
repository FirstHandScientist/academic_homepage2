import { Component, OnInit } from '@angular/core';
import { NewsService} from '../news.service';
import { faUniversity, faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  // icons
  faUniversity = faUniversity;
  faEnvelopeSquare = faEnvelopeSquare;
  faPhoneSquare = faPhoneSquare;
  faGithubSquare = faGithubSquare;
  faLinkedin = faLinkedin;

  public news_items : string[] = [];
  public news_number: number = 5;

  constructor(private newsService: NewsService) { }

  populateNews(news_items: string[]): void {
  	this.news_items = news_items;
  }

  ngOnInit() {
  	this.newsService.getNews()
      .subscribe(response => this.populateNews(response));
  }

}
