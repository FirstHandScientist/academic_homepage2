import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PubsComponent } from './pubs/pubs.component';
import { ResearchComponent } from './research/research.component';
import { BioComponent } from './bio/bio.component';
import { ElibComponent } from './elib/elib.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'publications', component: PubsComponent },
  { path: 'biography', component: BioComponent },
  { path: 'collection', component: ElibComponent },
  { path: 'research', component: ResearchComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ]
})
export class AppRoutingModule { }
