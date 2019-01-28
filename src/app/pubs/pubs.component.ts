import { Component, OnInit, AfterViewChecked, Input, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitationService} from '../citation.service';
import { faScroll, faFileAlt, faBookOpen, faBook } from '@fortawesome/free-solid-svg-icons';

@Pipe({name: 'filteredPipe'})
export class FilteredPipe implements PipeTransform {
  transform(list: any[], filter_string: string) {
    return list.filter(
      entry => JSON.stringify(entry).toLowerCase()
      .search(filter_string.toLowerCase()) >= 0);
  }
}

@Component({
  selector: 'app-pubs',
  templateUrl: './pubs.component.html',
  styleUrls: ['./pubs.component.css']
})
export class PubsComponent implements OnInit, AfterViewChecked {

  // icons
  faScroll = faScroll;
  faFileAlt = faFileAlt;
  faBookOpen = faBookOpen;
  faBook = faBook;

  @Input() filter_text: string;

  public articles: any[] = [];
  public conference: any[] = [];
  public theses: any[] = [];
  public chapters: any[] = [];

  constructor(private citationService: CitationService,
              private route: ActivatedRoute) { }

  separatePubs(pub_list): void {
    this.articles = pub_list.filter(entry => entry.EntryType == 'article');
    this.conference = pub_list.filter(entry => entry.EntryType == 'inproceedings');
    this.chapters = pub_list.filter(entry => entry.EntryType == 'incollection');
    this.theses = pub_list.filter(
      entry => entry.EntryType == 'phdthesis' || entry.EntryType == 'mastersthesis'
      );
  }

  routeFragment: string;
  didscroll: boolean;

  scrollToPub(): void {
    if (!this.didscroll && this.routeFragment && document.getElementById(this.routeFragment) != null) {
      document.getElementById(this.routeFragment).scrollIntoView({ behavior: "smooth" });
      this.didscroll = true;
    }
  }

  ngOnInit() {

    this.route.fragment.subscribe(f => {
      this.routeFragment = f;
    });

    this.citationService.citeAll().subscribe(
      (value) => this.separatePubs(value)
    );
    this.filter_text = '';
  }

  ngAfterViewChecked() {
    this.scrollToPub();
  }

}
