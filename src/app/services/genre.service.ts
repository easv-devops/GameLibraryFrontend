import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private baseUrl = "https://localhost:7122/Genre";
  constructor(private http: HttpClient) { }

  getGenres() : Observable<Object>{
    return this.http.get(this.baseUrl + "/GetGenres")
  }
}
