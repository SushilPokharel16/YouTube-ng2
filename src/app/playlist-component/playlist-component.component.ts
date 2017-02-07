import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-playlist-component',
  templateUrl: './playlist-component.component.html',
  styleUrls: ['./playlist-component.component.css'],
  inputs:["videos"]
})
export class PlaylistComponentComponent implements OnInit {
  public video_id: string ;
  constructor() { }

  ngOnInit() {
  }

ngClick(url){
	this.video_id = url;
console.log(this.video_id);
}

}
