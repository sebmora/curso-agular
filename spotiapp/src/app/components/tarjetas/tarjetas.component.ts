import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) {
  }
  
  showArtist(item: any) {
    const artistId = item && item.type === 'artist' ? item.id : item.artists[0].id;
    console.info(artistId);
    this.router.navigate(['/artist', artistId]);
  }
}
