import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechComponent } from './tech/tech.component';
import { ArtsComponent } from './arts/arts.component';
import { HomeComponent } from './home/home.component';
import { NoexitComponent } from './noexit/noexit.component';
import { IndexComponent } from './index/index.component';
import { PicsgalleryComponent } from './arts/picsgallery/picsgallery.component';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselComponent } from './arts/ngb-carousel/ngb-carousel.component';

const appRouting: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'tech', component: TechComponent },
  { path: 'noexit', component: NoexitComponent },
  { path: 'arts', component: ArtsComponent },
  { path: 'picsgallery', component: PicsgalleryComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    ArtsComponent,
    HomeComponent,
    NoexitComponent,
    IndexComponent,
    PicsgalleryComponent,
    NgbCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouting),
    NgbModule,
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
