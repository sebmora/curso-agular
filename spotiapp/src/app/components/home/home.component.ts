import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  loading: boolean;
  newSongs: any[] = [];

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        this.newSongs = data;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  ngOnInit(): void {
  }

}
