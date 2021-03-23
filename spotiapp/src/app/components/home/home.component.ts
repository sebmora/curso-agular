import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getNewReleases().subscribe(
      (value: any) => {
        this.newSongs = value.albums && value.albums.items;
        console.info(this.newSongs);
      }, error => {

      });
  }

  ngOnInit(): void {
  }

}
