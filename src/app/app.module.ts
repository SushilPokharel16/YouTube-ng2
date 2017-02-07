import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlaylistComponentComponent } from './playlist-component/playlist-component.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     YoutubePlayerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
