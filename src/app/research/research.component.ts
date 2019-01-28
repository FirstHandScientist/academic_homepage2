import { Component, OnInit } from '@angular/core';
import { CitationService} from '../citation.service';
import { PublicationComponent } from '../publication/publication.component';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  providers: [NgbCarouselConfig] 
})
export class ResearchComponent implements OnInit {

  ref_lists: any[] = [];

  keylists = [['art1', 'conf1'],
              ['art2', 'conf2']];

  constructor(private citationService: CitationService,
    config: NgbCarouselConfig) { 
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;  
  }

  public cite(key: string, listindex: number): number {
    let found = this.ref_lists[listindex].find(item => item.EntryKey == key);
    return this.ref_lists[listindex].indexOf(found)+1;
  }

  public grabReferences(citekeys, i): void {
    this.citationService.citeSubset(citekeys)
    .subscribe(res => this.ref_lists[i] = res);
  }

  ngOnInit() {
    // TODO: automate this
    this.ref_lists = [[], []];
    this.grabReferences(this.keylists[0], 0);
    this.grabReferences(this.keylists[1], 1);
  }

}
