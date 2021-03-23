import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {
    this.loading = false;
  }

  search(termino: string): void {
    this.loading = true;
    this.spotifyService.getArtists(termino).subscribe(
      (data: any) => {
        this.artists = data;
        this.loading = false;
      }, error => {
        this.loading = false;
        console.error(error);
      }
    );
  }
}
