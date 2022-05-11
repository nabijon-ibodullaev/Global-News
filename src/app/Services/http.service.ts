import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Football } from '../Models/football';
import { SpaceFlightNews } from '../Models/space-flight-news';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // !News Urls
  private _SpaceUrl = 'https://api.spaceflightnewsapi.net/v3/articles';
  private _BlogUrl = 'https://api.spaceflightnewsapi.net/v3/blogs';
  private _ReportUrl = 'https://api.spaceflightnewsapi.net/v3/reports';

  // !Football Api
  private _FootballUrl =
    'https://newsdata.io/api/1/news?apikey=pub_7251eb997989c3b0321990f2ab86181e613a&q=football';
  constructor(private http: HttpClient) {}

  // ! api.spaceflightnewsapi.net /articles
  getAllSpaceFlightNews(): Observable<SpaceFlightNews[]> {
    return this.http.get<SpaceFlightNews[]>(this._SpaceUrl);
  }
  // ! api.spaceflightnewsapi.net /blogs
  getAllSpaceBlogNews(): Observable<SpaceFlightNews[]> {
    return this.http.get<SpaceFlightNews[]>(this._BlogUrl);
  }
  getAllSpaceReports(): Observable<SpaceFlightNews[]> {
    return this.http.get<SpaceFlightNews[]>(this._ReportUrl);
  }

  // ! api football
  getAllFootballNews(): Observable<Football> {
    return this.http.get<Football>(this._FootballUrl);
  }
}
