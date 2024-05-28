import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

class GameModel {
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = "https://localhost:7122/Game"
  constructor(private http: HttpClient) { }

  getGames() : Observable<Object>{
    return this.http.get(this.baseUrl + "/GetGames")
  }

  addGame(game: GameModel): Observable<any> {
    return this.http.post(this.baseUrl, game); //test
  }
}
