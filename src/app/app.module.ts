import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faUser, faPuzzlePiece, faFile, faGamepad } from '@fortawesome/free-solid-svg-icons';

import { MainComponent } from './main/main.component';
import { PubsComponent, FilteredPipe } from './pubs/pubs.component';
import { BioComponent } from './bio/bio.component';
import { ResearchComponent } from './research/research.component';
import { ElibComponent } from './elib/elib.component';

import { CitationService } from './citation.service';
import { NewsService } from './news.service';
import { PublicationComponent, BibtexmodalComponent } from './publication/publication.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public isCollapsed = true;

  // icons
  faHome = faHome;
  faUser = faUser;
  faPuzzlePiece = faPuzzlePiece;
  faFile = faFile;
  faGamepad = faGamepad;

  toggleMenu() {
   this.isCollapsed = !this.isCollapsed;
 }
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PubsComponent,
    BioComponent,
    ResearchComponent,
    FilteredPipe,
    PublicationComponent,
    BibtexmodalComponent,
    ElibComponent,
  ],
  entryComponents: [
    BibtexmodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    CitationService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
