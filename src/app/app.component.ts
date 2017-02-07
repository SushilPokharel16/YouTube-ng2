import { Component } from '@angular/core';
import { PlaylistComponentComponent } from './playlist-component/playlist-component.component';
import {Videoz } from './video';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives:[PlaylistComponentComponent]

})
export class AppComponent {
  title = 'hello, Angular works';
  myVideos: Array<Videoz>;

constructor(){
	this.myVideos = [new Videoz(1,"Angular 2 Tutorial for Beginners: Learn Angular 2 from Scratch","_-CD_5YhJTA&t=1818s","Want to learn Angular 2 from scratch in a fun, step-by-step and pragmatic way? Watch this tutorial and you'll start coding in just a few minutes. "),
					new Videoz(2,"Angular 2 Tutorial for Beginners: ","_-CD_5YhJTA&t=1818s","Want to learn Angular 2 from scratch in a fun, step-by-step and pragmatic way? Watch this tutorial and you'll start coding "),
					new Videoz(3,"Angular 2 Complete Course - Sections 1 & 2","d6Dp4Dyeke8&t=584s","This is another video for Angular2")
					]
}
	
	
	}