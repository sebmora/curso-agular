import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDYhQZjWo2imGJShYV9QTkoJNORMrmeiKZCGUm-DIGgjwN3iHh4bIFAKD6HOCqiR5Zm8CVW90fISJsbv6c'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data: any) => data.albums.items));
  }


  getArtists(artist: string): Observable<any> {
    return this.getQuery(`search?q=${ artist }&type=artist&market=CL&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=cl`)
      .pipe(map((data: any) => data.tracks));
  }
}
