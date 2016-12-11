import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent }  from './app.component';
import {VideoListComponent} from './videos/video-list.component';
import {VideoDetailComponent} from './videos/video-details.component';
import {HistoryComponent} from './history/history.component';


const appRoutes: Routes = [
  { path: 'video/:id', component: VideoDetailComponent },
  { path: 'videos', component: VideoListComponent },
  { path: 'history', component: HistoryComponent},
  { path: '', redirectTo: 'videos', pathMatch: 'full' },
  { path: '**', redirectTo: 'videos', pathMatch: 'full' }
];

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
     ],
  declarations: [ AppComponent,VideoListComponent, VideoDetailComponent, HistoryComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
