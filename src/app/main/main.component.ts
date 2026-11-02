import { Component, OnInit } from '@angular/core';
import { NewsService} from '../news.service';
import { faMapMarkerAlt, faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface NewsItem {
  date: string;
  text: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  // icons
  faMapMarkerAlt = faMapMarkerAlt;
  faEnvelope = faEnvelope;
  faGraduationCap = faGraduationCap;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  public news_items: NewsItem[] = [];

  constructor(private newsService: NewsService) { }

  // "11/2026: text" -> { date: "2026.11", text: "text" }
  private parseNews(line: string): NewsItem {
    const match = line.match(/^\s*(\d{1,2})\/(\d{4}):\s*(.*)$/);
    if (!match) {
      return { date: '', text: line };
    }
    const month = match[1].length === 1 ? '0' + match[1] : match[1];
    return { date: match[2] + '.' + month, text: match[3] };
  }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe(lines => this.news_items = lines.map(l => this.parseNews(l)));
  }

}
