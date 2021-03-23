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
      (data: any) => {
        this.newSongs = data;
      }, error => {

      });
  }

  ngOnInit(): void {
  }

}
