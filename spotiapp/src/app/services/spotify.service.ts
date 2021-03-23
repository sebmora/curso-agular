import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('service listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDZEtOH-rt87tYuiuGD5JcpcktOQ5K9oa3nY-98lC6axXUBoJfOlecRKA6VMV0H4AdF4yBMRmAdzNm3F9s'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}
