import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
  }

  search(termino: string): void {
    this.spotifyService.getArtists(termino).subscribe(
      (data: any) => {
        this.artists = data;
      }, error => {
        console.error(error);
      }
    );
  }
}
